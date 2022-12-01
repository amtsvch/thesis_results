if (document.getElementById('testcaseDiv') != null) { 
   document.getElementById('testcaseDiv').innerHTML="Commit: <a href='javascript:fallbackCopyTextToClipboard(\"-commit 513a158ee793b52cc1c0fac7780423760818b631 -test org.apache.catalina.core.TestStandardContext#testAddPreDestroyMethodConflicts\")'>513a158ee793b52cc1c0fac7780423760818b631</a><br>Test Case: org.apache.catalina.core.TestStandardContext#testAddPreDestroyMethodConflicts<br>";
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
}`,"org.apache.catalina.core.StandardContext.<init>_":
 `// ----------------------------------------------------------- Constructors
/**
 * Create a new StandardContext component with the default basic Valve.
 */
public StandardContext() {
    super();
    pipeline.setBasic(new StandardContextValve());
    broadcaster = new NotificationBroadcasterSupport();
    // Set defaults
    if (!Globals.STRICT_SERVLET_COMPLIANCE) {
        // Strict servlet compliance requires all extension mapped servlets
        // to be checked against welcome files
        resourceOnlyServlets.add("jsp");
    }
}`,"org.apache.catalina.core.StandardPipeline.setBasic_Valve":
 `/**
 * <p>Set the Valve instance that has been distinguished as the basic
 * Valve for this Pipeline (if any).  Prior to setting the basic Valve,
 * the Valve's <code>setContainer()</code> will be called, if it
 * implements <code>Contained</code>, with the owning Container as an
 * argument.  The method may throw an <code>IllegalArgumentException</code>
 * if this Valve chooses not to be associated with this Container, or
 * <code>IllegalStateException</code> if it is already associated with
 * a different Container.</p>
 *
 * @param valve Valve to be distinguished as the basic Valve
 */
@Override
public void setBasic(Valve valve) {
    // Change components if necessary
    Valve oldBasic = this.basic;
    if (oldBasic == valve) {
        return;
    }
    // Stop the old component if necessary
    if (oldBasic != null) {
        if (getState().isAvailable() && (oldBasic instanceof Lifecycle)) {
            try {
                ((Lifecycle) oldBasic).stop();
            } catch (LifecycleException e) {
                log.error(sm.getString("standardPipeline.basic.stop"), e);
            }
        }
        if (oldBasic instanceof Contained) {
            try {
                ((Contained) oldBasic).setContainer(null);
            } catch (Throwable t) {
                ExceptionUtils.handleThrowable(t);
            }
        }
    }
    // Start the new component if necessary
    if (valve == null) {
        return;
    }
    if (valve instanceof Contained) {
        ((Contained) valve).setContainer(this.container);
    }
    if (getState().isAvailable() && valve instanceof Lifecycle) {
        try {
            ((Lifecycle) valve).start();
        } catch (LifecycleException e) {
            log.error(sm.getString("standardPipeline.basic.start"), e);
            return;
        }
    }
    // Update the pipeline
    Valve current = first;
    while (current != null) {
        if (current.getNext() == oldBasic) {
            current.setNext(valve);
            break;
        }
        current = current.getNext();
    }
    this.basic = valve;
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
}`,"org.apache.catalina.core.StandardPipeline.<init>_Container":
 `/**
 * Construct a new StandardPipeline instance that is associated with the
 * specified Container.
 *
 * @param container The container we should be associated with
 */
public StandardPipeline(Container container) {
    super();
    setContainer(container);
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
}`,"org.apache.catalina.util.LifecycleBase.getState_":
 `/**
 * {@inheritDoc}
 */
@Override
public LifecycleState getState() {
    return state;
}`,"org.apache.catalina.core.StandardContext$ContextFilterMaps.<init>_":
 ``,"org.apache.catalina.util.LifecycleMBeanBase.<init>_":
 ``,"org.apache.catalina.core.StandardPipeline.setContainer_Container":
 `/**
 * Set the Container with which this Pipeline is associated.
 *
 * @param container The new associated container
 */
