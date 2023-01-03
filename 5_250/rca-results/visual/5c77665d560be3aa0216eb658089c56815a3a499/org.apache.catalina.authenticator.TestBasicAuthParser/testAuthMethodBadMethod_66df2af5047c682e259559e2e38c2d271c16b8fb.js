if (document.getElementById('testcaseDiv') != null) { 
   document.getElementById('testcaseDiv').innerHTML="Commit: <a href='javascript:fallbackCopyTextToClipboard(\"-commit 5c77665d560be3aa0216eb658089c56815a3a499 -test org.apache.catalina.authenticator.TestBasicAuthParser#testAuthMethodBadMethod\")'>5c77665d560be3aa0216eb658089c56815a3a499</a><br>Test Case: org.apache.catalina.authenticator.TestBasicAuthParser#testAuthMethodBadMethod<br>";
}

var source = {"current":
{
 "org.apache.tomcat.util.codec.binary.Base64.encode_byte[]_int_int_Context":
 `/**
 * <p>
 * Encodes all of the provided data, starting at inPos, for inAvail bytes. Must be called at least twice: once with
 * the data to encode, and once with inAvail set to "-1" to alert encoder that EOF has been reached, to flush last
 * remaining bytes (if not multiple of 3).
 * </p>
 * <p><b>Note: no padding is added when encoding using the URL-safe alphabet.</b></p>
 * <p>
 * Thanks to "commons" project in ws.apache.org for the bitwise operations, and general approach.
 * https://svn.apache.org/repos/asf/webservices/commons/trunk/modules/util/
 * </p>
 *
 * @param in
 *            byte[] array of binary data to base64 encode.
 * @param inPos
 *            Position to start reading data from.
 * @param inAvail
 *            Amount of bytes available from input for encoding.
 * @param context
 *            the context to be used
 */
@Override
void encode(final byte[] in, int inPos, final int inAvail, final Context context) {
    if (context.eof) {
        return;
    }
    // inAvail < 0 is how we're informed of EOF in the underlying data we're
    // encoding.
    if (inAvail < 0) {
        context.eof = true;
        if (0 == context.modulus && lineLength == 0) {
            // no leftovers to process and not using chunking
            return;
        }
        final byte[] buffer = ensureBufferSize(encodeSize, context);
        final int savedPos = context.pos;
        switch(// 0-2
        context.modulus) {
            case // nothing to do here
            0:
                break;
            case // 8 bits = 6 + 2
            1:
                // top 6 bits:
                buffer[context.pos++] = encodeTable[(context.ibitWorkArea >> 2) & MASK_6BITS];
                // remaining 2:
                buffer[context.pos++] = encodeTable[(context.ibitWorkArea << 4) & MASK_6BITS];
                // URL-SAFE skips the padding to further reduce size.
                if (encodeTable == STANDARD_ENCODE_TABLE) {
                    buffer[context.pos++] = pad;
                    buffer[context.pos++] = pad;
                }
                break;
            case // 16 bits = 6 + 6 + 4
            2:
                buffer[context.pos++] = encodeTable[(context.ibitWorkArea >> 10) & MASK_6BITS];
                buffer[context.pos++] = encodeTable[(context.ibitWorkArea >> 4) & MASK_6BITS];
                buffer[context.pos++] = encodeTable[(context.ibitWorkArea << 2) & MASK_6BITS];
                // URL-SAFE skips the padding to further reduce size.
                if (encodeTable == STANDARD_ENCODE_TABLE) {
                    buffer[context.pos++] = pad;
                }
                break;
            default:
                throw new IllegalStateException(sm.getString("base64.impossibleModulus", Integer.valueOf(context.modulus)));
        }
        // keep track of current line position
        context.currentLinePos += context.pos - savedPos;
        // if currentPos == 0 we are at the start of a line, so don't add CRLF
        if (lineLength > 0 && context.currentLinePos > 0) {
            System.arraycopy(lineSeparator, 0, buffer, context.pos, lineSeparator.length);
            context.pos += lineSeparator.length;
        }
    } else {
        for (int i = 0; i < inAvail; i++) {
            final byte[] buffer = ensureBufferSize(encodeSize, context);
            context.modulus = (context.modulus + 1) % BYTES_PER_UNENCODED_BLOCK;
            int b = in[inPos++];
            if (b < 0) {
                b += 256;
            }
            // BITS_PER_BYTE
            context.ibitWorkArea = (context.ibitWorkArea << 8) + b;
            if (0 == context.modulus) {
                // 3 bytes = 24 bits = 4 * 6 bits to extract
                buffer[context.pos++] = encodeTable[(context.ibitWorkArea >> 18) & MASK_6BITS];
                buffer[context.pos++] = encodeTable[(context.ibitWorkArea >> 12) & MASK_6BITS];
                buffer[context.pos++] = encodeTable[(context.ibitWorkArea >> 6) & MASK_6BITS];
                buffer[context.pos++] = encodeTable[context.ibitWorkArea & MASK_6BITS];
                context.currentLinePos += BYTES_PER_ENCODED_BLOCK;
                if (lineLength > 0 && lineLength <= context.currentLinePos) {
                    System.arraycopy(lineSeparator, 0, buffer, context.pos, lineSeparator.length);
                    context.pos += lineSeparator.length;
                    context.currentLinePos = 0;
                }
            }
        }
    }
}`,"org.apache.tomcat.util.res.StringManager.getManager_String":
 `/**
 * Get the StringManager for a particular package. If a manager for
 * a package already exists, it will be reused, else a new
 * StringManager will be created and returned.
 *
 * @param packageName The package name
 *
 * @return The instance associated with the given package and the default
 *         Locale
 */
public static final StringManager getManager(String packageName) {
    return getManager(packageName, Locale.getDefault());
}`,"org.apache.tomcat.util.http.FastHttpDateFormat.formatDate_long":
 `/**
 * Get the HTTP format of the specified date.
 * @param value The date
 * @return the HTTP date
 */
public static final String formatDate(long value) {
    Long longValue = Long.valueOf(value);
    String cachedDate = formatCache.get(longValue);
    if (cachedDate != null) {
        return cachedDate;
    }
    String newDate = FORMAT_RFC5322.format(new Date(value));
    updateFormatCache(longValue, newDate);
    return newDate;
}`,"org.apache.tomcat.util.codec.binary.BaseNCodec.getDefaultBufferSize_":
 `/**
 * Get the default buffer size. Can be overridden.
 *
 * @return the default buffer size.
 */
protected int getDefaultBufferSize() {
    return DEFAULT_BUFFER_SIZE;
}`,"org.apache.tomcat.util.http.ConcurrentDateFormat.<init>_String_Locale_TimeZone":
 `public ConcurrentDateFormat(String format, Locale locale, TimeZone timezone) {
    this.format = format;
    this.locale = locale;
    this.timezone = timezone;
    SimpleDateFormat initial = createInstance();
    queue.add(initial);
}`,"org.apache.catalina.authenticator.BasicAuthenticator$BasicCredentials.<init>_ByteChunk_Charset_boolean":
 `/**
 * Parse the HTTP Authorization header for BASIC authentication
 * as per RFC 2617 section 2, and the Base64 encoded credentials
 * as per RFC 2045 section 6.8.
 *
 * @param input           The header value to parse in-place
 * @param charset         The character set to use to convert the bytes
 *                        to a string
 * @param trimCredentials Should leading and trailing whitespace be
 *                        removed from the parsed credentials
 *
 * @throws IllegalArgumentException If the header does not conform
 *                                  to RFC 2617
 */
public BasicCredentials(ByteChunk input, Charset charset, boolean trimCredentials) throws IllegalArgumentException {
    authorization = input;
    initialOffset = input.getOffset();
    this.charset = charset;
    this.trimCredentials = trimCredentials;
    parseMethod();
    byte[] decoded = parseBase64();
    parseCredentials(decoded);
}`,"org.apache.tomcat.util.res.StringManager.getManager_Class":
 `/**
 * Get the StringManager for a given class. The StringManager will be
 * returned for the package in which the class is located. If a manager for
 * that package already exists, it will be reused, else a new
 * StringManager will be created and returned.
 *
 * @param clazz The class for which to retrieve the StringManager
 *
 * @return The instance associated with the package of the provide class
 */
public static final StringManager getManager(Class<?> clazz) {
    return getManager(clazz.getPackage().getName());
}`,"org.apache.tomcat.util.buf.AbstractChunk.getOffset_":
 `// TODO: Deprecate offset and use start
public int getOffset() {
    return start;
}`,"org.apache.tomcat.util.codec.binary.BaseNCodec.available_BaseNCodec$Context":
 `/**
 * Returns the amount of buffered data available for reading.
 *
 * @param context the context to be used
 * @return The amount of buffered data available for reading.
 */
int available(final Context context) {
    // package protected for access from I/O streams
    return context.buffer != null ? context.pos - context.readPos : 0;
}`,"org.apache.tomcat.util.buf.ByteChunk.makeSpace_int":
 `/**
 * Make space for len bytes. If len is small, allocate a reserve space too.
 * Never grow bigger than the limit or {@link AbstractChunk#ARRAY_MAX_SIZE}.
 *
 * @param count The size
 */
public void makeSpace(int count) {
    byte[] tmp = null;
    int limit = getLimitInternal();
    long newSize;
    long desiredSize = end + count;
    // Can't grow above the limit
    if (desiredSize > limit) {
        desiredSize = limit;
    }
    if (buff == null) {
        if (desiredSize < 256) {
            // take a minimum
            desiredSize = 256;
        }
        buff = new byte[(int) desiredSize];
    }
    // limit < buf.length (the buffer is already big)
    // or we already have space XXX
    if (desiredSize <= buff.length) {
        return;
    }
    // grow in larger chunks
    if (desiredSize < 2L * buff.length) {
        newSize = buff.length * 2L;
    } else {
        newSize = buff.length * 2L + count;
    }
    if (newSize > limit) {
        newSize = limit;
    }
    tmp = new byte[(int) newSize];
    // Compacts buffer
    System.arraycopy(buff, start, tmp, 0, end - start);
    buff = tmp;
    tmp = null;
    end = end - start;
    start = 0;
}`,"org.apache.juli.logging.LogFactory.getLog_Class":
 `/**
 * Convenience method to return a named logger, without the application
 * having to care about factories.
 *
 * @param clazz Class from which a log name will be derived
 *
 * @return A log instance with a name of clazz.getName()
 *
 * @exception LogConfigurationException if a suitable <code>Log</code>
 *  instance cannot be returned
 */
public static Log getLog(Class<?> clazz) throws LogConfigurationException {
    return getFactory().getInstance(clazz);
}`,"org.apache.juli.logging.LogFactory.<init>_":
 `/**
 * Private constructor that is not available for public use.
 */
private LogFactory() {
    /*
         * Work-around known a JRE bug.
         * https://bugs.openjdk.java.net/browse/JDK-8194653
         *
         * Pre-load the default file system. No performance impact as we need to
         * load the default file system anyway. Just do it earlier to avoid the
         * potential deadlock.
         *
         * This can be removed once the oldest JRE supported by Tomcat includes
         * a fix.
         */
    FileSystems.getDefault();
    // Look via a ServiceLoader for a Log implementation that has a
    // constructor taking the String name.
    ServiceLoader<Log> logLoader = ServiceLoader.load(Log.class);
    Constructor<? extends Log> m = null;
    for (Log log : logLoader) {
        Class<? extends Log> c = log.getClass();
        try {
            m = c.getConstructor(String.class);
            break;
        } catch (NoSuchMethodException | SecurityException e) {
            throw new Error(e);
        }
    }
    discoveredLogConstructor = m;
}`,"org.apache.tomcat.util.codec.binary.Base64.encodeBase64_byte[]_boolean_boolean_int":
 `/**
 * Encodes binary data using the base64 algorithm, optionally chunking the output into 76 character blocks.
 *
 * @param binaryData
 *            Array containing binary data to encode.
 * @param isChunked
 *            if {@code true} this encoder will chunk the base64 output into 76 character blocks
 * @param urlSafe
 *            if {@code true} this encoder will emit - and _ instead of the usual + and / characters.
 *            <b>Note: no padding is added when encoding using the URL-safe alphabet.</b>
 * @param maxResultSize
 *            The maximum result size to accept.
 * @return Base64-encoded data.
 * @throws IllegalArgumentException
 *             Thrown when the input array needs an output array bigger than maxResultSize
 * @since 1.4
 */
public static byte[] encodeBase64(final byte[] binaryData, final boolean isChunked, final boolean urlSafe, final int maxResultSize) {
    if (binaryData == null || binaryData.length == 0) {
        return binaryData;
    }
    // Create this so can use the super-class method
    // Also ensures that the same roundings are performed by the ctor and the code
    final Base64 b64 = isChunked ? new Base64(urlSafe) : new Base64(0, CHUNK_SEPARATOR, urlSafe);
    final long len = b64.getEncodedLength(binaryData);
    if (len > maxResultSize) {
        throw new IllegalArgumentException(sm.getString("base64.inputTooLarge", Long.valueOf(len), Integer.valueOf(maxResultSize)));
    }
    return b64.encode(binaryData);
}`,"org.apache.tomcat.util.codec.binary.BaseNCodec.readResults_byte[]_int_int_BaseNCodec$Context":
 `/**
 * Extracts buffered data into the provided byte[] array, starting at position bPos, up to a maximum of bAvail
 * bytes. Returns how many bytes were actually extracted.
 * <p>
 * Package protected for access from I/O streams.
 *
 * @param b
 *            byte[] array to extract the buffered data into.
 * @param bPos
 *            position in byte[] array to start extraction at.
 * @param bAvail
 *            amount of bytes we're allowed to extract. We may extract fewer (if fewer are available).
 * @param context
 *            the context to be used
 * @return The number of bytes successfully extracted into the provided byte[] array.
 */
int readResults(final byte[] b, final int bPos, final int bAvail, final Context context) {
    if (context.buffer != null) {
        final int len = Math.min(available(context), bAvail);
        System.arraycopy(context.buffer, context.readPos, b, bPos, len);
        context.readPos += len;
        if (context.readPos >= context.pos) {
            // so hasData() will return false, and this method can return -1
            context.buffer = null;
        }
        return len;
    }
    return context.eof ? EOF : 0;
}`,"org.apache.tomcat.util.codec.binary.StringUtils.newString_byte[]_Charset":
 `/**
 * Constructs a new {@code String} by decoding the specified array of bytes using the given charset.
 *
 * @param bytes
 *            The bytes to be decoded into characters
 * @param charset
 *            The {@link Charset} to encode the {@code String}; not {@code null}
 * @return A new {@code String} decoded from the specified array of bytes using the given charset,
 *         or {@code null} if the input byte array was {@code null}.
 * @throws NullPointerException
 *             Thrown if charset is {@code null}
 */
private static String newString(final byte[] bytes, final Charset charset) {
    return bytes == null ? null : new String(bytes, charset);
}`,"org.apache.juli.logging.DirectJDKLog.getInstance_String":
 `static Log getInstance(String name) {
    return new DirectJDKLog(name);
}`,"org.apache.juli.logging.DirectJDKLog.<init>_String":
 `public DirectJDKLog(String name) {
    logger = Logger.getLogger(name);
}`,"org.apache.tomcat.util.buf.AbstractChunk.<init>_":
 ``,"org.apache.juli.logging.LogFactory.getInstance_String":
 `// --------------------------------------------------------- Public Methods
// only those 2 methods need to change to use a different direct logger.
/**
 * <p>Construct (if necessary) and return a <code>Log</code> instance,
 * using the factory's current set of configuration attributes.</p>
 *
 * <p><strong>NOTE</strong> - Depending upon the implementation of
 * the <code>LogFactory</code> you are using, the <code>Log</code>
 * instance you are returned may or may not be local to the current
 * application, and may or may not be returned again on a subsequent
 * call with the same name argument.</p>
 *
 * @param name Logical name of the <code>Log</code> instance to be
 *  returned (the meaning of this name is only known to the underlying
 *  logging implementation that is being wrapped)
 *
 * @return A log instance with the requested name
 *
 * @exception LogConfigurationException if a suitable <code>Log</code>
 *  instance cannot be returned
 */
public Log getInstance(String name) throws LogConfigurationException {
    if (discoveredLogConstructor == null) {
        return DirectJDKLog.getInstance(name);
    }
    try {
        return discoveredLogConstructor.newInstance(name);
    } catch (ReflectiveOperationException | IllegalArgumentException e) {
        throw new LogConfigurationException(e);
    }
}`,"org.apache.catalina.authenticator.BasicAuthenticator$BasicCredentials.parseMethod_":
 `/*
         * The authorization method string is case-insensitive and must
         * hae at least one space character as a delimiter.
         */
private void parseMethod() throws IllegalArgumentException {
    if (authorization.startsWithIgnoreCase(METHOD, 0)) {
        // step past the auth method name
        base64blobOffset = initialOffset + METHOD.length();
        base64blobLength = authorization.getLength() - METHOD.length();
    } else {
        // is this possible, or permitted?
        throw new IllegalArgumentException("Authorization header method is not \"Basic\"");
    }
}`,"org.apache.tomcat.util.codec.binary.BaseNCodec.encode_byte[]":
 `/**
 * Encodes a byte[] containing binary data, into a byte[] containing characters in the alphabet.
 *
 * @param pArray
 *            a byte array containing binary data
 * @return A byte array containing only the base N alphabetic character data
 */
public byte[] encode(final byte[] pArray) {
    if (pArray == null || pArray.length == 0) {
        return pArray;
    }
    return encode(pArray, 0, pArray.length);
}`,"org.apache.tomcat.util.http.ConcurrentDateFormat.format_Date":
 `public String format(Date date) {
    SimpleDateFormat sdf = queue.poll();
    if (sdf == null) {
        sdf = createInstance();
    }
    String result = sdf.format(date);
    queue.add(sdf);
    return result;
}`,"org.apache.tomcat.util.res.StringManager.getManager_String_Locale":
 `/**
 * Get the StringManager for a particular package and Locale. If a manager
 * for a package/Locale combination already exists, it will be reused, else
 * a new StringManager will be created and returned.
 *
 * @param packageName The package name
 * @param locale      The Locale
 *
 * @return The instance associated with the given package and Locale
 */
public static final synchronized StringManager getManager(String packageName, Locale locale) {
    Map<Locale, StringManager> map = managers.get(packageName);
    if (map == null) {
        /*
             * Don't want the HashMap to be expanded beyond LOCALE_CACHE_SIZE.
             * Expansion occurs when size() exceeds capacity. Therefore keep
             * size at or below capacity.
             * removeEldestEntry() executes after insertion therefore the test
             * for removal needs to use one less than the maximum desired size
             *
             */
        map = new LinkedHashMap<Locale, StringManager>(LOCALE_CACHE_SIZE, 1, true) {

            private static final long serialVersionUID = 1L;

            @Override
            protected boolean removeEldestEntry(Map.Entry<Locale, StringManager> eldest) {
                if (size() > (LOCALE_CACHE_SIZE - 1)) {
                    return true;
                }
                return false;
            }
        };
        managers.put(packageName, map);
    }
    StringManager mgr = map.get(locale);
    if (mgr == null) {
        mgr = new StringManager(packageName, locale);
        map.put(locale, mgr);
    }
    return mgr;
}`,"org.apache.tomcat.util.codec.binary.Base64.encodeBase64_byte[]_boolean":
 `/**
 * Encodes binary data using the base64 algorithm, optionally chunking the output into 76 character blocks.
 *
 * @param binaryData
 *            Array containing binary data to encode.
 * @param isChunked
 *            if {@code true} this encoder will chunk the base64 output into 76 character blocks
 * @return Base64-encoded data.
 * @throws IllegalArgumentException
 *             Thrown when the input array needs an output array bigger than {@link Integer#MAX_VALUE}
 */
public static byte[] encodeBase64(final byte[] binaryData, final boolean isChunked) {
    return encodeBase64(binaryData, isChunked, false);
}`,"org.apache.tomcat.util.codec.binary.BaseNCodec.getEncodedLength_byte[]":
 `/**
 * Calculates the amount of space needed to encode the supplied array.
 *
 * @param pArray byte[] array which will later be encoded
 *
 * @return amount of space needed to encoded the supplied array.
 * Returns a long since a max-len array will require &gt; Integer.MAX_VALUE
 */
public long getEncodedLength(final byte[] pArray) {
    // Calculate non-chunked size - rounded up to allow for padding
    // cast to long is needed to avoid possibility of overflow
    long len = ((pArray.length + unencodedBlockSize - 1) / unencodedBlockSize) * (long) encodedBlockSize;
    if (lineLength > 0) {
        // We're using chunking
        // Round up to nearest multiple
        len += ((len + lineLength - 1) / lineLength) * chunkSeparatorLength;
    }
    return len;
}`,"org.apache.catalina.authenticator.TestBasicAuthParser$BasicAuthHeader.prefix_String":
 `/*
         * construct the common authorization header
         */
private void prefix(String method) {
    authHeader = new ByteChunk();
    authHeader.setBytes(HEADER, 0, HEADER.length);
    initialOffset = HEADER.length;
    String methodX = method + " ";
    byte[] methodBytes = methodX.getBytes(StandardCharsets.ISO_8859_1);
    try {
        authHeader.append(methodBytes, 0, methodBytes.length);
    } catch (IOException ioe) {
        throw new IllegalStateException("unable to extend ByteChunk:" + ioe.getMessage());
    }
}`,"org.apache.tomcat.util.buf.ByteChunk.append_byte[]_int_int":
 `/**
 * Add data to the buffer.
 *
 * @param src Bytes array
 * @param off Offset
 * @param len Length
 * @throws IOException Writing overflow data to the output channel failed
 */
public void append(byte[] src, int off, int len) throws IOException {
    // will grow, up to limit
    makeSpace(len);
    int limit = getLimitInternal();
    // Optimize on a common case.
    // If the buffer is empty and the source is going to fill up all the
    // space in buffer, may as well write it directly to the output,
    // and avoid an extra copy
    if (len == limit && end == start && out != null) {
        out.realWriteBytes(src, off, len);
        return;
    }
    // if we are below the limit
    if (len <= limit - end) {
        System.arraycopy(src, off, buff, end, len);
        end += len;
        return;
    }
    // Need more space than we can afford, need to flush buffer.
    // The buffer is already at (or bigger than) limit.
    // We chunk the data into slices fitting in the buffer limit, although
    // if the data is written directly if it doesn't fit.
    int avail = limit - end;
    System.arraycopy(src, off, buff, end, avail);
    end += avail;
    flushBuffer();
    int remain = len - avail;
    while (remain > (limit - end)) {
        out.realWriteBytes(src, (off + len) - remain, limit - end);
        remain = remain - (limit - end);
    }
    System.arraycopy(src, (off + len) - remain, buff, end, remain);
    end += remain;
}`,"org.apache.tomcat.util.codec.binary.StringUtils.newStringUsAscii_byte[]":
 `/**
 * Constructs a new {@code String} by decoding the specified array of bytes using the US-ASCII charset.
 *
 * @param bytes
 *            The bytes to be decoded into characters
 * @return A new {@code String} decoded from the specified array of bytes using the US-ASCII charset,
 *         or {@code null} if the input byte array was {@code null}.
 * @throws NullPointerException
 *             Thrown if {@link StandardCharsets#US_ASCII} is not initialized, which should never happen since it is
 *             required by the Java platform specification.
 * @since As of 1.7, throws {@link NullPointerException} instead of UnsupportedEncodingException
 */
public static String newStringUsAscii(final byte[] bytes) {
    return newString(bytes, StandardCharsets.US_ASCII);
}`,"org.apache.catalina.authenticator.TestBasicAuthParser.testAuthMethodBadMethod_":
 `/*
     * Confirm the Basic parser rejects an invalid authentication method.
     */
@Test
public void testAuthMethodBadMethod() throws Exception {
    final String METHOD = "BadMethod";
    final BasicAuthHeader AUTH_HEADER = new BasicAuthHeader(METHOD, USER_NAME, PASSWORD);
    @SuppressWarnings("unused")
    BasicAuthenticator.BasicCredentials credentials = null;
    try {
        credentials = new BasicAuthenticator.BasicCredentials(AUTH_HEADER.getHeader(), StandardCharsets.UTF_8, true);
        Assert.fail("IllegalArgumentException expected");
    } catch (Exception e) {
        Assert.assertTrue(e instanceof IllegalArgumentException);
        Assert.assertTrue(e.getMessage().contains("header method"));
    }
}`,"org.apache.catalina.authenticator.TestBasicAuthParser$BasicAuthHeader.<init>_String_String_String":
 `/*
         * This method creates a valid base64 blob
         */
private BasicAuthHeader(String method, String username, String password) {
    this(method, username, password, null);
}`,"org.apache.catalina.authenticator.TestBasicAuthParser$BasicAuthHeader.getHeader_":
 `private ByteChunk getHeader() {
    return authHeader;
}`,"org.apache.tomcat.util.http.ConcurrentDateFormat.createInstance_":
 `private SimpleDateFormat createInstance() {
    SimpleDateFormat sdf = new SimpleDateFormat(format, locale);
    sdf.setTimeZone(timezone);
    return sdf;
}`,"org.apache.juli.logging.LogFactory.getInstance_Class":
 `/**
 * Convenience method to derive a name from the specified class and
 * call <code>getInstance(String)</code> with it.
 *
 * @param clazz Class for which a suitable Log name will be derived
 *
 * @return A log instance with a name of clazz.getName()
 *
 * @exception LogConfigurationException if a suitable <code>Log</code>
 *  instance cannot be returned
 */
public Log getInstance(Class<?> clazz) throws LogConfigurationException {
    return getInstance(clazz.getName());
}`,"org.apache.tomcat.util.codec.binary.BaseNCodec.encode_byte[]_int_int":
 `/**
 * Encodes a byte[] containing binary data, into a byte[] containing
 * characters in the alphabet.
 *
 * @param pArray
 *            a byte array containing binary data
 * @param offset
 *            initial offset of the subarray.
 * @param length
 *            length of the subarray.
 * @return A byte array containing only the base N alphabetic character data
 * @since 1.11
 */
public byte[] encode(final byte[] pArray, final int offset, final int length) {
    if (pArray == null || pArray.length == 0) {
        return pArray;
    }
    final Context context = new Context();
    encode(pArray, offset, length, context);
    // Notify encoder of EOF.
    encode(pArray, offset, EOF, context);
    final byte[] buf = new byte[context.pos - context.readPos];
    readResults(buf, 0, buf.length, context);
    return buf;
}`,"org.apache.tomcat.util.codec.binary.Base64.isInAlphabet_byte":
 `/**
 * Returns whether or not the {@code octet} is in the Base64 alphabet.
 *
 * @param octet
 *            The value to test
 * @return {@code true} if the value is defined in the the Base64 alphabet {@code false} otherwise.
 */
@Override
protected boolean isInAlphabet(final byte octet) {
    return octet >= 0 && octet < decodeTable.length && decodeTable[octet] != -1;
}`,"org.apache.tomcat.util.buf.ByteChunk.setBytes_byte[]_int_int":
 `/**
 * Sets the buffer to the specified subarray of bytes.
 *
 * @param b the ascii bytes
 * @param off the start offset of the bytes
 * @param len the length of the bytes
 */
public void setBytes(byte[] b, int off, int len) {
    buff = b;
    start = off;
    end = start + len;
    isSet = true;
    hasHashCode = false;
}`,"org.apache.tomcat.util.buf.Ascii.toLower_int":
 `/**
 * Returns the lower case equivalent of the specified ASCII character.
 * @param c The char
 * @return the lower case equivalent char
 */
public static int toLower(int c) {
    return toLower[c & 0xff] & 0xff;
}`,"org.apache.tomcat.util.buf.ByteChunk.startsWithIgnoreCase_String_int":
 `/**
 * Returns true if the buffer starts with the specified string when tested
 * in a case insensitive manner.
 *
 * @param s the string
 * @param pos The position
 *
 * @return <code>true</code> if the start matches
 */
public boolean startsWithIgnoreCase(String s, int pos) {
    byte[] b = buff;
    int len = s.length();
    if (b == null || len + pos > end - start) {
        return false;
    }
    int off = start + pos;
    for (int i = 0; i < len; i++) {
        if (Ascii.toLower(b[off++]) != Ascii.toLower(s.charAt(i))) {
            return false;
        }
    }
    return true;
}`,"org.apache.juli.logging.LogFactory.getFactory_":
 `// ------------------------------------------------------- Static Variables
// --------------------------------------------------------- Static Methods
/**
 * <p>Construct (if necessary) and return a <code>LogFactory</code>
 * instance, using the following ordered lookup procedure to determine
 * the name of the implementation class to be loaded.</p>
 * <ul>
 * <li>The <code>org.apache.commons.logging.LogFactory</code> system
 *     property.</li>
 * <li>The JDK 1.3 Service Discovery mechanism</li>
 * <li>Use the properties file <code>commons-logging.properties</code>
 *     file, if found in the class path of this class.  The configuration
 *     file is in standard <code>java.util.Properties</code> format and
 *     contains the fully qualified name of the implementation class
 *     with the key being the system property defined above.</li>
 * <li>Fall back to a default implementation class
 *     (<code>org.apache.commons.logging.impl.LogFactoryImpl</code>).</li>
 * </ul>
 *
 * <p><em>NOTE</em> - If the properties file method of identifying the
 * <code>LogFactory</code> implementation class is utilized, all of the
 * properties defined in this file will be set as configuration attributes
 * on the corresponding <code>LogFactory</code> instance.</p>
 *
 * @return The singleton LogFactory instance
 *
 * @exception LogConfigurationException if the implementation class is not
 *  available or cannot be instantiated.
 */
public static LogFactory getFactory() throws LogConfigurationException {
    return singleton;
}`,"org.apache.tomcat.util.codec.binary.BaseNCodec.<init>_int_int_int_int":
 `/**
 * Note {@code lineLength} is rounded down to the nearest multiple of the encoded block size.
 * If {@code chunkSeparatorLength} is zero, then chunking is disabled.
 * @param unencodedBlockSize the size of an unencoded block (e.g. Base64 = 3)
 * @param encodedBlockSize the size of an encoded block (e.g. Base64 = 4)
 * @param lineLength if &gt; 0, use chunking with a length {@code lineLength}
 * @param chunkSeparatorLength the chunk separator length, if relevant
 */
protected BaseNCodec(final int unencodedBlockSize, final int encodedBlockSize, final int lineLength, final int chunkSeparatorLength) {
    this(unencodedBlockSize, encodedBlockSize, lineLength, chunkSeparatorLength, PAD_DEFAULT);
}`,"org.apache.tomcat.util.codec.binary.BaseNCodec$Context.<init>_":
 `Context() {
}`,"org.apache.tomcat.util.codec.binary.BaseNCodec.ensureBufferSize_int_BaseNCodec$Context":
 `/**
 * Ensure that the buffer has room for {@code size} bytes
 *
 * @param size minimum spare space required
 * @param context the context to be used
 * @return the buffer
 */
protected byte[] ensureBufferSize(final int size, final Context context) {
    if (context.buffer == null) {
        context.buffer = new byte[Math.max(size, getDefaultBufferSize())];
        context.pos = 0;
        context.readPos = 0;
        // Overflow-conscious:
        // x + y > z  ==  x + y - z > 0
    } else if (context.pos + size - context.buffer.length > 0) {
        return resizeBuffer(context, context.pos + size);
    }
    return context.buffer;
}`,"org.apache.tomcat.util.http.FastHttpDateFormat.updateFormatCache_Long_String":
 `/**
 * Update cache.
 */
private static void updateFormatCache(Long key, String value) {
    if (value == null) {
        return;
    }
    if (formatCache.size() > CACHE_SIZE) {
        formatCache.clear();
    }
    formatCache.put(key, value);
}`,"org.apache.catalina.authenticator.TestBasicAuthParser$BasicAuthHeader.<init>_String_String_String_String":
 `/*
         * This method creates valid base64 blobs with optional trailing data
         */
private BasicAuthHeader(String method, String username, String password, String extraBlob) {
    prefix(method);
    String userCredentials = ((password == null) || (password.length() < 1)) ? username : username + ":" + password;
    byte[] credentialsBytes = userCredentials.getBytes(StandardCharsets.ISO_8859_1);
    String base64auth = Base64.encodeBase64String(credentialsBytes);
    byte[] base64Bytes = base64auth.getBytes(StandardCharsets.ISO_8859_1);
    byte[] extraBytes = ((extraBlob == null) || (extraBlob.length() < 1)) ? null : extraBlob.getBytes(StandardCharsets.ISO_8859_1);
    try {
        authHeader.append(base64Bytes, 0, base64Bytes.length);
        if (extraBytes != null) {
            authHeader.append(extraBytes, 0, extraBytes.length);
        }
    } catch (IOException ioe) {
        throw new IllegalStateException("unable to extend ByteChunk:" + ioe.getMessage());
    }
    // emulate tomcat server - offset points to method in header
    authHeader.setOffset(initialOffset);
}`,"org.apache.tomcat.util.codec.binary.Base64.encodeBase64String_byte[]":
 `/**
 * Encodes binary data using the base64 algorithm but does not chunk the output.
 *
 * NOTE:  We changed the behavior of this method from multi-line chunking (commons-codec-1.4) to
 * single-line non-chunking (commons-codec-1.5).
 *
 * @param binaryData
 *            binary data to encode
 * @return String containing Base64 characters.
 * @since 1.4 (NOTE:  1.4 chunked the output, whereas 1.5 does not).
 */
public static String encodeBase64String(final byte[] binaryData) {
    return StringUtils.newStringUsAscii(encodeBase64(binaryData, false));
}`,"org.apache.tomcat.util.codec.binary.BaseNCodec.containsAlphabetOrPad_byte[]":
 `/**
 * Tests a given byte array to see if it contains any characters within the alphabet or PAD.
 *
 * Intended for use in checking line-ending arrays
 *
 * @param arrayOctet
 *            byte array to test
 * @return {@code true} if any byte is a valid character in the alphabet or PAD; {@code false} otherwise
 */
protected boolean containsAlphabetOrPad(final byte[] arrayOctet) {
    if (arrayOctet == null) {
        return false;
    }
    for (final byte element : arrayOctet) {
        if (pad == element || isInAlphabet(element)) {
            return true;
        }
    }
    return false;
}`,"org.apache.tomcat.util.buf.ByteChunk.<init>_":
 `/**
 * Creates a new, uninitialized ByteChunk object.
 */
public ByteChunk() {
}`,"org.apache.tomcat.util.buf.AbstractChunk.setOffset_int":
 `public void setOffset(int off) {
    if (end < off) {
        end = off;
    }
    start = off;
}`,"org.apache.tomcat.util.codec.binary.Base64.encodeBase64_byte[]_boolean_boolean":
 `/**
 * Encodes binary data using the base64 algorithm, optionally chunking the output into 76 character blocks.
 *
 * @param binaryData
 *            Array containing binary data to encode.
 * @param isChunked
 *            if {@code true} this encoder will chunk the base64 output into 76 character blocks
 * @param urlSafe
 *            if {@code true} this encoder will emit - and _ instead of the usual + and / characters.
 *            <b>Note: no padding is added when encoding using the URL-safe alphabet.</b>
 * @return Base64-encoded data.
 * @throws IllegalArgumentException
 *             Thrown when the input array needs an output array bigger than {@link Integer#MAX_VALUE}
 * @since 1.4
 */
public static byte[] encodeBase64(final byte[] binaryData, final boolean isChunked, final boolean urlSafe) {
    return encodeBase64(binaryData, isChunked, urlSafe, Integer.MAX_VALUE);
}`,"org.apache.tomcat.util.codec.binary.BaseNCodec.<init>_int_int_int_int_byte":
 `/**
 * Note {@code lineLength} is rounded down to the nearest multiple of the encoded block size.
 * If {@code chunkSeparatorLength} is zero, then chunking is disabled.
 * @param unencodedBlockSize the size of an unencoded block (e.g. Base64 = 3)
 * @param encodedBlockSize the size of an encoded block (e.g. Base64 = 4)
 * @param lineLength if &gt; 0, use chunking with a length {@code lineLength}
 * @param chunkSeparatorLength the chunk separator length, if relevant
 * @param pad byte used as padding byte.
 */
protected BaseNCodec(final int unencodedBlockSize, final int encodedBlockSize, final int lineLength, final int chunkSeparatorLength, final byte pad) {
    this.unencodedBlockSize = unencodedBlockSize;
    this.encodedBlockSize = encodedBlockSize;
    final boolean useChunking = lineLength > 0 && chunkSeparatorLength > 0;
    this.lineLength = useChunking ? (lineLength / encodedBlockSize) * encodedBlockSize : 0;
    this.chunkSeparatorLength = chunkSeparatorLength;
    this.pad = pad;
}`,"org.apache.tomcat.util.buf.AbstractChunk.getLimitInternal_":
 `protected int getLimitInternal() {
    if (limit > 0) {
        return limit;
    } else {
        return ARRAY_MAX_SIZE;
    }
}`,"org.apache.tomcat.util.res.StringManager.<init>_String_Locale":
 `/**
 * Creates a new StringManager for a given package. This is a
 * private method and all access to it is arbitrated by the
 * static getManager method call so that only one StringManager
 * per package will be created.
 *
 * @param packageName Name of package to create StringManager for.
 */
private StringManager(String packageName, Locale locale) {
    String bundleName = packageName + ".LocalStrings";
    ResourceBundle bnd = null;
    try {
        // The ROOT Locale uses English. If English is requested, force the
        // use of the ROOT Locale else incorrect results may be obtained if
        // the system default locale is not English and translations are
        // available for the system default locale.
        if (locale.getLanguage().equals(Locale.ENGLISH.getLanguage())) {
            locale = Locale.ROOT;
        }
        bnd = ResourceBundle.getBundle(bundleName, locale);
    } catch (MissingResourceException ex) {
        // Try from the current loader (that's the case for trusted apps)
        // Should only be required if using a TC5 style classloader structure
        // where common != shared != server
        ClassLoader cl = Thread.currentThread().getContextClassLoader();
        if (cl != null) {
            try {
                bnd = ResourceBundle.getBundle(bundleName, locale, cl);
            } catch (MissingResourceException ex2) {
                // Ignore
            }
        }
    }
    bundle = bnd;
    // Get the actual locale, which may be different from the requested one
    if (bundle != null) {
        Locale bundleLocale = bundle.getLocale();
        if (bundleLocale.equals(Locale.ROOT)) {
            this.locale = Locale.ENGLISH;
        } else {
            this.locale = bundleLocale;
        }
    } else {
        this.locale = null;
    }
}`,"org.apache.tomcat.util.codec.binary.Base64.<init>_int_byte[]_boolean":
 `/**
 * Creates a Base64 codec used for decoding (all modes) and encoding in URL-unsafe mode.
 * <p>
 * When encoding the line length and line separator are given in the constructor, and the encoding table is
 * STANDARD_ENCODE_TABLE.
 * </p>
 * <p>
 * Line lengths that aren't multiples of 4 will still essentially end up being multiples of 4 in the encoded data.
 * </p>
 * <p>
 * When decoding all variants are supported.
 * </p>
 *
 * @param lineLength
 *            Each line of encoded data will be at most of the given length (rounded down to nearest multiple of
 *            4). If lineLength &lt;= 0, then the output will not be divided into lines (chunks). Ignored when
 *            decoding.
 * @param lineSeparator
 *            Each line of encoded data will end with this sequence of bytes.
 * @param urlSafe
 *            Instead of emitting '+' and '/' we emit '-' and '_' respectively. urlSafe is only applied to encode
 *            operations. Decoding seamlessly handles both modes.
 *            <b>Note: no padding is added when using the URL-safe alphabet.</b>
 * @throws IllegalArgumentException
 *             Thrown when the {@code lineSeparator} contains Base64 characters.
 * @since 1.4
 */
public Base64(final int lineLength, final byte[] lineSeparator, final boolean urlSafe) {
    super(BYTES_PER_UNENCODED_BLOCK, BYTES_PER_ENCODED_BLOCK, lineLength, lineSeparator == null ? 0 : lineSeparator.length);
    // Needs to be set early to avoid NPE during call to containsAlphabetOrPad() below
    this.decodeTable = urlSafe ? URL_SAFE_DECODE_TABLE : STANDARD_DECODE_TABLE;
    // TODO could be simplified if there is no requirement to reject invalid line sep when length <=0
    // @see test case Base64Test.testConstructors()
    if (lineSeparator != null) {
        if (containsAlphabetOrPad(lineSeparator)) {
            final String sep = StringUtils.newStringUtf8(lineSeparator);
            throw new IllegalArgumentException(sm.getString("base64.lineSeparator", sep));
        }
        if (lineLength > 0) {
            // null line-sep forces no chunking rather than throwing IAE
            this.encodeSize = BYTES_PER_ENCODED_BLOCK + lineSeparator.length;
            this.lineSeparator = new byte[lineSeparator.length];
            System.arraycopy(lineSeparator, 0, this.lineSeparator, 0, lineSeparator.length);
        } else {
            this.encodeSize = BYTES_PER_ENCODED_BLOCK;
            this.lineSeparator = null;
        }
    } else {
        this.encodeSize = BYTES_PER_ENCODED_BLOCK;
        this.lineSeparator = null;
    }
    this.decodeSize = this.encodeSize - 1;
    this.encodeTable = urlSafe ? URL_SAFE_ENCODE_TABLE : STANDARD_ENCODE_TABLE;
}`,},
};
var treeData = [
{
  "call" : "org.apache.catalina.authenticator.TestBasicAuthParser#testAuthMethodBadMethod",
  "kiekerPattern" : "public void org.apache.catalina.authenticator.TestBasicAuthParser.testAuthMethodBadMethod()",
  "otherKiekerPattern" : null,
  "module" : "",
  "name" : "catalina.authenticator.TestBasicAuthParser#testAuthMethodBadMethod",
  "key" : "org.apache.catalina.authenticator.TestBasicAuthParser.testAuthMethodBadMethod_",
  "otherKey" : null,
  "parent" : null,
  "color" : "#FFF",
  "statistic" : null,
  "hasSourceChange" : false,
  "state" : null,
  "inVMDeviationPredecessor" : 0.0,
  "inVMDeviation" : 0.0,
  "ess" : 0,
  "children" : [ {
    "call" : "org.apache.catalina.authenticator.TestBasicAuthParser$BasicAuthHeader#<init>",
    "kiekerPattern" : "private new org.apache.catalina.authenticator.TestBasicAuthParser$BasicAuthHeader.<init>(java.lang.String,java.lang.String,java.lang.String,java.lang.String)",
    "otherKiekerPattern" : null,
    "module" : "",
    "name" : "catalina.authenticator.TestBasicAuthParser$BasicAuthHeader#<init>",
    "key" : "org.apache.catalina.authenticator.TestBasicAuthParser$BasicAuthHeader.<init>_String_String_String_String",
    "otherKey" : null,
    "parent" : "org.apache.catalina.authenticator.TestBasicAuthParser#testAuthMethodBadMethod",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ {
      "call" : "org.apache.catalina.authenticator.TestBasicAuthParser$BasicAuthHeader#prefix",
      "kiekerPattern" : "private void org.apache.catalina.authenticator.TestBasicAuthParser$BasicAuthHeader.prefix(java.lang.String)",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "catalina.authenticator.TestBasicAuthParser$BasicAuthHeader#prefix",
      "key" : "org.apache.catalina.authenticator.TestBasicAuthParser$BasicAuthHeader.prefix_String",
      "otherKey" : null,
      "parent" : "org.apache.catalina.authenticator.TestBasicAuthParser$BasicAuthHeader#<init>",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.apache.tomcat.util.res.StringManager#getManager",
        "kiekerPattern" : "public static final org.apache.tomcat.util.res.StringManager org.apache.tomcat.util.res.StringManager.getManager(java.lang.Class)",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "tomcat.util.res.StringManager#getManager",
        "key" : "org.apache.tomcat.util.res.StringManager.getManager_Class",
        "otherKey" : null,
        "parent" : "org.apache.catalina.authenticator.TestBasicAuthParser$BasicAuthHeader#prefix",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.apache.tomcat.util.res.StringManager#getManager",
          "kiekerPattern" : "public static final org.apache.tomcat.util.res.StringManager org.apache.tomcat.util.res.StringManager.getManager(java.lang.String)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "tomcat.util.res.StringManager#getManager",
          "key" : "org.apache.tomcat.util.res.StringManager.getManager_String",
          "otherKey" : null,
          "parent" : "org.apache.tomcat.util.res.StringManager#getManager",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.apache.tomcat.util.res.StringManager#getManager",
            "kiekerPattern" : "public static final synchronized org.apache.tomcat.util.res.StringManager org.apache.tomcat.util.res.StringManager.getManager(java.lang.String,java.util.Locale)",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "tomcat.util.res.StringManager#getManager",
            "key" : "org.apache.tomcat.util.res.StringManager.getManager_String_Locale",
            "otherKey" : null,
            "parent" : "org.apache.tomcat.util.res.StringManager#getManager",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ {
              "call" : "org.apache.tomcat.util.res.StringManager#<init>",
              "kiekerPattern" : "private new org.apache.tomcat.util.res.StringManager.<init>(java.lang.String,java.util.Locale)",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "tomcat.util.res.StringManager#<init>",
              "key" : "org.apache.tomcat.util.res.StringManager.<init>_String_Locale",
              "otherKey" : null,
              "parent" : "org.apache.tomcat.util.res.StringManager#getManager",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            } ]
          } ]
        } ]
      }, {
        "call" : "org.apache.tomcat.util.buf.AbstractChunk#<init>",
        "kiekerPattern" : "public new org.apache.tomcat.util.buf.AbstractChunk.<init>()",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "tomcat.util.buf.AbstractChunk#<init>",
        "key" : "org.apache.tomcat.util.buf.AbstractChunk.<init>_",
        "otherKey" : null,
        "parent" : "org.apache.catalina.authenticator.TestBasicAuthParser$BasicAuthHeader#prefix",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.apache.tomcat.util.buf.ByteChunk#<init>",
        "kiekerPattern" : "public new org.apache.tomcat.util.buf.ByteChunk.<init>()",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "tomcat.util.buf.ByteChunk#<init>",
        "key" : "org.apache.tomcat.util.buf.ByteChunk.<init>_",
        "otherKey" : null,
        "parent" : "org.apache.catalina.authenticator.TestBasicAuthParser$BasicAuthHeader#prefix",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.apache.tomcat.util.buf.ByteChunk#setBytes",
        "kiekerPattern" : "public void org.apache.tomcat.util.buf.ByteChunk.setBytes(byte[],int,int)",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "tomcat.util.buf.ByteChunk#setBytes",
        "key" : "org.apache.tomcat.util.buf.ByteChunk.setBytes_byte[]_int_int",
        "otherKey" : null,
        "parent" : "org.apache.catalina.authenticator.TestBasicAuthParser$BasicAuthHeader#prefix",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.apache.tomcat.util.buf.ByteChunk#append",
        "kiekerPattern" : "public void org.apache.tomcat.util.buf.ByteChunk.append(byte[],int,int)",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "tomcat.util.buf.ByteChunk#append",
        "key" : "org.apache.tomcat.util.buf.ByteChunk.append_byte[]_int_int",
        "otherKey" : null,
        "parent" : "org.apache.catalina.authenticator.TestBasicAuthParser$BasicAuthHeader#prefix",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.apache.tomcat.util.buf.ByteChunk#makeSpace",
          "kiekerPattern" : "public void org.apache.tomcat.util.buf.ByteChunk.makeSpace(int)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "tomcat.util.buf.ByteChunk#makeSpace",
          "key" : "org.apache.tomcat.util.buf.ByteChunk.makeSpace_int",
          "otherKey" : null,
          "parent" : "org.apache.tomcat.util.buf.ByteChunk#append",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.apache.tomcat.util.buf.AbstractChunk#getLimitInternal",
            "kiekerPattern" : "protected int org.apache.tomcat.util.buf.AbstractChunk.getLimitInternal()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "tomcat.util.buf.AbstractChunk#getLimitInternal",
            "key" : "org.apache.tomcat.util.buf.AbstractChunk.getLimitInternal_",
            "otherKey" : null,
            "parent" : "org.apache.tomcat.util.buf.ByteChunk#makeSpace",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          } ]
        }, {
          "call" : "org.apache.tomcat.util.buf.AbstractChunk#getLimitInternal",
          "kiekerPattern" : "protected int org.apache.tomcat.util.buf.AbstractChunk.getLimitInternal()",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "tomcat.util.buf.AbstractChunk#getLimitInternal",
          "key" : "org.apache.tomcat.util.buf.AbstractChunk.getLimitInternal_",
          "otherKey" : null,
          "parent" : "org.apache.tomcat.util.buf.ByteChunk#append",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        } ]
      } ]
    }, {
      "call" : "org.apache.tomcat.util.res.StringManager#getManager",
      "kiekerPattern" : "public static final org.apache.tomcat.util.res.StringManager org.apache.tomcat.util.res.StringManager.getManager(java.lang.Class)",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "tomcat.util.res.StringManager#getManager",
      "key" : "org.apache.tomcat.util.res.StringManager.getManager_Class",
      "otherKey" : null,
      "parent" : "org.apache.catalina.authenticator.TestBasicAuthParser$BasicAuthHeader#<init>",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.apache.tomcat.util.res.StringManager#getManager",
        "kiekerPattern" : "public static final org.apache.tomcat.util.res.StringManager org.apache.tomcat.util.res.StringManager.getManager(java.lang.String)",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "tomcat.util.res.StringManager#getManager",
        "key" : "org.apache.tomcat.util.res.StringManager.getManager_String",
        "otherKey" : null,
        "parent" : "org.apache.tomcat.util.res.StringManager#getManager",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.apache.tomcat.util.res.StringManager#getManager",
          "kiekerPattern" : "public static final synchronized org.apache.tomcat.util.res.StringManager org.apache.tomcat.util.res.StringManager.getManager(java.lang.String,java.util.Locale)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "tomcat.util.res.StringManager#getManager",
          "key" : "org.apache.tomcat.util.res.StringManager.getManager_String_Locale",
          "otherKey" : null,
          "parent" : "org.apache.tomcat.util.res.StringManager#getManager",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.apache.tomcat.util.res.StringManager#<init>",
            "kiekerPattern" : "private new org.apache.tomcat.util.res.StringManager.<init>(java.lang.String,java.util.Locale)",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "tomcat.util.res.StringManager#<init>",
            "key" : "org.apache.tomcat.util.res.StringManager.<init>_String_Locale",
            "otherKey" : null,
            "parent" : "org.apache.tomcat.util.res.StringManager#getManager",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          } ]
        } ]
      } ]
    }, {
      "call" : "org.apache.tomcat.util.codec.binary.Base64#encodeBase64String",
      "kiekerPattern" : "public static java.lang.String org.apache.tomcat.util.codec.binary.Base64.encodeBase64String(byte[])",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "tomcat.util.codec.binary.Base64#encodeBase64String",
      "key" : "org.apache.tomcat.util.codec.binary.Base64.encodeBase64String_byte[]",
      "otherKey" : null,
      "parent" : "org.apache.catalina.authenticator.TestBasicAuthParser$BasicAuthHeader#<init>",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.apache.tomcat.util.codec.binary.Base64#encodeBase64",
        "kiekerPattern" : "public static byte[] org.apache.tomcat.util.codec.binary.Base64.encodeBase64(byte[],boolean)",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "tomcat.util.codec.binary.Base64#encodeBase64",
        "key" : "org.apache.tomcat.util.codec.binary.Base64.encodeBase64_byte[]_boolean",
        "otherKey" : null,
        "parent" : "org.apache.tomcat.util.codec.binary.Base64#encodeBase64String",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.apache.tomcat.util.codec.binary.Base64#encodeBase64",
          "kiekerPattern" : "public static byte[] org.apache.tomcat.util.codec.binary.Base64.encodeBase64(byte[],boolean,boolean)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "tomcat.util.codec.binary.Base64#encodeBase64",
          "key" : "org.apache.tomcat.util.codec.binary.Base64.encodeBase64_byte[]_boolean_boolean",
          "otherKey" : null,
          "parent" : "org.apache.tomcat.util.codec.binary.Base64#encodeBase64",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.apache.tomcat.util.codec.binary.Base64#encodeBase64",
            "kiekerPattern" : "public static byte[] org.apache.tomcat.util.codec.binary.Base64.encodeBase64(byte[],boolean,boolean,int)",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "tomcat.util.codec.binary.Base64#encodeBase64",
            "key" : "org.apache.tomcat.util.codec.binary.Base64.encodeBase64_byte[]_boolean_boolean_int",
            "otherKey" : null,
            "parent" : "org.apache.tomcat.util.codec.binary.Base64#encodeBase64",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ {
              "call" : "org.apache.tomcat.util.codec.binary.BaseNCodec#<init>",
              "kiekerPattern" : "protected new org.apache.tomcat.util.codec.binary.BaseNCodec.<init>(int,int,int,int,byte)",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "tomcat.util.codec.binary.BaseNCodec#<init>",
              "key" : "org.apache.tomcat.util.codec.binary.BaseNCodec.<init>_int_int_int_int_byte",
              "otherKey" : null,
              "parent" : "org.apache.tomcat.util.codec.binary.Base64#encodeBase64",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            }, {
              "call" : "org.apache.tomcat.util.codec.binary.BaseNCodec#<init>",
              "kiekerPattern" : "protected new org.apache.tomcat.util.codec.binary.BaseNCodec.<init>(int,int,int,int)",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "tomcat.util.codec.binary.BaseNCodec#<init>",
              "key" : "org.apache.tomcat.util.codec.binary.BaseNCodec.<init>_int_int_int_int",
              "otherKey" : null,
              "parent" : "org.apache.tomcat.util.codec.binary.Base64#encodeBase64",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            }, {
              "call" : "org.apache.tomcat.util.codec.binary.Base64#<init>",
              "kiekerPattern" : "public new org.apache.tomcat.util.codec.binary.Base64.<init>(int,byte[],boolean)",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "tomcat.util.codec.binary.Base64#<init>",
              "key" : "org.apache.tomcat.util.codec.binary.Base64.<init>_int_byte[]_boolean",
              "otherKey" : null,
              "parent" : "org.apache.tomcat.util.codec.binary.Base64#encodeBase64",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ {
                "call" : "org.apache.tomcat.util.codec.binary.BaseNCodec#containsAlphabetOrPad",
                "kiekerPattern" : "protected boolean org.apache.tomcat.util.codec.binary.BaseNCodec.containsAlphabetOrPad(byte[])",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "tomcat.util.codec.binary.BaseNCodec#containsAlphabetOrPad",
                "key" : "org.apache.tomcat.util.codec.binary.BaseNCodec.containsAlphabetOrPad_byte[]",
                "otherKey" : null,
                "parent" : "org.apache.tomcat.util.codec.binary.Base64#<init>",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ {
                  "call" : "org.apache.tomcat.util.codec.binary.Base64#isInAlphabet",
                  "kiekerPattern" : "protected boolean org.apache.tomcat.util.codec.binary.Base64.isInAlphabet(byte)",
                  "otherKiekerPattern" : null,
                  "module" : "",
                  "name" : "tomcat.util.codec.binary.Base64#isInAlphabet",
                  "key" : "org.apache.tomcat.util.codec.binary.Base64.isInAlphabet_byte",
                  "otherKey" : null,
                  "parent" : "org.apache.tomcat.util.codec.binary.BaseNCodec#containsAlphabetOrPad",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ ]
                } ]
              } ]
            }, {
              "call" : "org.apache.tomcat.util.codec.binary.BaseNCodec#getEncodedLength",
              "kiekerPattern" : "public long org.apache.tomcat.util.codec.binary.BaseNCodec.getEncodedLength(byte[])",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "tomcat.util.codec.binary.BaseNCodec#getEncodedLength",
              "key" : "org.apache.tomcat.util.codec.binary.BaseNCodec.getEncodedLength_byte[]",
              "otherKey" : null,
              "parent" : "org.apache.tomcat.util.codec.binary.Base64#encodeBase64",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            }, {
              "call" : "org.apache.tomcat.util.codec.binary.BaseNCodec#encode",
              "kiekerPattern" : "public byte[] org.apache.tomcat.util.codec.binary.BaseNCodec.encode(byte[])",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "tomcat.util.codec.binary.BaseNCodec#encode",
              "key" : "org.apache.tomcat.util.codec.binary.BaseNCodec.encode_byte[]",
              "otherKey" : null,
              "parent" : "org.apache.tomcat.util.codec.binary.Base64#encodeBase64",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ {
                "call" : "org.apache.tomcat.util.codec.binary.BaseNCodec#encode",
                "kiekerPattern" : "public byte[] org.apache.tomcat.util.codec.binary.BaseNCodec.encode(byte[],int,int)",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "tomcat.util.codec.binary.BaseNCodec#encode",
                "key" : "org.apache.tomcat.util.codec.binary.BaseNCodec.encode_byte[]_int_int",
                "otherKey" : null,
                "parent" : "org.apache.tomcat.util.codec.binary.BaseNCodec#encode",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ {
                  "call" : "org.apache.tomcat.util.codec.binary.BaseNCodec$Context#<init>",
                  "kiekerPattern" : "new org.apache.tomcat.util.codec.binary.BaseNCodec$Context.<init>()",
                  "otherKiekerPattern" : null,
                  "module" : "",
                  "name" : "tomcat.util.codec.binary.BaseNCodec$Context#<init>",
                  "key" : "org.apache.tomcat.util.codec.binary.BaseNCodec$Context.<init>_",
                  "otherKey" : null,
                  "parent" : "org.apache.tomcat.util.codec.binary.BaseNCodec#encode",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ ]
                }, {
                  "call" : "org.apache.tomcat.util.codec.binary.Base64#encode",
                  "kiekerPattern" : "void org.apache.tomcat.util.codec.binary.Base64.encode(byte[],int,int,org.apache.tomcat.util.codec.binary.Context)",
                  "otherKiekerPattern" : null,
                  "module" : "",
                  "name" : "tomcat.util.codec.binary.Base64#encode",
                  "key" : "org.apache.tomcat.util.codec.binary.Base64.encode_byte[]_int_int_Context",
                  "otherKey" : null,
                  "parent" : "org.apache.tomcat.util.codec.binary.BaseNCodec#encode",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ {
                    "call" : "org.apache.tomcat.util.codec.binary.BaseNCodec#ensureBufferSize",
                    "kiekerPattern" : "protected byte[] org.apache.tomcat.util.codec.binary.BaseNCodec.ensureBufferSize(int,org.apache.tomcat.util.codec.binary.BaseNCodec$Context)",
                    "otherKiekerPattern" : null,
                    "module" : "",
                    "name" : "tomcat.util.codec.binary.BaseNCodec#ensureBufferSize",
                    "key" : "org.apache.tomcat.util.codec.binary.BaseNCodec.ensureBufferSize_int_BaseNCodec$Context",
                    "otherKey" : null,
                    "parent" : "org.apache.tomcat.util.codec.binary.Base64#encode",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ {
                      "call" : "org.apache.tomcat.util.codec.binary.BaseNCodec#getDefaultBufferSize",
                      "kiekerPattern" : "protected int org.apache.tomcat.util.codec.binary.BaseNCodec.getDefaultBufferSize()",
                      "otherKiekerPattern" : null,
                      "module" : "",
                      "name" : "tomcat.util.codec.binary.BaseNCodec#getDefaultBufferSize",
                      "key" : "org.apache.tomcat.util.codec.binary.BaseNCodec.getDefaultBufferSize_",
                      "otherKey" : null,
                      "parent" : "org.apache.tomcat.util.codec.binary.BaseNCodec#ensureBufferSize",
                      "color" : "#FFF",
                      "statistic" : null,
                      "hasSourceChange" : false,
                      "state" : null,
                      "inVMDeviationPredecessor" : 0.0,
                      "inVMDeviation" : 0.0,
                      "ess" : 10,
                      "children" : [ ]
                    } ]
                  } ]
                }, {
                  "call" : "org.apache.tomcat.util.codec.binary.BaseNCodec#readResults",
                  "kiekerPattern" : "int org.apache.tomcat.util.codec.binary.BaseNCodec.readResults(byte[],int,int,org.apache.tomcat.util.codec.binary.BaseNCodec$Context)",
                  "otherKiekerPattern" : null,
                  "module" : "",
                  "name" : "tomcat.util.codec.binary.BaseNCodec#readResults",
                  "key" : "org.apache.tomcat.util.codec.binary.BaseNCodec.readResults_byte[]_int_int_BaseNCodec$Context",
                  "otherKey" : null,
                  "parent" : "org.apache.tomcat.util.codec.binary.BaseNCodec#encode",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ {
                    "call" : "org.apache.tomcat.util.codec.binary.BaseNCodec#available",
                    "kiekerPattern" : "int org.apache.tomcat.util.codec.binary.BaseNCodec.available(org.apache.tomcat.util.codec.binary.BaseNCodec$Context)",
                    "otherKiekerPattern" : null,
                    "module" : "",
                    "name" : "tomcat.util.codec.binary.BaseNCodec#available",
                    "key" : "org.apache.tomcat.util.codec.binary.BaseNCodec.available_BaseNCodec$Context",
                    "otherKey" : null,
                    "parent" : "org.apache.tomcat.util.codec.binary.BaseNCodec#readResults",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ ]
                  } ]
                } ]
              } ]
            } ]
          } ]
        } ]
      }, {
        "call" : "org.apache.tomcat.util.codec.binary.StringUtils#newStringUsAscii",
        "kiekerPattern" : "public static java.lang.String org.apache.tomcat.util.codec.binary.StringUtils.newStringUsAscii(byte[])",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "tomcat.util.codec.binary.StringUtils#newStringUsAscii",
        "key" : "org.apache.tomcat.util.codec.binary.StringUtils.newStringUsAscii_byte[]",
        "otherKey" : null,
        "parent" : "org.apache.tomcat.util.codec.binary.Base64#encodeBase64String",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.apache.tomcat.util.codec.binary.StringUtils#newString",
          "kiekerPattern" : "private static java.lang.String org.apache.tomcat.util.codec.binary.StringUtils.newString(byte[],java.nio.charset.Charset)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "tomcat.util.codec.binary.StringUtils#newString",
          "key" : "org.apache.tomcat.util.codec.binary.StringUtils.newString_byte[]_Charset",
          "otherKey" : null,
          "parent" : "org.apache.tomcat.util.codec.binary.StringUtils#newStringUsAscii",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        } ]
      } ]
    }, {
      "call" : "org.apache.tomcat.util.buf.ByteChunk#append",
      "kiekerPattern" : "public void org.apache.tomcat.util.buf.ByteChunk.append(byte[],int,int)",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "tomcat.util.buf.ByteChunk#append",
      "key" : "org.apache.tomcat.util.buf.ByteChunk.append_byte[]_int_int",
      "otherKey" : null,
      "parent" : "org.apache.catalina.authenticator.TestBasicAuthParser$BasicAuthHeader#<init>",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.apache.tomcat.util.buf.ByteChunk#makeSpace",
        "kiekerPattern" : "public void org.apache.tomcat.util.buf.ByteChunk.makeSpace(int)",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "tomcat.util.buf.ByteChunk#makeSpace",
        "key" : "org.apache.tomcat.util.buf.ByteChunk.makeSpace_int",
        "otherKey" : null,
        "parent" : "org.apache.tomcat.util.buf.ByteChunk#append",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.apache.tomcat.util.buf.AbstractChunk#getLimitInternal",
          "kiekerPattern" : "protected int org.apache.tomcat.util.buf.AbstractChunk.getLimitInternal()",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "tomcat.util.buf.AbstractChunk#getLimitInternal",
          "key" : "org.apache.tomcat.util.buf.AbstractChunk.getLimitInternal_",
          "otherKey" : null,
          "parent" : "org.apache.tomcat.util.buf.ByteChunk#makeSpace",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        } ]
      }, {
        "call" : "org.apache.tomcat.util.buf.AbstractChunk#getLimitInternal",
        "kiekerPattern" : "protected int org.apache.tomcat.util.buf.AbstractChunk.getLimitInternal()",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "tomcat.util.buf.AbstractChunk#getLimitInternal",
        "key" : "org.apache.tomcat.util.buf.AbstractChunk.getLimitInternal_",
        "otherKey" : null,
        "parent" : "org.apache.tomcat.util.buf.ByteChunk#append",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      } ]
    }, {
      "call" : "org.apache.tomcat.util.buf.AbstractChunk#setOffset",
      "kiekerPattern" : "public void org.apache.tomcat.util.buf.AbstractChunk.setOffset(int)",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "tomcat.util.buf.AbstractChunk#setOffset",
      "key" : "org.apache.tomcat.util.buf.AbstractChunk.setOffset_int",
      "otherKey" : null,
      "parent" : "org.apache.catalina.authenticator.TestBasicAuthParser$BasicAuthHeader#<init>",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    } ]
  }, {
    "call" : "org.apache.catalina.authenticator.TestBasicAuthParser$BasicAuthHeader#<init>",
    "kiekerPattern" : "private new org.apache.catalina.authenticator.TestBasicAuthParser$BasicAuthHeader.<init>(java.lang.String,java.lang.String,java.lang.String)",
    "otherKiekerPattern" : null,
    "module" : "",
    "name" : "catalina.authenticator.TestBasicAuthParser$BasicAuthHeader#<init>",
    "key" : "org.apache.catalina.authenticator.TestBasicAuthParser$BasicAuthHeader.<init>_String_String_String",
    "otherKey" : null,
    "parent" : "org.apache.catalina.authenticator.TestBasicAuthParser#testAuthMethodBadMethod",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.apache.catalina.authenticator.TestBasicAuthParser$BasicAuthHeader#getHeader",
    "kiekerPattern" : "private org.apache.tomcat.util.buf.ByteChunk org.apache.catalina.authenticator.TestBasicAuthParser$BasicAuthHeader.getHeader()",
    "otherKiekerPattern" : null,
    "module" : "",
    "name" : "catalina.authenticator.TestBasicAuthParser$BasicAuthHeader#getHeader",
    "key" : "org.apache.catalina.authenticator.TestBasicAuthParser$BasicAuthHeader.getHeader_",
    "otherKey" : null,
    "parent" : "org.apache.catalina.authenticator.TestBasicAuthParser#testAuthMethodBadMethod",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.apache.juli.logging.LogFactory#<init>",
    "kiekerPattern" : "private new org.apache.juli.logging.LogFactory.<init>()",
    "otherKiekerPattern" : null,
    "module" : "",
    "name" : "juli.logging.LogFactory#<init>",
    "key" : "org.apache.juli.logging.LogFactory.<init>_",
    "otherKey" : null,
    "parent" : "org.apache.catalina.authenticator.TestBasicAuthParser#testAuthMethodBadMethod",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.apache.juli.logging.LogFactory#getLog",
    "kiekerPattern" : "public static org.apache.juli.logging.Log org.apache.juli.logging.LogFactory.getLog(java.lang.Class)",
    "otherKiekerPattern" : null,
    "module" : "",
    "name" : "juli.logging.LogFactory#getLog",
    "key" : "org.apache.juli.logging.LogFactory.getLog_Class",
    "otherKey" : null,
    "parent" : "org.apache.catalina.authenticator.TestBasicAuthParser#testAuthMethodBadMethod",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ {
      "call" : "org.apache.juli.logging.LogFactory#getFactory",
      "kiekerPattern" : "public static org.apache.juli.logging.LogFactory org.apache.juli.logging.LogFactory.getFactory()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "juli.logging.LogFactory#getFactory",
      "key" : "org.apache.juli.logging.LogFactory.getFactory_",
      "otherKey" : null,
      "parent" : "org.apache.juli.logging.LogFactory#getLog",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.apache.juli.logging.LogFactory#getInstance",
      "kiekerPattern" : "public org.apache.juli.logging.Log org.apache.juli.logging.LogFactory.getInstance(java.lang.Class)",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "juli.logging.LogFactory#getInstance",
      "key" : "org.apache.juli.logging.LogFactory.getInstance_Class",
      "otherKey" : null,
      "parent" : "org.apache.juli.logging.LogFactory#getLog",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.apache.juli.logging.LogFactory#getInstance",
        "kiekerPattern" : "public org.apache.juli.logging.Log org.apache.juli.logging.LogFactory.getInstance(java.lang.String)",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "juli.logging.LogFactory#getInstance",
        "key" : "org.apache.juli.logging.LogFactory.getInstance_String",
        "otherKey" : null,
        "parent" : "org.apache.juli.logging.LogFactory#getInstance",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.apache.juli.logging.DirectJDKLog#getInstance",
          "kiekerPattern" : "static org.apache.juli.logging.DirectJDKLog org.apache.juli.logging.DirectJDKLog.getInstance(java.lang.String)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "juli.logging.DirectJDKLog#getInstance",
          "key" : "org.apache.juli.logging.DirectJDKLog.getInstance_String",
          "otherKey" : null,
          "parent" : "org.apache.juli.logging.LogFactory#getInstance",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.apache.juli.logging.DirectJDKLog#<init>",
            "kiekerPattern" : "public new org.apache.juli.logging.DirectJDKLog.<init>(java.lang.String)",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "juli.logging.DirectJDKLog#<init>",
            "key" : "org.apache.juli.logging.DirectJDKLog.<init>_String",
            "otherKey" : null,
            "parent" : "org.apache.juli.logging.DirectJDKLog#getInstance",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          } ]
        } ]
      } ]
    } ]
  }, {
    "call" : "org.apache.tomcat.util.res.StringManager#getManager",
    "kiekerPattern" : "public static final org.apache.tomcat.util.res.StringManager org.apache.tomcat.util.res.StringManager.getManager(java.lang.Class)",
    "otherKiekerPattern" : null,
    "module" : "",
    "name" : "tomcat.util.res.StringManager#getManager",
    "key" : "org.apache.tomcat.util.res.StringManager.getManager_Class",
    "otherKey" : null,
    "parent" : "org.apache.catalina.authenticator.TestBasicAuthParser#testAuthMethodBadMethod",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ {
      "call" : "org.apache.tomcat.util.res.StringManager#getManager",
      "kiekerPattern" : "public static final org.apache.tomcat.util.res.StringManager org.apache.tomcat.util.res.StringManager.getManager(java.lang.String)",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "tomcat.util.res.StringManager#getManager",
      "key" : "org.apache.tomcat.util.res.StringManager.getManager_String",
      "otherKey" : null,
      "parent" : "org.apache.tomcat.util.res.StringManager#getManager",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.apache.tomcat.util.res.StringManager#getManager",
        "kiekerPattern" : "public static final synchronized org.apache.tomcat.util.res.StringManager org.apache.tomcat.util.res.StringManager.getManager(java.lang.String,java.util.Locale)",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "tomcat.util.res.StringManager#getManager",
        "key" : "org.apache.tomcat.util.res.StringManager.getManager_String_Locale",
        "otherKey" : null,
        "parent" : "org.apache.tomcat.util.res.StringManager#getManager",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.apache.tomcat.util.res.StringManager#<init>",
          "kiekerPattern" : "private new org.apache.tomcat.util.res.StringManager.<init>(java.lang.String,java.util.Locale)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "tomcat.util.res.StringManager#<init>",
          "key" : "org.apache.tomcat.util.res.StringManager.<init>_String_Locale",
          "otherKey" : null,
          "parent" : "org.apache.tomcat.util.res.StringManager#getManager",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        } ]
      } ]
    } ]
  }, {
    "call" : "org.apache.tomcat.util.res.StringManager#getManager",
    "kiekerPattern" : "public static final org.apache.tomcat.util.res.StringManager org.apache.tomcat.util.res.StringManager.getManager(java.lang.String)",
    "otherKiekerPattern" : null,
    "module" : "",
    "name" : "tomcat.util.res.StringManager#getManager",
    "key" : "org.apache.tomcat.util.res.StringManager.getManager_String",
    "otherKey" : null,
    "parent" : "org.apache.catalina.authenticator.TestBasicAuthParser#testAuthMethodBadMethod",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ {
      "call" : "org.apache.tomcat.util.res.StringManager#getManager",
      "kiekerPattern" : "public static final synchronized org.apache.tomcat.util.res.StringManager org.apache.tomcat.util.res.StringManager.getManager(java.lang.String,java.util.Locale)",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "tomcat.util.res.StringManager#getManager",
      "key" : "org.apache.tomcat.util.res.StringManager.getManager_String_Locale",
      "otherKey" : null,
      "parent" : "org.apache.tomcat.util.res.StringManager#getManager",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    } ]
  }, {
    "call" : "org.apache.tomcat.util.http.ConcurrentDateFormat#<init>",
    "kiekerPattern" : "public new org.apache.tomcat.util.http.ConcurrentDateFormat.<init>(java.lang.String,java.util.Locale,java.util.TimeZone)",
    "otherKiekerPattern" : null,
    "module" : "",
    "name" : "tomcat.util.http.ConcurrentDateFormat#<init>",
    "key" : "org.apache.tomcat.util.http.ConcurrentDateFormat.<init>_String_Locale_TimeZone",
    "otherKey" : null,
    "parent" : "org.apache.catalina.authenticator.TestBasicAuthParser#testAuthMethodBadMethod",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ {
      "call" : "org.apache.tomcat.util.http.ConcurrentDateFormat#createInstance",
      "kiekerPattern" : "private java.text.SimpleDateFormat org.apache.tomcat.util.http.ConcurrentDateFormat.createInstance()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "tomcat.util.http.ConcurrentDateFormat#createInstance",
      "key" : "org.apache.tomcat.util.http.ConcurrentDateFormat.createInstance_",
      "otherKey" : null,
      "parent" : "org.apache.tomcat.util.http.ConcurrentDateFormat#<init>",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    } ]
  }, {
    "call" : "org.apache.tomcat.util.http.FastHttpDateFormat#formatDate",
    "kiekerPattern" : "public static final java.lang.String org.apache.tomcat.util.http.FastHttpDateFormat.formatDate(long)",
    "otherKiekerPattern" : null,
    "module" : "",
    "name" : "tomcat.util.http.FastHttpDateFormat#formatDate",
    "key" : "org.apache.tomcat.util.http.FastHttpDateFormat.formatDate_long",
    "otherKey" : null,
    "parent" : "org.apache.catalina.authenticator.TestBasicAuthParser#testAuthMethodBadMethod",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ {
      "call" : "org.apache.tomcat.util.http.ConcurrentDateFormat#format",
      "kiekerPattern" : "public java.lang.String org.apache.tomcat.util.http.ConcurrentDateFormat.format(java.util.Date)",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "tomcat.util.http.ConcurrentDateFormat#format",
      "key" : "org.apache.tomcat.util.http.ConcurrentDateFormat.format_Date",
      "otherKey" : null,
      "parent" : "org.apache.tomcat.util.http.FastHttpDateFormat#formatDate",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.apache.tomcat.util.http.FastHttpDateFormat#updateFormatCache",
      "kiekerPattern" : "private static void org.apache.tomcat.util.http.FastHttpDateFormat.updateFormatCache(java.lang.Long,java.lang.String)",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "tomcat.util.http.FastHttpDateFormat#updateFormatCache",
      "key" : "org.apache.tomcat.util.http.FastHttpDateFormat.updateFormatCache_Long_String",
      "otherKey" : null,
      "parent" : "org.apache.tomcat.util.http.FastHttpDateFormat#formatDate",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    } ]
  }, {
    "call" : "org.apache.catalina.authenticator.BasicAuthenticator$BasicCredentials#<init>",
    "kiekerPattern" : "public new org.apache.catalina.authenticator.BasicAuthenticator$BasicCredentials.<init>(org.apache.tomcat.util.buf.ByteChunk,java.nio.charset.Charset,boolean)",
    "otherKiekerPattern" : null,
    "module" : "",
    "name" : "catalina.authenticator.BasicAuthenticator$BasicCredentials#<init>",
    "key" : "org.apache.catalina.authenticator.BasicAuthenticator$BasicCredentials.<init>_ByteChunk_Charset_boolean",
    "otherKey" : null,
    "parent" : "org.apache.catalina.authenticator.TestBasicAuthParser#testAuthMethodBadMethod",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ {
      "call" : "org.apache.tomcat.util.buf.AbstractChunk#getOffset",
      "kiekerPattern" : "public int org.apache.tomcat.util.buf.AbstractChunk.getOffset()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "tomcat.util.buf.AbstractChunk#getOffset",
      "key" : "org.apache.tomcat.util.buf.AbstractChunk.getOffset_",
      "otherKey" : null,
      "parent" : "org.apache.catalina.authenticator.BasicAuthenticator$BasicCredentials#<init>",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.apache.catalina.authenticator.BasicAuthenticator$BasicCredentials#parseMethod",
      "kiekerPattern" : "private void org.apache.catalina.authenticator.BasicAuthenticator$BasicCredentials.parseMethod()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "catalina.authenticator.BasicAuthenticator$BasicCredentials#parseMethod",
      "key" : "org.apache.catalina.authenticator.BasicAuthenticator$BasicCredentials.parseMethod_",
      "otherKey" : null,
      "parent" : "org.apache.catalina.authenticator.BasicAuthenticator$BasicCredentials#<init>",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.apache.tomcat.util.buf.ByteChunk#startsWithIgnoreCase",
        "kiekerPattern" : "public boolean org.apache.tomcat.util.buf.ByteChunk.startsWithIgnoreCase(java.lang.String,int)",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "tomcat.util.buf.ByteChunk#startsWithIgnoreCase",
        "key" : "org.apache.tomcat.util.buf.ByteChunk.startsWithIgnoreCase_String_int",
        "otherKey" : null,
        "parent" : "org.apache.catalina.authenticator.BasicAuthenticator$BasicCredentials#parseMethod",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.apache.tomcat.util.buf.Ascii#toLower",
          "kiekerPattern" : "public static int org.apache.tomcat.util.buf.Ascii.toLower(int)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "tomcat.util.buf.Ascii#toLower",
          "key" : "org.apache.tomcat.util.buf.Ascii.toLower_int",
          "otherKey" : null,
          "parent" : "org.apache.tomcat.util.buf.ByteChunk#startsWithIgnoreCase",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        } ]
      } ]
    } ]
  } ]
}];
// ************** Generate the tree diagram   *****************
var margin = {top: 20, right: 120, bottom: 20, left: 462},
   width = 5308- margin.right - margin.left,
   height = 980 - margin.top - margin.bottom;
