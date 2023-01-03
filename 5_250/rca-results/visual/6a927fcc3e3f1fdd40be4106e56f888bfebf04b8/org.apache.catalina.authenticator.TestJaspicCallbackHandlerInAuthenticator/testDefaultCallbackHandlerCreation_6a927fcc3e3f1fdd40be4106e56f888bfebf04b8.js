if (document.getElementById('testcaseDiv') != null) { 
   document.getElementById('testcaseDiv').innerHTML="Commit: <a href='javascript:fallbackCopyTextToClipboard(\"-commit 6a927fcc3e3f1fdd40be4106e56f888bfebf04b8 -test org.apache.catalina.authenticator.TestJaspicCallbackHandlerInAuthenticator#testDefaultCallbackHandlerCreation\")'>6a927fcc3e3f1fdd40be4106e56f888bfebf04b8</a><br>Test Case: org.apache.catalina.authenticator.TestJaspicCallbackHandlerInAuthenticator#testDefaultCallbackHandlerCreation<br>";
}

var source = {"current":
{
 "org.apache.tomcat.util.res.StringManager.getManager_String":
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
}`,"org.apache.catalina.authenticator.TestJaspicCallbackHandlerInAuthenticator.testCallbackHandlerCreation_String_Class":
 `private void testCallbackHandlerCreation(String callbackHandlerImplClassName, Class<?> callbackHandlerImplClass) throws NoSuchMethodException, SecurityException, IllegalAccessException, IllegalArgumentException, InvocationTargetException {
    CallbackHandler callbackHandler = createCallbackHandler(callbackHandlerImplClassName);
    Assert.assertTrue(callbackHandlerImplClass.isInstance(callbackHandler));
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
}`,"org.apache.catalina.authenticator.AuthenticatorBase.<init>_":
 `// ------------------------------------------------------ Constructor
public AuthenticatorBase() {
    super(true);
}`,"org.apache.tomcat.util.http.ConcurrentDateFormat.<init>_String_Locale_TimeZone":
 `public ConcurrentDateFormat(String format, Locale locale, TimeZone timezone) {
    this.format = format;
    this.locale = locale;
    this.timezone = timezone;
    SimpleDateFormat initial = createInstance();
    queue.add(initial);
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
}`,"org.apache.catalina.authenticator.TestJaspicCallbackHandlerInAuthenticator$TestAuthenticator.<init>_":
 ``,"org.apache.catalina.authenticator.TestJaspicCallbackHandlerInAuthenticator.testDefaultCallbackHandlerCreation_":
 `@Test
public void testDefaultCallbackHandlerCreation() throws Exception {
    testCallbackHandlerCreation(null, CallbackHandlerImpl.class);
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
}`,"org.apache.catalina.authenticator.AuthenticatorBase.createCallbackHandler_":
 `private CallbackHandler createCallbackHandler() {
    CallbackHandler callbackHandler = null;
    Class<?> clazz = null;
    try {
        clazz = Class.forName(jaspicCallbackHandlerClass, true, Thread.currentThread().getContextClassLoader());
    } catch (ClassNotFoundException e) {
        // Proceed with the retry below
    }
    try {
        if (clazz == null) {
            clazz = Class.forName(jaspicCallbackHandlerClass);
        }
        callbackHandler = (CallbackHandler) clazz.getConstructor().newInstance();
    } catch (ReflectiveOperationException e) {
        throw new SecurityException(e);
    }
    if (callbackHandler instanceof Contained) {
        ((Contained) callbackHandler).setContainer(getContainer());
    }
    jaspicCallbackHandler = callbackHandler;
    return callbackHandler;
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
}`,"org.apache.catalina.LifecycleState.<init>_boolean_String":
 `private LifecycleState(boolean available, String lifecycleEvent) {
    this.available = available;
    this.lifecycleEvent = lifecycleEvent;
}`,"org.apache.catalina.util.LifecycleMBeanBase.<init>_":
 ``,"org.apache.catalina.util.LifecycleBase.<init>_":
 ``,"org.apache.juli.logging.DirectJDKLog.getInstance_String":
 `static Log getInstance(String name) {
    return new DirectJDKLog(name);
}`,"org.apache.juli.logging.DirectJDKLog.<init>_String":
 `public DirectJDKLog(String name) {
    logger = Logger.getLogger(name);
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
}`,"org.apache.catalina.valves.ValveBase.<init>_boolean":
 `public ValveBase(boolean asyncSupported) {
    this.asyncSupported = asyncSupported;
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
}`,"org.apache.catalina.authenticator.jaspic.CallbackHandlerImpl.setContainer_Container":
 `@Override
public void setContainer(Container container) {
    this.container = container;
}`,"org.apache.catalina.authenticator.TestJaspicCallbackHandlerInAuthenticator.createCallbackHandler_String":
 `private CallbackHandler createCallbackHandler(String callbackHandlerImplClassName) throws NoSuchMethodException, SecurityException, IllegalAccessException, IllegalArgumentException, InvocationTargetException {
    TestAuthenticator authenticator = new TestAuthenticator();
    if (callbackHandlerImplClassName != null) {
        authenticator.setJaspicCallbackHandlerClass(callbackHandlerImplClassName);
    }
    Method createCallbackHandlerMethod = AuthenticatorBase.class.getDeclaredMethod("createCallbackHandler");
    createCallbackHandlerMethod.setAccessible(true);
    return (CallbackHandler) createCallbackHandlerMethod.invoke(authenticator);
}`,"org.apache.catalina.authenticator.AuthenticatorBase.getContainer_":
 `/**
 * Return the Container to which this Valve is attached.
 */
@Override
public Container getContainer() {
    return this.context;
}`,"org.apache.catalina.authenticator.jaspic.CallbackHandlerImpl.<init>_":
 ``,},
};
var treeData = [
{
  "call" : "org.apache.catalina.authenticator.TestJaspicCallbackHandlerInAuthenticator#testDefaultCallbackHandlerCreation",
  "kiekerPattern" : "public void org.apache.catalina.authenticator.TestJaspicCallbackHandlerInAuthenticator.testDefaultCallbackHandlerCreation()",
  "otherKiekerPattern" : null,
  "module" : "",
  "name" : "catalina.authenticator.TestJaspicCallbackHandlerInAuthenticator#testDefaultCallbackHandlerCreation",
  "key" : "org.apache.catalina.authenticator.TestJaspicCallbackHandlerInAuthenticator.testDefaultCallbackHandlerCreation_",
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
    "call" : "org.apache.catalina.authenticator.TestJaspicCallbackHandlerInAuthenticator#testCallbackHandlerCreation",
    "kiekerPattern" : "private void org.apache.catalina.authenticator.TestJaspicCallbackHandlerInAuthenticator.testCallbackHandlerCreation(java.lang.String,java.lang.Class)",
    "otherKiekerPattern" : null,
    "module" : "",
    "name" : "catalina.authenticator.TestJaspicCallbackHandlerInAuthenticator#testCallbackHandlerCreation",
    "key" : "org.apache.catalina.authenticator.TestJaspicCallbackHandlerInAuthenticator.testCallbackHandlerCreation_String_Class",
    "otherKey" : null,
    "parent" : "org.apache.catalina.authenticator.TestJaspicCallbackHandlerInAuthenticator#testDefaultCallbackHandlerCreation",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ {
      "call" : "org.apache.catalina.authenticator.TestJaspicCallbackHandlerInAuthenticator#createCallbackHandler",
      "kiekerPattern" : "private javax.security.auth.callback.CallbackHandler org.apache.catalina.authenticator.TestJaspicCallbackHandlerInAuthenticator.createCallbackHandler(java.lang.String)",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "catalina.authenticator.TestJaspicCallbackHandlerInAuthenticator#createCallbackHandler",
      "key" : "org.apache.catalina.authenticator.TestJaspicCallbackHandlerInAuthenticator.createCallbackHandler_String",
      "otherKey" : null,
      "parent" : "org.apache.catalina.authenticator.TestJaspicCallbackHandlerInAuthenticator#testCallbackHandlerCreation",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.apache.juli.logging.LogFactory#<init>",
        "kiekerPattern" : "private new org.apache.juli.logging.LogFactory.<init>()",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "juli.logging.LogFactory#<init>",
        "key" : "org.apache.juli.logging.LogFactory.<init>_",
        "otherKey" : null,
        "parent" : "org.apache.catalina.authenticator.TestJaspicCallbackHandlerInAuthenticator#createCallbackHandler",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.apache.juli.logging.LogFactory#getLog",
        "kiekerPattern" : "public static org.apache.juli.logging.Log org.apache.juli.logging.LogFactory.getLog(java.lang.Class)",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "juli.logging.LogFactory#getLog",
        "key" : "org.apache.juli.logging.LogFactory.getLog_Class",
        "otherKey" : null,
        "parent" : "org.apache.catalina.authenticator.TestJaspicCallbackHandlerInAuthenticator#createCallbackHandler",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
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
          "ess" : 4,
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
          "ess" : 4,
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
            "ess" : 5,
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
              "ess" : 6,
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
                "ess" : 7,
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
        "parent" : "org.apache.catalina.authenticator.TestJaspicCallbackHandlerInAuthenticator#createCallbackHandler",
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
        "call" : "org.apache.tomcat.util.res.StringManager#getManager",
        "kiekerPattern" : "public static final org.apache.tomcat.util.res.StringManager org.apache.tomcat.util.res.StringManager.getManager(java.lang.String)",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "tomcat.util.res.StringManager#getManager",
        "key" : "org.apache.tomcat.util.res.StringManager.getManager_String",
        "otherKey" : null,
        "parent" : "org.apache.catalina.authenticator.TestJaspicCallbackHandlerInAuthenticator#createCallbackHandler",
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
        "parent" : "org.apache.catalina.authenticator.TestJaspicCallbackHandlerInAuthenticator#createCallbackHandler",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
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
          "ess" : 4,
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
        "parent" : "org.apache.catalina.authenticator.TestJaspicCallbackHandlerInAuthenticator#createCallbackHandler",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
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
          "ess" : 4,
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
          "ess" : 4,
          "children" : [ ]
        } ]
      }, {
        "call" : "org.apache.catalina.LifecycleState#<init>",
        "kiekerPattern" : "private new org.apache.catalina.LifecycleState.<init>(boolean,java.lang.String)",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "catalina.LifecycleState#<init>",
        "key" : "org.apache.catalina.LifecycleState.<init>_boolean_String",
        "otherKey" : null,
        "parent" : "org.apache.catalina.authenticator.TestJaspicCallbackHandlerInAuthenticator#createCallbackHandler",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.apache.catalina.util.LifecycleBase#<init>",
        "kiekerPattern" : "public new org.apache.catalina.util.LifecycleBase.<init>()",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "catalina.util.LifecycleBase#<init>",
        "key" : "org.apache.catalina.util.LifecycleBase.<init>_",
        "otherKey" : null,
        "parent" : "org.apache.catalina.authenticator.TestJaspicCallbackHandlerInAuthenticator#createCallbackHandler",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.apache.catalina.util.LifecycleMBeanBase#<init>",
        "kiekerPattern" : "public new org.apache.catalina.util.LifecycleMBeanBase.<init>()",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "catalina.util.LifecycleMBeanBase#<init>",
        "key" : "org.apache.catalina.util.LifecycleMBeanBase.<init>_",
        "otherKey" : null,
        "parent" : "org.apache.catalina.authenticator.TestJaspicCallbackHandlerInAuthenticator#createCallbackHandler",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.apache.catalina.valves.ValveBase#<init>",
        "kiekerPattern" : "public new org.apache.catalina.valves.ValveBase.<init>(boolean)",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "catalina.valves.ValveBase#<init>",
        "key" : "org.apache.catalina.valves.ValveBase.<init>_boolean",
        "otherKey" : null,
        "parent" : "org.apache.catalina.authenticator.TestJaspicCallbackHandlerInAuthenticator#createCallbackHandler",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.apache.catalina.authenticator.AuthenticatorBase#<init>",
        "kiekerPattern" : "public new org.apache.catalina.authenticator.AuthenticatorBase.<init>()",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "catalina.authenticator.AuthenticatorBase#<init>",
        "key" : "org.apache.catalina.authenticator.AuthenticatorBase.<init>_",
        "otherKey" : null,
        "parent" : "org.apache.catalina.authenticator.TestJaspicCallbackHandlerInAuthenticator#createCallbackHandler",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.apache.catalina.authenticator.TestJaspicCallbackHandlerInAuthenticator$TestAuthenticator#<init>",
        "kiekerPattern" : "private new org.apache.catalina.authenticator.TestJaspicCallbackHandlerInAuthenticator$TestAuthenticator.<init>()",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "catalina.authenticator.TestJaspicCallbackHandlerInAuthenticator$TestAuthenticator#<init>",
        "key" : "org.apache.catalina.authenticator.TestJaspicCallbackHandlerInAuthenticator$TestAuthenticator.<init>_",
        "otherKey" : null,
        "parent" : "org.apache.catalina.authenticator.TestJaspicCallbackHandlerInAuthenticator#createCallbackHandler",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.apache.catalina.authenticator.AuthenticatorBase#createCallbackHandler",
        "kiekerPattern" : "private javax.security.auth.callback.CallbackHandler org.apache.catalina.authenticator.AuthenticatorBase.createCallbackHandler()",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "catalina.authenticator.AuthenticatorBase#createCallbackHandler",
        "key" : "org.apache.catalina.authenticator.AuthenticatorBase.createCallbackHandler_",
        "otherKey" : null,
        "parent" : "org.apache.catalina.authenticator.TestJaspicCallbackHandlerInAuthenticator#createCallbackHandler",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.apache.tomcat.util.res.StringManager#getManager",
          "kiekerPattern" : "public static final org.apache.tomcat.util.res.StringManager org.apache.tomcat.util.res.StringManager.getManager(java.lang.Class)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "tomcat.util.res.StringManager#getManager",
          "key" : "org.apache.tomcat.util.res.StringManager.getManager_Class",
          "otherKey" : null,
          "parent" : "org.apache.catalina.authenticator.AuthenticatorBase#createCallbackHandler",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
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
            "ess" : 5,
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
              "ess" : 6,
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
                "ess" : 7,
                "children" : [ ]
              } ]
            } ]
          } ]
        }, {
          "call" : "org.apache.juli.logging.LogFactory#getLog",
          "kiekerPattern" : "public static org.apache.juli.logging.Log org.apache.juli.logging.LogFactory.getLog(java.lang.Class)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "juli.logging.LogFactory#getLog",
          "key" : "org.apache.juli.logging.LogFactory.getLog_Class",
          "otherKey" : null,
          "parent" : "org.apache.catalina.authenticator.AuthenticatorBase#createCallbackHandler",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
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
            "ess" : 5,
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
            "ess" : 5,
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
              "ess" : 6,
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
                "ess" : 7,
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
                  "ess" : 8,
                  "children" : [ ]
                } ]
              } ]
            } ]
          } ]
        }, {
          "call" : "org.apache.catalina.authenticator.jaspic.CallbackHandlerImpl#<init>",
          "kiekerPattern" : "public new org.apache.catalina.authenticator.jaspic.CallbackHandlerImpl.<init>()",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "catalina.authenticator.jaspic.CallbackHandlerImpl#<init>",
          "key" : "org.apache.catalina.authenticator.jaspic.CallbackHandlerImpl.<init>_",
          "otherKey" : null,
          "parent" : "org.apache.catalina.authenticator.AuthenticatorBase#createCallbackHandler",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.catalina.authenticator.AuthenticatorBase#getContainer",
          "kiekerPattern" : "public org.apache.catalina.Container org.apache.catalina.authenticator.AuthenticatorBase.getContainer()",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "catalina.authenticator.AuthenticatorBase#getContainer",
          "key" : "org.apache.catalina.authenticator.AuthenticatorBase.getContainer_",
          "otherKey" : null,
          "parent" : "org.apache.catalina.authenticator.AuthenticatorBase#createCallbackHandler",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.catalina.authenticator.jaspic.CallbackHandlerImpl#setContainer",
          "kiekerPattern" : "public void org.apache.catalina.authenticator.jaspic.CallbackHandlerImpl.setContainer(org.apache.catalina.Container)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "catalina.authenticator.jaspic.CallbackHandlerImpl#setContainer",
          "key" : "org.apache.catalina.authenticator.jaspic.CallbackHandlerImpl.setContainer_Container",
          "otherKey" : null,
          "parent" : "org.apache.catalina.authenticator.AuthenticatorBase#createCallbackHandler",
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
var margin = {top: 20, right: 120, bottom: 20, left: 686},
   width = 4768- margin.right - margin.left,
   height = 1015 - margin.top - margin.bottom;