@Override
public void setContainer(Container container) {
    this.container = container;
}`,"org.apache.catalina.util.LifecycleBase.<init>_":
 ``,"org.apache.catalina.core.StandardContextValve.<init>_":
 `public StandardContextValve() {
    super(true);
}`,"org.apache.catalina.core.ContainerBase.fireContainerEvent_String_Object":
 `// ------------------------------------------------------ Protected Methods
/**
 * Notify all container event listeners that a particular event has
 * occurred for this Container.  The default implementation performs
 * this notification synchronously using the calling thread.
 *
 * @param type Event type
 * @param data Event data
 */
@Override
public void fireContainerEvent(String type, Object data) {
    if (listeners.size() < 1) {
        return;
    }
    ContainerEvent event = new ContainerEvent(this, type, data);
    // Note for each uses an iterator internally so this is safe
    for (ContainerListener listener : listeners) {
        listener.containerEvent(event);
    }
}`,"org.apache.juli.logging.DirectJDKLog.getInstance_String":
 `static Log getInstance(String name) {
    return new DirectJDKLog(name);
}`,"org.apache.catalina.valves.ValveBase.setContainer_Container":
 `/**
 * Set the Container with which this Valve is associated, if any.
 *
 * @param container The new associated container
 */
@Override
public void setContainer(Container container) {
    this.container = container;
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
}`,"org.apache.catalina.LifecycleState.isAvailable_":
 `/**
 * May the public methods other than property getters/setters and lifecycle
 * methods be called for a component in this state? It returns
 * <code>true</code> for any component in any of the following states:
 * <ul>
 * <li>{@link #STARTING}</li>
 * <li>{@link #STARTED}</li>
 * <li>{@link #STOPPING_PREP}</li>
 * </ul>
 *
 * @return <code>true</code> if the component is available for use,
 *         otherwise <code>false</code>
 */
public boolean isAvailable() {
    return available;
}`,"org.apache.catalina.core.TestStandardContext.testAddPreDestroyMethodConflicts_":
 `@Test(expected = IllegalArgumentException.class)
public void testAddPreDestroyMethodConflicts() {
    StandardContext standardContext = new StandardContext();
    standardContext.addPreDestroyMethod("a", "a");
    standardContext.addPreDestroyMethod("a", "b");
}`,"org.apache.tomcat.util.compat.JreCompat.isGraalAvailable_":
 `public static boolean isGraalAvailable() {
    return graalAvailable;
}`,"org.apache.catalina.valves.ValveBase.<init>_boolean":
 `public ValveBase(boolean asyncSupported) {
    this.asyncSupported = asyncSupported;
}`,"org.apache.tomcat.util.res.StringManager.getString_String_Object":
 `/**
 * Get a string from the underlying resource bundle and format
 * it with the given set of arguments.
 *
 * @param key  The key for the required message
 * @param args The values to insert into the message
 *
 * @return The request string formatted with the provided arguments or the
 *         key if the key was not found.
 */
public String getString(final String key, final Object... args) {
    String value = getString(key);
    if (value == null) {
        value = key;
    }
    MessageFormat mf = new MessageFormat(value);
    mf.setLocale(locale);
    return mf.format(args, new StringBuffer(), null).toString();
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
}`,"org.apache.catalina.core.StandardContext.addPreDestroyMethod_String_String":
 `@Override
