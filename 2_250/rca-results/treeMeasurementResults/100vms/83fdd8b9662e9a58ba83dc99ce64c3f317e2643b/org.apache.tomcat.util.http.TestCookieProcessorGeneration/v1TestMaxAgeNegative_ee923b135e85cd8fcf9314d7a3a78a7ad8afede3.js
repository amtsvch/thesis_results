if (document.getElementById('testcaseDiv') != null) { 
   document.getElementById('testcaseDiv').innerHTML="Commit: <a href='javascript:fallbackCopyTextToClipboard(\"-commit 83fdd8b9662e9a58ba83dc99ce64c3f317e2643b -test org.apache.tomcat.util.http.TestCookieProcessorGeneration#v1TestMaxAgeNegative\")'>83fdd8b9662e9a58ba83dc99ce64c3f317e2643b</a><br>Test Case: org.apache.tomcat.util.http.TestCookieProcessorGeneration#v1TestMaxAgeNegative<br>";
}

var source = {"current":
{
 "jakarta.servlet.http.CookieNameValidator.<init>_String":
 ``,"jakarta.servlet.http.Cookie.<init>_String_String":
 `/**
 * Constructs a cookie with a specified name and value.
 * <p>
 * The name must conform to RFC 2109. That means it can contain only ASCII
 * alphanumeric characters and cannot contain commas, semicolons, or white
 * space or begin with a $ character. The cookie's name cannot be changed
 * after creation.
 * <p>
 * The value can be anything the server chooses to send. Its value is
 * probably of interest only to the server. The cookie's value can be
 * changed after creation with the <code>setValue</code> method.
 * <p>
 * By default, cookies are created according to the Netscape cookie
 * specification. The version can be changed with the
 * <code>setVersion</code> method.
 *
 * @param name
 *            a <code>String</code> specifying the name of the cookie
 * @param value
 *            a <code>String</code> specifying the value of the cookie
 * @throws IllegalArgumentException
 *             if the cookie name contains illegal characters (for example,
 *             a comma, space, or semicolon) or it is one of the tokens
 *             reserved for use by the cookie protocol
 * @see #setValue
 * @see #setVersion
 */
public Cookie(String name, String value) {
    validation.validate(name);
    this.name = name;
    this.value = value;
}`,"org.apache.tomcat.util.http.CookieProcessorBase.getSameSiteCookies_":
 `public SameSiteCookies getSameSiteCookies() {
    return sameSiteCookies;
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
}`,"org.apache.tomcat.util.http.CookieProcessorBase.<init>_":
 ``,"org.apache.tomcat.util.http.LegacyCookieProcessor.needsQuotes_String_int":
 `private boolean needsQuotes(String value, int version) {
    if (value == null) {
        return false;
    }
    int i = 0;
    int len = value.length();
    if (alreadyQuoted(value)) {
        i++;
        len--;
    }
    for (; i < len; i++) {
        char c = value.charAt(i);
        if ((c < 0x20 && c != '\t') || c >= 0x7f) {
            throw new IllegalArgumentException("Control character in cookie value or attribute.");
        }
        if (version == 0 && !allowedWithoutQuotes.get(c) || version == 1 && isHttpSeparator(c)) {
            return true;
        }
    }
    return false;
}`,"org.apache.tomcat.util.http.LegacyCookieProcessor.getForwardSlashIsSeparator_":
 `public boolean getForwardSlashIsSeparator() {
    return httpSeparatorFlags.get('/');
}`,"org.apache.tomcat.util.http.TestCookieProcessorGeneration.v1TestMaxAgeNegative_":
 `@Test
public void v1TestMaxAgeNegative() {
    doV1TestMaxAge(-100, "foo=bar; Version=1", "foo=bar");
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
}`,"jakarta.servlet.http.RFC6265Validator.<init>_":
 ``,"org.apache.tomcat.util.http.LegacyCookieProcessor.setAlwaysAddExpires_boolean":
 `public void setAlwaysAddExpires(boolean alwaysAddExpires) {
    this.alwaysAddExpires = alwaysAddExpires;
}`,"org.apache.tomcat.util.http.TestCookieProcessorGeneration.doTest_Cookie_CookieProcessor_String":
 `private void doTest(Cookie cookie, CookieProcessor cookieProcessor, String expected) {
    if (expected == null) {
        IllegalArgumentException e = null;
        try {
            cookieProcessor.generateHeader(cookie, null);
        } catch (IllegalArgumentException iae) {
            e = iae;
        }
        Assert.assertNotNull("Failed to throw IAE", e);
    } else {
        if (cookieProcessor instanceof Rfc6265CookieProcessor && cookie.getMaxAge() > 0) {
            // Expires attribute will depend on time cookie is generated so
            // use a modified test
            Assert.assertTrue(cookieProcessor.generateHeader(cookie, null).startsWith(expected));
        } else {
            Assert.assertEquals(expected, cookieProcessor.generateHeader(cookie, null));
        }
    }
}`,"jakarta.servlet.http.Cookie.getComment_":
 `/**
 * Returns the comment describing the purpose of this cookie, or
 * <code>null</code> if the cookie has no comment.
 *
 * @return a <code>String</code> containing the comment, or
 *         <code>null</code> if none
 * @see #setComment
 */
public String getComment() {
    return comment;
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
}`,"org.apache.tomcat.util.http.LegacyCookieProcessor.isHttpSeparator_char":
 `private boolean isHttpSeparator(final char c) {
    if (c < 0x20 || c >= 0x7f) {
        if (c != 0x09) {
            throw new IllegalArgumentException("Control character in cookie value or attribute.");
        }
    }
    return httpSeparatorFlags.get(c);
}`,"jakarta.servlet.http.Cookie.getMaxAge_":
 `/**
 * Returns the maximum age of the cookie, specified in seconds, By default,
 * <code>-1</code> indicating the cookie will persist until browser
 * shutdown.
 *
 * @return an integer specifying the maximum age of the cookie in seconds; if
 *         negative, means the cookie persists until browser shutdown
 * @see #setMaxAge
 */
public int getMaxAge() {
    return maxAge;
}`,"org.apache.tomcat.util.http.Rfc6265CookieProcessor.generateHeader_Cookie_HttpServletRequest":
 `@Override
public String generateHeader(jakarta.servlet.http.Cookie cookie, HttpServletRequest request) {
    // Can't use StringBuilder due to DateFormat
    StringBuffer header = new StringBuffer();
    // TODO: Name validation takes place in Cookie and cannot be configured
    // per Context. Moving it to here would allow per Context config
    // but delay validation until the header is generated. However,
    // the spec requires an IllegalArgumentException on Cookie
    // generation.
    header.append(cookie.getName());
    header.append('=');
    String value = cookie.getValue();
    if (value != null && value.length() > 0) {
        validateCookieValue(value);
        header.append(value);
    }
    // RFC 6265 prefers Max-Age to Expires but... (see below)
    int maxAge = cookie.getMaxAge();
    if (maxAge > -1) {
        // Negative Max-Age is equivalent to no Max-Age
        header.append("; Max-Age=");
        header.append(maxAge);
        // Microsoft IE and Microsoft Edge don't understand Max-Age so send
        // expires as well. Without this, persistent cookies fail with those
        // browsers. See http://tomcat.markmail.org/thread/g6sipbofsjossacn
        // Wdy, DD-Mon-YY HH:MM:SS GMT ( Expires Netscape format )
        header.append("; Expires=");
        // To expire immediately we need to set the time in past
        if (maxAge == 0) {
            header.append(ANCIENT_DATE);
        } else {
            COOKIE_DATE_FORMAT.get().format(new Date(System.currentTimeMillis() + maxAge * 1000L), header, new FieldPosition(0));
        }
    }
    String domain = cookie.getDomain();
    if (domain != null && domain.length() > 0) {
        validateDomain(domain);
        header.append("; Domain=");
        header.append(domain);
    }
    String path = cookie.getPath();
    if (path != null && path.length() > 0) {
        validatePath(path);
        header.append("; Path=");
        header.append(path);
    }
    if (cookie.getSecure()) {
        header.append("; Secure");
    }
    if (cookie.isHttpOnly()) {
        header.append("; HttpOnly");
    }
    SameSiteCookies sameSiteCookiesValue = getSameSiteCookies();
    if (!sameSiteCookiesValue.equals(SameSiteCookies.UNSET)) {
        header.append("; SameSite=");
        header.append(sameSiteCookiesValue.getValue());
    }
    return header.toString();
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
}`,"org.apache.tomcat.util.http.LegacyCookieProcessor.<init>_":
 `public LegacyCookieProcessor() {
    // BitSet elements will default to false
    for (char c : HTTP_SEPARATORS) {
        httpSeparatorFlags.set(c);
    }
    boolean b = STRICT_SERVLET_COMPLIANCE;
    if (b) {
        httpSeparatorFlags.set('/');
    }
    String separators;
    if (getAllowHttpSepsInV0()) {
        // comma, semi-colon and space as defined by netscape
        separators = ",; ";
    } else {
        // separators as defined by RFC2616
        separators = "()<>@,;:\\\"/[]?={} \t";
    }
    // all CHARs except CTLs or separators are allowed without quoting
    allowedWithoutQuotes.set(0x20, 0x7f);
    for (char ch : separators.toCharArray()) {
        allowedWithoutQuotes.clear(ch);
    }
    /**
     * Some browsers (e.g. IE6 and IE7) do not handle quoted Path values even
     * when Version is set to 1. To allow for this, we support a property
     * FWD_SLASH_IS_SEPARATOR which, when false, means a '/' character will not
     * be treated as a separator, potentially avoiding quoting and the ensuing
     * side effect of having the cookie upgraded to version 1.
     *
     * For now, we apply this rule globally rather than just to the Path attribute.
     */
    if (!getAllowHttpSepsInV0() && !getForwardSlashIsSeparator()) {
        allowedWithoutQuotes.set('/');
    }
}`,"org.apache.tomcat.util.http.TestCookieProcessorGeneration.doTest_Cookie_CookieProcessor_String_CookieProcessor_String":
 `private void doTest(Cookie cookie, CookieProcessor legacy, String expectedLegacy, CookieProcessor rfc6265, String expectedRfc6265) {
    doTest(cookie, legacy, expectedLegacy);
    doTest(cookie, rfc6265, expectedRfc6265);
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
}`,"jakarta.servlet.http.Cookie.setMaxAge_int":
 `/**
 * Sets the maximum age of the cookie in seconds.
 * <p>
 * A positive value indicates that the cookie will expire after that many
 * seconds have passed. Note that the value is the <i>maximum</i> age when
 * the cookie will expire, not the cookie's current age.
 * <p>
 * A negative value means that the cookie is not stored persistently and
 * will be deleted when the Web browser exits. A zero value causes the
 * cookie to be deleted.
 *
 * @param expiry
 *            an integer specifying the maximum age of the cookie in
 *            seconds; if negative, means the cookie is not stored; if zero,
 *            deletes the cookie
 * @see #getMaxAge
 */
public void setMaxAge(int expiry) {
    maxAge = expiry;
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
}`,"jakarta.servlet.http.Cookie.isHttpOnly_":
 `/**
 * Gets the flag that controls if this cookie will be hidden from scripts on
 * the client side.
 *
 * @return  <code>true</code> if the cookie is hidden from scripts, else
 *          <code>false</code>
 * @since Servlet 3.0
 */
public boolean isHttpOnly() {
    return httpOnly;
}`,"jakarta.servlet.http.CookieNameValidator.validate_String":
 ``,"org.apache.tomcat.util.http.Rfc6265CookieProcessor.validateCookieValue_String":
 `private void validateCookieValue(String value) {
    int start = 0;
    int end = value.length();
    if (end > 1 && value.charAt(0) == '"' && value.charAt(end - 1) == '"') {
        start = 1;
        end--;
    }
    char[] chars = value.toCharArray();
    for (int i = start; i < end; i++) {
        char c = chars[i];
        if (c < 0x21 || c == 0x22 || c == 0x2c || c == 0x3b || c == 0x5c || c == 0x7f) {
            throw new IllegalArgumentException(sm.getString("rfc6265CookieProcessor.invalidCharInValue", Integer.toString(c)));
        }
    }
}`,"org.apache.tomcat.util.http.TestCookieProcessorGeneration.doV1TestMaxAge_int_String_String":
 `private void doV1TestMaxAge(int age, String expectedLegacy, String expectedRfc6265) {
    LegacyCookieProcessor legacy = new LegacyCookieProcessor();
    legacy.setAlwaysAddExpires(false);
    Cookie cookie = new Cookie("foo", "bar");
    cookie.setVersion(1);
    cookie.setMaxAge(age);
    doTest(cookie, legacy, expectedLegacy, new Rfc6265CookieProcessor(), expectedRfc6265);
}`,"jakarta.servlet.http.Cookie.setVersion_int":
 `/**
 * Sets the version of the cookie protocol this cookie complies with.
 * Version 0 complies with the original Netscape cookie specification.
 * Version 1 complies with RFC 2109.
 * <p>
 * Since RFC 2109 is still somewhat new, consider version 1 as experimental;
 * do not use it yet on production sites.
 *
 * @param v
 *            0 if the cookie should comply with the original Netscape
 *            specification; 1 if the cookie should comply with RFC 2109
 * @see #getVersion
 */
public void setVersion(int v) {
    version = v;
}`,"org.apache.juli.logging.DirectJDKLog.getInstance_String":
 `static Log getInstance(String name) {
    return new DirectJDKLog(name);
}`,"org.apache.juli.logging.DirectJDKLog.<init>_String":
 `public DirectJDKLog(String name) {
    logger = Logger.getLogger(name);
}`,"jakarta.servlet.http.Cookie.getVersion_":
 `/**
 * Returns the version of the protocol this cookie complies with. Version 1
 * complies with RFC 2109, and version 0 complies with the original cookie
 * specification drafted by Netscape. Cookies provided by a browser use and
 * identify the browser's cookie version.
 *
 * @return 0 if the cookie complies with the original Netscape specification;
 *         1 if the cookie complies with RFC 2109
 * @see #setVersion
 */
public int getVersion() {
    return version;
}`,"org.apache.juli.logging.LogFactory.getInstance_String":
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
}`,"jakarta.servlet.http.Cookie.getDomain_":
 `/**
 * Returns the domain name set for this cookie. The form of the domain name
 * is set by RFC 2109.
 *
 * @return a <code>String</code> containing the domain name
 * @see #setDomain
 */
public String getDomain() {
    return domain;
}`,"org.apache.tomcat.util.http.LegacyCookieProcessor.generateHeader_Cookie_HttpServletRequest":
 `@Override
public String generateHeader(Cookie cookie, HttpServletRequest request) {
    /*
         * The spec allows some latitude on when to send the version attribute
         * with a Set-Cookie header. To be nice to clients, we'll make sure the
         * version attribute is first. That means checking the various things
         * that can cause us to switch to a v1 cookie first.
         *
         * Note that by checking for tokens we will also throw an exception if a
         * control character is encountered.
         */
    int version = cookie.getVersion();
    String value = cookie.getValue();
    String path = cookie.getPath();
    String domain = cookie.getDomain();
    String comment = cookie.getComment();
    if (version == 0) {
        // Check for the things that require a v1 cookie
        if (needsQuotes(value, 0) || comment != null || needsQuotes(path, 0) || needsQuotes(domain, 0)) {
            version = 1;
        }
    }
    // Now build the cookie header
    // can't use StringBuilder due to DateFormat
    StringBuffer buf = new StringBuffer();
    // Just use the name supplied in the Cookie
    buf.append(cookie.getName());
    buf.append('=');
    // Value
    maybeQuote(buf, value, version);
    // Add version 1 specific information
    if (version == 1) {
        // Version=1 ... required
        buf.append("; Version=1");
        // Comment=comment
        if (comment != null) {
            buf.append("; Comment=");
            maybeQuote(buf, comment, version);
        }
    }
    // Add domain information, if present
    if (domain != null) {
        buf.append("; Domain=");
        maybeQuote(buf, domain, version);
    }
    // Max-Age=secs ... or use old "Expires" format
    int maxAge = cookie.getMaxAge();
    if (maxAge >= 0) {
        if (version > 0) {
            buf.append("; Max-Age=");
            buf.append(maxAge);
        }
        // IE6, IE7 and possibly other browsers don't understand Max-Age.
        // They do understand Expires, even with V1 cookies!
        if (version == 0 || getAlwaysAddExpires()) {
            // Wdy, DD-Mon-YY HH:MM:SS GMT ( Expires Netscape format )
            buf.append("; Expires=");
            // To expire immediately we need to set the time in past
            if (maxAge == 0) {
                buf.append(ANCIENT_DATE);
            } else {
                COOKIE_DATE_FORMAT.get().format(new Date(System.currentTimeMillis() + maxAge * 1000L), buf, new FieldPosition(0));
            }
        }
    }
    // Path=path
    if (path != null) {
        buf.append("; Path=");
        maybeQuote(buf, path, version);
    }
    // Secure
    if (cookie.getSecure()) {
        buf.append("; Secure");
    }
    // HttpOnly
    if (cookie.isHttpOnly()) {
        buf.append("; HttpOnly");
    }
    SameSiteCookies sameSiteCookiesValue = getSameSiteCookies();
    if (!sameSiteCookiesValue.equals(SameSiteCookies.UNSET)) {
        buf.append("; SameSite=");
        buf.append(sameSiteCookiesValue.getValue());
    }
    return buf.toString();
}`,"org.apache.tomcat.util.http.Rfc6265CookieProcessor.<init>_":
 ``,"jakarta.servlet.http.Cookie.getName_":
 `/**
 * Returns the name of the cookie. The name cannot be changed after
 * creation.
 *
 * @return a <code>String</code> specifying the cookie's name
 */
public String getName() {
    return name;
}`,"org.apache.tomcat.util.http.LegacyCookieProcessor.getAllowHttpSepsInV0_":
 `public boolean getAllowHttpSepsInV0() {
    return allowHttpSepsInV0;
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
}`,"org.apache.tomcat.util.http.LegacyCookieProcessor.maybeQuote_StringBuffer_String_int":
 `private void maybeQuote(StringBuffer buf, String value, int version) {
    if (value == null || value.length() == 0) {
        buf.append("\"\"");
    } else if (alreadyQuoted(value)) {
        buf.append('"');
        escapeDoubleQuotes(buf, value, 1, value.length() - 1);
        buf.append('"');
    } else if (needsQuotes(value, version)) {
        buf.append('"');
        escapeDoubleQuotes(buf, value, 0, value.length());
        buf.append('"');
    } else {
        buf.append(value);
    }
}`,"jakarta.servlet.http.Cookie.getSecure_":
 `/**
 * Returns <code>true</code> if the browser is sending cookies only over a
 * secure protocol, or <code>false</code> if the browser can send cookies
 * using any protocol.
 *
 * @return <code>true</code> if the browser uses a secure protocol;
 *         otherwise, <code>true</code>
 * @see #setSecure
 */
public boolean getSecure() {
    return secure;
}`,"org.apache.tomcat.util.log.UserDataHelper.<init>_Log":
 `public UserDataHelper(Log log) {
    this.log = log;
    Config tempConfig;
    String configString = System.getProperty("org.apache.juli.logging.UserDataHelper.CONFIG");
    if (configString == null) {
        tempConfig = Config.INFO_THEN_DEBUG;
    } else {
        try {
            tempConfig = Config.valueOf(configString);
        } catch (IllegalArgumentException iae) {
            // Ignore - use default
            tempConfig = Config.INFO_THEN_DEBUG;
        }
    }
    // Default suppression time of 1 day.
    suppressionTime = Integer.getInteger("org.apache.juli.logging.UserDataHelper.SUPPRESSION_TIME", 60 * 60 * 24).intValue() * 1000L;
    if (suppressionTime == 0) {
        tempConfig = Config.INFO_ALL;
    }
    config = tempConfig;
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
}`,"org.apache.tomcat.util.http.LegacyCookieProcessor.alreadyQuoted_String":
 `private static boolean alreadyQuoted(String value) {
    return value.length() >= 2 && value.charAt(0) == '\"' && value.charAt(value.length() - 1) == '\"';
}`,"org.apache.tomcat.util.http.SameSiteCookies.<init>_String":
 `SameSiteCookies(String value) {
    this.value = value;
}`,"jakarta.servlet.http.CookieNameValidator.isToken_String":
 ``,"jakarta.servlet.http.Cookie.getValue_":
 `/**
 * Returns the value of the cookie.
 *
 * @return a <code>String</code> containing the cookie's present value
 * @see #setValue
 * @see Cookie
 */
public String getValue() {
    return value;
}`,"jakarta.servlet.http.Cookie.getPath_":
 `/**
 * Returns the path on the server to which the browser returns this cookie.
 * The cookie is visible to all subpaths on the server.
 *
 * @return a <code>String</code> specifying a path that contains a servlet
 *         name, for example, <i>/catalog</i>
 * @see #setPath
 */
public String getPath() {
    return path;
}`,},
};
var treeData = [
{
  "call" : "org.apache.tomcat.util.http.TestCookieProcessorGeneration#v1TestMaxAgeNegative",
  "kiekerPattern" : "public void org.apache.tomcat.util.http.TestCookieProcessorGeneration.v1TestMaxAgeNegative()",
  "otherKiekerPattern" : null,
  "module" : "",
  "name" : "org.apache.tomcat.util.http.TestCookieProcessorGeneration#v1TestMaxAgeNegative",
  "key" : "org.apache.tomcat.util.http.TestCookieProcessorGeneration.v1TestMaxAgeNegative_",
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
    "call" : "org.apache.tomcat.util.http.TestCookieProcessorGeneration#doV1TestMaxAge",
    "kiekerPattern" : "private void org.apache.tomcat.util.http.TestCookieProcessorGeneration.doV1TestMaxAge(int,java.lang.String,java.lang.String)",
    "otherKiekerPattern" : null,
    "module" : "",
    "name" : "org.apache.tomcat.util.http.TestCookieProcessorGeneration#doV1TestMaxAge",
    "key" : "org.apache.tomcat.util.http.TestCookieProcessorGeneration.doV1TestMaxAge_int_String_String",
    "otherKey" : null,
    "parent" : "org.apache.tomcat.util.http.TestCookieProcessorGeneration#v1TestMaxAgeNegative",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ {
      "call" : "org.apache.juli.logging.LogFactory#<init>",
      "kiekerPattern" : "private new org.apache.juli.logging.LogFactory.<init>()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "org.apache.juli.logging.LogFactory#<init>",
      "key" : "org.apache.juli.logging.LogFactory.<init>_",
      "otherKey" : null,
      "parent" : "org.apache.tomcat.util.http.TestCookieProcessorGeneration#doV1TestMaxAge",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.apache.juli.logging.LogFactory#getLog",
      "kiekerPattern" : "public static org.apache.juli.logging.Log org.apache.juli.logging.LogFactory.getLog(java.lang.Class)",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "org.apache.juli.logging.LogFactory#getLog",
      "key" : "org.apache.juli.logging.LogFactory.getLog_Class",
      "otherKey" : null,
      "parent" : "org.apache.tomcat.util.http.TestCookieProcessorGeneration#doV1TestMaxAge",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.apache.juli.logging.LogFactory#getFactory",
        "kiekerPattern" : "public static org.apache.juli.logging.LogFactory org.apache.juli.logging.LogFactory.getFactory()",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "org.apache.juli.logging.LogFactory#getFactory",
        "key" : "org.apache.juli.logging.LogFactory.getFactory_",
        "otherKey" : null,
        "parent" : "org.apache.juli.logging.LogFactory#getLog",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.apache.juli.logging.LogFactory#getInstance",
        "kiekerPattern" : "public org.apache.juli.logging.Log org.apache.juli.logging.LogFactory.getInstance(java.lang.Class)",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "org.apache.juli.logging.LogFactory#getInstance",
        "key" : "org.apache.juli.logging.LogFactory.getInstance_Class",
        "otherKey" : null,
        "parent" : "org.apache.juli.logging.LogFactory#getLog",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.apache.juli.logging.LogFactory#getInstance",
          "kiekerPattern" : "public org.apache.juli.logging.Log org.apache.juli.logging.LogFactory.getInstance(java.lang.String)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.juli.logging.LogFactory#getInstance",
          "key" : "org.apache.juli.logging.LogFactory.getInstance_String",
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
            "call" : "org.apache.juli.logging.DirectJDKLog#getInstance",
            "kiekerPattern" : "static org.apache.juli.logging.DirectJDKLog org.apache.juli.logging.DirectJDKLog.getInstance(java.lang.String)",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.juli.logging.DirectJDKLog#getInstance",
            "key" : "org.apache.juli.logging.DirectJDKLog.getInstance_String",
            "otherKey" : null,
            "parent" : "org.apache.juli.logging.LogFactory#getInstance",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ {
              "call" : "org.apache.juli.logging.DirectJDKLog#<init>",
              "kiekerPattern" : "public new org.apache.juli.logging.DirectJDKLog.<init>(java.lang.String)",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.juli.logging.DirectJDKLog#<init>",
              "key" : "org.apache.juli.logging.DirectJDKLog.<init>_String",
              "otherKey" : null,
              "parent" : "org.apache.juli.logging.DirectJDKLog#getInstance",
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
      } ]
    }, {
      "call" : "org.apache.tomcat.util.log.UserDataHelper#<init>",
      "kiekerPattern" : "public new org.apache.tomcat.util.log.UserDataHelper.<init>(org.apache.juli.logging.Log)",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "org.apache.tomcat.util.log.UserDataHelper#<init>",
      "key" : "org.apache.tomcat.util.log.UserDataHelper.<init>_Log",
      "otherKey" : null,
      "parent" : "org.apache.tomcat.util.http.TestCookieProcessorGeneration#doV1TestMaxAge",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.apache.tomcat.util.res.StringManager#getManager",
      "kiekerPattern" : "public static final org.apache.tomcat.util.res.StringManager org.apache.tomcat.util.res.StringManager.getManager(java.lang.String)",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "org.apache.tomcat.util.res.StringManager#getManager",
      "key" : "org.apache.tomcat.util.res.StringManager.getManager_String",
      "otherKey" : null,
      "parent" : "org.apache.tomcat.util.http.TestCookieProcessorGeneration#doV1TestMaxAge",
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
        "name" : "org.apache.tomcat.util.res.StringManager#getManager",
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
          "name" : "org.apache.tomcat.util.res.StringManager#<init>",
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
    }, {
      "call" : "org.apache.tomcat.util.http.SameSiteCookies#<init>",
      "kiekerPattern" : "new org.apache.tomcat.util.http.SameSiteCookies.<init>(java.lang.String)",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "org.apache.tomcat.util.http.SameSiteCookies#<init>",
      "key" : "org.apache.tomcat.util.http.SameSiteCookies.<init>_String",
      "otherKey" : null,
      "parent" : "org.apache.tomcat.util.http.TestCookieProcessorGeneration#doV1TestMaxAge",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.apache.tomcat.util.res.StringManager#getManager",
      "kiekerPattern" : "public static final org.apache.tomcat.util.res.StringManager org.apache.tomcat.util.res.StringManager.getManager(java.lang.Class)",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "org.apache.tomcat.util.res.StringManager#getManager",
      "key" : "org.apache.tomcat.util.res.StringManager.getManager_Class",
      "otherKey" : null,
      "parent" : "org.apache.tomcat.util.http.TestCookieProcessorGeneration#doV1TestMaxAge",
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
        "name" : "org.apache.tomcat.util.res.StringManager#getManager",
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
          "name" : "org.apache.tomcat.util.res.StringManager#getManager",
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
          "children" : [ ]
        } ]
      } ]
    }, {
      "call" : "org.apache.tomcat.util.http.CookieProcessorBase#<init>",
      "kiekerPattern" : "public new org.apache.tomcat.util.http.CookieProcessorBase.<init>()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "org.apache.tomcat.util.http.CookieProcessorBase#<init>",
      "key" : "org.apache.tomcat.util.http.CookieProcessorBase.<init>_",
      "otherKey" : null,
      "parent" : "org.apache.tomcat.util.http.TestCookieProcessorGeneration#doV1TestMaxAge",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.apache.tomcat.util.http.LegacyCookieProcessor#<init>",
      "kiekerPattern" : "public new org.apache.tomcat.util.http.LegacyCookieProcessor.<init>()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "org.apache.tomcat.util.http.LegacyCookieProcessor#<init>",
      "key" : "org.apache.tomcat.util.http.LegacyCookieProcessor.<init>_",
      "otherKey" : null,
      "parent" : "org.apache.tomcat.util.http.TestCookieProcessorGeneration#doV1TestMaxAge",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.apache.tomcat.util.http.LegacyCookieProcessor#getAllowHttpSepsInV0",
        "kiekerPattern" : "public boolean org.apache.tomcat.util.http.LegacyCookieProcessor.getAllowHttpSepsInV0()",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "org.apache.tomcat.util.http.LegacyCookieProcessor#getAllowHttpSepsInV0",
        "key" : "org.apache.tomcat.util.http.LegacyCookieProcessor.getAllowHttpSepsInV0_",
        "otherKey" : null,
        "parent" : "org.apache.tomcat.util.http.LegacyCookieProcessor#<init>",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.apache.tomcat.util.http.LegacyCookieProcessor#getForwardSlashIsSeparator",
        "kiekerPattern" : "public boolean org.apache.tomcat.util.http.LegacyCookieProcessor.getForwardSlashIsSeparator()",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "org.apache.tomcat.util.http.LegacyCookieProcessor#getForwardSlashIsSeparator",
        "key" : "org.apache.tomcat.util.http.LegacyCookieProcessor.getForwardSlashIsSeparator_",
        "otherKey" : null,
        "parent" : "org.apache.tomcat.util.http.LegacyCookieProcessor#<init>",
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
      "call" : "org.apache.tomcat.util.http.LegacyCookieProcessor#setAlwaysAddExpires",
      "kiekerPattern" : "public void org.apache.tomcat.util.http.LegacyCookieProcessor.setAlwaysAddExpires(boolean)",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "org.apache.tomcat.util.http.LegacyCookieProcessor#setAlwaysAddExpires",
      "key" : "org.apache.tomcat.util.http.LegacyCookieProcessor.setAlwaysAddExpires_boolean",
      "otherKey" : null,
      "parent" : "org.apache.tomcat.util.http.TestCookieProcessorGeneration#doV1TestMaxAge",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "jakarta.servlet.http.CookieNameValidator#<init>",
      "kiekerPattern" : "protected new jakarta.servlet.http.CookieNameValidator.<init>(java.lang.String)",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "jakarta.servlet.http.CookieNameValidator#<init>",
      "key" : "jakarta.servlet.http.CookieNameValidator.<init>_String",
      "otherKey" : null,
      "parent" : "org.apache.tomcat.util.http.TestCookieProcessorGeneration#doV1TestMaxAge",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "jakarta.servlet.http.RFC6265Validator#<init>",
      "kiekerPattern" : "new jakarta.servlet.http.RFC6265Validator.<init>()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "jakarta.servlet.http.RFC6265Validator#<init>",
      "key" : "jakarta.servlet.http.RFC6265Validator.<init>_",
      "otherKey" : null,
      "parent" : "org.apache.tomcat.util.http.TestCookieProcessorGeneration#doV1TestMaxAge",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "jakarta.servlet.http.Cookie#<init>",
      "kiekerPattern" : "public new jakarta.servlet.http.Cookie.<init>(java.lang.String,java.lang.String)",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "jakarta.servlet.http.Cookie#<init>",
      "key" : "jakarta.servlet.http.Cookie.<init>_String_String",
      "otherKey" : null,
      "parent" : "org.apache.tomcat.util.http.TestCookieProcessorGeneration#doV1TestMaxAge",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "jakarta.servlet.http.CookieNameValidator#validate",
        "kiekerPattern" : "void jakarta.servlet.http.CookieNameValidator.validate(java.lang.String)",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "jakarta.servlet.http.CookieNameValidator#validate",
        "key" : "jakarta.servlet.http.CookieNameValidator.validate_String",
        "otherKey" : null,
        "parent" : "jakarta.servlet.http.Cookie#<init>",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "jakarta.servlet.http.CookieNameValidator#isToken",
          "kiekerPattern" : "private boolean jakarta.servlet.http.CookieNameValidator.isToken(java.lang.String)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "jakarta.servlet.http.CookieNameValidator#isToken",
          "key" : "jakarta.servlet.http.CookieNameValidator.isToken_String",
          "otherKey" : null,
          "parent" : "jakarta.servlet.http.CookieNameValidator#validate",
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
      "call" : "jakarta.servlet.http.Cookie#setVersion",
      "kiekerPattern" : "public void jakarta.servlet.http.Cookie.setVersion(int)",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "jakarta.servlet.http.Cookie#setVersion",
      "key" : "jakarta.servlet.http.Cookie.setVersion_int",
      "otherKey" : null,
      "parent" : "org.apache.tomcat.util.http.TestCookieProcessorGeneration#doV1TestMaxAge",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "jakarta.servlet.http.Cookie#setMaxAge",
      "kiekerPattern" : "public void jakarta.servlet.http.Cookie.setMaxAge(int)",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "jakarta.servlet.http.Cookie#setMaxAge",
      "key" : "jakarta.servlet.http.Cookie.setMaxAge_int",
      "otherKey" : null,
      "parent" : "org.apache.tomcat.util.http.TestCookieProcessorGeneration#doV1TestMaxAge",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.apache.tomcat.util.http.Rfc6265CookieProcessor#<init>",
      "kiekerPattern" : "public new org.apache.tomcat.util.http.Rfc6265CookieProcessor.<init>()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "org.apache.tomcat.util.http.Rfc6265CookieProcessor#<init>",
      "key" : "org.apache.tomcat.util.http.Rfc6265CookieProcessor.<init>_",
      "otherKey" : null,
      "parent" : "org.apache.tomcat.util.http.TestCookieProcessorGeneration#doV1TestMaxAge",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.apache.tomcat.util.http.TestCookieProcessorGeneration#doTest",
      "kiekerPattern" : "private void org.apache.tomcat.util.http.TestCookieProcessorGeneration.doTest(jakarta.servlet.http.Cookie,org.apache.tomcat.util.http.CookieProcessor,java.lang.String,org.apache.tomcat.util.http.CookieProcessor,java.lang.String)",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "org.apache.tomcat.util.http.TestCookieProcessorGeneration#doTest",
      "key" : "org.apache.tomcat.util.http.TestCookieProcessorGeneration.doTest_Cookie_CookieProcessor_String_CookieProcessor_String",
      "otherKey" : null,
      "parent" : "org.apache.tomcat.util.http.TestCookieProcessorGeneration#doV1TestMaxAge",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.apache.tomcat.util.http.TestCookieProcessorGeneration#doTest",
        "kiekerPattern" : "private void org.apache.tomcat.util.http.TestCookieProcessorGeneration.doTest(jakarta.servlet.http.Cookie,org.apache.tomcat.util.http.CookieProcessor,java.lang.String)",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "org.apache.tomcat.util.http.TestCookieProcessorGeneration#doTest",
        "key" : "org.apache.tomcat.util.http.TestCookieProcessorGeneration.doTest_Cookie_CookieProcessor_String",
        "otherKey" : null,
        "parent" : "org.apache.tomcat.util.http.TestCookieProcessorGeneration#doTest",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.apache.tomcat.util.http.LegacyCookieProcessor#generateHeader",
          "kiekerPattern" : "public java.lang.String org.apache.tomcat.util.http.LegacyCookieProcessor.generateHeader(jakarta.servlet.http.Cookie,jakarta.servlet.http.HttpServletRequest)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.tomcat.util.http.LegacyCookieProcessor#generateHeader",
          "key" : "org.apache.tomcat.util.http.LegacyCookieProcessor.generateHeader_Cookie_HttpServletRequest",
          "otherKey" : null,
          "parent" : "org.apache.tomcat.util.http.TestCookieProcessorGeneration#doTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "jakarta.servlet.http.Cookie#getVersion",
            "kiekerPattern" : "public int jakarta.servlet.http.Cookie.getVersion()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "jakarta.servlet.http.Cookie#getVersion",
            "key" : "jakarta.servlet.http.Cookie.getVersion_",
            "otherKey" : null,
            "parent" : "org.apache.tomcat.util.http.LegacyCookieProcessor#generateHeader",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "jakarta.servlet.http.Cookie#getValue",
            "kiekerPattern" : "public java.lang.String jakarta.servlet.http.Cookie.getValue()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "jakarta.servlet.http.Cookie#getValue",
            "key" : "jakarta.servlet.http.Cookie.getValue_",
            "otherKey" : null,
            "parent" : "org.apache.tomcat.util.http.LegacyCookieProcessor#generateHeader",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "jakarta.servlet.http.Cookie#getPath",
            "kiekerPattern" : "public java.lang.String jakarta.servlet.http.Cookie.getPath()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "jakarta.servlet.http.Cookie#getPath",
            "key" : "jakarta.servlet.http.Cookie.getPath_",
            "otherKey" : null,
            "parent" : "org.apache.tomcat.util.http.LegacyCookieProcessor#generateHeader",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "jakarta.servlet.http.Cookie#getDomain",
            "kiekerPattern" : "public java.lang.String jakarta.servlet.http.Cookie.getDomain()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "jakarta.servlet.http.Cookie#getDomain",
            "key" : "jakarta.servlet.http.Cookie.getDomain_",
            "otherKey" : null,
            "parent" : "org.apache.tomcat.util.http.LegacyCookieProcessor#generateHeader",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "jakarta.servlet.http.Cookie#getComment",
            "kiekerPattern" : "public java.lang.String jakarta.servlet.http.Cookie.getComment()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "jakarta.servlet.http.Cookie#getComment",
            "key" : "jakarta.servlet.http.Cookie.getComment_",
            "otherKey" : null,
            "parent" : "org.apache.tomcat.util.http.LegacyCookieProcessor#generateHeader",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "jakarta.servlet.http.Cookie#getName",
            "kiekerPattern" : "public java.lang.String jakarta.servlet.http.Cookie.getName()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "jakarta.servlet.http.Cookie#getName",
            "key" : "jakarta.servlet.http.Cookie.getName_",
            "otherKey" : null,
            "parent" : "org.apache.tomcat.util.http.LegacyCookieProcessor#generateHeader",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.apache.tomcat.util.http.LegacyCookieProcessor#maybeQuote",
            "kiekerPattern" : "private void org.apache.tomcat.util.http.LegacyCookieProcessor.maybeQuote(java.lang.StringBuffer,java.lang.String,int)",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.tomcat.util.http.LegacyCookieProcessor#maybeQuote",
            "key" : "org.apache.tomcat.util.http.LegacyCookieProcessor.maybeQuote_StringBuffer_String_int",
            "otherKey" : null,
            "parent" : "org.apache.tomcat.util.http.LegacyCookieProcessor#generateHeader",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ {
              "call" : "org.apache.tomcat.util.http.LegacyCookieProcessor#alreadyQuoted",
              "kiekerPattern" : "private static boolean org.apache.tomcat.util.http.LegacyCookieProcessor.alreadyQuoted(java.lang.String)",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.tomcat.util.http.LegacyCookieProcessor#alreadyQuoted",
              "key" : "org.apache.tomcat.util.http.LegacyCookieProcessor.alreadyQuoted_String",
              "otherKey" : null,
              "parent" : "org.apache.tomcat.util.http.LegacyCookieProcessor#maybeQuote",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            }, {
              "call" : "org.apache.tomcat.util.http.LegacyCookieProcessor#needsQuotes",
              "kiekerPattern" : "private boolean org.apache.tomcat.util.http.LegacyCookieProcessor.needsQuotes(java.lang.String,int)",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.tomcat.util.http.LegacyCookieProcessor#needsQuotes",
              "key" : "org.apache.tomcat.util.http.LegacyCookieProcessor.needsQuotes_String_int",
              "otherKey" : null,
              "parent" : "org.apache.tomcat.util.http.LegacyCookieProcessor#maybeQuote",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ {
                "call" : "org.apache.tomcat.util.http.LegacyCookieProcessor#alreadyQuoted",
                "kiekerPattern" : "private static boolean org.apache.tomcat.util.http.LegacyCookieProcessor.alreadyQuoted(java.lang.String)",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "org.apache.tomcat.util.http.LegacyCookieProcessor#alreadyQuoted",
                "key" : "org.apache.tomcat.util.http.LegacyCookieProcessor.alreadyQuoted_String",
                "otherKey" : null,
                "parent" : "org.apache.tomcat.util.http.LegacyCookieProcessor#needsQuotes",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              }, {
                "call" : "org.apache.tomcat.util.http.LegacyCookieProcessor#isHttpSeparator",
                "kiekerPattern" : "private boolean org.apache.tomcat.util.http.LegacyCookieProcessor.isHttpSeparator(char)",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "org.apache.tomcat.util.http.LegacyCookieProcessor#isHttpSeparator",
                "key" : "org.apache.tomcat.util.http.LegacyCookieProcessor.isHttpSeparator_char",
                "otherKey" : null,
                "parent" : "org.apache.tomcat.util.http.LegacyCookieProcessor#needsQuotes",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              } ]
            } ]
          }, {
            "call" : "jakarta.servlet.http.Cookie#getMaxAge",
            "kiekerPattern" : "public int jakarta.servlet.http.Cookie.getMaxAge()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "jakarta.servlet.http.Cookie#getMaxAge",
            "key" : "jakarta.servlet.http.Cookie.getMaxAge_",
            "otherKey" : null,
            "parent" : "org.apache.tomcat.util.http.LegacyCookieProcessor#generateHeader",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "jakarta.servlet.http.Cookie#getSecure",
            "kiekerPattern" : "public boolean jakarta.servlet.http.Cookie.getSecure()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "jakarta.servlet.http.Cookie#getSecure",
            "key" : "jakarta.servlet.http.Cookie.getSecure_",
            "otherKey" : null,
            "parent" : "org.apache.tomcat.util.http.LegacyCookieProcessor#generateHeader",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "jakarta.servlet.http.Cookie#isHttpOnly",
            "kiekerPattern" : "public boolean jakarta.servlet.http.Cookie.isHttpOnly()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "jakarta.servlet.http.Cookie#isHttpOnly",
            "key" : "jakarta.servlet.http.Cookie.isHttpOnly_",
            "otherKey" : null,
            "parent" : "org.apache.tomcat.util.http.LegacyCookieProcessor#generateHeader",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.apache.tomcat.util.http.CookieProcessorBase#getSameSiteCookies",
            "kiekerPattern" : "public org.apache.tomcat.util.http.SameSiteCookies org.apache.tomcat.util.http.CookieProcessorBase.getSameSiteCookies()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.tomcat.util.http.CookieProcessorBase#getSameSiteCookies",
            "key" : "org.apache.tomcat.util.http.CookieProcessorBase.getSameSiteCookies_",
            "otherKey" : null,
            "parent" : "org.apache.tomcat.util.http.LegacyCookieProcessor#generateHeader",
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
          "call" : "jakarta.servlet.http.Cookie#getMaxAge",
          "kiekerPattern" : "public int jakarta.servlet.http.Cookie.getMaxAge()",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "jakarta.servlet.http.Cookie#getMaxAge",
          "key" : "jakarta.servlet.http.Cookie.getMaxAge_",
          "otherKey" : null,
          "parent" : "org.apache.tomcat.util.http.TestCookieProcessorGeneration#doTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.tomcat.util.http.Rfc6265CookieProcessor#generateHeader",
          "kiekerPattern" : "public java.lang.String org.apache.tomcat.util.http.Rfc6265CookieProcessor.generateHeader(org.apache.tomcat.util.http.jakarta.servlet.http.Cookie,jakarta.servlet.http.HttpServletRequest)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.tomcat.util.http.Rfc6265CookieProcessor#generateHeader",
          "key" : "org.apache.tomcat.util.http.Rfc6265CookieProcessor.generateHeader_Cookie_HttpServletRequest",
          "otherKey" : null,
          "parent" : "org.apache.tomcat.util.http.TestCookieProcessorGeneration#doTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "jakarta.servlet.http.Cookie#getName",
            "kiekerPattern" : "public java.lang.String jakarta.servlet.http.Cookie.getName()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "jakarta.servlet.http.Cookie#getName",
            "key" : "jakarta.servlet.http.Cookie.getName_",
            "otherKey" : null,
            "parent" : "org.apache.tomcat.util.http.Rfc6265CookieProcessor#generateHeader",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "jakarta.servlet.http.Cookie#getValue",
            "kiekerPattern" : "public java.lang.String jakarta.servlet.http.Cookie.getValue()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "jakarta.servlet.http.Cookie#getValue",
            "key" : "jakarta.servlet.http.Cookie.getValue_",
            "otherKey" : null,
            "parent" : "org.apache.tomcat.util.http.Rfc6265CookieProcessor#generateHeader",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.apache.tomcat.util.http.Rfc6265CookieProcessor#validateCookieValue",
            "kiekerPattern" : "private void org.apache.tomcat.util.http.Rfc6265CookieProcessor.validateCookieValue(java.lang.String)",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.tomcat.util.http.Rfc6265CookieProcessor#validateCookieValue",
            "key" : "org.apache.tomcat.util.http.Rfc6265CookieProcessor.validateCookieValue_String",
            "otherKey" : null,
            "parent" : "org.apache.tomcat.util.http.Rfc6265CookieProcessor#generateHeader",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "jakarta.servlet.http.Cookie#getMaxAge",
            "kiekerPattern" : "public int jakarta.servlet.http.Cookie.getMaxAge()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "jakarta.servlet.http.Cookie#getMaxAge",
            "key" : "jakarta.servlet.http.Cookie.getMaxAge_",
            "otherKey" : null,
            "parent" : "org.apache.tomcat.util.http.Rfc6265CookieProcessor#generateHeader",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "jakarta.servlet.http.Cookie#getDomain",
            "kiekerPattern" : "public java.lang.String jakarta.servlet.http.Cookie.getDomain()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "jakarta.servlet.http.Cookie#getDomain",
            "key" : "jakarta.servlet.http.Cookie.getDomain_",
            "otherKey" : null,
            "parent" : "org.apache.tomcat.util.http.Rfc6265CookieProcessor#generateHeader",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "jakarta.servlet.http.Cookie#getPath",
            "kiekerPattern" : "public java.lang.String jakarta.servlet.http.Cookie.getPath()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "jakarta.servlet.http.Cookie#getPath",
            "key" : "jakarta.servlet.http.Cookie.getPath_",
            "otherKey" : null,
            "parent" : "org.apache.tomcat.util.http.Rfc6265CookieProcessor#generateHeader",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "jakarta.servlet.http.Cookie#getSecure",
            "kiekerPattern" : "public boolean jakarta.servlet.http.Cookie.getSecure()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "jakarta.servlet.http.Cookie#getSecure",
            "key" : "jakarta.servlet.http.Cookie.getSecure_",
            "otherKey" : null,
            "parent" : "org.apache.tomcat.util.http.Rfc6265CookieProcessor#generateHeader",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "jakarta.servlet.http.Cookie#isHttpOnly",
            "kiekerPattern" : "public boolean jakarta.servlet.http.Cookie.isHttpOnly()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "jakarta.servlet.http.Cookie#isHttpOnly",
            "key" : "jakarta.servlet.http.Cookie.isHttpOnly_",
            "otherKey" : null,
            "parent" : "org.apache.tomcat.util.http.Rfc6265CookieProcessor#generateHeader",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.apache.tomcat.util.http.CookieProcessorBase#getSameSiteCookies",
            "kiekerPattern" : "public org.apache.tomcat.util.http.SameSiteCookies org.apache.tomcat.util.http.CookieProcessorBase.getSameSiteCookies()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.tomcat.util.http.CookieProcessorBase#getSameSiteCookies",
            "key" : "org.apache.tomcat.util.http.CookieProcessorBase.getSameSiteCookies_",
            "otherKey" : null,
            "parent" : "org.apache.tomcat.util.http.Rfc6265CookieProcessor#generateHeader",
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
  } ]
}];
// ************** Generate the tree diagram   *****************
var margin = {top: 20, right: 120, bottom: 20, left: 546},
   width = 4176- margin.right - margin.left,
   height = 1190 - margin.top - margin.bottom;
