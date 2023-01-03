if (document.getElementById('testcaseDiv') != null) { 
   document.getElementById('testcaseDiv').innerHTML="Commit: <a href='javascript:fallbackCopyTextToClipboard(\"-commit cf84fb6fd7119de3d7c2607d91ee3f9c4d9959a8 -test org.apache.tomcat.util.net.TestTLSClientHelloExtractor#testInputMalformed02\")'>cf84fb6fd7119de3d7c2607d91ee3f9c4d9959a8</a><br>Test Case: org.apache.tomcat.util.net.TestTLSClientHelloExtractor#testInputMalformed02<br>";
}

var source = {"current":
{
 "org.apache.tomcat.util.net.TLSClientHelloExtractor.isAvailable_ByteBuffer_int":
 `private static boolean isAvailable(ByteBuffer bb, int size) {
    if (bb.remaining() < size) {
        bb.position(bb.limit());
        return false;
    }
    return true;
}`,"org.apache.tomcat.util.net.TLSClientHelloExtractor.isClientHello_ByteBuffer":
 `private static boolean isClientHello(ByteBuffer bb) {
    // Client hello is handshake type 1
    if (bb.get() == 1) {
        return true;
    }
    return false;
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
}`,"org.apache.tomcat.util.net.TestTLSClientHelloExtractor.testInputMalformed02_":
 `@Test(expected = IOException.class)
public void testInputMalformed02() throws IOException {
    ByteBuffer testInput = ByteBuffer.allocate(1024);
    // TLS handshake
    testInput.put((byte) 22);
    // TLS 1.0
    testInput.put((byte) 3);
    testInput.put((byte) 1);
    // Record length 4
    testInput.put((byte) 0);
    testInput.put((byte) 4);
    // Type 1 (client hello)
    testInput.put((byte) 1);
    // Client hello size 0 (correct, but not legal)
    testInput.put((byte) 0);
    testInput.put((byte) 0);
    testInput.put((byte) 0);
    doTestInputNeedRead(testInput);
}`,"org.apache.tomcat.util.net.TLSClientHelloExtractor.skipBytes_ByteBuffer_int":
 `private static void skipBytes(ByteBuffer bb, int size) {
    bb.position(bb.position() + size);
}`,"org.apache.juli.logging.DirectJDKLog.getInstance_String":
 `static Log getInstance(String name) {
    return new DirectJDKLog(name);
}`,"org.apache.juli.logging.DirectJDKLog.<init>_String":
 `public DirectJDKLog(String name) {
    logger = Logger.getLogger(name);
}`,"org.apache.tomcat.util.net.TLSClientHelloExtractor.isAllRecordAvailable_ByteBuffer":
 `private static boolean isAllRecordAvailable(ByteBuffer bb) {
    // Next two bytes (unsigned) are the size of the record. We need all of
    // it.
    int size = bb.getChar();
    return isAvailable(bb, size);
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
}`,"org.apache.tomcat.util.net.TLSClientHelloExtractor.<init>_ByteBuffer":
 `/**
 * Creates the instance of the parser and processes the provided buffer. The
 * buffer position and limit will be modified during the execution of this
 * method but they will be returned to the original values before the method
 * exits.
 *
 * @param netInBuffer The buffer containing the TLS data to process
 * @throws IOException If the client hello message is malformed
 */
public TLSClientHelloExtractor(ByteBuffer netInBuffer) throws IOException {
    // Buffer is in write mode at this point. Record the current position so
    // the buffer state can be restored at the end of this method.
    int pos = netInBuffer.position();
    int limit = netInBuffer.limit();
    ExtractorResult result = ExtractorResult.NOT_PRESENT;
    List<Cipher> clientRequestedCiphers = new ArrayList<>();
    List<String> clientRequestedApplicationProtocols = new ArrayList<>();
    String sniValue = null;
    try {
        // Switch to read mode.
        netInBuffer.flip();
        // A complete TLS record header is required before we can figure out
        // how many bytes there are in the record.
        if (!isAvailable(netInBuffer, TLS_RECORD_HEADER_LEN)) {
            result = handleIncompleteRead(netInBuffer);
            return;
        }
        if (!isTLSHandshake(netInBuffer)) {
            // Is the client trying to use clear text HTTP?
            if (isHttp(netInBuffer)) {
                result = ExtractorResult.NON_SECURE;
            }
            return;
        }
        if (!isAllRecordAvailable(netInBuffer)) {
            result = handleIncompleteRead(netInBuffer);
            return;
        }
        if (!isClientHello(netInBuffer)) {
            return;
        }
        if (!isAllClientHelloAvailable(netInBuffer)) {
            // Client hello didn't fit into single TLS record.
            // Treat this as not present.
            log.warn(sm.getString("sniExtractor.clientHelloTooBig"));
            return;
        }
        // Protocol Version
        skipBytes(netInBuffer, 2);
        // Random
        skipBytes(netInBuffer, 32);
        // Session ID (single byte for length)
        skipBytes(netInBuffer, (netInBuffer.get() & 0xFF));
        // Cipher Suites
        // (2 bytes for length, each cipher ID is 2 bytes)
        int cipherCount = netInBuffer.getChar() / 2;
        for (int i = 0; i < cipherCount; i++) {
            int cipherId = netInBuffer.getChar();
            clientRequestedCiphers.add(Cipher.valueOf(cipherId));
        }
        // Compression methods (single byte for length)
        skipBytes(netInBuffer, (netInBuffer.get() & 0xFF));
        if (!netInBuffer.hasRemaining()) {
            // No more data means no extensions present
            return;
        }
        // Extension length
        skipBytes(netInBuffer, 2);
        // Read the extensions until we run out of data or find the data
        // we need
        while (netInBuffer.hasRemaining() && (sniValue == null || clientRequestedApplicationProtocols.size() == 0)) {
            // Extension type is two byte
            char extensionType = netInBuffer.getChar();
            // Extension size is another two bytes
            char extensionDataSize = netInBuffer.getChar();
            switch(extensionType) {
                case TLS_EXTENSION_SERVER_NAME:
                    {
                        sniValue = readSniExtension(netInBuffer);
                        break;
                    }
                case TLS_EXTENSION_ALPN:
                    readAlpnExtension(netInBuffer, clientRequestedApplicationProtocols);
                    break;
                default:
                    {
                        skipBytes(netInBuffer, extensionDataSize);
                    }
            }
        }
        result = ExtractorResult.COMPLETE;
    } catch (BufferUnderflowException | IllegalArgumentException e) {
        throw new IOException(sm.getString("sniExtractor.clientHelloInvalid"), e);
    } finally {
        this.result = result;
        this.clientRequestedCiphers = clientRequestedCiphers;
        this.clientRequestedApplicationProtocols = clientRequestedApplicationProtocols;
        this.sniValue = sniValue;
        // Whatever happens, return the buffer to its original state
        netInBuffer.limit(limit);
        netInBuffer.position(pos);
    }
}`,"org.apache.tomcat.util.res.StringManager.getString_String":
 `/**
 * Get a string from the underlying resource bundle or return null if the
 * String is not found.
 *
 * @param key to desired resource String
 *
 * @return resource String matching <i>key</i> from underlying bundle or
 *         null if not found.
 *
 * @throws IllegalArgumentException if <i>key</i> is null
 */
public String getString(String key) {
    if (key == null) {
        String msg = "key may not have a null value";
        throw new IllegalArgumentException(msg);
    }
    String str = null;
    try {
        // Avoid NPE if bundle is null and treat it like an MRE
        if (bundle != null) {
            str = bundle.getString(key);
        }
    } catch (MissingResourceException mre) {
        // bad: shouldn't mask an exception the following way:
        // str = "[cannot find message associated with key '" + key +
        // "' due to " + mre + "]";
        // because it hides the fact that the String was missing
        // from the calling code.
        // good: could just throw the exception (or wrap it in another)
        // but that would probably cause much havoc on existing
        // code.
        // better: consistent with container pattern to
        // simply return null.  Calling code can then do
        // a null check.
        str = null;
    }
    return str;
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
}`,"org.apache.tomcat.util.net.TestTLSClientHelloExtractor.doTestInputNeedRead_ByteBuffer":
 `public void doTestInputNeedRead(ByteBuffer input) throws IOException {
    TLSClientHelloExtractor extractor = new TLSClientHelloExtractor(input);
    // Expect this to fail
    ExtractorResult result = extractor.getResult();
    Assert.assertEquals(ExtractorResult.NEED_READ, result);
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
}`,"org.apache.tomcat.util.net.TLSClientHelloExtractor.isTLSHandshake_ByteBuffer":
 `private static boolean isTLSHandshake(ByteBuffer bb) {
    // For a TLS client hello the first byte must be 22 - handshake
    if (bb.get() != 22) {
        return false;
    }
    // Next two bytes are major/minor version. We need at least 3.1.
    byte b2 = bb.get();
    byte b3 = bb.get();
    if (b2 < 3 || b2 == 3 && b3 == 0) {
        return false;
    }
    return true;
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
}`,"org.apache.tomcat.util.net.TLSClientHelloExtractor.isAllClientHelloAvailable_ByteBuffer":
 `private static boolean isAllClientHelloAvailable(ByteBuffer bb) {
    // Next three bytes (unsigned) are the size of the client hello. We need
    // all of it.
    int size = ((bb.get() & 0xFF) << 16) + ((bb.get() & 0xFF) << 8) + (bb.get() & 0xFF);
    return isAvailable(bb, size);
}`,},
};
var treeData = [
{
  "call" : "org.apache.tomcat.util.net.TestTLSClientHelloExtractor#testInputMalformed02",
  "kiekerPattern" : "public void org.apache.tomcat.util.net.TestTLSClientHelloExtractor.testInputMalformed02()",
  "otherKiekerPattern" : null,
  "module" : "",
  "name" : "tomcat.util.net.TestTLSClientHelloExtractor#testInputMalformed02",
  "key" : "org.apache.tomcat.util.net.TestTLSClientHelloExtractor.testInputMalformed02_",
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
    "call" : "org.apache.tomcat.util.net.TestTLSClientHelloExtractor#doTestInputNeedRead",
    "kiekerPattern" : "public void org.apache.tomcat.util.net.TestTLSClientHelloExtractor.doTestInputNeedRead(java.nio.ByteBuffer)",
    "otherKiekerPattern" : null,
    "module" : "",
    "name" : "tomcat.util.net.TestTLSClientHelloExtractor#doTestInputNeedRead",
    "key" : "org.apache.tomcat.util.net.TestTLSClientHelloExtractor.doTestInputNeedRead_ByteBuffer",
    "otherKey" : null,
    "parent" : "org.apache.tomcat.util.net.TestTLSClientHelloExtractor#testInputMalformed02",
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
      "name" : "juli.logging.LogFactory#<init>",
      "key" : "org.apache.juli.logging.LogFactory.<init>_",
      "otherKey" : null,
      "parent" : "org.apache.tomcat.util.net.TestTLSClientHelloExtractor#doTestInputNeedRead",
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
      "name" : "juli.logging.LogFactory#getLog",
      "key" : "org.apache.juli.logging.LogFactory.getLog_Class",
      "otherKey" : null,
      "parent" : "org.apache.tomcat.util.net.TestTLSClientHelloExtractor#doTestInputNeedRead",
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
        "ess" : 3,
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
        "ess" : 3,
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
          "ess" : 4,
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
            "ess" : 5,
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
              "ess" : 6,
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
      "parent" : "org.apache.tomcat.util.net.TestTLSClientHelloExtractor#doTestInputNeedRead",
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
      "call" : "org.apache.tomcat.util.net.TLSClientHelloExtractor#<init>",
      "kiekerPattern" : "public new org.apache.tomcat.util.net.TLSClientHelloExtractor.<init>(java.nio.ByteBuffer)",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "tomcat.util.net.TLSClientHelloExtractor#<init>",
      "key" : "org.apache.tomcat.util.net.TLSClientHelloExtractor.<init>_ByteBuffer",
      "otherKey" : null,
      "parent" : "org.apache.tomcat.util.net.TestTLSClientHelloExtractor#doTestInputNeedRead",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.apache.tomcat.util.net.TLSClientHelloExtractor#isAvailable",
        "kiekerPattern" : "private static boolean org.apache.tomcat.util.net.TLSClientHelloExtractor.isAvailable(java.nio.ByteBuffer,int)",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "tomcat.util.net.TLSClientHelloExtractor#isAvailable",
        "key" : "org.apache.tomcat.util.net.TLSClientHelloExtractor.isAvailable_ByteBuffer_int",
        "otherKey" : null,
        "parent" : "org.apache.tomcat.util.net.TLSClientHelloExtractor#<init>",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.apache.tomcat.util.net.TLSClientHelloExtractor#isTLSHandshake",
        "kiekerPattern" : "private static boolean org.apache.tomcat.util.net.TLSClientHelloExtractor.isTLSHandshake(java.nio.ByteBuffer)",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "tomcat.util.net.TLSClientHelloExtractor#isTLSHandshake",
        "key" : "org.apache.tomcat.util.net.TLSClientHelloExtractor.isTLSHandshake_ByteBuffer",
        "otherKey" : null,
        "parent" : "org.apache.tomcat.util.net.TLSClientHelloExtractor#<init>",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.apache.tomcat.util.net.TLSClientHelloExtractor#isAllRecordAvailable",
        "kiekerPattern" : "private static boolean org.apache.tomcat.util.net.TLSClientHelloExtractor.isAllRecordAvailable(java.nio.ByteBuffer)",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "tomcat.util.net.TLSClientHelloExtractor#isAllRecordAvailable",
        "key" : "org.apache.tomcat.util.net.TLSClientHelloExtractor.isAllRecordAvailable_ByteBuffer",
        "otherKey" : null,
        "parent" : "org.apache.tomcat.util.net.TLSClientHelloExtractor#<init>",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.apache.tomcat.util.net.TLSClientHelloExtractor#isAvailable",
          "kiekerPattern" : "private static boolean org.apache.tomcat.util.net.TLSClientHelloExtractor.isAvailable(java.nio.ByteBuffer,int)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "tomcat.util.net.TLSClientHelloExtractor#isAvailable",
          "key" : "org.apache.tomcat.util.net.TLSClientHelloExtractor.isAvailable_ByteBuffer_int",
          "otherKey" : null,
          "parent" : "org.apache.tomcat.util.net.TLSClientHelloExtractor#isAllRecordAvailable",
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
        "call" : "org.apache.tomcat.util.net.TLSClientHelloExtractor#isClientHello",
        "kiekerPattern" : "private static boolean org.apache.tomcat.util.net.TLSClientHelloExtractor.isClientHello(java.nio.ByteBuffer)",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "tomcat.util.net.TLSClientHelloExtractor#isClientHello",
        "key" : "org.apache.tomcat.util.net.TLSClientHelloExtractor.isClientHello_ByteBuffer",
        "otherKey" : null,
        "parent" : "org.apache.tomcat.util.net.TLSClientHelloExtractor#<init>",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.apache.tomcat.util.net.TLSClientHelloExtractor#isAllClientHelloAvailable",
        "kiekerPattern" : "private static boolean org.apache.tomcat.util.net.TLSClientHelloExtractor.isAllClientHelloAvailable(java.nio.ByteBuffer)",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "tomcat.util.net.TLSClientHelloExtractor#isAllClientHelloAvailable",
        "key" : "org.apache.tomcat.util.net.TLSClientHelloExtractor.isAllClientHelloAvailable_ByteBuffer",
        "otherKey" : null,
        "parent" : "org.apache.tomcat.util.net.TLSClientHelloExtractor#<init>",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.apache.tomcat.util.net.TLSClientHelloExtractor#isAvailable",
          "kiekerPattern" : "private static boolean org.apache.tomcat.util.net.TLSClientHelloExtractor.isAvailable(java.nio.ByteBuffer,int)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "tomcat.util.net.TLSClientHelloExtractor#isAvailable",
          "key" : "org.apache.tomcat.util.net.TLSClientHelloExtractor.isAvailable_ByteBuffer_int",
          "otherKey" : null,
          "parent" : "org.apache.tomcat.util.net.TLSClientHelloExtractor#isAllClientHelloAvailable",
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
        "call" : "org.apache.tomcat.util.net.TLSClientHelloExtractor#skipBytes",
        "kiekerPattern" : "private static void org.apache.tomcat.util.net.TLSClientHelloExtractor.skipBytes(java.nio.ByteBuffer,int)",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "tomcat.util.net.TLSClientHelloExtractor#skipBytes",
        "key" : "org.apache.tomcat.util.net.TLSClientHelloExtractor.skipBytes_ByteBuffer_int",
        "otherKey" : null,
        "parent" : "org.apache.tomcat.util.net.TLSClientHelloExtractor#<init>",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.apache.tomcat.util.res.StringManager#getString",
        "kiekerPattern" : "public java.lang.String org.apache.tomcat.util.res.StringManager.getString(java.lang.String)",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "tomcat.util.res.StringManager#getString",
        "key" : "org.apache.tomcat.util.res.StringManager.getString_String",
        "otherKey" : null,
        "parent" : "org.apache.tomcat.util.net.TLSClientHelloExtractor#<init>",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      } ]
    } ]
  } ]
}];
// ************** Generate the tree diagram   *****************
var margin = {top: 20, right: 120, bottom: 20, left: 448},
   width = 3031- margin.right - margin.left,
   height = 595 - margin.top - margin.bottom;