public void addPreDestroyMethod(String clazz, String method) {
    if (clazz == null || method == null) {
        throw new IllegalArgumentException(sm.getString("standardContext.predestroy.required"));
    }
    if (preDestroyMethods.get(clazz) != null) {
        throw new IllegalArgumentException(sm.getString("standardContext.predestroy.duplicate", clazz));
    }
    preDestroyMethods.put(clazz, method);
    fireContainerEvent("addPreDestroyMethod", clazz);
}`,"org.apache.catalina.util.ErrorPageSupport.<init>_":
 ``,"org.apache.catalina.core.ContainerBase.<init>_":
 ``,},
};
var treeData = [
{
  "call" : "org.apache.catalina.core.TestStandardContext#testAddPreDestroyMethodConflicts",
  "kiekerPattern" : "public void org.apache.catalina.core.TestStandardContext.testAddPreDestroyMethodConflicts()",
  "otherKiekerPattern" : null,
  "module" : "",
  "name" : "catalina.core.TestStandardContext#testAddPreDestroyMethodConflicts",
  "key" : "org.apache.catalina.core.TestStandardContext.testAddPreDestroyMethodConflicts_",
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
    "call" : "org.apache.juli.logging.LogFactory#getLog",
    "kiekerPattern" : "public static org.apache.juli.logging.Log org.apache.juli.logging.LogFactory.getLog(java.lang.Class)",
    "otherKiekerPattern" : null,
    "module" : "",
    "name" : "juli.logging.LogFactory#getLog",
    "key" : "org.apache.juli.logging.LogFactory.getLog_Class",
    "otherKey" : null,
    "parent" : "org.apache.catalina.core.TestStandardContext#testAddPreDestroyMethodConflicts",
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
    "call" : "org.apache.catalina.util.LifecycleBase#<init>",
    "kiekerPattern" : "public new org.apache.catalina.util.LifecycleBase.<init>()",
    "otherKiekerPattern" : null,
    "module" : "",
    "name" : "catalina.util.LifecycleBase#<init>",
    "key" : "org.apache.catalina.util.LifecycleBase.<init>_",
    "otherKey" : null,
    "parent" : "org.apache.catalina.core.TestStandardContext#testAddPreDestroyMethodConflicts",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.apache.catalina.util.LifecycleMBeanBase#<init>",
    "kiekerPattern" : "public new org.apache.catalina.util.LifecycleMBeanBase.<init>()",
    "otherKiekerPattern" : null,
    "module" : "",
    "name" : "catalina.util.LifecycleMBeanBase#<init>",
    "key" : "org.apache.catalina.util.LifecycleMBeanBase.<init>_",
    "otherKey" : null,
    "parent" : "org.apache.catalina.core.TestStandardContext#testAddPreDestroyMethodConflicts",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.apache.catalina.core.StandardPipeline#<init>",
    "kiekerPattern" : "public new org.apache.catalina.core.StandardPipeline.<init>(org.apache.catalina.Container)",
    "otherKiekerPattern" : null,
    "module" : "",
    "name" : "catalina.core.StandardPipeline#<init>",
    "key" : "org.apache.catalina.core.StandardPipeline.<init>_Container",
    "otherKey" : null,
    "parent" : "org.apache.catalina.core.TestStandardContext#testAddPreDestroyMethodConflicts",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ {
      "call" : "org.apache.catalina.core.StandardPipeline#setContainer",
      "kiekerPattern" : "public void org.apache.catalina.core.StandardPipeline.setContainer(org.apache.catalina.Container)",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "catalina.core.StandardPipeline#setContainer",
      "key" : "org.apache.catalina.core.StandardPipeline.setContainer_Container",
      "otherKey" : null,
      "parent" : "org.apache.catalina.core.StandardPipeline#<init>",
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
    "call" : "org.apache.catalina.core.ContainerBase#<init>",
    "kiekerPattern" : "public new org.apache.catalina.core.ContainerBase.<init>()",
    "otherKiekerPattern" : null,
    "module" : "",
    "name" : "catalina.core.ContainerBase#<init>",
    "key" : "org.apache.catalina.core.ContainerBase.<init>_",
    "otherKey" : null,
    "parent" : "org.apache.catalina.core.TestStandardContext#testAddPreDestroyMethodConflicts",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.apache.tomcat.util.compat.JreCompat#isGraalAvailable",
    "kiekerPattern" : "public static boolean org.apache.tomcat.util.compat.JreCompat.isGraalAvailable()",
    "otherKiekerPattern" : null,
    "module" : "",
    "name" : "tomcat.util.compat.JreCompat#isGraalAvailable",
    "key" : "org.apache.tomcat.util.compat.JreCompat.isGraalAvailable_",
    "otherKey" : null,
    "parent" : "org.apache.catalina.core.TestStandardContext#testAddPreDestroyMethodConflicts",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.apache.catalina.util.ErrorPageSupport#<init>",
    "kiekerPattern" : "public new org.apache.catalina.util.ErrorPageSupport.<init>()",
    "otherKiekerPattern" : null,
    "module" : "",
    "name" : "catalina.util.ErrorPageSupport#<init>",
    "key" : "org.apache.catalina.util.ErrorPageSupport.<init>_",
    "otherKey" : null,
    "parent" : "org.apache.catalina.core.TestStandardContext#testAddPreDestroyMethodConflicts",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.apache.catalina.core.StandardContext$ContextFilterMaps#<init>",
    "kiekerPattern" : "private new org.apache.catalina.core.StandardContext$ContextFilterMaps.<init>()",
    "otherKiekerPattern" : null,
    "module" : "",
    "name" : "catalina.core.StandardContext$ContextFilterMaps#<init>",
    "key" : "org.apache.catalina.core.StandardContext$ContextFilterMaps.<init>_",
    "otherKey" : null,
    "parent" : "org.apache.catalina.core.TestStandardContext#testAddPreDestroyMethodConflicts",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.apache.catalina.core.StandardContext#<init>",
    "kiekerPattern" : "public new org.apache.catalina.core.StandardContext.<init>()",
    "otherKiekerPattern" : null,
    "module" : "",
    "name" : "catalina.core.StandardContext#<init>",
    "key" : "org.apache.catalina.core.StandardContext.<init>_",
    "otherKey" : null,
    "parent" : "org.apache.catalina.core.TestStandardContext#testAddPreDestroyMethodConflicts",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ {
      "call" : "org.apache.tomcat.util.res.StringManager#getManager",
      "kiekerPattern" : "public static final org.apache.tomcat.util.res.StringManager org.apache.tomcat.util.res.StringManager.getManager(java.lang.Class)",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "tomcat.util.res.StringManager#getManager",
      "key" : "org.apache.tomcat.util.res.StringManager.getManager_Class",
      "otherKey" : null,
      "parent" : "org.apache.catalina.core.StandardContext#<init>",
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
          "children" : [ ]
        } ]
      } ]
    }, {
      "call" : "org.apache.catalina.util.LifecycleBase#<init>",
      "kiekerPattern" : "public new org.apache.catalina.util.LifecycleBase.<init>()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "catalina.util.LifecycleBase#<init>",
      "key" : "org.apache.catalina.util.LifecycleBase.<init>_",
      "otherKey" : null,
      "parent" : "org.apache.catalina.core.StandardContext#<init>",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.apache.catalina.util.LifecycleMBeanBase#<init>",
      "kiekerPattern" : "public new org.apache.catalina.util.LifecycleMBeanBase.<init>()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "catalina.util.LifecycleMBeanBase#<init>",
      "key" : "org.apache.catalina.util.LifecycleMBeanBase.<init>_",
      "otherKey" : null,
      "parent" : "org.apache.catalina.core.StandardContext#<init>",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.apache.catalina.valves.ValveBase#<init>",
      "kiekerPattern" : "public new org.apache.catalina.valves.ValveBase.<init>(boolean)",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "catalina.valves.ValveBase#<init>",
      "key" : "org.apache.catalina.valves.ValveBase.<init>_boolean",
      "otherKey" : null,
      "parent" : "org.apache.catalina.core.StandardContext#<init>",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.apache.catalina.core.StandardContextValve#<init>",
      "kiekerPattern" : "public new org.apache.catalina.core.StandardContextValve.<init>()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "catalina.core.StandardContextValve#<init>",
      "key" : "org.apache.catalina.core.StandardContextValve.<init>_",
      "otherKey" : null,
      "parent" : "org.apache.catalina.core.StandardContext#<init>",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.apache.catalina.core.StandardPipeline#setBasic",
      "kiekerPattern" : "public void org.apache.catalina.core.StandardPipeline.setBasic(org.apache.catalina.Valve)",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "catalina.core.StandardPipeline#setBasic",
      "key" : "org.apache.catalina.core.StandardPipeline.setBasic_Valve",
      "otherKey" : null,
      "parent" : "org.apache.catalina.core.StandardContext#<init>",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.apache.catalina.valves.ValveBase#setContainer",
        "kiekerPattern" : "public void org.apache.catalina.valves.ValveBase.setContainer(org.apache.catalina.Container)",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "catalina.valves.ValveBase#setContainer",
        "key" : "org.apache.catalina.valves.ValveBase.setContainer_Container",
        "otherKey" : null,
        "parent" : "org.apache.catalina.core.StandardPipeline#setBasic",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.apache.catalina.util.LifecycleBase#getState",
        "kiekerPattern" : "public org.apache.catalina.LifecycleState org.apache.catalina.util.LifecycleBase.getState()",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "catalina.util.LifecycleBase#getState",
        "key" : "org.apache.catalina.util.LifecycleBase.getState_",
        "otherKey" : null,
        "parent" : "org.apache.catalina.core.StandardPipeline#setBasic",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.apache.catalina.LifecycleState#isAvailable",
        "kiekerPattern" : "public boolean org.apache.catalina.LifecycleState.isAvailable()",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "catalina.LifecycleState#isAvailable",
        "key" : "org.apache.catalina.LifecycleState.isAvailable_",
        "otherKey" : null,
        "parent" : "org.apache.catalina.core.StandardPipeline#setBasic",
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
  }, {
    "call" : "org.apache.catalina.core.StandardContext#addPreDestroyMethod",
    "kiekerPattern" : "public void org.apache.catalina.core.StandardContext.addPreDestroyMethod(java.lang.String,java.lang.String)",
    "otherKiekerPattern" : null,
    "module" : "",
    "name" : "catalina.core.StandardContext#addPreDestroyMethod",
    "key" : "org.apache.catalina.core.StandardContext.addPreDestroyMethod_String_String",
    "otherKey" : null,
    "parent" : "org.apache.catalina.core.TestStandardContext#testAddPreDestroyMethodConflicts",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ {
      "call" : "org.apache.catalina.core.ContainerBase#fireContainerEvent",
      "kiekerPattern" : "public void org.apache.catalina.core.ContainerBase.fireContainerEvent(java.lang.String,java.lang.Object)",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "catalina.core.ContainerBase#fireContainerEvent",
      "key" : "org.apache.catalina.core.ContainerBase.fireContainerEvent_String_Object",
      "otherKey" : null,
      "parent" : "org.apache.catalina.core.StandardContext#addPreDestroyMethod",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.apache.tomcat.util.res.StringManager#getString",
      "kiekerPattern" : "public java.lang.String org.apache.tomcat.util.res.StringManager.getString(java.lang.String,java.lang.Object)",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "tomcat.util.res.StringManager#getString",
      "key" : "org.apache.tomcat.util.res.StringManager.getString_String_Object",
      "otherKey" : null,
      "parent" : "org.apache.catalina.core.StandardContext#addPreDestroyMethod",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.apache.tomcat.util.res.StringManager#getString",
        "kiekerPattern" : "public java.lang.String org.apache.tomcat.util.res.StringManager.getString(java.lang.String)",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "tomcat.util.res.StringManager#getString",
        "key" : "org.apache.tomcat.util.res.StringManager.getString_String",
        "otherKey" : null,
        "parent" : "org.apache.tomcat.util.res.StringManager#getString",
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
var margin = {top: 20, right: 120, bottom: 20, left: 462},
   width = 2467- margin.right - margin.left,
   height = 735 - margin.top - margin.bottom;
