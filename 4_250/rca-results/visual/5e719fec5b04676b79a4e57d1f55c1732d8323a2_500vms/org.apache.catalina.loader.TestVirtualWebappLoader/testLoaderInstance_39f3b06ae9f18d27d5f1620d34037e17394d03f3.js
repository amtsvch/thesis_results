if (document.getElementById('testcaseDiv') != null) { 
   document.getElementById('testcaseDiv').innerHTML="Commit: <a href='javascript:fallbackCopyTextToClipboard(\"-commit 5e719fec5b04676b79a4e57d1f55c1732d8323a2 -test org.apache.catalina.loader.TestVirtualWebappLoader#testLoaderInstance\")'>5e719fec5b04676b79a4e57d1f55c1732d8323a2</a><br>Test Case: org.apache.catalina.loader.TestVirtualWebappLoader#testLoaderInstance<br>";
}

var source = {"current":
{
 "org.apache.tomcat.util.digester.Digester.addRule_String_Rule":
 `// --------------------------------------------------------- Rule Methods
/**
 * <p>Register a new Rule matching the specified pattern.
 * This method sets the <code>Digester</code> property on the rule.</p>
 *
 * @param pattern Element matching pattern
 * @param rule Rule to be registered
 */
public void addRule(String pattern, Rule rule) {
    rule.setDigester(this);
    getRules().add(pattern, rule);
}`,"org.apache.tomcat.util.net.AbstractEndpoint.isSSLEnabled_":
 `public boolean isSSLEnabled() {
    return SSLEnabled;
}`,"org.apache.tomcat.util.modeler.ManagedBean.addOperation_OperationInfo":
 `/**
 * Add a new operation to the set of operations for this MBean.
 *
 * @param operation The new operation descriptor
 */
public void addOperation(OperationInfo operation) {
    operations.put(createOperationKey(operation), operation);
}`,"org.apache.tomcat.util.modeler.Registry.registerComponent_Object_ObjectName_String":
 `/**
 * Register a component
 *
 * @param bean The bean
 * @param oname The object name
 * @param type The registry type
 * @throws Exception Error registering component
 */
public void registerComponent(Object bean, ObjectName oname, String type) throws Exception {
    if (log.isDebugEnabled()) {
        log.debug("Managed= " + oname);
    }
    if (bean == null) {
        log.error(sm.getString("registry.nullBean", oname));
        return;
    }
    try {
        if (type == null) {
            type = bean.getClass().getName();
        }
        ManagedBean managed = findManagedBean(null, bean.getClass(), type);
        // The real mbean is created and registered
        DynamicMBean mbean = managed.createMBean(bean);
        if (getMBeanServer().isRegistered(oname)) {
            if (log.isDebugEnabled()) {
                log.debug("Unregistering existing component " + oname);
            }
            getMBeanServer().unregisterMBean(oname);
        }
        getMBeanServer().registerMBean(mbean, oname);
    } catch (Exception ex) {
        log.error(sm.getString("registry.registerError", oname), ex);
        throw ex;
    }
}`,"org.apache.tomcat.util.digester.Digester.setNamespaceAware_boolean":
 `/**
 * Set the "namespace aware" flag for parsers we create.
 *
 * @param namespaceAware The new "namespace aware" flag
 */
public void setNamespaceAware(boolean namespaceAware) {
    this.namespaceAware = namespaceAware;
}`,"org.apache.tomcat.util.digester.ObjectCreateRule.<init>_String_String":
 `/**
 * Construct an object create rule with the specified class name and an
 * optional attribute name containing an override.
 *
 * @param className Java class name of the object to be created
 * @param attributeName Attribute name which, if present, contains an
 *  override of the class name to create
 */
public ObjectCreateRule(String className, String attributeName) {
    this.className = className;
    this.attributeName = attributeName;
}`,"org.apache.tomcat.util.modeler.OperationInfo.getSignature_":
 `/**
 * @return the set of parameters for this operation.
 */
public ParameterInfo[] getSignature() {
    Lock readLock = parametersLock.readLock();
    readLock.lock();
    try {
        return this.parameters;
    } finally {
        readLock.unlock();
    }
}`,"org.apache.tomcat.util.modeler.Registry.findManagedBean_String":
 `/**
 * Find and return the managed bean definition for the specified bean name,
 * if any; otherwise return <code>null</code>.
 *
 * @param name Name of the managed bean to be returned. Since 1.1, both
 *            short names or the full name of the class can be used.
 * @return the managed bean
 * @since 1.0
 */
public ManagedBean findManagedBean(String name) {
    // XXX Group ?? Use Group + Type
    ManagedBean mb = descriptors.get(name);
    if (mb == null)
        mb = descriptorsByClass.get(name);
    return mb;
}`,"org.apache.tomcat.util.modeler.modules.MbeansDescriptorsDigesterSource.createDigester_":
 `private static Digester createDigester() {
    Digester digester = new Digester();
    digester.setNamespaceAware(false);
    digester.setValidating(false);
    URL url = Registry.getRegistry(null, null).getClass().getResource("/org/apache/tomcat/util/modeler/mbeans-descriptors.dtd");
    digester.register("-//Apache Software Foundation//DTD Model MBeans Configuration File", url.toString());
    // Configure the parsing rules
    digester.addObjectCreate("mbeans-descriptors/mbean", "org.apache.tomcat.util.modeler.ManagedBean");
    digester.addSetProperties("mbeans-descriptors/mbean");
    digester.addSetNext("mbeans-descriptors/mbean", "add", "java.lang.Object");
    digester.addObjectCreate("mbeans-descriptors/mbean/attribute", "org.apache.tomcat.util.modeler.AttributeInfo");
    digester.addSetProperties("mbeans-descriptors/mbean/attribute");
    digester.addSetNext("mbeans-descriptors/mbean/attribute", "addAttribute", "org.apache.tomcat.util.modeler.AttributeInfo");
    digester.addObjectCreate("mbeans-descriptors/mbean/notification", "org.apache.tomcat.util.modeler.NotificationInfo");
    digester.addSetProperties("mbeans-descriptors/mbean/notification");
    digester.addSetNext("mbeans-descriptors/mbean/notification", "addNotification", "org.apache.tomcat.util.modeler.NotificationInfo");
    digester.addObjectCreate("mbeans-descriptors/mbean/notification/descriptor/field", "org.apache.tomcat.util.modeler.FieldInfo");
    digester.addSetProperties("mbeans-descriptors/mbean/notification/descriptor/field");
    digester.addSetNext("mbeans-descriptors/mbean/notification/descriptor/field", "addField", "org.apache.tomcat.util.modeler.FieldInfo");
    digester.addCallMethod("mbeans-descriptors/mbean/notification/notification-type", "addNotifType", 0);
    digester.addObjectCreate("mbeans-descriptors/mbean/operation", "org.apache.tomcat.util.modeler.OperationInfo");
    digester.addSetProperties("mbeans-descriptors/mbean/operation");
    digester.addSetNext("mbeans-descriptors/mbean/operation", "addOperation", "org.apache.tomcat.util.modeler.OperationInfo");
    digester.addObjectCreate("mbeans-descriptors/mbean/operation/descriptor/field", "org.apache.tomcat.util.modeler.FieldInfo");
    digester.addSetProperties("mbeans-descriptors/mbean/operation/descriptor/field");
    digester.addSetNext("mbeans-descriptors/mbean/operation/descriptor/field", "addField", "org.apache.tomcat.util.modeler.FieldInfo");
    digester.addObjectCreate("mbeans-descriptors/mbean/operation/parameter", "org.apache.tomcat.util.modeler.ParameterInfo");
    digester.addSetProperties("mbeans-descriptors/mbean/operation/parameter");
    digester.addSetNext("mbeans-descriptors/mbean/operation/parameter", "addParameter", "org.apache.tomcat.util.modeler.ParameterInfo");
    return digester;
}`,"org.apache.tomcat.util.modeler.FeatureInfo.<init>_":
 ``,"org.apache.catalina.core.StandardContext.<init>_":
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
}`,"org.apache.tomcat.util.digester.SetPropertiesRule.begin_String_String_Attributes":
 `/**
 * Process the beginning of this element.
 *
 * @param namespace the namespace URI of the matching element, or an
 *   empty string if the parser is not namespace aware or the element has
 *   no namespace
 * @param theName the local name if the parser is namespace aware, or just
 *   the element name otherwise
 * @param attributes The attribute list for this element
 */
@Override
public void begin(String namespace, String theName, Attributes attributes) throws Exception {
    // Populate the corresponding properties of the top object
    Object top = digester.peek();
    if (digester.log.isDebugEnabled()) {
        if (top != null) {
            digester.log.debug("[SetPropertiesRule]{" + digester.match + "} Set " + top.getClass().getName() + " properties");
        } else {
            digester.log.debug("[SetPropertiesRule]{" + digester.match + "} Set NULL properties");
        }
    }
    StringBuilder code = digester.getGeneratedCode();
    String variableName = null;
    if (code != null) {
        variableName = digester.toVariableName(top);
    }
    for (int i = 0; i < attributes.getLength(); i++) {
        String name = attributes.getLocalName(i);
        if (name.isEmpty()) {
            name = attributes.getQName(i);
        }
        String value = attributes.getValue(i);
        if (digester.log.isDebugEnabled()) {
            digester.log.debug("[SetPropertiesRule]{" + digester.match + "} Setting property '" + name + "' to '" + value + "'");
        }
        if (!digester.isFakeAttribute(top, name) && (excludes == null || !excludes.containsKey(name))) {
            StringBuilder actualMethod = null;
            if (code != null) {
                actualMethod = new StringBuilder();
            }
            if (!IntrospectionUtils.setProperty(top, name, value, true, actualMethod)) {
                if (digester.getRulesValidation() && !"optional".equals(name)) {
                    digester.log.warn(sm.getString("rule.noProperty", digester.match, name, value));
                }
            } else {
                if (code != null) {
                    code.append(variableName).append(".").append(actualMethod).append(';');
                    code.append(System.lineSeparator());
                }
            }
        }
    }
    if (top instanceof Listener) {
        ((Listener) top).endSetPropertiesRule();
        if (code != null) {
            code.append("((org.apache.tomcat.util.digester.SetPropertiesRule.Listener) ");
            code.append(variableName).append(").endSetPropertiesRule();");
            code.append(System.lineSeparator());
        }
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
}`,"org.apache.tomcat.util.digester.RulesBase.rules_":
 `/**
 * Return a List of all registered Rule instances, or a zero-length List
 * if there are no registered Rule instances.  If more than one Rule
 * instance has been registered, they <strong>must</strong> be returned
 * in the order originally registered through the <code>add()</code>
 * method.
 */
@Override
public List<Rule> rules() {
    return this.rules;
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
}`,"org.apache.tomcat.util.digester.ObjectCreateRule.end_String_String":
 `/**
 * Process the end of this element.
 *
 * @param namespace the namespace URI of the matching element, or an
 *   empty string if the parser is not namespace aware or the element has
 *   no namespace
 * @param name the local name if the parser is namespace aware, or just
 *   the element name otherwise
 */
@Override
public void end(String namespace, String name) throws Exception {
    Object top = digester.pop();
    if (digester.log.isDebugEnabled()) {
        digester.log.debug("[ObjectCreateRule]{" + digester.match + "} Pop " + top.getClass().getName());
    }
}`,"org.apache.catalina.LifecycleState.getLifecycleEvent_":
 `public String getLifecycleEvent() {
    return lifecycleEvent;
}`,"org.apache.tomcat.util.modeler.BaseModelMBean.setManagedBean_ManagedBean":
 `public void setManagedBean(ManagedBean managedBean) {
    this.managedBean = managedBean;
}`,"org.apache.catalina.util.URLEncoder.setEncodeSpaceAsPlus_boolean":
 `public void setEncodeSpaceAsPlus(boolean encodeSpaceAsPlus) {
    this.encodeSpaceAsPlus = encodeSpaceAsPlus;
}`,"org.apache.catalina.loader.WebappLoader.getLoaderClass_":
 `/**
 * @return the ClassLoader class name.
 */
public String getLoaderClass() {
    return this.loaderClass;
}`,"org.apache.catalina.core.StandardEngine.getDomainInternal_":
 `@Override
protected String getDomainInternal() {
    return getName();
}`,"org.apache.catalina.loader.WebappClassLoaderBase.findLoadedClass0_String":
 `/**
 * Finds the class with the given name if it has previously been
 * loaded and cached by this class loader, and return the Class object.
 * If this class has not been cached, return <code>null</code>.
 *
 * @param name The binary name of the resource to return
 * @return a loaded class
 */
protected Class<?> findLoadedClass0(String name) {
    String path = binaryNameToPath(name, true);
    ResourceEntry entry = resourceEntries.get(path);
    if (entry != null) {
        return entry.loadedClass;
    }
    return null;
}`,"org.apache.tomcat.util.modeler.AttributeInfo.isReadable_":
 `/**
 * Is this attribute readable by management applications?
 * @return <code>true</code> if readable
 */
public boolean isReadable() {
    return this.readable;
}`,"org.apache.catalina.util.LifecycleMBeanBase.<init>_":
 ``,"org.apache.tomcat.util.modeler.ManagedBean.createOperationKey_OperationInfo":
 `private String createOperationKey(OperationInfo operation) {
    StringBuilder key = new StringBuilder(operation.getName());
    key.append('(');
    StringUtils.join(operation.getSignature(), ',', FeatureInfo::getType, key);
    key.append(')');
    return key.toString().intern();
}`,"org.apache.tomcat.util.digester.Digester.peek_":
 `/**
 * Return the top object on the stack without removing it.  If there are
 * no objects on the stack, return <code>null</code>.
 * @return the top object
 */
public Object peek() {
    try {
        return stack.peek();
    } catch (EmptyStackException e) {
        log.warn(sm.getString("digester.emptyStack"));
        return null;
    }
}`,"org.apache.tomcat.util.IntrospectionUtils.setProperty_Object_String_String_boolean_StringBuilder":
 `// setPropertyMethodVoid is not null when used
@SuppressWarnings("null")
public static boolean setProperty(Object o, String name, String value, boolean invokeSetProperty, StringBuilder actualMethod) {
    if (log.isDebugEnabled())
        log.debug("IntrospectionUtils: setProperty(" + o.getClass() + " " + name + "=" + value + ")");
    if (actualMethod == null && XReflectionIntrospectionUtils.isEnabled()) {
        return XReflectionIntrospectionUtils.setPropertyInternal(o, name, value, invokeSetProperty);
    }
    String setter = "set" + capitalize(name);
    try {
        Method[] methods = findMethods(o.getClass());
        Method setPropertyMethodVoid = null;
        Method setPropertyMethodBool = null;
        // First, the ideal case - a setFoo( String ) method
        for (Method item : methods) {
            Class<?>[] paramT = item.getParameterTypes();
            if (setter.equals(item.getName()) && paramT.length == 1 && "java.lang.String".equals(paramT[0].getName())) {
                item.invoke(o, new Object[] { value });
                if (actualMethod != null) {
                    actualMethod.append(item.getName()).append("(\"").append(escape(value)).append("\")");
                }
                return true;
            }
        }
        // Try a setFoo ( int ) or ( boolean )
        for (Method method : methods) {
            boolean ok = true;
            if (setter.equals(method.getName()) && method.getParameterTypes().length == 1) {
                // match - find the type and invoke it
                Class<?> paramType = method.getParameterTypes()[0];
                Object[] params = new Object[1];
                // Try a setFoo ( int )
                if ("java.lang.Integer".equals(paramType.getName()) || "int".equals(paramType.getName())) {
                    try {
                        params[0] = Integer.valueOf(value);
                    } catch (NumberFormatException ex) {
                        ok = false;
                    }
                    if (actualMethod != null) {
                        actualMethod.append(method.getName()).append("(Integer.valueOf(\"").append(value).append("\"))");
                    }
                    // Try a setFoo ( long )
                } else if ("java.lang.Long".equals(paramType.getName()) || "long".equals(paramType.getName())) {
                    try {
                        params[0] = Long.valueOf(value);
                    } catch (NumberFormatException ex) {
                        ok = false;
                    }
                    if (actualMethod != null) {
                        actualMethod.append(method.getName()).append("(Long.valueOf(\"").append(value).append("\"))");
                    }
                    // Try a setFoo ( boolean )
                } else if ("java.lang.Boolean".equals(paramType.getName()) || "boolean".equals(paramType.getName())) {
                    params[0] = Boolean.valueOf(value);
                    if (actualMethod != null) {
                        actualMethod.append(method.getName()).append("(Boolean.valueOf(\"").append(value).append("\"))");
                    }
                    // Try a setFoo ( InetAddress )
                } else if ("java.net.InetAddress".equals(paramType.getName())) {
                    try {
                        params[0] = InetAddress.getByName(value);
                    } catch (UnknownHostException exc) {
                        if (log.isDebugEnabled())
                            log.debug("IntrospectionUtils: Unable to resolve host name:" + value);
                        ok = false;
                    }
                    if (actualMethod != null) {
                        actualMethod.append(method.getName()).append("(InetAddress.getByName(\"").append(value).append("\"))");
                    }
                    // Unknown type
                } else {
                    if (log.isDebugEnabled())
                        log.debug("IntrospectionUtils: Unknown type " + paramType.getName());
                }
                if (ok) {
                    method.invoke(o, params);
                    return true;
                }
            }
            // save "setProperty" for later
            if ("setProperty".equals(method.getName())) {
                if (method.getReturnType() == Boolean.TYPE) {
                    setPropertyMethodBool = method;
                } else {
                    setPropertyMethodVoid = method;
                }
            }
        }
        // Ok, no setXXX found, try a setProperty("name", "value")
        if (invokeSetProperty && (setPropertyMethodBool != null || setPropertyMethodVoid != null)) {
            if (actualMethod != null) {
                actualMethod.append("setProperty(\"").append(name).append("\", \"").append(escape(value)).append("\")");
            }
            Object[] params = new Object[2];
            params[0] = name;
            params[1] = value;
            if (setPropertyMethodBool != null) {
                try {
                    return ((Boolean) setPropertyMethodBool.invoke(o, params)).booleanValue();
                } catch (IllegalArgumentException biae) {
                    // the boolean method had the wrong
                    // parameter types. lets try the other
                    if (setPropertyMethodVoid != null) {
                        setPropertyMethodVoid.invoke(o, params);
                        return true;
                    } else {
                        throw biae;
                    }
                }
            } else {
                setPropertyMethodVoid.invoke(o, params);
                return true;
            }
        }
    } catch (IllegalArgumentException | SecurityException | IllegalAccessException e) {
        log.warn(sm.getString("introspectionUtils.setPropertyError", name, value, o.getClass()), e);
    } catch (InvocationTargetException e) {
        ExceptionUtils.handleThrowable(e.getCause());
        log.warn(sm.getString("introspectionUtils.setPropertyError", name, value, o.getClass()), e);
    }
    return false;
}`,"org.apache.juli.logging.DirectJDKLog.<init>_String":
 `public DirectJDKLog(String name) {
    logger = Logger.getLogger(name);
}`,"org.apache.tomcat.util.digester.Rule.begin_String_String_Attributes":
 `// --------------------------------------------------------- Public Methods
/**
 * This method is called when the beginning of a matching XML element
 * is encountered. The default implementation is a NO-OP.
 *
 * @param namespace the namespace URI of the matching element, or an
 *                  empty string if the parser is not namespace aware or the
 *                  element has no namespace
 * @param name the local name if the parser is namespace aware, or just
 *             the element name otherwise
 * @param attributes The attribute list of this element
 *
 * @throws Exception if an error occurs while processing the event
 */
public void begin(String namespace, String name, Attributes attributes) throws Exception {
    // NO-OP by default.
}`,"org.apache.catalina.loader.WebappClassLoaderBase.clearReferencesThreads_":
 `// thread.stop()
@SuppressWarnings("deprecation")
private void clearReferencesThreads() {
    Thread[] threads = getThreads();
    List<Thread> threadsToStop = new ArrayList<>();
    // Iterate over the set of threads
    for (Thread thread : threads) {
        if (thread != null) {
            ClassLoader ccl = thread.getContextClassLoader();
            if (ccl == this) {
                // Don't warn about this thread
                if (thread == Thread.currentThread()) {
                    continue;
                }
                final String threadName = thread.getName();
                // JVM controlled threads
                ThreadGroup tg = thread.getThreadGroup();
                if (tg != null && JVM_THREAD_GROUP_NAMES.contains(tg.getName())) {
                    // HttpClient keep-alive threads
                    if (clearReferencesHttpClientKeepAliveThread && threadName.equals("Keep-Alive-Timer")) {
                        thread.setContextClassLoader(parent);
                        log.debug(sm.getString("webappClassLoader.checkThreadsHttpClient"));
                    }
                    // Don't warn about remaining JVM controlled threads
                    continue;
                }
                // Skip threads that have already died
                if (!thread.isAlive()) {
                    continue;
                }
                // TimerThread can be stopped safely so treat separately
                // "java.util.TimerThread" in Sun/Oracle JDK
                // "java.util.Timer$TimerImpl" in Apache Harmony and in IBM JDK
                if (thread.getClass().getName().startsWith("java.util.Timer") && clearReferencesStopTimerThreads) {
                    clearReferencesStopTimerThread(thread);
                    continue;
                }
                if (isRequestThread(thread)) {
                    log.warn(sm.getString("webappClassLoader.stackTraceRequestThread", getContextName(), threadName, getStackTrace(thread)));
                } else {
                    log.warn(sm.getString("webappClassLoader.stackTrace", getContextName(), threadName, getStackTrace(thread)));
                }
                // Don't try and stop the threads unless explicitly
                // configured to do so
                if (!clearReferencesStopThreads) {
                    continue;
                }
                // If the thread has been started via an executor, try
                // shutting down the executor
                boolean usingExecutor = false;
                try {
                    // Runnable wrapped by Thread
                    // "target" in Sun/Oracle JDK
                    // "runnable" in IBM JDK
                    // "action" in Apache Harmony
                    Object target = null;
                    for (String fieldName : new String[] { "target", "runnable", "action" }) {
                        try {
                            Field targetField = thread.getClass().getDeclaredField(fieldName);
                            targetField.setAccessible(true);
                            target = targetField.get(thread);
                            break;
                        } catch (NoSuchFieldException nfe) {
                            continue;
                        }
                    }
                    // "java.util.concurrent" code is in public domain,
                    // so all implementations are similar
                    if (target != null && target.getClass().getCanonicalName() != null && target.getClass().getCanonicalName().equals("java.util.concurrent.ThreadPoolExecutor.Worker")) {
                        Field executorField = target.getClass().getDeclaredField("this$0");
                        executorField.setAccessible(true);
                        Object executor = executorField.get(target);
                        if (executor instanceof ThreadPoolExecutor) {
                            ((ThreadPoolExecutor) executor).shutdownNow();
                            usingExecutor = true;
                        }
                    }
                } catch (/*SecurityException |*/
                NoSuchFieldException | /*IllegalArgumentException |*/
                IllegalAccessException | RuntimeException e) {
                    // FIXME: InaccessibleObjectException is only available in Java 9+,
                    // swapped for RuntimeException for now
                    log.warn(sm.getString("webappClassLoader.stopThreadFail", thread.getName(), getContextName()), e);
                }
                // Stopping an executor automatically interrupts the
                // associated threads. For non-executor threads, interrupt
                // them here.
                if (!usingExecutor && !thread.isInterrupted()) {
                    thread.interrupt();
                }
                // Threads are expected to take a short time to stop after
                // being interrupted. Make a note of all threads that are
                // expected to stop to enable them to be checked at the end
                // of this method.
                threadsToStop.add(thread);
            }
        }
    }
    // If thread stopping is enabled, threads should have been stopped above
    // when the executor was shut down or the thread was interrupted but
    // that depends on the thread correctly handling the interrupt. Check
    // each thread and if any are still running give all threads up to a
    // total of 2 seconds to shutdown.
    int count = 0;
    for (Thread t : threadsToStop) {
        while (t.isAlive() && count < 100) {
            try {
                Thread.sleep(20);
            } catch (InterruptedException e) {
                // Quit the while loop
                break;
            }
            count++;
        }
        if (t.isAlive()) {
            // This method is deprecated and for good reason. This is
            // very risky code but is the only option at this point.
            // A *very* good reason for apps to do this clean-up
            // themselves.
            t.stop();
        }
    }
}`,"org.apache.tomcat.util.modeler.ManagedBean.getNotifications_":
 `/**
 * @return the collection of notifications for this MBean.
 */
public NotificationInfo[] getNotifications() {
    return this.notifications;
}`,"org.apache.tomcat.util.modeler.FeatureInfo.setType_String":
 `public void setType(String type) {
    this.type = type;
}`,"org.apache.tomcat.util.digester.SetPropertiesRule.<init>_":
 `public SetPropertiesRule() {
    excludes = null;
}`,"org.apache.tomcat.util.digester.Digester.reset_":
 `public void reset() {
    root = null;
    setErrorHandler(null);
    clear();
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
}`,"org.apache.tomcat.util.digester.Digester.clear_":
 `// --------------------------------------------------- Object Stack Methods
/**
 * Clear the current contents of the object stack.
 * <p>
 * Calling this method <i>might</i> allow another document of the same type
 * to be correctly parsed. However this method was not intended for this
 * purpose. In general, a separate Digester object should be created for
 * each document to be parsed.
 */
public void clear() {
    match = "";
    bodyTexts.clear();
    params.clear();
    publicId = null;
    stack.clear();
    log = null;
    saxLog = null;
    configured = false;
}`,"org.apache.tomcat.util.modeler.ManagedBean.getDescription_":
 `/**
 * @return the human-readable description of this MBean.
 */
public String getDescription() {
    return this.description;
}`,"org.apache.tomcat.util.digester.Digester.getClassLoader_":
 `/**
 * Return the class loader to be used for instantiating application objects
 * when required.  This is determined based upon the following rules:
 * <ul>
 * <li>The class loader set by <code>setClassLoader()</code>, if any</li>
 * <li>The thread context class loader, if it exists and the
 *     <code>useContextClassLoader</code> property is set to true</li>
 * <li>The class loader used to load the Digester class itself.
 * </ul>
 * @return the classloader
 */
public ClassLoader getClassLoader() {
    if (this.classLoader != null) {
        return this.classLoader;
    }
    if (this.useContextClassLoader) {
        ClassLoader classLoader = Thread.currentThread().getContextClassLoader();
        if (classLoader != null) {
            return classLoader;
        }
    }
    return this.getClass().getClassLoader();
}`,"org.apache.coyote.http11.AbstractHttp11Protocol.getEndpoint_":
 `/**
 * {@inheritDoc}
 * <p>
 * Over-ridden here to make the method visible to nested classes.
 */
@Override
protected AbstractEndpoint<S, ?> getEndpoint() {
    return super.getEndpoint();
}`,"org.apache.catalina.core.ApplicationContext.getFacade_":
 `/**
 * @return the facade associated with this ApplicationContext.
 */
protected ServletContext getFacade() {
    return this.facade;
}`,"org.apache.catalina.loader.WebappClassLoaderBase.getContextName_":
 `/**
 * @return the context name for this class loader.
 */
public String getContextName() {
    if (resources == null) {
        return "Unknown";
    } else {
        return resources.getContext().getBaseName();
    }
}`,"org.apache.juli.logging.DirectJDKLog.debug_Object":
 `@Override
public final void debug(Object message) {
    log(Level.FINE, String.valueOf(message), null);
}`,"org.apache.juli.logging.LogFactory.getLog_String":
 `/**
 * Convenience method to return a named logger, without the application
 * having to care about factories.
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
public static Log getLog(String name) throws LogConfigurationException {
    return getFactory().getInstance(name);
}`,"org.apache.tomcat.util.modeler.OperationInfo.getImpact_":
 `// ------------------------------------------------------------- Properties
/**
 * @return the "impact" of this operation, which should be
 *  a (case-insensitive) string value "ACTION", "ACTION_INFO",
 *  "INFO", or "UNKNOWN".
 */
public String getImpact() {
    return this.impact;
}`,"org.apache.tomcat.util.modeler.OperationInfo.<init>_":
 `// ----------------------------------------------------------- Constructors
/**
 * Standard zero-arguments constructor.
 */
public OperationInfo() {
    super();
}`,"org.apache.tomcat.util.modeler.ManagedBean.<init>_":
 `/**
 * Constructor. Will add default attributes.
 */
public ManagedBean() {
    AttributeInfo ai = new AttributeInfo();
    ai.setName("modelerType");
    ai.setDescription("Type of the modeled resource. Can be set only once");
    ai.setType("java.lang.String");
    ai.setWriteable(false);
    addAttribute(ai);
}`,"org.apache.catalina.core.StandardContext.getResources_":
 `@Override
public WebResourceRoot getResources() {
    Lock readLock = resourcesLock.readLock();
    readLock.lock();
    try {
        return resources;
    } finally {
        readLock.unlock();
    }
}`,"org.apache.tomcat.util.ExceptionUtils.handleThrowable_Throwable":
 `/**
 * Checks whether the supplied Throwable is one that needs to be
 * rethrown and swallows all others.
 * @param t the Throwable to check
 */
public static void handleThrowable(Throwable t) {
    if (t instanceof ThreadDeath) {
        throw (ThreadDeath) t;
    }
    if (t instanceof StackOverflowError) {
        // Swallow silently - it should be recoverable
        return;
    }
    if (t instanceof VirtualMachineError) {
        throw (VirtualMachineError) t;
    }
    // All other instances of Throwable will be silently swallowed
}`,"org.apache.catalina.util.LifecycleMBeanBase.initInternal_":
 `/**
 * Sub-classes wishing to perform additional initialization should override
 * this method, ensuring that super.initInternal() is the first call in the
 * overriding method.
 */
@Override
protected void initInternal() throws LifecycleException {
    // If oname is not null then registration has already happened via
    // preRegister().
    if (oname == null) {
        oname = register(this, getObjectNameKeyProperties());
    }
}`,"org.apache.tomcat.util.IntrospectionUtils.callMethod1_Object_String_Object_String_ClassLoader":
 `public static Object callMethod1(Object target, String methodN, Object param1, String typeParam1, ClassLoader cl) throws Exception {
    if (target == null || methodN == null || param1 == null) {
        throw new IllegalArgumentException(sm.getString("introspectionUtils.nullParameter"));
    }
    if (log.isDebugEnabled())
        log.debug("IntrospectionUtils: callMethod1 " + target.getClass().getName() + " " + param1.getClass().getName() + " " + typeParam1);
    Class<?>[] params = new Class[1];
    if (typeParam1 == null)
        params[0] = param1.getClass();
    else
        params[0] = cl.loadClass(typeParam1);
    Method m = findMethod(target.getClass(), methodN, params);
    if (m == null)
        throw new NoSuchMethodException(target.getClass().getName() + " " + methodN);
    try {
        return m.invoke(target, new Object[] { param1 });
    } catch (InvocationTargetException ie) {
        ExceptionUtils.handleThrowable(ie.getCause());
        throw ie;
    }
}`,"org.apache.tomcat.util.modeler.ManagedBean.getName_":
 `/**
 * @return the name of this managed bean, which must be unique
 *  among all MBeans managed by a particular MBeans server.
 */
public String getName() {
    return this.name;
}`,"org.apache.catalina.loader.WebappLoader.startInternal_":
 `/**
 * Start associated {@link ClassLoader} and implement the requirements
 * of {@link org.apache.catalina.util.LifecycleBase#startInternal()}.
 *
 * @exception LifecycleException if this component detects a fatal error
 *  that prevents this component from being used
 */
@Override
protected void startInternal() throws LifecycleException {
    if (log.isDebugEnabled())
        log.debug(sm.getString("webappLoader.starting"));
    if (context.getResources() == null) {
        log.info(sm.getString("webappLoader.noResources", context));
        setState(LifecycleState.STARTING);
        return;
    }
    // Construct a class loader based on our current repositories list
    try {
        classLoader = createClassLoader();
        classLoader.setResources(context.getResources());
        classLoader.setDelegate(this.delegate);
        // Configure our repositories
        setClassPath();
        setPermissions();
        classLoader.start();
        String contextName = context.getName();
        if (!contextName.startsWith("/")) {
            contextName = "/" + contextName;
        }
        ObjectName cloname = new ObjectName(context.getDomain() + ":type=" + classLoader.getClass().getSimpleName() + ",host=" + context.getParent().getName() + ",context=" + contextName);
        Registry.getRegistry(null, null).registerComponent(classLoader, cloname, null);
    } catch (Throwable t) {
        t = ExceptionUtils.unwrapInvocationTargetException(t);
        ExceptionUtils.handleThrowable(t);
        throw new LifecycleException(sm.getString("webappLoader.startError"), t);
    }
    setState(LifecycleState.STARTING);
}`,"org.apache.tomcat.util.digester.CallMethodRule.<init>_int_String_int":
 `/**
 * Construct a "call method" rule with the specified method name.  The
 * parameter types (if any) default to java.lang.String.
 *
 * @param targetOffset location of the target object. Positive numbers are
 * relative to the top of the digester object stack. Negative numbers
 * are relative to the bottom of the stack. Zero implies the top
 * object on the stack.
 * @param methodName Method name of the parent method to call
 * @param paramCount The number of parameters to collect, or
 *  zero for a single argument from the body of this element.
 */
public CallMethodRule(int targetOffset, String methodName, int paramCount) {
    this.targetOffset = targetOffset;
    this.methodName = methodName;
    this.paramCount = paramCount;
    if (paramCount == 0) {
        this.paramTypes = new Class[] { String.class };
    } else {
        this.paramTypes = new Class[paramCount];
        for (int i = 0; i < this.paramTypes.length; i++) {
            this.paramTypes[i] = String.class;
        }
    }
}`,"org.apache.catalina.util.URLEncoder.<init>_":
 `public URLEncoder() {
    this(new BitSet(256));
    for (char i = 'a'; i <= 'z'; i++) {
        addSafeCharacter(i);
    }
    for (char i = 'A'; i <= 'Z'; i++) {
        addSafeCharacter(i);
    }
    for (char i = '0'; i <= '9'; i++) {
        addSafeCharacter(i);
    }
}`,"org.apache.tomcat.util.modeler.OperationInfo.addParameter_ParameterInfo":
 `// --------------------------------------------------------- Public Methods
/**
 * Add a new parameter to the set of arguments for this operation.
 *
 * @param parameter The new parameter descriptor
 */
public void addParameter(ParameterInfo parameter) {
    Lock writeLock = parametersLock.writeLock();
    writeLock.lock();
    try {
        ParameterInfo[] results = new ParameterInfo[parameters.length + 1];
        System.arraycopy(parameters, 0, results, 0, parameters.length);
        results[parameters.length] = parameter;
        parameters = results;
        this.info = null;
    } finally {
        writeLock.unlock();
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
}`,"org.apache.catalina.core.StandardService.findConnectors_":
 `/**
 * Find and return the set of Connectors associated with this Service.
 */
@Override
public Connector[] findConnectors() {
    return connectors;
}`,"org.apache.tomcat.util.modeler.AttributeInfo.<init>_":
 ``,"jakarta.servlet.SessionTrackingMode.<init>_":
 ``,"org.apache.catalina.loader.WebappClassLoaderBase.findClassInternal_String":
 `/**
 * Find specified class in local repositories.
 *
 * @param name The binary name of the class to be loaded
 *
 * @return the loaded class, or null if the class isn't found
 */
protected Class<?> findClassInternal(String name) {
    checkStateForResourceLoading(name);
    if (name == null) {
        return null;
    }
    String path = binaryNameToPath(name, true);
    ResourceEntry entry = resourceEntries.get(path);
    WebResource resource = null;
    if (entry == null) {
        resource = resources.getClassLoaderResource(path);
        if (!resource.exists()) {
            return null;
        }
        entry = new ResourceEntry();
        entry.lastModified = resource.getLastModified();
        // Add the entry in the local resource repository
        synchronized (resourceEntries) {
            // Ensures that all the threads which may be in a race to load
            // a particular class all end up with the same ResourceEntry
            // instance
            ResourceEntry entry2 = resourceEntries.get(path);
            if (entry2 == null) {
                resourceEntries.put(path, entry);
            } else {
                entry = entry2;
            }
        }
    }
    Class<?> clazz = entry.loadedClass;
    if (clazz != null)
        return clazz;
    synchronized (JreCompat.isGraalAvailable() ? this : getClassLoadingLock(name)) {
        clazz = entry.loadedClass;
        if (clazz != null)
            return clazz;
        if (resource == null) {
            resource = resources.getClassLoaderResource(path);
        }
        if (!resource.exists()) {
            return null;
        }
        byte[] binaryContent = resource.getContent();
        if (binaryContent == null) {
            // Something went wrong reading the class bytes (and will have
            // been logged at debug level).
            return null;
        }
        Manifest manifest = resource.getManifest();
        URL codeBase = resource.getCodeBase();
        Certificate[] certificates = resource.getCertificates();
        if (transformers.size() > 0) {
            // If the resource is a class just being loaded, decorate it
            // with any attached transformers
            // Ignore leading '/' and trailing CLASS_FILE_SUFFIX
            // Should be cheaper than replacing '.' by '/' in class name.
            String internalName = path.substring(1, path.length() - CLASS_FILE_SUFFIX.length());
            for (ClassFileTransformer transformer : this.transformers) {
                try {
                    byte[] transformed = transformer.transform(this, internalName, null, null, binaryContent);
                    if (transformed != null) {
                        binaryContent = transformed;
                    }
                } catch (IllegalClassFormatException e) {
                    log.error(sm.getString("webappClassLoader.transformError", name), e);
                    return null;
                }
            }
        }
        // Looking up the package
        String packageName = null;
        int pos = name.lastIndexOf('.');
        if (pos != -1)
            packageName = name.substring(0, pos);
        Package pkg = null;
        if (packageName != null) {
            pkg = getPackage(packageName);
            // Define the package (if null)
            if (pkg == null) {
                try {
                    if (manifest == null) {
                        definePackage(packageName, null, null, null, null, null, null, null);
                    } else {
                        definePackage(packageName, manifest, codeBase);
                    }
                } catch (IllegalArgumentException e) {
                    // Ignore: normal error due to dual definition of package
                }
                pkg = getPackage(packageName);
            }
        }
        if (securityManager != null) {
            // Checking sealing
            if (pkg != null) {
                boolean sealCheck = true;
                if (pkg.isSealed()) {
                    sealCheck = pkg.isSealed(codeBase);
                } else {
                    sealCheck = (manifest == null) || !isPackageSealed(packageName, manifest);
                }
                if (!sealCheck)
                    throw new SecurityException("Sealing violation loading " + name + " : Package " + packageName + " is sealed.");
            }
        }
        try {
            clazz = defineClass(name, binaryContent, 0, binaryContent.length, new CodeSource(codeBase, certificates));
        } catch (UnsupportedClassVersionError ucve) {
            throw new UnsupportedClassVersionError(ucve.getLocalizedMessage() + " " + sm.getString("webappClassLoader.wrongVersion", name));
        }
        entry.loadedClass = clazz;
    }
    return clazz;
}`,"org.apache.tomcat.util.digester.Digester.addSetNext_String_String_String":
 `/**
 * Add a "set next" rule for the specified parameters.
 *
 * @param pattern Element matching pattern
 * @param methodName Method name to call on the parent element
 * @param paramType Java class name of the expected parameter type
 *  (if you wish to use a primitive type, specify the corresponding
 *  Java wrapper class instead, such as <code>java.lang.Boolean</code>
 *  for a <code>boolean</code> parameter)
 * @see SetNextRule
 */
public void addSetNext(String pattern, String methodName, String paramType) {
    addRule(pattern, new SetNextRule(methodName, paramType));
}`,"org.apache.catalina.util.LifecycleBase.setState_LifecycleState":
 `/**
 * Provides a mechanism for sub-classes to update the component state.
 * Calling this method will automatically fire any associated
 * {@link Lifecycle} event. It will also check that any attempted state
 * transition is valid for a sub-class.
 *
 * @param state The new state for this component
 * @throws LifecycleException when attempting to set an invalid state
 */
protected synchronized void setState(LifecycleState state) throws LifecycleException {
    setStateInternal(state, null, true);
}`,"org.apache.catalina.loader.WebappLoader.setContext_Context":
 `@Override
public void setContext(Context context) {
    if (this.context == context) {
        return;
    }
    if (getState().isAvailable()) {
        throw new IllegalStateException(sm.getString("webappLoader.setContext.ise"));
    }
    // Process this property change
    Context oldContext = this.context;
    this.context = context;
    support.firePropertyChange("context", oldContext, this.context);
}`,"org.apache.tomcat.util.modeler.modules.MbeansDescriptorsDigesterSource.loadDescriptors_Registry_String_Object":
 `@Override
public List<ObjectName> loadDescriptors(Registry registry, String type, Object source) throws Exception {
    setRegistry(registry);
    setSource(source);
    execute();
    return mbeans;
}`,"org.apache.tomcat.util.digester.Digester$SystemPropertySource.<init>_":
 ``,"org.apache.tomcat.util.digester.Digester.setDocumentLocator_Locator":
 `/**
 * Sets the document locator associated with our parser.
 *
 * @param locator The new locator
 */
@Override
public void setDocumentLocator(Locator locator) {
    if (saxLog.isDebugEnabled()) {
        saxLog.debug("setDocumentLocator(" + locator + ")");
    }
    this.locator = locator;
}`,"org.apache.tomcat.util.modeler.Registry.getRegistry_Object_Object":
 `// -------------------- Static methods --------------------
// Factories
/**
 * Factory method to create (if necessary) and return our
 * <code>Registry</code> instance.
 *
 * @param key Unused
 * @param guard Prevent access to the registry by untrusted components
 *
 * @return the registry
 * @since 1.1
 */
public static synchronized Registry getRegistry(Object key, Object guard) {
    if (registry == null) {
        if (JreCompat.isGraalAvailable()) {
            disableRegistry();
        } else {
            registry = new Registry();
        }
    }
    if (registry.guard != null && registry.guard != guard) {
        return null;
    }
    return registry;
}`,"org.apache.tomcat.util.digester.Rule.setDigester_Digester":
 `/**
 * Set the <code>Digester</code> with which this <code>Rule</code> is
 * associated.
 *
 * @param digester The digester with which to associate this rule
 */
public void setDigester(Digester digester) {
    this.digester = digester;
}`,"org.apache.tomcat.util.digester.ArrayStack.pop_":
 `/**
 * Pops the top item off of this stack and return it.
 *
 * @return the top item on the stack
 * @throws EmptyStackException  if the stack is empty
 */
public E pop() throws EmptyStackException {
    int n = size();
    if (n <= 0) {
        throw new EmptyStackException();
    } else {
        return remove(n - 1);
    }
}`,"org.apache.tomcat.util.digester.Rule.end_String_String":
 `/**
 * This method is called when the end of a matching XML element
 * is encountered. The default implementation is a NO-OP.
 *
 * @param namespace the namespace URI of the matching element, or an empty
 *                  string if the parser is not namespace aware or the
 *                  element has no namespace
 * @param name the local name if the parser is namespace aware, or just the
 *             element name otherwise
 *
 * @throws Exception if an error occurs while processing the event
 */
public void end(String namespace, String name) throws Exception {
    // NO-OP by default.
}`,"org.apache.catalina.util.LifecycleMBeanBase.getDomain_":
 `/**
 * Obtain the domain under which this component will be / has been
 * registered.
 */
@Override
public final String getDomain() {
    if (domain == null) {
        domain = getDomainInternal();
    }
    if (domain == null) {
        domain = Globals.DEFAULT_MBEAN_DOMAIN;
    }
    return domain;
}`,"org.apache.tomcat.util.digester.Digester.getRules_":
 `/**
 * Return the <code>Rules</code> implementation object containing our
 * rules collection and associated matching policy.  If none has been
 * established, a default implementation will be created and returned.
 * @return the rules
 */
public Rules getRules() {
    if (this.rules == null) {
        this.rules = new RulesBase();
        this.rules.setDigester(this);
    }
    return this.rules;
}`,"org.apache.tomcat.util.digester.Rule.body_String_String_String":
 `/**
 * This method is called when the body of a matching XML element is
 * encountered.  If the element has no body, this method is not called at
 * all. The default implementation is a NO-OP.
 *
 * @param namespace the namespace URI of the matching element, or an empty
 *                  string if the parser is not namespace aware or the
 *                  element has no namespace
 * @param name the local name if the parser is namespace aware, or just the
 *             element name otherwise
 * @param text The text of the body of this element
 *
 * @throws Exception if an error occurs while processing the event
 */
public void body(String namespace, String name, String text) throws Exception {
    // NO-OP by default.
}`,"org.apache.catalina.core.ContainerBase.setName_String":
 `/**
 * Set a name string (suitable for use by humans) that describes this
 * Container.  Within the set of child containers belonging to a particular
 * parent, Container names must be unique.
 *
 * @param name New name of this container
 *
 * @exception IllegalStateException if this Container has already been
 *  added to the children of a parent Container (after which the name
 *  may not be changed)
 */
@Override
public void setName(String name) {
    if (name == null) {
        throw new IllegalArgumentException(sm.getString("containerBase.nullName"));
    }
    String oldName = this.name;
    this.name = name;
    support.firePropertyChange("name", oldName, this.name);
}`,"org.apache.tomcat.util.digester.RulesBase.setDigester_Digester":
 `/**
 * Set the Digester instance with which this Rules instance is associated.
 *
 * @param digester The newly associated Digester instance
 */
@Override
public void setDigester(Digester digester) {
    this.digester = digester;
    for (Rule item : rules) {
        item.setDigester(digester);
    }
}`,"org.apache.tomcat.util.modeler.ManagedBean.addAttribute_AttributeInfo":
 `// --------------------------------------------------------- Public Methods
/**
 * Add a new attribute to the set of attributes for this MBean.
 *
 * @param attribute The new attribute descriptor
 */
public void addAttribute(AttributeInfo attribute) {
    attributes.put(attribute.getName(), attribute);
}`,"org.apache.catalina.core.StandardContext.setPath_String":
 `/**
 * Set the context path for this Context.
 *
 * @param path The new context path
 */
@Override
public void setPath(String path) {
    boolean invalid = false;
    if (path == null || path.equals("/")) {
        invalid = true;
        this.path = "";
    } else if (path.isEmpty() || path.startsWith("/")) {
        this.path = path;
    } else {
        invalid = true;
        this.path = "/" + path;
    }
    if (this.path.endsWith("/")) {
        invalid = true;
        this.path = this.path.substring(0, this.path.length() - 1);
    }
    if (invalid) {
        log.warn(sm.getString("standardContext.pathInvalid", path, this.path));
    }
    encodedPath = URLEncoder.DEFAULT.encode(this.path, StandardCharsets.UTF_8);
    if (getName() == null) {
        setName(this.path);
    }
}`,"org.apache.catalina.util.LifecycleMBeanBase.register_Object_String":
 `/**
 * Utility method to enable sub-classes to easily register additional
 * components that don't implement {@link JmxEnabled} with an MBean server.
 * <br>
 * Note: This method should only be used once {@link #initInternal()} has
 * been called and before {@link #destroyInternal()} has been called.
 *
 * @param obj                       The object the register
 * @param objectNameKeyProperties   The key properties component of the
 *                                  object name to use to register the
 *                                  object
 *
 * @return  The name used to register the object
 */
protected final ObjectName register(Object obj, String objectNameKeyProperties) {
    // Construct an object name with the right domain
    StringBuilder name = new StringBuilder(getDomain());
    name.append(':');
    name.append(objectNameKeyProperties);
    ObjectName on = null;
    try {
        on = new ObjectName(name.toString());
        Registry.getRegistry(null, null).registerComponent(obj, on, null);
    } catch (Exception e) {
        log.warn(sm.getString("lifecycleMBeanBase.registerFail", obj, name), e);
    }
    return on;
}`,"org.apache.catalina.core.ContainerBase.setParent_Container":
 `/**
 * Set the parent Container to which this Container is being added as a
 * child.  This Container may refuse to become attached to the specified
 * Container by throwing an exception.
 *
 * @param container Container to which this Container is being added
 *  as a child
 *
 * @exception IllegalArgumentException if this Container refuses to become
 *  attached to the specified Container
 */
@Override
public void setParent(Container container) {
    Container oldParent = this.parent;
    this.parent = container;
    support.firePropertyChange("parent", oldParent, this.parent);
}`,"org.apache.catalina.core.StandardContext.getCookies_":
 `@Override
public boolean getCookies() {
    return this.cookies;
}`,"org.apache.tomcat.util.digester.Digester.endDocument_":
 `/**
 * Process notification of the end of the document being reached.
 *
 * @exception SAXException if a parsing error is to be reported
 */
@Override
public void endDocument() throws SAXException {
    if (saxLog.isDebugEnabled()) {
        if (getCount() > 1) {
            saxLog.debug("endDocument():  " + getCount() + " elements left");
        } else {
            saxLog.debug("endDocument()");
        }
    }
    while (getCount() > 1) {
        pop();
    }
    // Fire "finish" events for all defined rules
    for (Rule rule : getRules().rules()) {
        try {
            rule.finish();
        } catch (Exception e) {
            log.error(sm.getString("digester.error.finish"), e);
            throw createSAXException(e);
        } catch (Error e) {
            log.error(sm.getString("digester.error.finish"), e);
            throw e;
        }
    }
    // Perform final cleanup
    clear();
}`,"org.apache.tomcat.util.digester.Digester.startElement_String_String_String_Attributes":
 `/**
 * Process notification of the start of an XML element being reached.
 *
 * @param namespaceURI The Namespace URI, or the empty string if the element
 *   has no Namespace URI or if Namespace processing is not being performed.
 * @param localName The local name (without prefix), or the empty
 *   string if Namespace processing is not being performed.
 * @param qName The qualified name (with prefix), or the empty
 *   string if qualified names are not available.\
 * @param list The attributes attached to the element. If there are
 *   no attributes, it shall be an empty Attributes object.
 * @exception SAXException if a parsing error is to be reported
 */
@Override
public void startElement(String namespaceURI, String localName, String qName, Attributes list) throws SAXException {
    boolean debug = log.isDebugEnabled();
    if (saxLog.isDebugEnabled()) {
        saxLog.debug("startElement(" + namespaceURI + "," + localName + "," + qName + ")");
    }
    // Parse system properties
    list = updateAttributes(list);
    // Save the body text accumulated for our surrounding element
    bodyTexts.push(bodyText);
    bodyText = new StringBuilder();
    // the actual element name is either in localName or qName, depending
    // on whether the parser is namespace aware
    String name = localName;
    if ((name == null) || (name.length() < 1)) {
        name = qName;
    }
    // Compute the current matching rule
    StringBuilder sb = new StringBuilder(match);
    if (match.length() > 0) {
        sb.append('/');
    }
    sb.append(name);
    match = sb.toString();
    if (debug) {
        log.debug("  New match='" + match + "'");
    }
    // Fire "begin" events for all relevant rules
    List<Rule> rules = getRules().match(namespaceURI, match);
    matches.push(rules);
    if ((rules != null) && (rules.size() > 0)) {
        for (Rule value : rules) {
            try {
                Rule rule = value;
                if (debug) {
                    log.debug("  Fire begin() for " + rule);
                }
                rule.begin(namespaceURI, name, list);
            } catch (Exception e) {
                log.error(sm.getString("digester.error.begin"), e);
                throw createSAXException(e);
            } catch (Error e) {
                log.error(sm.getString("digester.error.begin"), e);
                throw e;
            }
        }
    } else {
        if (debug) {
            log.debug(sm.getString("digester.noRulesFound", match));
        }
    }
}`,"org.apache.tomcat.util.digester.Digester.addSetProperties_String":
 `/**
 * Add a "set properties" rule for the specified parameters.
 *
 * @param pattern Element matching pattern
 * @see SetPropertiesRule
 */
public void addSetProperties(String pattern) {
    addRule(pattern, new SetPropertiesRule());
}`,"org.apache.catalina.startup.Tomcat.getHost_":
 `public Host getHost() {
    Engine engine = getEngine();
    if (engine.findChildren().length > 0) {
        return (Host) engine.findChildren()[0];
    }
    Host host = new StandardHost();
    host.setName(hostname);
    getEngine().addChild(host);
    return host;
}`,"org.apache.juli.logging.DirectJDKLog.isTraceEnabled_":
 `@Override
public final boolean isTraceEnabled() {
    return logger.isLoggable(Level.FINER);
}`,"org.apache.catalina.core.StandardServer.findServices_":
 `/**
 * @return the set of Services defined within this Server.
 */
@Override
public Service[] findServices() {
    return services;
}`,"org.apache.catalina.util.LifecycleBase.stop_":
 `/**
 * {@inheritDoc}
 */
@Override
public final synchronized void stop() throws LifecycleException {
    if (LifecycleState.STOPPING_PREP.equals(state) || LifecycleState.STOPPING.equals(state) || LifecycleState.STOPPED.equals(state)) {
        if (log.isDebugEnabled()) {
            Exception e = new LifecycleException();
            log.debug(sm.getString("lifecycleBase.alreadyStopped", toString()), e);
        } else if (log.isInfoEnabled()) {
            log.info(sm.getString("lifecycleBase.alreadyStopped", toString()));
        }
        return;
    }
    if (state.equals(LifecycleState.NEW)) {
        state = LifecycleState.STOPPED;
        return;
    }
    if (!state.equals(LifecycleState.STARTED) && !state.equals(LifecycleState.FAILED)) {
        invalidTransition(Lifecycle.BEFORE_STOP_EVENT);
    }
    try {
        if (state.equals(LifecycleState.FAILED)) {
            // Don't transition to STOPPING_PREP as that would briefly mark the
            // component as available but do ensure the BEFORE_STOP_EVENT is
            // fired
            fireLifecycleEvent(BEFORE_STOP_EVENT, null);
        } else {
            setStateInternal(LifecycleState.STOPPING_PREP, null, false);
        }
        stopInternal();
        // Shouldn't be necessary but acts as a check that sub-classes are
        // doing what they are supposed to.
        if (!state.equals(LifecycleState.STOPPING) && !state.equals(LifecycleState.FAILED)) {
            invalidTransition(Lifecycle.AFTER_STOP_EVENT);
        }
        setStateInternal(LifecycleState.STOPPED, null, false);
    } catch (Throwable t) {
        handleSubClassException(t, "lifecycleBase.stopFail", toString());
    } finally {
        if (this instanceof Lifecycle.SingleUse) {
            // Complete stop process first
            setStateInternal(LifecycleState.STOPPED, null, false);
            destroy();
        }
    }
}`,"org.apache.catalina.core.ApplicationContext.<init>_StandardContext":
 `// ----------------------------------------------------------- Constructors
/**
 * Construct a new instance of this class, associated with the specified
 * Context instance.
 *
 * @param context The associated Context instance
 */
public ApplicationContext(StandardContext context) {
    super();
    this.context = context;
    this.service = ((Engine) context.getParent().getParent()).getService();
    this.sessionCookieConfig = new ApplicationSessionCookieConfig(context);
    // Populate session tracking modes
    populateSessionTrackingModes();
}`,"org.apache.catalina.loader.WebappClassLoaderBase.checkStateForClassLoading_String":
 `protected void checkStateForClassLoading(String className) throws ClassNotFoundException {
    // It is not permitted to load new classes once the web application has
    // been stopped.
    try {
        checkStateForResourceLoading(className);
    } catch (IllegalStateException ise) {
        throw new ClassNotFoundException(ise.getMessage(), ise);
    }
}`,"org.apache.tomcat.util.modeler.ParameterInfo.<init>_":
 `// ----------------------------------------------------------- Constructors
/**
 * Standard zero-arguments constructor.
 */
public ParameterInfo() {
    super();
}`,"org.apache.tomcat.util.modeler.ManagedBean.getMBeanInfo_":
 `/**
 * Create and return a <code>ModelMBeanInfo</code> object that
 * describes this entire managed bean.
 * @return the MBean info
 */
MBeanInfo getMBeanInfo() {
    // Return our cached information (if any)
    mBeanInfoLock.readLock().lock();
    try {
        if (info != null) {
            return info;
        }
    } finally {
        mBeanInfoLock.readLock().unlock();
    }
    mBeanInfoLock.writeLock().lock();
    try {
        if (info == null) {
            // Create subordinate information descriptors as required
            AttributeInfo[] attrs = getAttributes();
            MBeanAttributeInfo[] attributes = new MBeanAttributeInfo[attrs.length];
            for (int i = 0; i < attrs.length; i++) attributes[i] = attrs[i].createAttributeInfo();
            OperationInfo[] opers = getOperations();
            MBeanOperationInfo[] operations = new MBeanOperationInfo[opers.length];
            for (int i = 0; i < opers.length; i++) operations[i] = opers[i].createOperationInfo();
            NotificationInfo[] notifs = getNotifications();
            MBeanNotificationInfo[] notifications = new MBeanNotificationInfo[notifs.length];
            for (int i = 0; i < notifs.length; i++) notifications[i] = notifs[i].createNotificationInfo();
            // Construct and return a new ModelMBeanInfo object
            info = new MBeanInfo(getClassName(), getDescription(), attributes, new MBeanConstructorInfo[] {}, operations, notifications);
        }
        return info;
    } finally {
        mBeanInfoLock.writeLock().unlock();
    }
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
}`,"org.apache.catalina.loader.WebappClassLoaderBase.filter_String_boolean":
 `/**
 * Filter classes.
 *
 * @param name class name
 * @param isClassName <code>true</code> if name is a class name,
 *                <code>false</code> if name is a resource name
 * @return <code>true</code> if the class should be filtered
 */
protected boolean filter(String name, boolean isClassName) {
    if (name == null)
        return false;
    char ch;
    if (name.startsWith("jakarta")) {
        /* 7 == length("jakarta") */
        if (name.length() == 7) {
            return false;
        }
        ch = name.charAt(7);
        if (isClassName && ch == '.') {
            /* 8 == length("jakarta.") */
            if (name.startsWith("servlet.jsp.jstl.", 8)) {
                return false;
            }
            if (name.startsWith("el.", 8) || name.startsWith("servlet.", 8) || name.startsWith("websocket.", 8) || name.startsWith("security.auth.message.", 8)) {
                return true;
            }
        } else if (!isClassName && ch == '/') {
            /* 8 == length("jakarta/") */
            if (name.startsWith("servlet/jsp/jstl/", 8)) {
                return false;
            }
            if (name.startsWith("el/", 8) || name.startsWith("servlet/", 8) || name.startsWith("websocket/", 8) || name.startsWith("security/auth/message/", 8)) {
                return true;
            }
        }
    } else if (name.startsWith("javax")) {
        /* 5 == length("javax") */
        if (name.length() == 5) {
            return false;
        }
        ch = name.charAt(5);
        if (isClassName && ch == '.') {
            /* 6 == length("javax.") */
            if (name.startsWith("websocket.", 6)) {
                return true;
            }
        } else if (!isClassName && ch == '/') {
            /* 6 == length("javax/") */
            if (name.startsWith("websocket/", 6)) {
                return true;
            }
        }
    } else if (name.startsWith("org")) {
        /* 3 == length("org") */
        if (name.length() == 3) {
            return false;
        }
        ch = name.charAt(3);
        if (isClassName && ch == '.') {
            /* 4 == length("org.") */
            if (name.startsWith("apache.", 4)) {
                /* 11 == length("org.apache.") */
                if (name.startsWith("tomcat.jdbc.", 11)) {
                    return false;
                }
                if (name.startsWith("el.", 11) || name.startsWith("catalina.", 11) || name.startsWith("jasper.", 11) || name.startsWith("juli.", 11) || name.startsWith("tomcat.", 11) || name.startsWith("naming.", 11) || name.startsWith("coyote.", 11)) {
                    return true;
                }
            }
        } else if (!isClassName && ch == '/') {
            /* 4 == length("org/") */
            if (name.startsWith("apache/", 4)) {
                /* 11 == length("org/apache/") */
                if (name.startsWith("tomcat/jdbc/", 11)) {
                    return false;
                }
                if (name.startsWith("el/", 11) || name.startsWith("catalina/", 11) || name.startsWith("jasper/", 11) || name.startsWith("juli/", 11) || name.startsWith("tomcat/", 11) || name.startsWith("naming/", 11) || name.startsWith("coyote/", 11)) {
                    return true;
                }
            }
        }
    }
    return false;
}`,"org.apache.tomcat.util.compat.JreCompat.isGraalAvailable_":
 `public static boolean isGraalAvailable() {
    return graalAvailable;
}`,"org.apache.catalina.valves.ValveBase.<init>_boolean":
 `public ValveBase(boolean asyncSupported) {
    this.asyncSupported = asyncSupported;
}`,"org.apache.tomcat.util.digester.Digester.startDocument_":
 `/**
 * Process notification of the beginning of the document being reached.
 *
 * @exception SAXException if a parsing error is to be reported
 */
@Override
public void startDocument() throws SAXException {
    if (saxLog.isDebugEnabled()) {
        saxLog.debug("startDocument()");
    }
    if (locator instanceof Locator2) {
        if (root instanceof DocumentProperties.Charset) {
            String enc = ((Locator2) locator).getEncoding();
            if (enc != null) {
                try {
                    ((DocumentProperties.Charset) root).setCharset(B2CConverter.getCharset(enc));
                } catch (UnsupportedEncodingException e) {
                    log.warn(sm.getString("digester.encodingInvalid", enc), e);
                }
            }
        }
    }
    // ensure that the digester is properly configured, as
    // the digester could be used as a SAX ContentHandler
    // rather than via the parse() methods.
    configure();
}`,"org.apache.catalina.util.URLEncoder.encode_String_Charset":
 `/**
 * URL encodes the provided path using the given character set.
 *
 * @param path      The path to encode
 * @param charset   The character set to use to convert the path to bytes
 *
 * @return The encoded path
 */
public String encode(String path, Charset charset) {
    int maxBytesPerChar = 10;
    StringBuilder rewrittenPath = new StringBuilder(path.length());
    ByteArrayOutputStream buf = new ByteArrayOutputStream(maxBytesPerChar);
    OutputStreamWriter writer = new OutputStreamWriter(buf, charset);
    for (int i = 0; i < path.length(); i++) {
        int c = path.charAt(i);
        if (safeCharacters.get(c)) {
            rewrittenPath.append((char) c);
        } else if (encodeSpaceAsPlus && c == ' ') {
            rewrittenPath.append('+');
        } else {
            // convert to external encoding before hex conversion
            try {
                writer.write((char) c);
                writer.flush();
            } catch (IOException e) {
                buf.reset();
                continue;
            }
            byte[] ba = buf.toByteArray();
            for (byte toEncode : ba) {
                // Converting each byte in the buffer
                rewrittenPath.append('%');
                int low = toEncode & 0x0f;
                int high = (toEncode & 0xf0) >> 4;
                rewrittenPath.append(hexadecimal[high]);
                rewrittenPath.append(hexadecimal[low]);
            }
            buf.reset();
        }
    }
    return rewrittenPath.toString();
}`,"org.apache.catalina.core.ApplicationContextFacade.<init>_ApplicationContext":
 `// ----------------------------------------------------------- Constructors
/**
 * Construct a new instance of this class, associated with the specified
 * Context instance.
 *
 * @param context The associated Context instance
 */
public ApplicationContextFacade(ApplicationContext context) {
    super();
    this.context = context;
    classCache = new HashMap<>();
    objectCache = new ConcurrentHashMap<>();
    initClassCache();
}`,"org.apache.catalina.startup.Tomcat.getServer_":
 `/**
 * Get the server object. You can add listeners and few more
 * customizations. JNDI is disabled by default.
 * @return The Server
 */
public Server getServer() {
    if (server != null) {
        return server;
    }
    System.setProperty("catalina.useNaming", "false");
    server = new StandardServer();
    initBaseDir();
    // Set configuration source
    ConfigFileLoader.setSource(new CatalinaBaseConfigurationSource(new File(basedir), null));
    server.setPort(-1);
    Service service = new StandardService();
    service.setName("Tomcat");
    server.addService(service);
    return server;
}`,"org.apache.catalina.loader.WebappLoader.getClassLoader_":
 `// ------------------------------------------------------------- Properties
/**
 * Return the Java class loader to be used by this Container.
 */
@Override
public ClassLoader getClassLoader() {
    return classLoader;
}`,"org.apache.tomcat.util.modeler.BaseModelMBean.setManagedResource_Object_String":
 `/**
 * Set the instance handle of the object against which we will execute
 * all methods in this ModelMBean management interface.
 *
 * The caller can provide the mbean instance or the object name to
 * the resource, if needed.
 *
 * @param resource The resource object to be managed
 * @param type The type of reference for the managed resource
 *  ("ObjectReference", "Handle", "IOR", "EJBHandle", or
 *  "RMIReference")
 *
 * @exception InstanceNotFoundException if the managed resource object
 *  cannot be found
 * @exception MBeanException if the initializer of the object throws
 *  an exception
 * @exception RuntimeOperationsException if the managed resource or the
 *  resource type is <code>null</code> or invalid
 */
public void setManagedResource(Object resource, String type) throws InstanceNotFoundException, MBeanException, RuntimeOperationsException {
    if (resource == null)
        throw new RuntimeOperationsException(new IllegalArgumentException(sm.getString("baseModelMBean.nullResource")), sm.getString("baseModelMBean.nullResource"));
    // if (!"objectreference".equalsIgnoreCase(type))
    // throw new InvalidTargetObjectTypeException(type);
    this.resource = resource;
    this.resourceType = resource.getClass().getName();
    // // Make the resource aware of the model mbean.
    // try {
    // Method m=resource.getClass().getMethod("setModelMBean",
    // new Class[] {ModelMBean.class});
    // if( m!= null ) {
    // m.invoke(resource, new Object[] {this});
    // }
    // } catch( NoSuchMethodException t ) {
    // // ignore
    // } catch( Throwable t ) {
    // log.error( "Can't set model mbean ", t );
    // }
}`,"org.apache.catalina.util.LifecycleBase.addLifecycleListener_LifecycleListener":
 `/**
 * {@inheritDoc}
 */
@Override
public void addLifecycleListener(LifecycleListener listener) {
    lifecycleListeners.add(listener);
}`,"org.apache.tomcat.util.modeler.BaseModelMBean.<init>_":
 ``,"org.apache.tomcat.util.digester.Digester.setValidating_boolean":
 `/**
 * Set the validating parser flag.  This must be called before
 * <code>parse()</code> is called the first time.
 *
 * @param validating The new validating parser flag.
 */
public void setValidating(boolean validating) {
    this.validating = validating;
}`,"org.apache.juli.logging.DirectJDKLog.warn_Object_Throwable":
 `@Override
public final void warn(Object message, Throwable t) {
    log(Level.WARNING, String.valueOf(message), t);
}`,"org.apache.tomcat.util.digester.Digester$EntityResolver2Wrapper.resolveEntity_String_String_String_String":
 `@Override
public InputSource resolveEntity(String name, String publicId, String baseURI, String systemId) throws SAXException, IOException {
    name = replace(name);
    publicId = replace(publicId);
    baseURI = replace(baseURI);
    systemId = replace(systemId);
    return entityResolver2.resolveEntity(name, publicId, baseURI, systemId);
}`,"org.apache.tomcat.util.modeler.Registry.findManagedBean_Object_Class_String":
 `/**
 * Find or load metadata.
 *
 * @param bean The bean
 * @param beanClass The bean class
 * @param type The registry type
 * @return the managed bean
 * @throws Exception An error occurred
 */
public ManagedBean findManagedBean(Object bean, Class<?> beanClass, String type) throws Exception {
    if (bean != null && beanClass == null) {
        beanClass = bean.getClass();
    }
    if (type == null) {
        type = beanClass.getName();
    }
    // first look for existing descriptor
    ManagedBean managed = findManagedBean(type);
    // Search for a descriptor in the same package
    if (managed == null) {
        // check package and parent packages
        if (log.isDebugEnabled()) {
            log.debug("Looking for descriptor ");
        }
        findDescriptor(beanClass, type);
        managed = findManagedBean(type);
    }
    // Still not found - use introspection
    if (managed == null) {
        if (log.isDebugEnabled()) {
            log.debug("Introspecting ");
        }
        // introspection
        load("MbeansDescriptorsIntrospectionSource", beanClass, type);
        managed = findManagedBean(type);
        if (managed == null) {
            log.warn(sm.getString("registry.noTypeMetadata", type));
            return null;
        }
        managed.setName(type);
        addManagedBean(managed);
    }
    return managed;
}`,"org.apache.tomcat.util.digester.ArrayStack.<init>_":
 `/**
 * Constructs a new empty <code>ArrayStack</code>. The initial size
 * is controlled by <code>ArrayList</code> and is currently 10.
 */
public ArrayStack() {
    super();
}`,"org.apache.catalina.core.ContainerBase.<init>_":
 ``,"org.apache.catalina.loader.WebappLoader.setLoaderClass_String":
 `/**
 * Set the ClassLoader class name.
 *
 * @param loaderClass The new ClassLoader class name
 */
public void setLoaderClass(String loaderClass) {
    this.loaderClass = loaderClass;
}`,"org.apache.catalina.startup.Tomcat.addContext_Host_String_String_String":
 `/**
 * @param host The host in which the context will be deployed
 * @param contextPath The context mapping to use, "" for root context.
 * @param contextName The context name
 * @param dir Base directory for the context, for static files.
 *  Must exist, relative to the server home
 * @return the deployed context
 * @see #addContext(String, String)
 */
public Context addContext(Host host, String contextPath, String contextName, String dir) {
    silence(host, contextName);
    Context ctx = createContext(host, contextPath);
    ctx.setName(contextName);
    ctx.setPath(contextPath);
    ctx.setDocBase(dir);
    ctx.addLifecycleListener(new FixContextListener());
    if (host == null) {
        getHost().addChild(ctx);
    } else {
        host.addChild(ctx);
    }
    return ctx;
}`,"org.apache.catalina.util.LifecycleBase.setStateInternal_LifecycleState_Object_boolean":
 `private synchronized void setStateInternal(LifecycleState state, Object data, boolean check) throws LifecycleException {
    if (log.isDebugEnabled()) {
        log.debug(sm.getString("lifecycleBase.setState", this, state));
    }
    if (check) {
        // Must have been triggered by one of the abstract methods (assume
        // code in this class is correct)
        // null is never a valid state
        if (state == null) {
            invalidTransition("null");
            // Unreachable code - here to stop eclipse complaining about
            // a possible NPE further down the method
            return;
        }
        // Any method can transition to failed
        // startInternal() permits STARTING_PREP to STARTING
        // stopInternal() permits STOPPING_PREP to STOPPING and FAILED to
        // STOPPING
        if (!(state == LifecycleState.FAILED || (this.state == LifecycleState.STARTING_PREP && state == LifecycleState.STARTING) || (this.state == LifecycleState.STOPPING_PREP && state == LifecycleState.STOPPING) || (this.state == LifecycleState.FAILED && state == LifecycleState.STOPPING))) {
            // No other transition permitted
            invalidTransition(state.name());
        }
    }
    this.state = state;
    String lifecycleEvent = state.getLifecycleEvent();
    if (lifecycleEvent != null) {
        fireLifecycleEvent(lifecycleEvent, data);
    }
}`,"org.apache.tomcat.util.modeler.Registry.addManagedBean_ManagedBean":
 `// -------------------- Metadata --------------------
// methods from 1.0
/**
 * Add a new bean metadata to the set of beans known to this registry. This
 * is used by internal components.
 *
 * @param bean The managed bean to be added
 * @since 1.0
 */
public void addManagedBean(ManagedBean bean) {
    // XXX Use group + name
    descriptors.put(bean.getName(), bean);
    if (bean.getType() != null) {
        descriptorsByClass.put(bean.getType(), bean);
    }
}`,"org.apache.tomcat.util.modeler.FeatureInfo.setDescription_String":
 `public void setDescription(String description) {
    this.description = description;
}`,"org.apache.tomcat.util.digester.Digester.getGeneratedCode_":
 `public StringBuilder getGeneratedCode() {
    return code;
}`,"org.apache.tomcat.util.modeler.FeatureInfo.getDescription_":
 `// ------------------------------------------------------------- Properties
/**
 * @return the human-readable description of this feature.
 */
public String getDescription() {
    return this.description;
}`,"org.apache.tomcat.util.digester.Digester$EntityResolverWrapper.replace_String":
 `protected String replace(String input) {
    try {
        return IntrospectionUtils.replaceProperties(input, null, source, classLoader);
    } catch (Exception e) {
        return input;
    }
}`,"org.apache.catalina.security.SecurityUtil.isPackageProtectionEnabled_":
 `/**
 * Return the <code>SecurityManager</code> only if Security is enabled AND
 * package protection mechanism is enabled.
 * @return <code>true</code> if package level protection is enabled
 */
public static boolean isPackageProtectionEnabled() {
    if (packageDefinitionEnabled && Globals.IS_SECURITY_ENABLED) {
        return true;
    }
    return false;
}`,"org.apache.tomcat.util.digester.ArrayStack.<init>_int":
 `/**
 * Constructs a new empty <code>ArrayStack</code> with an initial size.
 *
 * @param initialSize  the initial size to use
 * @throws IllegalArgumentException  if the specified initial size
 *  is negative
 */
public ArrayStack(int initialSize) {
    super(initialSize);
}`,"org.apache.catalina.core.ContainerBase.getName_":
 `/**
 * Return a name string (suitable for use by humans) that describes this
 * Container.  Within the set of child containers belonging to a particular
 * parent, Container names must be unique.
 */
@Override
public String getName() {
    return name;
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
}`,"org.apache.tomcat.util.digester.CallMethodRule.finish_":
 `/**
 * Clean up after parsing is complete.
 */
@Override
public void finish() throws Exception {
    bodyText = null;
}`,"org.apache.catalina.core.StandardContext.getServletContext_":
 `/**
 * @return the servlet context for which this Context is a facade.
 */
@Override
public ServletContext getServletContext() {
    if (context == null) {
        context = new ApplicationContext(this);
        if (altDDName != null)
            context.setAttribute(Globals.ALT_DD_ATTR, altDDName);
    }
    return context.getFacade();
}`,"org.apache.catalina.core.StandardContext$ContextFilterMaps.<init>_":
 ``,"org.apache.tomcat.util.digester.Digester.<init>_":
 `public Digester() {
    propertySourcesSet = true;
    if (propertySources != null) {
        ArrayList<IntrospectionUtils.PropertySource> sourcesList = new ArrayList<>();
        sourcesList.addAll(Arrays.asList(propertySources));
        sourcesList.add(source[0]);
        source = sourcesList.toArray(new IntrospectionUtils.PropertySource[0]);
    }
}`,"org.apache.catalina.core.ContainerBase.addChild_Container":
 `// ------------------------------------------------------ Container Methods
/**
 * Add a new child Container to those associated with this Container,
 * if supported.  Prior to adding this Container to the set of children,
 * the child's <code>setParent()</code> method must be called, with this
 * Container as an argument.  This method may thrown an
 * <code>IllegalArgumentException</code> if this Container chooses not
 * to be attached to the specified Container, in which case it is not added
 *
 * @param child New child Container to be added
 *
 * @exception IllegalArgumentException if this exception is thrown by
 *  the <code>setParent()</code> method of the child Container
 * @exception IllegalArgumentException if the new child does not have
 *  a name unique from that of existing children of this Container
 * @exception IllegalStateException if this Container does not support
 *  child Containers
 */
@Override
public void addChild(Container child) {
    if (Globals.IS_SECURITY_ENABLED) {
        PrivilegedAction<Void> dp = new PrivilegedAddChild(child);
        AccessController.doPrivileged(dp);
    } else {
        addChildInternal(child);
    }
}`,"org.apache.tomcat.util.digester.SetNextRule.<init>_String_String":
 `// ----------------------------------------------------------- Constructors
/**
 * Construct a "set next" rule with the specified method name.
 *
 * @param methodName Method name of the parent method to call
 * @param paramType Java class of the parent method's argument
 *  (if you wish to use a primitive type, specify the corresponding
 *  Java wrapper class instead, such as <code>java.lang.Boolean</code>
 *  for a <code>boolean</code> parameter)
 */
public SetNextRule(String methodName, String paramType) {
    this.methodName = methodName;
    this.paramType = paramType;
}`,"org.apache.tomcat.util.digester.Digester.addCallMethod_String_String_int":
 `/**
 * Add an "call method" rule for the specified parameters.
 *
 * @param pattern Element matching pattern
 * @param methodName Method name to be called
 * @param paramCount Number of expected parameters (or zero
 *  for a single parameter from the body of this element)
 * @see CallMethodRule
 */
public void addCallMethod(String pattern, String methodName, int paramCount) {
    addRule(pattern, new CallMethodRule(methodName, paramCount));
}`,"org.apache.tomcat.util.modeler.Registry.load_String_Object_String":
 `/**
 * Experimental. Load descriptors.
 *
 * @param sourceType The source type
 * @param source The bean
 * @param param A type to load
 * @return List of descriptors
 * @throws Exception Error loading descriptors
 */
public List<ObjectName> load(String sourceType, Object source, String param) throws Exception {
    if (log.isTraceEnabled()) {
        log.trace("load " + source);
    }
    String location = null;
    String type = null;
    Object inputsource = null;
    if (source instanceof URL) {
        URL url = (URL) source;
        location = url.toString();
        type = param;
        inputsource = url.openStream();
        if (sourceType == null && location.endsWith(".xml")) {
            sourceType = "MbeansDescriptorsDigesterSource";
        }
    } else if (source instanceof File) {
        location = ((File) source).getAbsolutePath();
        inputsource = new FileInputStream((File) source);
        type = param;
        if (sourceType == null && location.endsWith(".xml")) {
            sourceType = "MbeansDescriptorsDigesterSource";
        }
    } else if (source instanceof InputStream) {
        type = param;
        inputsource = source;
    } else if (source instanceof Class<?>) {
        location = ((Class<?>) source).getName();
        type = param;
        inputsource = source;
        if (sourceType == null) {
            sourceType = "MbeansDescriptorsIntrospectionSource";
        }
    }
    if (sourceType == null) {
        sourceType = "MbeansDescriptorsDigesterSource";
    }
    ModelerSource ds = getModelerSource(sourceType);
    List<ObjectName> mbeans = ds.loadDescriptors(this, type, inputsource);
    return mbeans;
}`,"org.apache.tomcat.util.buf.StringUtils.join_Iterable_char_Function_StringBuilder":
 `public static <T> void join(Iterable<T> iterable, char separator, Function<T, String> function, StringBuilder sb) {
    if (iterable == null) {
        return;
    }
    boolean first = true;
    for (T value : iterable) {
        if (first) {
            first = false;
        } else {
            sb.append(separator);
        }
        sb.append(function.apply(value));
    }
}`,"org.apache.tomcat.util.digester.Digester.getEntityResolver_":
 `/**
 * Return the Entity Resolver used by the SAX parser.
 * @return Return the Entity Resolver used by the SAX parser.
 */
public EntityResolver getEntityResolver() {
    return entityResolver;
}`,"org.apache.tomcat.util.digester.Digester.ignorableWhitespace_char[]_int_int":
 `/**
 * Process notification of ignorable whitespace received from the body of
 * an XML element.
 *
 * @param buffer The characters from the XML document
 * @param start Starting offset into the buffer
 * @param len Number of characters from the buffer
 *
 * @exception SAXException if a parsing error is to be reported
 */
@Override
public void ignorableWhitespace(char[] buffer, int start, int len) throws SAXException {
    if (saxLog.isDebugEnabled()) {
        saxLog.debug("ignorableWhitespace(" + new String(buffer, start, len) + ")");
    }
    // No processing required
}`,"org.apache.catalina.startup.Tomcat.getLoggerName_Host_String":
 `/*
     * Uses essentially the same logic as {@link ContainerBase#logName()}.
     */
private String getLoggerName(Host host, String contextName) {
    if (host == null) {
        host = getHost();
    }
    StringBuilder loggerName = new StringBuilder();
    loggerName.append(ContainerBase.class.getName());
    loggerName.append(".[");
    // Engine name
    loggerName.append(host.getParent().getName());
    loggerName.append("].[");
    // Host name
    loggerName.append(host.getName());
    loggerName.append("].[");
    // Context name
    if (contextName == null || contextName.equals("")) {
        loggerName.append('/');
    } else if (contextName.startsWith("##")) {
        loggerName.append('/');
        loggerName.append(contextName);
    }
    loggerName.append(']');
    return loggerName.toString();
}`,"org.apache.catalina.startup.Tomcat.addContext_Host_String_String":
 `/**
 * @param host The host in which the context will be deployed
 * @param contextPath The context mapping to use, "" for root context.
 * @param dir Base directory for the context, for static files.
 *  Must exist, relative to the server home
 * @return the deployed context
 * @see #addContext(String, String)
 */
public Context addContext(Host host, String contextPath, String dir) {
    return addContext(host, contextPath, contextPath, dir);
}`,"org.apache.tomcat.util.digester.RulesBase.lookup_String_String":
 `// ------------------------------------------------------ Protected Methods
/**
 * Return a List of Rule instances for the specified pattern that also
 * match the specified namespace URI (if any).  If there are no such
 * rules, return <code>null</code>.
 *
 * @param namespaceURI Namespace URI to match, or <code>null</code> to
 *  select matching rules regardless of namespace URI
 * @param pattern Pattern to be matched
 * @return a rules list
 */
protected List<Rule> lookup(String namespaceURI, String pattern) {
    // Optimize when no namespace URI is specified
    List<Rule> list = this.cache.get(pattern);
    if (list == null) {
        return null;
    }
    if ((namespaceURI == null) || (namespaceURI.length() == 0)) {
        return list;
    }
    // Select only Rules that match on the specified namespace URI
    List<Rule> results = new ArrayList<>();
    for (Rule item : list) {
        if ((namespaceURI.equals(item.getNamespaceURI())) || (item.getNamespaceURI() == null)) {
            results.add(item);
        }
    }
    return results;
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
}`,"org.apache.catalina.core.StandardContext.setLoader_Loader":
 `@Override
public void setLoader(Loader loader) {
    Lock writeLock = loaderLock.writeLock();
    writeLock.lock();
    Loader oldLoader = null;
    try {
        // Change components if necessary
        oldLoader = this.loader;
        if (oldLoader == loader)
            return;
        this.loader = loader;
        // Stop the old component if necessary
        if (getState().isAvailable() && (oldLoader != null) && (oldLoader instanceof Lifecycle)) {
            try {
                ((Lifecycle) oldLoader).stop();
            } catch (LifecycleException e) {
                log.error(sm.getString("standardContext.setLoader.stop"), e);
            }
        }
        // Start the new component if necessary
        if (loader != null)
            loader.setContext(this);
        if (getState().isAvailable() && (loader != null) && (loader instanceof Lifecycle)) {
            try {
                ((Lifecycle) loader).start();
            } catch (LifecycleException e) {
                log.error(sm.getString("standardContext.setLoader.start"), e);
            }
        }
    } finally {
        writeLock.unlock();
    }
    // Report this property change to interested listeners
    support.firePropertyChange("loader", oldLoader, loader);
}`,"org.apache.catalina.core.ApplicationContextFacade.initClassCache_":
 `private void initClassCache() {
    Class<?>[] clazz = new Class[] { String.class };
    classCache.put("getContext", clazz);
    classCache.put("getMimeType", clazz);
    classCache.put("getResourcePaths", clazz);
    classCache.put("getResource", clazz);
    classCache.put("getResourceAsStream", clazz);
    classCache.put("getRequestDispatcher", clazz);
    classCache.put("getNamedDispatcher", clazz);
    classCache.put("getServlet", clazz);
    classCache.put("setInitParameter", new Class[] { String.class, String.class });
    classCache.put("createServlet", new Class[] { Class.class });
    classCache.put("addServlet", new Class[] { String.class, String.class });
    classCache.put("createFilter", new Class[] { Class.class });
    classCache.put("addFilter", new Class[] { String.class, String.class });
    classCache.put("createListener", new Class[] { Class.class });
    classCache.put("addListener", clazz);
    classCache.put("getFilterRegistration", clazz);
    classCache.put("getServletRegistration", clazz);
    classCache.put("getInitParameter", clazz);
    classCache.put("setAttribute", new Class[] { String.class, Object.class });
    classCache.put("removeAttribute", clazz);
    classCache.put("getRealPath", clazz);
    classCache.put("getAttribute", clazz);
    classCache.put("log", clazz);
    classCache.put("setSessionTrackingModes", new Class[] { Set.class });
    classCache.put("addJspFile", new Class[] { String.class, String.class });
    classCache.put("declareRoles", new Class[] { String[].class });
    classCache.put("setSessionTimeout", new Class[] { int.class });
    classCache.put("setRequestCharacterEncoding", new Class[] { String.class });
    classCache.put("setResponseCharacterEncoding", new Class[] { String.class });
}`,"org.apache.catalina.util.LifecycleBase.init_":
 `@Override
public final synchronized void init() throws LifecycleException {
    if (!state.equals(LifecycleState.NEW)) {
        invalidTransition(Lifecycle.BEFORE_INIT_EVENT);
    }
    try {
        setStateInternal(LifecycleState.INITIALIZING, null, false);
        initInternal();
        setStateInternal(LifecycleState.INITIALIZED, null, false);
    } catch (Throwable t) {
        handleSubClassException(t, "lifecycleBase.initFail", toString());
    }
}`,"org.apache.catalina.util.ErrorPageSupport.<init>_":
 ``,"org.apache.tomcat.util.modeler.ManagedBean.setClassName_String":
 `public void setClassName(String className) {
    mBeanInfoLock.writeLock().lock();
    try {
        this.className = className;
        this.info = null;
    } finally {
        mBeanInfoLock.writeLock().unlock();
    }
}`,"org.apache.catalina.core.ContainerBase.addChildInternal_Container":
 `private void addChildInternal(Container child) {
    if (log.isDebugEnabled()) {
        log.debug("Add child " + child + " " + this);
    }
    synchronized (children) {
        if (children.get(child.getName()) != null)
            throw new IllegalArgumentException(sm.getString("containerBase.child.notUnique", child.getName()));
        // May throw IAE
        child.setParent(this);
        children.put(child.getName(), child);
    }
    fireContainerEvent(ADD_CHILD_EVENT, child);
    // Start child
    // Don't do this inside sync block - start can be a slow process and
    // locking the children object can cause problems elsewhere
    try {
        if ((getState().isAvailable() || LifecycleState.STARTING_PREP.equals(getState())) && startChildren) {
            child.start();
        }
    } catch (LifecycleException e) {
        throw new IllegalStateException(sm.getString("containerBase.child.start"), e);
    }
}`,"org.apache.catalina.loader.WebappClassLoaderBase.checkStateForResourceLoading_String":
 `protected void checkStateForResourceLoading(String resource) throws IllegalStateException {
    // It is not permitted to load resources once the web application has
    // been stopped.
    if (!state.isAvailable()) {
        String msg = sm.getString("webappClassLoader.stopped", resource);
        IllegalStateException ise = new IllegalStateException(msg);
        log.info(msg, ise);
        throw ise;
    }
}`,"org.apache.catalina.core.StandardService.getContainer_":
 `@Override
public Engine getContainer() {
    return engine;
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
}`,"org.apache.catalina.util.URLEncoder.addSafeCharacter_char":
 `public void addSafeCharacter(char c) {
    safeCharacters.set(c);
}`,"org.apache.catalina.core.ContainerBase.findChildren_":
 `/**
 * Return the set of children Containers associated with this Container.
 * If this Container has no children, a zero-length array is returned.
 */
@Override
public Container[] findChildren() {
    synchronized (children) {
        Container[] results = new Container[children.size()];
        return children.values().toArray(results);
    }
}`,"org.apache.tomcat.util.IntrospectionUtils.findMethods_Class":
 `public static Method[] findMethods(Class<?> c) {
    Method[] methods = objectMethods.get(c);
    if (methods != null)
        return methods;
    methods = c.getMethods();
    objectMethods.put(c, methods);
    return methods;
}`,"org.apache.tomcat.util.digester.Digester$EntityResolver2Wrapper.<init>_EntityResolver2_PropertySource[]_ClassLoader":
 `public EntityResolver2Wrapper(EntityResolver2 entityResolver, PropertySource[] source, ClassLoader classLoader) {
    super(entityResolver, source, classLoader);
    this.entityResolver2 = entityResolver;
}`,"org.apache.tomcat.util.modeler.modules.ModelerSource.<init>_":
 ``,"org.apache.catalina.util.LifecycleMBeanBase.preRegister_MBeanServer_ObjectName":
 `/**
 * Allows the object to be registered with an alternative
 * {@link MBeanServer} and/or {@link ObjectName}.
 */
@Override
public final ObjectName preRegister(MBeanServer server, ObjectName name) throws Exception {
    this.oname = name;
    this.domain = name.getDomain().intern();
    return oname;
}`,"org.apache.catalina.LifecycleEvent.<init>_Lifecycle_String_Object":
 `/**
 * Construct a new LifecycleEvent with the specified parameters.
 *
 * @param lifecycle Component on which this event occurred
 * @param type Event type (required)
 * @param data Event data (if any)
 */
public LifecycleEvent(Lifecycle lifecycle, String type, Object data) {
    super(lifecycle);
    this.type = type;
    this.data = data;
}`,"org.apache.tomcat.util.modeler.FeatureInfo.getName_":
 `/**
 * @return the name of this feature, which must be unique among features
 *  in the same collection.
 */
public String getName() {
    return this.name;
}`,"org.apache.catalina.startup.TomcatBaseTest.getTomcatInstance_":
 `/**
 * Make the Tomcat instance available to sub-classes.
 *
 * @return A Tomcat instance without any pre-configured web applications
 */
public Tomcat getTomcatInstance() {
    return tomcat;
}`,"org.apache.catalina.loader.WebappClassLoaderBase.loadedByThisOrChild_Object":
 `/**
 * @param o object to test, may be null
 * @return <code>true</code> if o has been loaded by the current classloader
 * or one of its descendants.
 */
private boolean loadedByThisOrChild(Object o) {
    if (o == null) {
        return false;
    }
    Class<?> clazz;
    if (o instanceof Class) {
        clazz = (Class<?>) o;
    } else {
        clazz = o.getClass();
    }
    ClassLoader cl = clazz.getClassLoader();
    while (cl != null) {
        if (cl == this) {
            return true;
        }
        cl = cl.getParent();
    }
    if (o instanceof Collection<?>) {
        Iterator<?> iter = ((Collection<?>) o).iterator();
        try {
            while (iter.hasNext()) {
                Object entry = iter.next();
                if (loadedByThisOrChild(entry)) {
                    return true;
                }
            }
        } catch (ConcurrentModificationException e) {
            log.warn(sm.getString("webappClassLoader.loadedByThisOrChildFail", clazz.getName(), getContextName()), e);
        }
    }
    return false;
}`,"org.apache.tomcat.util.modeler.ManagedBean.getType_":
 `/**
 * @return the fully qualified name of the Java class of the resource
 * implementation class described by the managed bean described
 * by this descriptor.
 */
public String getType() {
    return this.type;
}`,"org.apache.tomcat.util.digester.Digester.isFakeAttribute_Object_String":
 `/**
 * Determine if an attribute is a fake attribute.
 * @param object The object
 * @param name The attribute name
 * @return <code>true</code> if this is a fake attribute
 */
public boolean isFakeAttribute(Object object, String name) {
    if (fakeAttributes == null) {
        return false;
    }
    List<String> result = fakeAttributes.get(object.getClass());
    if (result == null) {
        result = fakeAttributes.get(Object.class);
    }
    if (result == null) {
        return false;
    } else {
        return result.contains(name);
    }
}`,"org.apache.tomcat.util.digester.Digester.register_String_String":
 `/**
 * <p>Register the specified DTD URL for the specified public identifier.
 * This must be called before the first call to <code>parse()</code>.
 * </p><p>
 * <code>Digester</code> contains an internal <code>EntityResolver</code>
 * implementation. This maps <code>PUBLICID</code>'s to URLs
 * (from which the resource will be loaded). A common use case for this
 * method is to register local URLs (possibly computed at runtime by a
 * classloader) for DTDs. This allows the performance advantage of using
 * a local version without having to ensure every <code>SYSTEM</code>
 * URI on every processed xml document is local. This implementation provides
 * only basic functionality. If more sophisticated features are required,
 * using {@link #setEntityResolver} to set a custom resolver is recommended.
 * </p><p>
 * <strong>Note:</strong> This method will have no effect when a custom
 * <code>EntityResolver</code> has been set. (Setting a custom
 * <code>EntityResolver</code> overrides the internal implementation.)
 * </p>
 * @param publicId Public identifier of the DTD to be resolved
 * @param entityURL The URL to use for reading this DTD
 */
public void register(String publicId, String entityURL) {
    if (log.isDebugEnabled()) {
        log.debug("register('" + publicId + "', '" + entityURL + "'");
    }
    entityValidator.put(publicId, entityURL);
}`,"org.apache.catalina.startup.Tomcat.addContext_String_String":
 `/**
 * Add a context - programmatic mode, no default web.xml used. This means
 * that there is no JSP support (no JSP servlet), no default servlet and
 * no web socket support unless explicitly enabled via the programmatic
 * interface. There is also no
 * {@link jakarta.servlet.ServletContainerInitializer} processing and no
 * annotation processing. If a
 * {@link jakarta.servlet.ServletContainerInitializer} is added
 * programmatically, there will still be no scanning for
 * {@link jakarta.servlet.annotation.HandlesTypes} matches.
 *
 * <p>
 * API calls equivalent with web.xml:
 *
 * <pre>{@code
 *  // context-param
 *  ctx.addParameter("name", "value");
 *
 *  // error-page
 *  ErrorPage ep = new ErrorPage();
 *  ep.setErrorCode(500);
 *  ep.setLocation("/error.html");
 *  ctx.addErrorPage(ep);
 *
 *  ctx.addMimeMapping("ext", "type");
 * }</pre>
 *
 * <p>
 * Note: If you reload the Context, all your configuration will be lost. If
 * you need reload support, consider using a LifecycleListener to provide
 * your configuration.
 *
 * <p>
 * TODO: add the rest
 *
 * @param contextPath The context mapping to use, "" for root context.
 * @param docBase Base directory for the context, for static files.
 *  Must exist, relative to the server home
 * @return the deployed context
 */
public Context addContext(String contextPath, String docBase) {
    return addContext(getHost(), contextPath, docBase);
}`,"org.apache.catalina.core.StandardEngine.getService_":
 `/**
 * Return the <code>Service</code> with which we are associated (if any).
 */
@Override
public Service getService() {
    return this.service;
}`,"org.apache.catalina.loader.WebappClassLoaderBase.binaryNameToPath_String_boolean":
 `private String binaryNameToPath(String binaryName, boolean withLeadingSlash) {
    // 1 for leading '/', 6 for ".class"
    StringBuilder path = new StringBuilder(7 + binaryName.length());
    if (withLeadingSlash) {
        path.append('/');
    }
    path.append(binaryName.replace('.', '/'));
    path.append(CLASS_FILE_SUFFIX);
    return path.toString();
}`,"org.apache.juli.logging.LogFactory.release_ClassLoader":
 `/**
 * Release any internal references to previously created {@link LogFactory}
 * instances that have been associated with the specified class loader
 * (if any), after calling the instance method <code>release()</code> on
 * each of them.
 *
 * @param classLoader ClassLoader for which to release the LogFactory
 */
public static void release(ClassLoader classLoader) {
    // JULI's log manager looks at the current classLoader so there is no
    // need to use the passed in classLoader, the default implementation
    // does not so calling reset in that case will break things
    if (!LogManager.getLogManager().getClass().getName().equals("java.util.logging.LogManager")) {
        LogManager.getLogManager().reset();
    }
}`,"org.apache.tomcat.util.digester.Digester.endElement_String_String_String":
 `/**
 * Process notification of the end of an XML element being reached.
 *
 * @param namespaceURI - The Namespace URI, or the empty string if the
 *   element has no Namespace URI or if Namespace processing is not
 *   being performed.
 * @param localName - The local name (without prefix), or the empty
 *   string if Namespace processing is not being performed.
 * @param qName - The qualified XML 1.0 name (with prefix), or the
 *   empty string if qualified names are not available.
 * @exception SAXException if a parsing error is to be reported
 */
@Override
public void endElement(String namespaceURI, String localName, String qName) throws SAXException {
    boolean debug = log.isDebugEnabled();
    if (debug) {
        if (saxLog.isDebugEnabled()) {
            saxLog.debug("endElement(" + namespaceURI + "," + localName + "," + qName + ")");
        }
        log.debug("  match='" + match + "'");
        log.debug("  bodyText='" + bodyText + "'");
    }
    // Parse system properties
    bodyText = updateBodyText(bodyText);
    // the actual element name is either in localName or qName, depending
    // on whether the parser is namespace aware
    String name = localName;
    if ((name == null) || (name.length() < 1)) {
        name = qName;
    }
    // Fire "body" events for all relevant rules
    List<Rule> rules = matches.pop();
    if ((rules != null) && (rules.size() > 0)) {
        String bodyText = this.bodyText.toString().intern();
        for (Rule value : rules) {
            try {
                Rule rule = value;
                if (debug) {
                    log.debug("  Fire body() for " + rule);
                }
                rule.body(namespaceURI, name, bodyText);
            } catch (Exception e) {
                log.error(sm.getString("digester.error.body"), e);
                throw createSAXException(e);
            } catch (Error e) {
                log.error(sm.getString("digester.error.body"), e);
                throw e;
            }
        }
    } else {
        if (debug) {
            log.debug(sm.getString("digester.noRulesFound", match));
        }
        if (rulesValidation) {
            log.warn(sm.getString("digester.noRulesFound", match));
        }
    }
    // Recover the body text from the surrounding element
    bodyText = bodyTexts.pop();
    // Fire "end" events for all relevant rules in reverse order
    if (rules != null) {
        for (int i = 0; i < rules.size(); i++) {
            int j = (rules.size() - i) - 1;
            try {
                Rule rule = rules.get(j);
                if (debug) {
                    log.debug("  Fire end() for " + rule);
                }
                rule.end(namespaceURI, name);
            } catch (Exception e) {
                log.error(sm.getString("digester.error.end"), e);
                throw createSAXException(e);
            } catch (Error e) {
                log.error(sm.getString("digester.error.end"), e);
                throw e;
            }
        }
    }
    // Recover the previous match expression
    int slash = match.lastIndexOf('/');
    if (slash >= 0) {
        match = match.substring(0, slash);
    } else {
        match = "";
    }
}`,"org.apache.catalina.core.StandardHost.getContextClass_":
 `/**
 * @return the Java class name of the Context implementation class
 * for new web applications.
 */
public String getContextClass() {
    return this.contextClass;
}`,"org.apache.juli.logging.DirectJDKLog.isDebugEnabled_":
 `@Override
public final boolean isDebugEnabled() {
    return logger.isLoggable(Level.FINE);
}`,"org.apache.catalina.loader.WebappClassLoaderBase.getThreads_":
 `/*
     * Get the set of current threads as an array.
     */
private Thread[] getThreads() {
    // Get the current thread group
    ThreadGroup tg = Thread.currentThread().getThreadGroup();
    // Find the root thread group
    try {
        while (tg.getParent() != null) {
            tg = tg.getParent();
        }
    } catch (SecurityException se) {
        String msg = sm.getString("webappClassLoader.getThreadGroupError", tg.getName());
        if (log.isDebugEnabled()) {
            log.debug(msg, se);
        } else {
            log.warn(msg);
        }
    }
    int threadCountGuess = tg.activeCount() + 50;
    Thread[] threads = new Thread[threadCountGuess];
    int threadCountActual = tg.enumerate(threads);
    // Make sure we don't miss any threads
    while (threadCountActual == threadCountGuess) {
        threadCountGuess *= 2;
        threads = new Thread[threadCountGuess];
        // Note tg.enumerate(Thread[]) silently ignores any threads that
        // can't fit into the array
        threadCountActual = tg.enumerate(threads);
    }
    return threads;
}`,"org.apache.catalina.startup.Tomcat$FixContextListener.<init>_":
 ``,"org.apache.catalina.core.ContainerBase.fireContainerEvent_String_Object":
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
    if (listeners.size() < 1)
        return;
    ContainerEvent event = new ContainerEvent(this, type, data);
    // Note for each uses an iterator internally so this is safe
    for (ContainerListener listener : listeners) {
        listener.containerEvent(event);
    }
}`,"org.apache.tomcat.util.modeler.AttributeInfo.createAttributeInfo_":
 `// --------------------------------------------------------- Public Methods
/**
 * Create and return a <code>ModelMBeanAttributeInfo</code> object that
 * corresponds to the attribute described by this instance.
 * @return the attribute info
 */
MBeanAttributeInfo createAttributeInfo() {
    // Return our cached information (if any)
    if (info == null) {
        info = new MBeanAttributeInfo(getName(), getType(), getDescription(), isReadable(), isWriteable(), false);
    }
    return (MBeanAttributeInfo) info;
}`,"org.apache.juli.logging.DirectJDKLog.getInstance_String":
 `static Log getInstance(String name) {
    return new DirectJDKLog(name);
}`,"org.apache.catalina.core.ContainerBase.getParent_":
 `/**
 * Return the Container for which this Container is a child, if there is
 * one.  If there is no defined parent, return <code>null</code>.
 */
@Override
public Container getParent() {
    return parent;
}`,"org.apache.tomcat.util.modeler.modules.MbeansDescriptorsDigesterSource.setRegistry_Registry":
 `public void setRegistry(Registry reg) {
    this.registry = reg;
}`,"org.apache.tomcat.util.digester.CallMethodRule.<init>_String_int":
 `// ----------------------------------------------------------- Constructors
/**
 * Construct a "call method" rule with the specified method name.  The
 * parameter types (if any) default to java.lang.String.
 *
 * @param methodName Method name of the parent method to call
 * @param paramCount The number of parameters to collect, or
 *  zero for a single argument from the body of this element.
 */
public CallMethodRule(String methodName, int paramCount) {
    this(0, methodName, paramCount);
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
}`,"org.apache.catalina.loader.WebappClassLoaderBase.clearReferencesObjectStreamClassCaches_":
 `private void clearReferencesObjectStreamClassCaches() {
    try {
        Class<?> clazz = Class.forName("java.io.ObjectStreamClass$Caches");
        clearCache(clazz, "localDescs");
        clearCache(clazz, "reflectors");
    } catch (ReflectiveOperationException | SecurityException | ClassCastException e) {
        log.warn(sm.getString("webappClassLoader.clearObjectStreamClassCachesFail", getContextName()), e);
    } catch (Exception e) {
        JreCompat jreCompat = JreCompat.getInstance();
        if (jreCompat.isInstanceOfInaccessibleObjectException(e)) {
            // Must be running on Java 9 without the necessary command line
            // options.
            String currentModule = JreCompat.getInstance().getModuleName(this.getClass());
            log.warn(sm.getString("webappClassLoader.addExportsJavaIo", currentModule));
            return;
        } else {
            // Re-throw all other exceptions
            throw e;
        }
    }
}`,"org.apache.tomcat.util.ExceptionUtils.unwrapInvocationTargetException_Throwable":
 `/**
 * Checks whether the supplied Throwable is an instance of
 * <code>InvocationTargetException</code> and returns the throwable that is
 * wrapped by it, if there is any.
 *
 * @param t the Throwable to check
 * @return <code>t</code> or <code>t.getCause()</code>
 */
public static Throwable unwrapInvocationTargetException(Throwable t) {
    if (t instanceof InvocationTargetException && t.getCause() != null) {
        return t.getCause();
    }
    return t;
}`,"org.apache.tomcat.util.digester.Digester.pop_":
 `/**
 * Pop the top object off of the stack, and return it.  If there are
 * no objects on the stack, return <code>null</code>.
 * @return the top object
 */
public Object pop() {
    try {
        return stack.pop();
    } catch (EmptyStackException e) {
        log.warn(sm.getString("digester.emptyStack"));
        return null;
    }
}`,"org.apache.catalina.loader.WebappClassLoaderBase.clearReferences_":
 `/**
 * Clear references.
 */
protected void clearReferences() {
    // If the JVM is shutting down, skip the memory leak checks
    if (skipMemoryLeakChecksOnJvmShutdown && !resources.getContext().getParent().getState().isAvailable()) {
        // During reloading / redeployment the parent is expected to be
        // available. Parent is not available so this might be a JVM
        // shutdown.
        try {
            Thread dummyHook = new Thread();
            Runtime.getRuntime().addShutdownHook(dummyHook);
            Runtime.getRuntime().removeShutdownHook(dummyHook);
        } catch (IllegalStateException ise) {
            return;
        }
    }
    if (!JreCompat.isGraalAvailable()) {
        // De-register any remaining JDBC drivers
        clearReferencesJdbc();
    }
    // Stop any threads the web application started
    clearReferencesThreads();
    // Clear any references retained in the serialization caches
    if (clearReferencesObjectStreamClassCaches && !JreCompat.isGraalAvailable()) {
        clearReferencesObjectStreamClassCaches();
    }
    // Check for leaks triggered by ThreadLocals loaded by this class loader
    if (clearReferencesThreadLocals && !JreCompat.isGraalAvailable()) {
        checkThreadLocalsForLeaks();
    }
    // Clear RMI Targets loaded by this class loader
    if (clearReferencesRmiTargets) {
        clearReferencesRmiTargets();
    }
    // Clear the IntrospectionUtils cache.
    IntrospectionUtils.clear();
    // Clear the classloader reference in common-logging
    if (clearReferencesLogFactoryRelease) {
        org.apache.juli.logging.LogFactory.release(this);
    }
    // Clear the classloader reference in the VM's bean introspector
    java.beans.Introspector.flushCaches();
    // Clear any custom URLStreamHandlers
    TomcatURLStreamHandlerFactory.release(this);
}`,"org.apache.tomcat.util.digester.ObjectCreateRule.<init>_String":
 `// ----------------------------------------------------------- Constructors
/**
 * Construct an object create rule with the specified class name.
 *
 * @param className Java class name of the object to be created
 */
public ObjectCreateRule(String className) {
    this(className, null);
}`,"org.apache.tomcat.util.digester.Digester.setErrorHandler_ErrorHandler":
 `/**
 * Set the error handler for this Digester.
 *
 * @param errorHandler The new error handler
 */
public void setErrorHandler(ErrorHandler errorHandler) {
    this.errorHandler = errorHandler;
}`,"org.apache.catalina.util.URLEncoder.<init>_BitSet":
 `private URLEncoder(BitSet safeCharacters) {
    this.safeCharacters = safeCharacters;
}`,"org.apache.tomcat.util.modeler.ManagedBean.setDomain_String":
 `public void setDomain(String domain) {
    this.domain = domain;
}`,"org.apache.catalina.loader.WebappClassLoaderBase.loadClass_String_boolean":
 `/**
 * Load the class with the specified name, searching using the following
 * algorithm until it finds and returns the class.  If the class cannot
 * be found, returns <code>ClassNotFoundException</code>.
 * <ul>
 * <li>Call <code>findLoadedClass(String)</code> to check if the
 *     class has already been loaded.  If it has, the same
 *     <code>Class</code> object is returned.</li>
 * <li>If the <code>delegate</code> property is set to <code>true</code>,
 *     call the <code>loadClass()</code> method of the parent class
 *     loader, if any.</li>
 * <li>Call <code>findClass()</code> to find this class in our locally
 *     defined repositories.</li>
 * <li>Call the <code>loadClass()</code> method of our parent
 *     class loader, if any.</li>
 * </ul>
 * If the class was found using the above steps, and the
 * <code>resolve</code> flag is <code>true</code>, this method will then
 * call <code>resolveClass(Class)</code> on the resulting Class object.
 *
 * @param name The binary name of the class to be loaded
 * @param resolve If <code>true</code> then resolve the class
 *
 * @exception ClassNotFoundException if the class was not found
 */
@Override
public Class<?> loadClass(String name, boolean resolve) throws ClassNotFoundException {
    synchronized (JreCompat.isGraalAvailable() ? this : getClassLoadingLock(name)) {
        if (log.isDebugEnabled())
            log.debug("loadClass(" + name + ", " + resolve + ")");
        Class<?> clazz = null;
        // Log access to stopped class loader
        checkStateForClassLoading(name);
        // (0) Check our previously loaded local class cache
        clazz = findLoadedClass0(name);
        if (clazz != null) {
            if (log.isDebugEnabled())
                log.debug("  Returning class from cache");
            if (resolve)
                resolveClass(clazz);
            return clazz;
        }
        // (0.1) Check our previously loaded class cache
        clazz = JreCompat.isGraalAvailable() ? null : findLoadedClass(name);
        if (clazz != null) {
            if (log.isDebugEnabled())
                log.debug("  Returning class from cache");
            if (resolve)
                resolveClass(clazz);
            return clazz;
        }
        // (0.2) Try loading the class with the system class loader, to prevent
        // the webapp from overriding Java SE classes. This implements
        // SRV.10.7.2
        String resourceName = binaryNameToPath(name, false);
        ClassLoader javaseLoader = getJavaseClassLoader();
        boolean tryLoadingFromJavaseLoader;
        try {
            // Use getResource as it won't trigger an expensive
            // ClassNotFoundException if the resource is not available from
            // the Java SE class loader. However (see
            // https://bz.apache.org/bugzilla/show_bug.cgi?id=58125 for
            // details) when running under a security manager in rare cases
            // this call may trigger a ClassCircularityError.
            // See https://bz.apache.org/bugzilla/show_bug.cgi?id=61424 for
            // details of how this may trigger a StackOverflowError
            // Given these reported errors, catch Throwable to ensure any
            // other edge cases are also caught
            URL url;
            if (securityManager != null) {
                PrivilegedAction<URL> dp = new PrivilegedJavaseGetResource(resourceName);
                url = AccessController.doPrivileged(dp);
            } else {
                url = javaseLoader.getResource(resourceName);
            }
            tryLoadingFromJavaseLoader = (url != null);
        } catch (Throwable t) {
            // Swallow all exceptions apart from those that must be re-thrown
            ExceptionUtils.handleThrowable(t);
            // The getResource() trick won't work for this class. We have to
            // try loading it directly and accept that we might get a
            // ClassNotFoundException.
            tryLoadingFromJavaseLoader = true;
        }
        if (tryLoadingFromJavaseLoader) {
            try {
                clazz = javaseLoader.loadClass(name);
                if (clazz != null) {
                    if (resolve)
                        resolveClass(clazz);
                    return clazz;
                }
            } catch (ClassNotFoundException e) {
                // Ignore
            }
        }
        // (0.5) Permission to access this class when using a SecurityManager
        if (securityManager != null) {
            int i = name.lastIndexOf('.');
            if (i >= 0) {
                try {
                    securityManager.checkPackageAccess(name.substring(0, i));
                } catch (SecurityException se) {
                    String error = sm.getString("webappClassLoader.restrictedPackage", name);
                    log.info(error, se);
                    throw new ClassNotFoundException(error, se);
                }
            }
        }
        boolean delegateLoad = delegate || filter(name, true);
        // (1) Delegate to our parent if requested
        if (delegateLoad) {
            if (log.isDebugEnabled())
                log.debug("  Delegating to parent classloader1 " + parent);
            try {
                clazz = Class.forName(name, false, parent);
                if (clazz != null) {
                    if (log.isDebugEnabled())
                        log.debug("  Loading class from parent");
                    if (resolve)
                        resolveClass(clazz);
                    return clazz;
                }
            } catch (ClassNotFoundException e) {
                // Ignore
            }
        }
        // (2) Search local repositories
        if (log.isDebugEnabled())
            log.debug("  Searching local repositories");
        try {
            clazz = findClass(name);
            if (clazz != null) {
                if (log.isDebugEnabled())
                    log.debug("  Loading class from local repository");
                if (resolve)
                    resolveClass(clazz);
                return clazz;
            }
        } catch (ClassNotFoundException e) {
            // Ignore
        }
        // (3) Delegate to parent unconditionally
        if (!delegateLoad) {
            if (log.isDebugEnabled())
                log.debug("  Delegating to parent classloader at end: " + parent);
            try {
                clazz = Class.forName(name, false, parent);
                if (clazz != null) {
                    if (log.isDebugEnabled())
                        log.debug("  Loading class from parent");
                    if (resolve)
                        resolveClass(clazz);
                    return clazz;
                }
            } catch (ClassNotFoundException e) {
                // Ignore
            }
        }
    }
    throw new ClassNotFoundException(name);
}`,"org.apache.catalina.webresources.TomcatURLStreamHandlerFactory.release_ClassLoader":
 `/**
 * Release references to any user provided factories that have been loaded
 * using the provided class loader. Called during web application stop to
 * prevent memory leaks.
 *
 * @param classLoader The class loader to release
 */
public static void release(ClassLoader classLoader) {
    if (instance == null) {
        return;
    }
    List<URLStreamHandlerFactory> factories = instance.userFactories;
    for (URLStreamHandlerFactory factory : factories) {
        ClassLoader factoryLoader = factory.getClass().getClassLoader();
        while (factoryLoader != null) {
            if (classLoader.equals(factoryLoader)) {
                // Implementation note: userFactories is a
                // CopyOnWriteArrayList, so items are removed with
                // List.remove() instead of usual Iterator.remove()
                factories.remove(factory);
                break;
            }
            factoryLoader = factoryLoader.getParent();
        }
    }
}`,"org.apache.catalina.startup.Tomcat.getEngine_":
 `/**
 * Access to the engine, for further customization.
 * @return The engine
 */
public Engine getEngine() {
    Service service = getServer().findServices()[0];
    if (service.getContainer() != null) {
        return service.getContainer();
    }
    Engine engine = new StandardEngine();
    engine.setName("Tomcat");
    engine.setDefaultHost(hostname);
    engine.setRealm(createDefaultRealm());
    service.setContainer(engine);
    return engine;
}`,"org.apache.tomcat.util.digester.ArrayStack.peek_int":
 `/**
 * Returns the n'th item down (zero-relative) from the top of this
 * stack without removing it.
 *
 * @param n  the number of items down to go
 * @return the n'th item on the stack, zero relative
 * @throws EmptyStackException  if there are not enough items on the
 *  stack to satisfy this request
 */
public E peek(int n) throws EmptyStackException {
    int m = (size() - n) - 1;
    if (m < 0) {
        throw new EmptyStackException();
    } else {
        return get(m);
    }
}`,"org.apache.tomcat.util.IntrospectionUtils.replaceProperties_String_Hashtable_IntrospectionUtils$SecurePropertySource[]_ClassLoader_int":
 ``,"org.apache.tomcat.util.modeler.Registry.getModelerSource_String":
 `private ModelerSource getModelerSource(String type) throws Exception {
    if (type == null)
        type = "MbeansDescriptorsDigesterSource";
    if (!type.contains(".")) {
        type = "org.apache.tomcat.util.modeler.modules." + type;
    }
    Class<?> c = Class.forName(type);
    ModelerSource ds = (ModelerSource) c.getConstructor().newInstance();
    return ds;
}`,"org.apache.catalina.core.StandardContext.getPath_":
 `/**
 * @return the context path for this Context.
 */
@Override
public String getPath() {
    return path;
}`,"org.apache.tomcat.util.IntrospectionUtils.replaceProperties_String_Hashtable_IntrospectionUtils$SecurePropertySource[]_ClassLoader":
 ``,"org.apache.tomcat.util.modeler.OperationInfo.setImpact_String":
 `public void setImpact(String impact) {
    if (impact == null)
        this.impact = null;
    else
        this.impact = impact.toUpperCase(Locale.ENGLISH);
}`,"org.apache.tomcat.util.modeler.OperationInfo.createOperationInfo_":
 `/**
 * Create and return a <code>ModelMBeanOperationInfo</code> object that
 * corresponds to the attribute described by this instance.
 * @return the operation info
 */
MBeanOperationInfo createOperationInfo() {
    // Return our cached information (if any)
    if (info == null) {
        // Create and return a new information object
        int impact = MBeanOperationInfo.UNKNOWN;
        if ("ACTION".equals(getImpact()))
            impact = MBeanOperationInfo.ACTION;
        else if ("ACTION_INFO".equals(getImpact()))
            impact = MBeanOperationInfo.ACTION_INFO;
        else if ("INFO".equals(getImpact()))
            impact = MBeanOperationInfo.INFO;
        info = new MBeanOperationInfo(getName(), getDescription(), getMBeanParameterInfo(), getReturnType(), impact);
    }
    return (MBeanOperationInfo) info;
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
}`,"org.apache.juli.logging.DirectJDKLog.info_Object":
 `@Override
public final void info(Object message) {
    log(Level.INFO, String.valueOf(message), null);
}`,"org.apache.tomcat.util.IntrospectionUtils.clear_":
 `// -------------------- other utils --------------------
public static void clear() {
    objectMethods.clear();
}`,"org.apache.coyote.http11.AbstractHttp11Protocol.isSSLEnabled_":
 `// ------------------------------------------------ HTTP specific properties
// ------------------------------------------ passed through to the EndPoint
public boolean isSSLEnabled() {
    return getEndpoint().isSSLEnabled();
}`,"org.apache.tomcat.util.modeler.modules.MbeansDescriptorsDigesterSource.<init>_":
 ``,"org.apache.tomcat.util.modeler.ManagedBean.getOperations_":
 `/**
 * @return the collection of operations for this MBean.
 */
public OperationInfo[] getOperations() {
    OperationInfo[] result = new OperationInfo[operations.size()];
    operations.values().toArray(result);
    return result;
}`,"org.apache.catalina.core.ApplicationContextFacade.removeAttribute_String":
 `@Override
public void removeAttribute(String name) {
    if (SecurityUtil.isPackageProtectionEnabled()) {
        doPrivileged("removeAttribute", new Object[] { name });
    } else {
        context.removeAttribute(name);
    }
}`,"org.apache.tomcat.util.modeler.ManagedBean.setType_String":
 `public void setType(String type) {
    mBeanInfoLock.writeLock().lock();
    try {
        this.type = type;
        this.info = null;
    } finally {
        mBeanInfoLock.writeLock().unlock();
    }
}`,"org.apache.catalina.loader.WebappClassLoader.getClassLoadingLock_String":
 `/**
 * This class loader is not parallel capable so lock on the class loader
 * rather than a per-class lock.
 */
@Override
protected Object getClassLoadingLock(String className) {
    return this;
}`,"org.apache.tomcat.util.modeler.BaseModelMBean.getMBeanInfo_":
 `/**
 * Return the <code>MBeanInfo</code> object for this MBean.
 */
@Override
public MBeanInfo getMBeanInfo() {
    return managedBean.getMBeanInfo();
}`,"org.apache.tomcat.util.digester.Digester$EntityResolverWrapper.<init>_EntityResolver_PropertySource[]_ClassLoader":
 `public EntityResolverWrapper(EntityResolver entityResolver, PropertySource[] source, ClassLoader classLoader) {
    this.entityResolver = entityResolver;
    this.source = source;
    this.classLoader = classLoader;
}`,"org.apache.tomcat.util.digester.Rule.<init>_":
 `// ----------------------------------------------------------- Constructors
/**
 * <p>Base constructor.
 * Now the digester will be set when the rule is added.</p>
 */
public Rule() {
}`,"org.apache.catalina.util.LifecycleBase.getState_":
 `/**
 * {@inheritDoc}
 */
@Override
public LifecycleState getState() {
    return state;
}`,"org.apache.tomcat.util.digester.Digester.getFactory_":
 `/**
 * SAX parser factory method.
 * @return the SAXParserFactory we will use, creating one if necessary.
 * @throws ParserConfigurationException Error creating parser
 * @throws SAXNotSupportedException Error creating parser
 * @throws SAXNotRecognizedException Error creating parser
 */
public SAXParserFactory getFactory() throws SAXNotRecognizedException, SAXNotSupportedException, ParserConfigurationException {
    if (factory == null) {
        factory = SAXParserFactory.newInstance();
        factory.setNamespaceAware(namespaceAware);
        // Preserve xmlns attributes
        if (namespaceAware) {
            factory.setFeature("http://xml.org/sax/features/namespace-prefixes", true);
        }
        factory.setValidating(validating);
        if (validating) {
            // Enable DTD validation
            factory.setFeature("http://xml.org/sax/features/validation", true);
            // Enable schema validation
            factory.setFeature("http://apache.org/xml/features/validation/schema", true);
        }
    }
    return factory;
}`,"org.apache.tomcat.util.modeler.Registry.findDescriptor_Class_String":
 `/**
 * Lookup the component descriptor in the package and in the parent
 * packages.
 */
private void findDescriptor(Class<?> beanClass, String type) {
    if (type == null) {
        type = beanClass.getName();
    }
    ClassLoader classLoader = null;
    if (beanClass != null) {
        classLoader = beanClass.getClassLoader();
    }
    if (classLoader == null) {
        classLoader = Thread.currentThread().getContextClassLoader();
    }
    if (classLoader == null) {
        classLoader = this.getClass().getClassLoader();
    }
    String className = type;
    String pkg = className;
    while (pkg.indexOf('.') > 0) {
        int lastComp = pkg.lastIndexOf('.');
        if (lastComp <= 0)
            return;
        pkg = pkg.substring(0, lastComp);
        if (searchedPaths.get(pkg) != null) {
            return;
        }
        loadDescriptors(pkg, classLoader);
    }
}`,"org.apache.tomcat.util.modeler.Registry.unregisterComponent_ObjectName":
 `/**
 * Unregister a component. This is just a helper that avoids exceptions by
 * checking if the mbean is already registered
 *
 * @param oname The bean name
 */
public void unregisterComponent(ObjectName oname) {
    try {
        if (oname != null && getMBeanServer().isRegistered(oname)) {
            getMBeanServer().unregisterMBean(oname);
        }
    } catch (Throwable t) {
        log.error(sm.getString("registry.unregisterError"), t);
    }
}`,"org.apache.tomcat.util.IntrospectionUtils.capitalize_String":
 `/**
 * Reverse of Introspector.decapitalize.
 * @param name The name
 * @return the capitalized string
 */
public static String capitalize(String name) {
    if (name == null || name.length() == 0) {
        return name;
    }
    char[] chars = name.toCharArray();
    chars[0] = Character.toUpperCase(chars[0]);
    return new String(chars);
}`,"org.apache.catalina.core.StandardPipeline.setContainer_Container":
 `/**
 * Set the Container with which this Pipeline is associated.
 *
 * @param container The new associated container
 */
@Override
public void setContainer(Container container) {
    this.container = container;
}`,"org.apache.tomcat.util.modeler.modules.MbeansDescriptorsDigesterSource.setSource_Object":
 `public void setSource(Object source) {
    this.source = source;
}`,"org.apache.catalina.core.ApplicationSessionCookieConfig.<init>_StandardContext":
 `public ApplicationSessionCookieConfig(StandardContext context) {
    this.context = context;
}`,"org.apache.catalina.core.StandardHost.addChild_Container":
 `/**
 * Add a child Container, only if the proposed child is an implementation
 * of Context.
 *
 * @param child Child container to be added
 */
@Override
public void addChild(Container child) {
    if (!(child instanceof Context))
        throw new IllegalArgumentException(sm.getString("standardHost.notContext"));
    child.addLifecycleListener(new MemoryLeakTrackingListener());
    // Avoid NPE for case where Context is defined in server.xml with only a
    // docBase
    Context context = (Context) child;
    if (context.getPath() == null) {
        ContextName cn = new ContextName(context.getDocBase(), true);
        context.setPath(cn.getPath());
    }
    super.addChild(child);
}`,"org.apache.catalina.startup.Tomcat.createContext_Host_String":
 `/**
 * Create the configured {@link Context} for the given <code>host</code>.
 * The default constructor of the class that was configured with
 * {@link StandardHost#setContextClass(String)} will be used
 *
 * @param host
 *            host for which the {@link Context} should be created, or
 *            <code>null</code> if default host should be used
 * @param url
 *            path of the webapp which should get the {@link Context}
 * @return newly created {@link Context}
 */
private Context createContext(Host host, String url) {
    String defaultContextClass = StandardContext.class.getName();
    String contextClass = StandardContext.class.getName();
    if (host == null) {
        host = this.getHost();
    }
    if (host instanceof StandardHost) {
        contextClass = ((StandardHost) host).getContextClass();
    }
    try {
        if (defaultContextClass.equals(contextClass)) {
            return new StandardContext();
        } else {
            return (Context) Class.forName(contextClass).getConstructor().newInstance();
        }
    } catch (ReflectiveOperationException | IllegalArgumentException | SecurityException e) {
        throw new IllegalArgumentException(sm.getString("tomcat.noContextClass", contextClass, host, url), e);
    }
}`,"org.apache.tomcat.util.modeler.modules.MbeansDescriptorsDigesterSource.execute_":
 `public void execute() throws Exception {
    if (registry == null) {
        registry = Registry.getRegistry(null, null);
    }
    InputStream stream = (InputStream) source;
    List<ManagedBean> loadedMbeans = new ArrayList<>();
    synchronized (dLock) {
        if (digester == null) {
            digester = createDigester();
        }
        // Process the input file to configure our registry
        try {
            // Push our registry object onto the stack
            digester.push(loadedMbeans);
            digester.parse(stream);
        } catch (Exception e) {
            log.error(sm.getString("modules.digesterParseError"), e);
            throw e;
        } finally {
            digester.reset();
        }
    }
    for (ManagedBean loadedMbean : loadedMbeans) {
        registry.addManagedBean(loadedMbean);
    }
}`,"org.apache.tomcat.util.IntrospectionUtils.getProperty_Object_String":
 `public static Object getProperty(Object o, String name) {
    if (XReflectionIntrospectionUtils.isEnabled()) {
        return XReflectionIntrospectionUtils.getPropertyInternal(o, name);
    }
    String getter = "get" + capitalize(name);
    String isGetter = "is" + capitalize(name);
    try {
        Method[] methods = findMethods(o.getClass());
        Method getPropertyMethod = null;
        // First, the ideal case - a getFoo() method
        for (Method method : methods) {
            Class<?>[] paramT = method.getParameterTypes();
            if (getter.equals(method.getName()) && paramT.length == 0) {
                return method.invoke(o, (Object[]) null);
            }
            if (isGetter.equals(method.getName()) && paramT.length == 0) {
                return method.invoke(o, (Object[]) null);
            }
            if ("getProperty".equals(method.getName())) {
                getPropertyMethod = method;
            }
        }
        // Ok, no setXXX found, try a getProperty("name")
        if (getPropertyMethod != null) {
            Object[] params = new Object[1];
            params[0] = name;
            return getPropertyMethod.invoke(o, params);
        }
    } catch (IllegalArgumentException | SecurityException | IllegalAccessException e) {
        log.warn(sm.getString("introspectionUtils.getPropertyError", name, o.getClass()), e);
    } catch (InvocationTargetException e) {
        if (e.getCause() instanceof NullPointerException) {
            // Assume the underlying object uses a storage to represent an unset property
            return null;
        }
        ExceptionUtils.handleThrowable(e.getCause());
        log.warn(sm.getString("introspectionUtils.getPropertyError", name, o.getClass()), e);
    }
    return null;
}`,"org.apache.tomcat.util.buf.StringUtils.join_T[]_char_Function_StringBuilder":
 `public static <T> void join(T[] array, char separator, Function<T, String> function, StringBuilder sb) {
    if (array == null) {
        return;
    }
    join(Arrays.asList(array), separator, function, sb);
}`,"org.apache.catalina.loader.WebappClassLoader.<init>_":
 `public WebappClassLoader() {
    super();
}`,"org.apache.catalina.loader.WebappClassLoaderBase.stop_":
 `/**
 * Stop the class loader.
 *
 * @exception LifecycleException if a lifecycle error occurs
 */
@Override
public void stop() throws LifecycleException {
    state = LifecycleState.STOPPING_PREP;
    // Clearing references should be done before setting started to
    // false, due to possible side effects
    clearReferences();
    state = LifecycleState.STOPPING;
    resourceEntries.clear();
    jarModificationTimes.clear();
    resources = null;
    permissionList.clear();
    loaderPC.clear();
    state = LifecycleState.STOPPED;
}`,"org.apache.tomcat.util.modeler.ManagedBean.getClassName_":
 `/**
 * The fully qualified name of the Java class of the MBean
 * described by this descriptor.  If not specified, the standard JMX
 * class (<code>javax.management.modelmbean.RequiredModeLMBean</code>)
 * will be utilized.
 * @return the class name
 */
public String getClassName() {
    return this.className;
}`,"org.apache.tomcat.util.modeler.BaseModelMBean.preRegister_MBeanServer_ObjectName":
 `// -------------------- Registration  --------------------
// XXX We can add some method patterns here- like setName() and
// setDomain() for code that doesn't implement the Registration
@Override
public ObjectName preRegister(MBeanServer server, ObjectName name) throws Exception {
    if (log.isDebugEnabled())
        log.debug("preRegister " + resource + " " + name);
    oname = name;
    if (resource instanceof MBeanRegistration) {
        oname = ((MBeanRegistration) resource).preRegister(server, name);
    }
    return oname;
}`,"org.apache.tomcat.util.digester.Digester.startDTD_String_String_String":
 `// ----------------------------------------------- LexicalHandler Methods
@Override
public void startDTD(String name, String publicId, String systemId) throws SAXException {
    setPublicId(publicId);
}`,"org.apache.tomcat.util.modeler.ManagedBean.createMBean_Object":
 `/**
 * Create and return a <code>ModelMBean</code> that has been
 * preconfigured with the <code>ModelMBeanInfo</code> information
 * for this managed bean, and is associated with the specified
 * managed object instance.  The returned <code>ModelMBean</code>
 * will <strong>NOT</strong> have been registered with our
 * <code>MBeanServer</code>.
 *
 * @param instance Instanced of the managed object, or <code>null</code>
 *  for no associated instance
 * @return the MBean
 * @exception InstanceNotFoundException if the managed resource
 *  object cannot be found
 * @exception MBeanException if a problem occurs instantiating the
 *  <code>ModelMBean</code> instance
 * @exception RuntimeOperationsException if a JMX runtime error occurs
 */
public DynamicMBean createMBean(Object instance) throws InstanceNotFoundException, MBeanException, RuntimeOperationsException {
    BaseModelMBean mbean = null;
    // Load the ModelMBean implementation class
    if (getClassName().equals(BASE_MBEAN)) {
        // Skip introspection
        mbean = new BaseModelMBean();
    } else {
        Class<?> clazz = null;
        Exception ex = null;
        try {
            clazz = Class.forName(getClassName());
        } catch (Exception e) {
        }
        if (clazz == null) {
            try {
                ClassLoader cl = Thread.currentThread().getContextClassLoader();
                if (cl != null)
                    clazz = cl.loadClass(getClassName());
            } catch (Exception e) {
                ex = e;
            }
        }
        if (clazz == null) {
            throw new MBeanException(ex, sm.getString("managedMBean.cannotLoadClass", getClassName()));
        }
        try {
            // Stupid - this will set the default minfo first....
            mbean = (BaseModelMBean) clazz.getConstructor().newInstance();
        } catch (RuntimeOperationsException e) {
            throw e;
        } catch (Exception e) {
            throw new MBeanException(e, sm.getString("managedMBean.cannotInstantiateClass", getClassName()));
        }
    }
    mbean.setManagedBean(this);
    // Set the managed resource (if any)
    try {
        if (instance != null)
            mbean.setManagedResource(instance, "ObjectReference");
    } catch (InstanceNotFoundException e) {
        throw e;
    }
    return mbean;
}`,"org.apache.catalina.core.ContainerBase.getDomainInternal_":
 `// -------------------- JMX and Registration  --------------------
@Override
protected String getDomainInternal() {
    Container p = this.getParent();
    if (p == null) {
        return null;
    } else {
        return p.getDomain();
    }
}`,"org.apache.catalina.loader.WebappClassLoaderBase.clearCache_Class_String":
 `private void clearCache(Class<?> target, String mapName) throws ReflectiveOperationException, SecurityException, ClassCastException {
    Field f = target.getDeclaredField(mapName);
    f.setAccessible(true);
    Map<?, ?> map = (Map<?, ?>) f.get(null);
    Iterator<?> keys = map.keySet().iterator();
    while (keys.hasNext()) {
        Object key = keys.next();
        if (key instanceof Reference) {
            Object clazz = ((Reference<?>) key).get();
            if (loadedByThisOrChild(clazz)) {
                keys.remove();
            }
        }
    }
}`,"org.apache.catalina.util.LifecycleBase.start_":
 `/**
 * {@inheritDoc}
 */
@Override
public final synchronized void start() throws LifecycleException {
    if (LifecycleState.STARTING_PREP.equals(state) || LifecycleState.STARTING.equals(state) || LifecycleState.STARTED.equals(state)) {
        if (log.isDebugEnabled()) {
            Exception e = new LifecycleException();
            log.debug(sm.getString("lifecycleBase.alreadyStarted", toString()), e);
        } else if (log.isInfoEnabled()) {
            log.info(sm.getString("lifecycleBase.alreadyStarted", toString()));
        }
        return;
    }
    if (state.equals(LifecycleState.NEW)) {
        init();
    } else if (state.equals(LifecycleState.FAILED)) {
        stop();
    } else if (!state.equals(LifecycleState.INITIALIZED) && !state.equals(LifecycleState.STOPPED)) {
        invalidTransition(Lifecycle.BEFORE_START_EVENT);
    }
    try {
        setStateInternal(LifecycleState.STARTING_PREP, null, false);
        startInternal();
        if (state.equals(LifecycleState.FAILED)) {
            // This is a 'controlled' failure. The component put itself into the
            // FAILED state so call stop() to complete the clean-up.
            stop();
        } else if (!state.equals(LifecycleState.STARTING)) {
            // Shouldn't be necessary but acts as a check that sub-classes are
            // doing what they are supposed to.
            invalidTransition(Lifecycle.AFTER_START_EVENT);
        } else {
            setStateInternal(LifecycleState.STARTED, null, false);
        }
    } catch (Throwable t) {
        // This is an 'uncontrolled' failure so put the component into the
        // FAILED state and throw an exception.
        handleSubClassException(t, "lifecycleBase.startFail", toString());
    }
}`,"org.apache.tomcat.util.modeler.AttributeInfo.isWriteable_":
 `/**
 * Is this attribute writable by management applications?
 * @return <code>true</code> if writable
 */
public boolean isWriteable() {
    return this.writeable;
}`,"org.apache.tomcat.util.modeler.FeatureInfo.setName_String":
 `public void setName(String name) {
    this.name = name;
}`,"org.apache.catalina.loader.WebappClassLoaderBase.clearReferencesRmiTargets_":
 `/**
 * This depends on the internals of the Sun JVM so it does everything by
 * reflection.
 */
private void clearReferencesRmiTargets() {
    try {
        // Need access to the ccl field of sun.rmi.transport.Target to find
        // the leaks
        Class<?> objectTargetClass = Class.forName("sun.rmi.transport.Target");
        Field cclField = objectTargetClass.getDeclaredField("ccl");
        cclField.setAccessible(true);
        // Need access to the stub field to report the leaks
        Field stubField = objectTargetClass.getDeclaredField("stub");
        stubField.setAccessible(true);
        // Clear the objTable map
        Class<?> objectTableClass = Class.forName("sun.rmi.transport.ObjectTable");
        Field objTableField = objectTableClass.getDeclaredField("objTable");
        objTableField.setAccessible(true);
        Object objTable = objTableField.get(null);
        if (objTable == null) {
            return;
        }
        Field tableLockField = objectTableClass.getDeclaredField("tableLock");
        tableLockField.setAccessible(true);
        Object tableLock = tableLockField.get(null);
        synchronized (tableLock) {
            // Iterate over the values in the table
            if (objTable instanceof Map<?, ?>) {
                Iterator<?> iter = ((Map<?, ?>) objTable).values().iterator();
                while (iter.hasNext()) {
                    Object obj = iter.next();
                    Object cclObject = cclField.get(obj);
                    if (this == cclObject) {
                        iter.remove();
                        Object stubObject = stubField.get(obj);
                        log.error(sm.getString("webappClassLoader.clearRmi", stubObject.getClass().getName(), stubObject));
                    }
                }
            }
            // Clear the implTable map
            Field implTableField = objectTableClass.getDeclaredField("implTable");
            implTableField.setAccessible(true);
            Object implTable = implTableField.get(null);
            if (implTable == null) {
                return;
            }
            // Iterate over the values in the table
            if (implTable instanceof Map<?, ?>) {
                Iterator<?> iter = ((Map<?, ?>) implTable).values().iterator();
                while (iter.hasNext()) {
                    Object obj = iter.next();
                    Object cclObject = cclField.get(obj);
                    if (this == cclObject) {
                        iter.remove();
                    }
                }
            }
        }
    } catch (ClassNotFoundException e) {
        log.info(sm.getString("webappClassLoader.clearRmiInfo", getContextName()), e);
    } catch (SecurityException | NoSuchFieldException | IllegalArgumentException | IllegalAccessException e) {
        log.warn(sm.getString("webappClassLoader.clearRmiFail", getContextName()), e);
    } catch (Exception e) {
        JreCompat jreCompat = JreCompat.getInstance();
        if (jreCompat.isInstanceOfInaccessibleObjectException(e)) {
            // Must be running on Java 9 without the necessary command line
            // options.
            String currentModule = JreCompat.getInstance().getModuleName(this.getClass());
            log.warn(sm.getString("webappClassLoader.addExportsRmi", currentModule));
        } else {
            // Re-throw all other exceptions
            throw e;
        }
    }
}`,"org.apache.catalina.core.StandardHost$MemoryLeakTrackingListener.<init>_StandardHost":
 ``,"org.apache.tomcat.util.IntrospectionUtils.findMethod_Class_String_Class[]":
 ``,"org.apache.catalina.loader.WebappLoader.getObjectNameKeyProperties_":
 `@Override
protected String getObjectNameKeyProperties() {
    StringBuilder name = new StringBuilder("type=Loader");
    name.append(",host=");
    name.append(context.getParent().getName());
    name.append(",context=");
    String contextName = context.getName();
    if (!contextName.startsWith("/")) {
        name.append('/');
    }
    name.append(contextName);
    return name.toString();
}`,"org.apache.catalina.core.ApplicationContext.removeAttribute_String":
 `@Override
public void removeAttribute(String name) {
    Object value = null;
    // Remove the specified attribute
    // Check for read only attribute
    if (readOnlyAttributes.containsKey(name)) {
        return;
    }
    value = attributes.remove(name);
    if (value == null) {
        return;
    }
    // Notify interested application event listeners
    Object[] listeners = context.getApplicationEventListeners();
    if ((listeners == null) || (listeners.length == 0)) {
        return;
    }
    ServletContextAttributeEvent event = new ServletContextAttributeEvent(context.getServletContext(), name, value);
    for (Object obj : listeners) {
        if (!(obj instanceof ServletContextAttributeListener)) {
            continue;
        }
        ServletContextAttributeListener listener = (ServletContextAttributeListener) obj;
        try {
            context.fireContainerEvent("beforeContextAttributeRemoved", listener);
            listener.attributeRemoved(event);
            context.fireContainerEvent("afterContextAttributeRemoved", listener);
        } catch (Throwable t) {
            ExceptionUtils.handleThrowable(t);
            context.fireContainerEvent("afterContextAttributeRemoved", listener);
            // FIXME - should we do anything besides log these?
            log(sm.getString("applicationContext.attributeEvent"), t);
        }
    }
}`,"org.apache.catalina.loader.WebappClassLoaderBase.checkThreadLocalsForLeaks_":
 `private void checkThreadLocalsForLeaks() {
    Thread[] threads = getThreads();
    try {
        // Make the fields in the Thread class that store ThreadLocals
        // accessible
        Field threadLocalsField = Thread.class.getDeclaredField("threadLocals");
        threadLocalsField.setAccessible(true);
        Field inheritableThreadLocalsField = Thread.class.getDeclaredField("inheritableThreadLocals");
        inheritableThreadLocalsField.setAccessible(true);
        // Make the underlying array of ThreadLoad.ThreadLocalMap.Entry objects
        // accessible
        Class<?> tlmClass = Class.forName("java.lang.ThreadLocal$ThreadLocalMap");
        Field tableField = tlmClass.getDeclaredField("table");
        tableField.setAccessible(true);
        Method expungeStaleEntriesMethod = tlmClass.getDeclaredMethod("expungeStaleEntries");
        expungeStaleEntriesMethod.setAccessible(true);
        for (Thread thread : threads) {
            Object threadLocalMap;
            if (thread != null) {
                // Clear the first map
                threadLocalMap = threadLocalsField.get(thread);
                if (null != threadLocalMap) {
                    expungeStaleEntriesMethod.invoke(threadLocalMap);
                    checkThreadLocalMapForLeaks(threadLocalMap, tableField);
                }
                // Clear the second map
                threadLocalMap = inheritableThreadLocalsField.get(thread);
                if (null != threadLocalMap) {
                    expungeStaleEntriesMethod.invoke(threadLocalMap);
                    checkThreadLocalMapForLeaks(threadLocalMap, tableField);
                }
            }
        }
    } catch (Throwable t) {
        JreCompat jreCompat = JreCompat.getInstance();
        if (jreCompat.isInstanceOfInaccessibleObjectException(t)) {
            // Must be running on Java 9 without the necessary command line
            // options.
            String currentModule = JreCompat.getInstance().getModuleName(this.getClass());
            log.warn(sm.getString("webappClassLoader.addExportsThreadLocal", currentModule));
        } else {
            ExceptionUtils.handleThrowable(t);
            log.warn(sm.getString("webappClassLoader.checkThreadLocalsForLeaksFail", getContextName()), t);
        }
    }
}`,"org.apache.tomcat.util.modeler.ManagedBean.getAttributes_":
 `// ------------------------------------------------------------- Properties
/**
 * @return the collection of attributes for this MBean.
 */
public AttributeInfo[] getAttributes() {
    AttributeInfo[] result = new AttributeInfo[attributes.size()];
    attributes.values().toArray(result);
    return result;
}`,"org.apache.tomcat.util.digester.Digester.push_Object":
 `/**
 * Push a new object onto the top of the object stack.
 *
 * @param object The new object
 */
public void push(Object object) {
    if (stack.size() == 0) {
        root = object;
    }
    stack.push(object);
}`,"org.apache.tomcat.util.digester.Digester.updateAttributes_Attributes":
 `// ------------------------------------------------------- Private Methods
/**
 * Returns an attributes list which contains all the attributes
 * passed in, with any text of form "\${xxx}" in an attribute value
 * replaced by the appropriate value from the system property.
 */
private Attributes updateAttributes(Attributes list) {
    if (list.getLength() == 0) {
        return list;
    }
    AttributesImpl newAttrs = new AttributesImpl(list);
    int nAttributes = newAttrs.getLength();
    for (int i = 0; i < nAttributes; ++i) {
        String value = newAttrs.getValue(i);
        try {
            newAttrs.setValue(i, IntrospectionUtils.replaceProperties(value, null, source, getClassLoader()).intern());
        } catch (Exception e) {
            log.warn(sm.getString("digester.failedToUpdateAttributes", newAttrs.getLocalName(i), value), e);
        }
    }
    return newAttrs;
}`,"org.apache.catalina.loader.WebappClassLoaderBase.findClass_String":
 `/**
 * Find the specified class in our local repositories, if possible.  If
 * not found, throw <code>ClassNotFoundException</code>.
 *
 * @param name The binary name of the class to be loaded
 *
 * @exception ClassNotFoundException if the class was not found
 */
@Override
public Class<?> findClass(String name) throws ClassNotFoundException {
    if (log.isDebugEnabled())
        log.debug("    findClass(" + name + ")");
    checkStateForClassLoading(name);
    // (1) Permission to define this class when using a SecurityManager
    if (securityManager != null) {
        int i = name.lastIndexOf('.');
        if (i >= 0) {
            try {
                if (log.isTraceEnabled())
                    log.trace("      securityManager.checkPackageDefinition");
                securityManager.checkPackageDefinition(name.substring(0, i));
            } catch (Exception se) {
                if (log.isTraceEnabled())
                    log.trace("      -->Exception-->ClassNotFoundException", se);
                throw new ClassNotFoundException(name, se);
            }
        }
    }
    // Ask our superclass to locate this class, if possible
    // (throws ClassNotFoundException if it is not found)
    Class<?> clazz = null;
    try {
        if (log.isTraceEnabled())
            log.trace("      findClassInternal(" + name + ")");
        try {
            if (securityManager != null) {
                PrivilegedAction<Class<?>> dp = new PrivilegedFindClassByName(name);
                clazz = AccessController.doPrivileged(dp);
            } else {
                clazz = findClassInternal(name);
            }
        } catch (AccessControlException ace) {
            log.warn(sm.getString("webappClassLoader.securityException", name, ace.getMessage()), ace);
            throw new ClassNotFoundException(name, ace);
        } catch (RuntimeException e) {
            if (log.isTraceEnabled())
                log.trace("      -->RuntimeException Rethrown", e);
            throw e;
        }
        if ((clazz == null) && hasExternalRepositories) {
            try {
                clazz = super.findClass(name);
            } catch (AccessControlException ace) {
                log.warn(sm.getString("webappClassLoader.securityException", name, ace.getMessage()), ace);
                throw new ClassNotFoundException(name, ace);
            } catch (RuntimeException e) {
                if (log.isTraceEnabled())
                    log.trace("      -->RuntimeException Rethrown", e);
                throw e;
            }
        }
        if (clazz == null) {
            if (log.isDebugEnabled())
                log.debug("    --> Returning ClassNotFoundException");
            throw new ClassNotFoundException(name);
        }
    } catch (ClassNotFoundException e) {
        if (log.isTraceEnabled())
            log.trace("    --> Passing on ClassNotFoundException");
        throw e;
    }
    // Return the class we have located
    if (log.isTraceEnabled())
        log.debug("      Returning class " + clazz);
    if (log.isTraceEnabled()) {
        ClassLoader cl;
        if (Globals.IS_SECURITY_ENABLED) {
            cl = AccessController.doPrivileged(new PrivilegedGetClassLoader(clazz));
        } else {
            cl = clazz.getClassLoader();
        }
        log.debug("      Loaded by " + cl.toString());
    }
    return clazz;
}`,"org.apache.tomcat.util.digester.Digester.configure_":
 `// ------------------------------------------------ Parameter Stack Methods
// ------------------------------------------------------ Protected Methods
/**
 * <p>
 * Provide a hook for lazy configuration of this <code>Digester</code>
 * instance.  The default implementation does nothing, but subclasses
 * can override as needed.
 * </p>
 *
 * <p>
 * <strong>Note</strong> This method may be called more than once.
 * </p>
 */
protected void configure() {
    // Do not configure more than once
    if (configured) {
        return;
    }
    log = LogFactory.getLog("org.apache.tomcat.util.digester.Digester");
    saxLog = LogFactory.getLog("org.apache.tomcat.util.digester.Digester.sax");
    // Set the configuration flag to avoid repeating
    configured = true;
}`,"org.apache.catalina.core.ApplicationContext.populateSessionTrackingModes_":
 `private void populateSessionTrackingModes() {
    // URL re-writing is always enabled by default
    defaultSessionTrackingModes = EnumSet.of(SessionTrackingMode.URL);
    supportedSessionTrackingModes = EnumSet.of(SessionTrackingMode.URL);
    if (context.getCookies()) {
        defaultSessionTrackingModes.add(SessionTrackingMode.COOKIE);
        supportedSessionTrackingModes.add(SessionTrackingMode.COOKIE);
    }
    // SSL not enabled by default as it can only used on its own
    // Context > Host > Engine > Service
    Connector[] connectors = service.findConnectors();
    // Need at least one SSL enabled connector to use the SSL session ID.
    for (Connector connector : connectors) {
        if (Boolean.TRUE.equals(connector.getProperty("SSLEnabled"))) {
            supportedSessionTrackingModes.add(SessionTrackingMode.SSL);
            break;
        }
    }
}`,"org.apache.catalina.loader.WebappLoader.stopInternal_":
 `/**
 * Stop associated {@link ClassLoader} and implement the requirements
 * of {@link org.apache.catalina.util.LifecycleBase#stopInternal()}.
 *
 * @exception LifecycleException if this component detects a fatal error
 *  that prevents this component from being used
 */
@Override
protected void stopInternal() throws LifecycleException {
    if (log.isDebugEnabled())
        log.debug(sm.getString("webappLoader.stopping"));
    setState(LifecycleState.STOPPING);
    // Remove context attributes as appropriate
    ServletContext servletContext = context.getServletContext();
    servletContext.removeAttribute(Globals.CLASS_PATH_ATTR);
    // Throw away our current class loader if any
    if (classLoader != null) {
        try {
            classLoader.stop();
        } finally {
            classLoader.destroy();
        }
        // classLoader must be non-null to have been registered
        try {
            String contextName = context.getName();
            if (!contextName.startsWith("/")) {
                contextName = "/" + contextName;
            }
            ObjectName cloname = new ObjectName(context.getDomain() + ":type=" + classLoader.getClass().getSimpleName() + ",host=" + context.getParent().getName() + ",context=" + contextName);
            Registry.getRegistry(null, null).unregisterComponent(cloname);
        } catch (Exception e) {
            log.warn(sm.getString("webappLoader.stopError"), e);
        }
    }
    classLoader = null;
}`,"org.apache.tomcat.util.digester.Digester.getXMLReader_":
 `/**
 * Return the XMLReader to be used for parsing the input document.
 *
 * FIX ME: there is a bug in JAXP/XERCES that prevent the use of a
 * parser that contains a schema with a DTD.
 * @return the XML reader
 * @exception SAXException if no XMLReader can be instantiated
 */
public XMLReader getXMLReader() throws SAXException {
    if (reader == null) {
        reader = getParser().getXMLReader();
    }
    reader.setDTDHandler(this);
    reader.setContentHandler(this);
    EntityResolver entityResolver = getEntityResolver();
    if (entityResolver == null) {
        entityResolver = this;
    }
    // Wrap the resolver so we can perform \${...} property replacement
    if (entityResolver instanceof EntityResolver2) {
        entityResolver = new EntityResolver2Wrapper((EntityResolver2) entityResolver, source, classLoader);
    } else {
        entityResolver = new EntityResolverWrapper(entityResolver, source, classLoader);
    }
    reader.setEntityResolver(entityResolver);
    reader.setProperty("http://xml.org/sax/properties/lexical-handler", this);
    reader.setErrorHandler(this);
    return reader;
}`,"org.apache.catalina.connector.Connector.getProperty_String":
 `// ------------------------------------------------------------- Properties
/**
 * Return a property from the protocol handler.
 *
 * @param name the property name
 * @return the property value
 */
public Object getProperty(String name) {
    if (protocolHandler == null) {
        return null;
    }
    return IntrospectionUtils.getProperty(protocolHandler, name);
}`,"org.apache.tomcat.util.digester.Digester.addObjectCreate_String_String":
 `/**
 * Add an "object create" rule for the specified parameters.
 *
 * @param pattern Element matching pattern
 * @param className Java class name to be created
 * @see ObjectCreateRule
 */
public void addObjectCreate(String pattern, String className) {
    addRule(pattern, new ObjectCreateRule(className));
}`,"org.apache.catalina.loader.WebappLoader.setLoaderInstance_WebappClassLoaderBase":
 `/**
 * Set the ClassLoader instance, without relying on reflection
 * This method will also invoke {@link #setLoaderClass(String)} with
 * {@code loaderInstance.getClass().getName()} as an argument
 *
 * @param loaderInstance The new ClassLoader instance to use
 */
public void setLoaderInstance(WebappClassLoaderBase loaderInstance) {
    this.classLoader = loaderInstance;
    setLoaderClass(loaderInstance.getClass().getName());
}`,"org.apache.tomcat.util.digester.Digester.parse_InputStream":
 `/**
 * Parse the content of the specified input stream using this Digester.
 * Returns the root element from the object stack (if any).
 *
 * @param input Input stream containing the XML data to be parsed
 * @return the root object
 * @exception IOException if an input/output error occurs
 * @exception SAXException if a parsing exception occurs
 */
public Object parse(InputStream input) throws IOException, SAXException {
    configure();
    InputSource is = new InputSource(input);
    getXMLReader().parse(is);
    return root;
}`,"org.apache.tomcat.util.digester.Rule.finish_":
 `/**
 * This method is called after all parsing methods have been
 * called, to allow Rules to remove temporary data.
 *
 * @throws Exception if an error occurs while processing the event
 */
public void finish() throws Exception {
    // NO-OP by default.
}`,"org.apache.catalina.valves.ValveBase.setContainer_Container":
 `/**
 * Set the Container with which this Valve is associated, if any.
 *
 * @param container The new associated container
 */
@Override
public void setContainer(Container container) {
    this.container = container;
}`,"org.apache.tomcat.util.modeler.Registry.loadDescriptors_String_ClassLoader":
 `/**
 * Lookup the component descriptor in the package and in the parent
 * packages.
 *
 * @param packageName The package name
 * @param classLoader The class loader
 */
public void loadDescriptors(String packageName, ClassLoader classLoader) {
    String res = packageName.replace('.', '/');
    if (log.isTraceEnabled()) {
        log.trace("Finding descriptor " + res);
    }
    if (searchedPaths.get(packageName) != null) {
        return;
    }
    String descriptors = res + "/mbeans-descriptors.xml";
    URL dURL = classLoader.getResource(descriptors);
    if (dURL == null) {
        return;
    }
    log.debug("Found " + dURL);
    searchedPaths.put(packageName, dURL);
    try {
        load("MbeansDescriptorsDigesterSource", dURL, null);
    } catch (Exception ex) {
        log.error(sm.getString("registry.loadError", dURL));
    }
}`,"org.apache.tomcat.util.digester.ObjectCreateRule.begin_String_String_Attributes":
 `// --------------------------------------------------------- Public Methods
/**
 * Process the beginning of this element.
 *
 * @param namespace the namespace URI of the matching element, or an
 *   empty string if the parser is not namespace aware or the element has
 *   no namespace
 * @param name the local name if the parser is namespace aware, or just
 *   the element name otherwise
 * @param attributes The attribute list for this element
 */
@Override
public void begin(String namespace, String name, Attributes attributes) throws Exception {
    String realClassName = getRealClassName(attributes);
    if (realClassName == null) {
        throw new NullPointerException(sm.getString("rule.noClassName", namespace, name));
    }
    // Instantiate the new object and push it on the context stack
    Class<?> clazz = digester.getClassLoader().loadClass(realClassName);
    Object instance = clazz.getConstructor().newInstance();
    digester.push(instance);
    StringBuilder code = digester.getGeneratedCode();
    if (code != null) {
        code.append(System.lineSeparator());
        code.append(System.lineSeparator());
        code.append(realClassName).append(' ').append(digester.toVariableName(instance)).append(" = new ");
        code.append(realClassName).append("();").append(System.lineSeparator());
    }
}`,"org.apache.tomcat.util.modeler.Registry.<init>_":
 `// ----------------------------------------------------------- Constructors
protected Registry() {
    super();
}`,"org.apache.tomcat.util.digester.Digester.getCount_":
 `/**
 * @return the current depth of the element stack.
 */
public int getCount() {
    return stack.size();
}`,"org.apache.tomcat.util.digester.Digester.getParser_":
 `/**
 * @return the SAXParser we will use to parse the input stream.  If there
 * is a problem creating the parser, return <code>null</code>.
 */
public SAXParser getParser() {
    // Return the parser we already created (if any)
    if (parser != null) {
        return parser;
    }
    // Create a new parser
    try {
        parser = getFactory().newSAXParser();
    } catch (Exception e) {
        log.error(sm.getString("digester.createParserError"), e);
        return null;
    }
    return parser;
}`,"org.apache.catalina.loader.WebappClassLoaderBase.clearReferencesJdbc_":
 `/**
 * Deregister any JDBC drivers registered by the webapp that the webapp
 * forgot. This is made unnecessary complex because a) DriverManager
 * checks the class loader of the calling class (it would be much easier
 * if it checked the context class loader) b) using reflection would
 * create a dependency on the DriverManager implementation which can,
 * and has, changed.
 *
 * We can't just create an instance of JdbcLeakPrevention as it will be
 * loaded by the common class loader (since it's .class file is in the
 * $CATALINA_HOME/lib directory). This would fail DriverManager's check
 * on the class loader of the calling class. So, we load the bytes via
 * our parent class loader but define the class with this class loader
 * so the JdbcLeakPrevention looks like a webapp class to the
 * DriverManager.
 *
 * If only apps cleaned up after themselves...
 */
private final void clearReferencesJdbc() {
    // We know roughly how big the class will be (~ 1K) so allow 2k as a
    // starting point
    byte[] classBytes = new byte[2048];
    int offset = 0;
    try (InputStream is = getResourceAsStream("org/apache/catalina/loader/JdbcLeakPrevention.class")) {
        int read = is.read(classBytes, offset, classBytes.length - offset);
        while (read > -1) {
            offset += read;
            if (offset == classBytes.length) {
                // Buffer full - double size
                byte[] tmp = new byte[classBytes.length * 2];
                System.arraycopy(classBytes, 0, tmp, 0, classBytes.length);
                classBytes = tmp;
            }
            read = is.read(classBytes, offset, classBytes.length - offset);
        }
        Class<?> lpClass = defineClass("org.apache.catalina.loader.JdbcLeakPrevention", classBytes, 0, offset, this.getClass().getProtectionDomain());
        Object obj = lpClass.getConstructor().newInstance();
        @SuppressWarnings("unchecked")
        List<String> driverNames = (List<String>) obj.getClass().getMethod("clearJdbcDriverRegistrations").invoke(obj);
        for (String name : driverNames) {
            log.warn(sm.getString("webappClassLoader.clearJdbc", getContextName(), name));
        }
    } catch (Exception e) {
        // So many things to go wrong above...
        Throwable t = ExceptionUtils.unwrapInvocationTargetException(e);
        ExceptionUtils.handleThrowable(t);
        log.warn(sm.getString("webappClassLoader.jdbcRemoveFailed", getContextName()), t);
    }
}`,"org.apache.catalina.loader.WebappClassLoaderBase.checkThreadLocalMapForLeaks_Object_Field":
 `/**
 * Analyzes the given thread local map object. Also pass in the field that
 * points to the internal table to save re-calculating it on every
 * call to this method.
 */
private void checkThreadLocalMapForLeaks(Object map, Field internalTableField) throws IllegalAccessException, NoSuchFieldException {
    if (map != null) {
        Object[] table = (Object[]) internalTableField.get(map);
        if (table != null) {
            for (Object obj : table) {
                if (obj != null) {
                    boolean keyLoadedByWebapp = false;
                    boolean valueLoadedByWebapp = false;
                    // Check the key
                    Object key = ((Reference<?>) obj).get();
                    if (this.equals(key) || loadedByThisOrChild(key)) {
                        keyLoadedByWebapp = true;
                    }
                    // Check the value
                    Field valueField = obj.getClass().getDeclaredField("value");
                    valueField.setAccessible(true);
                    Object value = valueField.get(obj);
                    if (this.equals(value) || loadedByThisOrChild(value)) {
                        valueLoadedByWebapp = true;
                    }
                    if (keyLoadedByWebapp || valueLoadedByWebapp) {
                        Object[] args = new Object[5];
                        args[0] = getContextName();
                        if (key != null) {
                            args[1] = getPrettyClassName(key.getClass());
                            try {
                                args[2] = key.toString();
                            } catch (Exception e) {
                                log.warn(sm.getString("webappClassLoader.checkThreadLocalsForLeaks.badKey", args[1]), e);
                                args[2] = sm.getString("webappClassLoader.checkThreadLocalsForLeaks.unknown");
                            }
                        }
                        if (value != null) {
                            args[3] = getPrettyClassName(value.getClass());
                            try {
                                args[4] = value.toString();
                            } catch (Exception e) {
                                log.warn(sm.getString("webappClassLoader.checkThreadLocalsForLeaks.badValue", args[3]), e);
                                args[4] = sm.getString("webappClassLoader.checkThreadLocalsForLeaks.unknown");
                            }
                        }
                        if (valueLoadedByWebapp) {
                            log.error(sm.getString("webappClassLoader.checkThreadLocalsForLeaks", args));
                        } else if (value == null) {
                            if (log.isDebugEnabled()) {
                                log.debug(sm.getString("webappClassLoader.checkThreadLocalsForLeaksNull", args));
                            }
                        } else {
                            if (log.isDebugEnabled()) {
                                log.debug(sm.getString("webappClassLoader.checkThreadLocalsForLeaksNone", args));
                            }
                        }
                    }
                }
            }
        }
    }
}`,"org.apache.tomcat.util.digester.Digester.resolveEntity_String_String_String_String":
 `@Override
public InputSource resolveEntity(String name, String publicId, String baseURI, String systemId) throws SAXException, IOException {
    if (saxLog.isDebugEnabled()) {
        saxLog.debug("resolveEntity('" + publicId + "', '" + systemId + "', '" + baseURI + "')");
    }
    // Has this system identifier been registered?
    String entityURL = null;
    if (publicId != null) {
        entityURL = entityValidator.get(publicId);
    }
    if (entityURL == null) {
        if (systemId == null) {
            // cannot resolve
            if (log.isDebugEnabled()) {
                log.debug(" Cannot resolve entity: '" + publicId + "'");
            }
            return null;
        } else {
            // try to resolve using system ID
            if (log.isDebugEnabled()) {
                log.debug(" Trying to resolve using system ID '" + systemId + "'");
            }
            entityURL = systemId;
            // resolve systemId against baseURI if it is not absolute
            if (baseURI != null) {
                try {
                    URI uri = new URI(systemId);
                    if (!uri.isAbsolute()) {
                        entityURL = new URI(baseURI).resolve(uri).toString();
                    }
                } catch (URISyntaxException e) {
                    if (log.isDebugEnabled()) {
                        log.debug("Invalid URI '" + baseURI + "' or '" + systemId + "'");
                    }
                }
            }
        }
    }
    // Return an input source to our alternative URL
    if (log.isDebugEnabled()) {
        log.debug(" Resolving to alternate DTD '" + entityURL + "'");
    }
    try {
        return new InputSource(entityURL);
    } catch (Exception e) {
        throw createSAXException(e);
    }
}`,"org.apache.tomcat.util.modeler.ManagedBean.setGroup_String":
 `public void setGroup(String group) {
    this.group = group;
}`,"org.apache.tomcat.util.digester.SetNextRule.end_String_String":
 `/**
 * Process the end of this element.
 *
 * @param namespace the namespace URI of the matching element, or an
 *   empty string if the parser is not namespace aware or the element has
 *   no namespace
 * @param name the local name if the parser is namespace aware, or just
 *   the element name otherwise
 */
@Override
public void end(String namespace, String name) throws Exception {
    // Identify the objects to be used
    Object child = digester.peek(0);
    Object parent = digester.peek(1);
    if (digester.log.isDebugEnabled()) {
        if (parent == null) {
            digester.log.debug("[SetNextRule]{" + digester.match + "} Call [NULL PARENT]." + methodName + "(" + child + ")");
        } else {
            digester.log.debug("[SetNextRule]{" + digester.match + "} Call " + parent.getClass().getName() + "." + methodName + "(" + child + ")");
        }
    }
    // Call the specified method
    IntrospectionUtils.callMethod1(parent, methodName, child, paramType, digester.getClassLoader());
    StringBuilder code = digester.getGeneratedCode();
    if (code != null) {
        code.append(digester.toVariableName(parent)).append('.');
        code.append(methodName).append('(').append(digester.toVariableName(child)).append(");");
        code.append(System.lineSeparator());
    }
}`,"org.apache.tomcat.util.XReflectionIntrospectionUtils.isEnabled_":
 `static boolean isEnabled() {
    return false;
}`,"org.apache.tomcat.util.modeler.OperationInfo.getMBeanParameterInfo_":
 `protected MBeanParameterInfo[] getMBeanParameterInfo() {
    ParameterInfo[] params = getSignature();
    MBeanParameterInfo[] parameters = new MBeanParameterInfo[params.length];
    for (int i = 0; i < params.length; i++) parameters[i] = params[i].createParameterInfo();
    return parameters;
}`,"org.apache.tomcat.util.digester.ObjectCreateRule.getRealClassName_Attributes":
 `/**
 * Return the actual class name of the class to be instantiated.
 * @param attributes The attribute list for this element
 * @return the class name
 */
protected String getRealClassName(Attributes attributes) {
    // Identify the name of the class to instantiate
    String realClassName = className;
    if (attributeName != null) {
        String value = attributes.getValue(attributeName);
        if (value != null) {
            realClassName = value;
        }
    }
    return realClassName;
}`,"org.apache.tomcat.util.digester.ArrayStack.peek_":
 `/**
 * Returns the top item off of this stack without removing it.
 *
 * @return the top item on the stack
 * @throws EmptyStackException  if the stack is empty
 */
public E peek() throws EmptyStackException {
    int n = size();
    if (n <= 0) {
        throw new EmptyStackException();
    } else {
        return get(n - 1);
    }
}`,"org.apache.catalina.util.LifecycleBase.fireLifecycleEvent_String_Object":
 `/**
 * Allow sub classes to fire {@link Lifecycle} events.
 *
 * @param type  Event type
 * @param data  Data associated with event.
 */
protected void fireLifecycleEvent(String type, Object data) {
    LifecycleEvent event = new LifecycleEvent(this, type, data);
    for (LifecycleListener listener : lifecycleListeners) {
        listener.lifecycleEvent(event);
    }
}`,"org.apache.tomcat.util.digester.RulesBase.<init>_":
 ``,"org.apache.tomcat.util.digester.Digester.updateBodyText_StringBuilder":
 `/**
 * Return a new StringBuilder containing the same contents as the
 * input buffer, except that data of form \${varname} have been
 * replaced by the value of that var as defined in the system property.
 */
private StringBuilder updateBodyText(StringBuilder bodyText) {
    String in = bodyText.toString();
    String out;
    try {
        out = IntrospectionUtils.replaceProperties(in, null, source, getClassLoader());
    } catch (Exception e) {
        // return unchanged data
        return bodyText;
    }
    if (out == in) {
        // No substitutions required. Don't waste memory creating
        // a new buffer
        return bodyText;
    } else {
        return new StringBuilder(out);
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
    if (oldBasic == valve)
        return;
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
    if (valve == null)
        return;
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
}`,"org.apache.catalina.loader.WebappLoader.<init>_":
 ``,"org.apache.tomcat.util.modeler.AttributeInfo.setWriteable_boolean":
 `public void setWriteable(boolean writeable) {
    this.writeable = writeable;
}`,"org.apache.tomcat.util.digester.Digester.peek_int":
 `/**
 * Return the n'th object down the stack, where 0 is the top element
 * and [getCount()-1] is the bottom element.  If the specified index
 * is out of range, return <code>null</code>.
 *
 * @param n Index of the desired element, where 0 is the top of the stack,
 *  1 is the next element down, and so on.
 * @return the specified object
 */
public Object peek(int n) {
    try {
        return stack.peek(n);
    } catch (EmptyStackException e) {
        log.warn(sm.getString("digester.emptyStack"));
        return null;
    }
}`,"org.apache.coyote.AbstractProtocol.getEndpoint_":
 `// ----------------------------------------------- Accessors for sub-classes
protected AbstractEndpoint<S, ?> getEndpoint() {
    return endpoint;
}`,"org.apache.juli.logging.DirectJDKLog.log_Level_String_Throwable":
 `// from commons logging. This would be my number one reason why java.util.logging
// is bad - design by committee can be really bad ! The impact on performance of
// using java.util.logging - and the ugliness if you need to wrap it - is far
// worse than the unfriendly and uncommon default format for logs.
private void log(Level level, String msg, Throwable ex) {
    if (logger.isLoggable(level)) {
        // Hack (?) to get the stack trace.
        Throwable dummyException = new Throwable();
        StackTraceElement[] locations = dummyException.getStackTrace();
        // Caller will be the third element
        String cname = "unknown";
        String method = "unknown";
        if (locations != null && locations.length > 2) {
            StackTraceElement caller = locations[2];
            cname = caller.getClassName();
            method = caller.getMethodName();
        }
        if (ex == null) {
            logger.logp(level, cname, method, msg);
        } else {
            logger.logp(level, cname, method, msg, ex);
        }
    }
}`,"org.apache.tomcat.util.modeler.ManagedBean.setDescription_String":
 `public void setDescription(String description) {
    mBeanInfoLock.writeLock().lock();
    try {
        this.description = description;
        this.info = null;
    } finally {
        mBeanInfoLock.writeLock().unlock();
    }
}`,"org.apache.catalina.loader.WebappClassLoaderBase.loadClass_String":
 `/**
 * Load the class with the specified name.  This method searches for
 * classes in the same manner as <code>loadClass(String, boolean)</code>
 * with <code>false</code> as the second argument.
 *
 * @param name The binary name of the class to be loaded
 *
 * @exception ClassNotFoundException if the class was not found
 */
@Override
public Class<?> loadClass(String name) throws ClassNotFoundException {
    return loadClass(name, false);
}`,"org.apache.tomcat.util.digester.ArrayStack.push_E":
 `/**
 * Pushes a new item onto the top of this stack. The pushed item is also
 * returned. This is equivalent to calling <code>add</code>.
 *
 * @param item  the item to be added
 * @return the item just pushed
 */
public E push(E item) {
    add(item);
    return item;
}`,"org.apache.tomcat.util.modeler.OperationInfo.setReturnType_String":
 `public void setReturnType(String returnType) {
    this.type = returnType;
}`,"org.apache.tomcat.util.modeler.ManagedBean.setName_String":
 `public void setName(String name) {
    mBeanInfoLock.writeLock().lock();
    try {
        this.name = name;
        this.info = null;
    } finally {
        mBeanInfoLock.writeLock().unlock();
    }
}`,"org.apache.catalina.loader.WebappClassLoaderBase.getResourceAsStream_String":
 `/**
 * Find the resource with the given name, and return an input stream
 * that can be used for reading it.  The search order is as described
 * for <code>getResource()</code>, after checking to see if the resource
 * data has been previously cached.  If the resource cannot be found,
 * return <code>null</code>.
 *
 * @param name Name of the resource to return an input stream for
 */
@Override
public InputStream getResourceAsStream(String name) {
    if (log.isDebugEnabled())
        log.debug("getResourceAsStream(" + name + ")");
    checkStateForResourceLoading(name);
    InputStream stream = null;
    boolean delegateFirst = delegate || filter(name, false);
    // (1) Delegate to parent if requested
    if (delegateFirst) {
        if (log.isDebugEnabled())
            log.debug("  Delegating to parent classloader " + parent);
        stream = parent.getResourceAsStream(name);
        if (stream != null) {
            if (log.isDebugEnabled())
                log.debug("  --> Returning stream from parent");
            return stream;
        }
    }
    // (2) Search local repositories
    if (log.isDebugEnabled())
        log.debug("  Searching local repositories");
    String path = nameToPath(name);
    WebResource resource = resources.getClassLoaderResource(path);
    if (resource.exists()) {
        stream = resource.getInputStream();
        trackLastModified(path, resource);
    }
    try {
        if (hasExternalRepositories && stream == null) {
            URL url = super.findResource(name);
            if (url != null) {
                stream = url.openStream();
            }
        }
    } catch (IOException e) {
        // Ignore
    }
    if (stream != null) {
        if (log.isDebugEnabled())
            log.debug("  --> Returning stream from local");
        return stream;
    }
    // (3) Delegate to parent unconditionally
    if (!delegateFirst) {
        if (log.isDebugEnabled())
            log.debug("  Delegating to parent classloader unconditionally " + parent);
        stream = parent.getResourceAsStream(name);
        if (stream != null) {
            if (log.isDebugEnabled())
                log.debug("  --> Returning stream from parent");
            return stream;
        }
    }
    // (4) Resource was not found
    if (log.isDebugEnabled())
        log.debug("  --> Resource not found, returning null");
    return null;
}`,"org.apache.catalina.loader.WebappClassLoaderBase.<init>_":
 `// ----------------------------------------------------------- Constructors
/**
 * Construct a new ClassLoader with no defined repositories and no
 * parent ClassLoader.
 */
protected WebappClassLoaderBase() {
    super(new URL[0]);
    ClassLoader p = getParent();
    if (p == null) {
        p = getSystemClassLoader();
    }
    this.parent = p;
    ClassLoader j = String.class.getClassLoader();
    if (j == null) {
        j = getSystemClassLoader();
        while (j.getParent() != null) {
            j = j.getParent();
        }
    }
    this.javaseClassLoader = j;
    securityManager = System.getSecurityManager();
    if (securityManager != null) {
        refreshPolicy();
    }
}`,"org.apache.tomcat.util.modeler.Registry.getMBeanServer_":
 `/**
 * Factory method to create (if necessary) and return our
 * <code>MBeanServer</code> instance.
 *
 * @return the MBean server
 */
public MBeanServer getMBeanServer() {
    if (server == null) {
        synchronized (serverLock) {
            if (server == null) {
                long t1 = System.currentTimeMillis();
                if (MBeanServerFactory.findMBeanServer(null).size() > 0) {
                    server = MBeanServerFactory.findMBeanServer(null).get(0);
                    if (log.isDebugEnabled()) {
                        log.debug("Using existing MBeanServer " + (System.currentTimeMillis() - t1));
                    }
                } else {
                    server = ManagementFactory.getPlatformMBeanServer();
                    if (log.isDebugEnabled()) {
                        log.debug("Creating MBeanServer" + (System.currentTimeMillis() - t1));
                    }
                }
            }
        }
    }
    return server;
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
}`,"org.apache.tomcat.util.digester.RulesBase.match_String_String":
 `/**
 * Return a List of all registered Rule instances that match the specified
 * nesting pattern, or a zero-length List if there are no matches.  If more
 * than one Rule instance matches, they <strong>must</strong> be returned
 * in the order originally registered through the <code>add()</code>
 * method.
 *
 * @param namespaceURI Namespace URI for which to select matching rules,
 *  or <code>null</code> to match regardless of namespace URI
 * @param pattern Nesting pattern to be matched
 */
@Override
public List<Rule> match(String namespaceURI, String pattern) {
    // List rulesList = (List) this.cache.get(pattern);
    List<Rule> rulesList = lookup(namespaceURI, pattern);
    if ((rulesList == null) || (rulesList.size() < 1)) {
        // Find the longest key, ie more discriminant
        String longKey = "";
        for (String key : this.cache.keySet()) {
            if (key.startsWith("*/")) {
                if (pattern.equals(key.substring(2)) || pattern.endsWith(key.substring(1))) {
                    if (key.length() > longKey.length()) {
                        // rulesList = (List) this.cache.get(key);
                        rulesList = lookup(namespaceURI, key);
                        longKey = key;
                    }
                }
            }
        }
    }
    if (rulesList == null) {
        rulesList = new ArrayList<>();
    }
    return rulesList;
}`,"org.apache.catalina.util.LifecycleMBeanBase.postRegister_Boolean":
 `/**
 * Not used - NOOP.
 */
@Override
public final void postRegister(Boolean registrationDone) {
    // NOOP
}`,"org.apache.catalina.loader.TestVirtualWebappLoader.testLoaderInstance_":
 `@Test
public void testLoaderInstance() throws Exception {
    WebappLoader loader = new WebappLoader();
    Assert.assertNull(loader.getClassLoader());
    WebappClassLoader cl = new WebappClassLoader();
    loader.setLoaderInstance(cl);
    Assert.assertSame(cl, loader.getClassLoader());
    Assert.assertEquals(WebappClassLoader.class.getName(), loader.getLoaderClass());
    Tomcat tomcat = getTomcatInstance();
    File appDir = new File("test/webapp");
    StandardContext ctx = (StandardContext) tomcat.addContext("", appDir.getAbsolutePath());
    loader.setContext(ctx);
    ctx.setLoader(loader);
    loader.start();
    Assert.assertSame(cl, loader.getClassLoader());
    Assert.assertEquals(WebappClassLoader.class.getName(), loader.getLoaderClass());
    loader.stop();
    Assert.assertNull(loader.getClassLoader());
    Assert.assertEquals(WebappClassLoader.class.getName(), loader.getLoaderClass());
}`,"org.apache.catalina.core.StandardHost.getName_":
 `/**
 * @return the canonical, fully qualified, name of the virtual host
 * this Container represents.
 */
@Override
public String getName() {
    return name;
}`,"org.apache.catalina.loader.WebappLoader.getDomainInternal_":
 `@Override
protected String getDomainInternal() {
    return context.getDomain();
}`,"org.apache.catalina.core.ContainerBase.toString_":
 `@Override
public final String toString() {
    StringBuilder sb = new StringBuilder();
    Container parent = getParent();
    if (parent != null) {
        sb.append(parent.toString());
        sb.append('.');
    }
    sb.append(this.getClass().getSimpleName());
    sb.append('[');
    sb.append(getName());
    sb.append(']');
    return sb.toString();
}`,"org.apache.catalina.core.StandardContext.setDocBase_String":
 `@Override
public void setDocBase(String docBase) {
    this.docBase = docBase;
}`,"org.apache.catalina.startup.Tomcat.silence_Host_String":
 `private void silence(Host host, String contextPath) {
    String loggerName = getLoggerName(host, contextPath);
    Logger logger = Logger.getLogger(loggerName);
    pinnedLoggers.put(loggerName, logger);
    if (silent) {
        logger.setLevel(Level.WARNING);
    } else {
        logger.setLevel(Level.INFO);
    }
}`,"org.apache.tomcat.util.modeler.BaseModelMBean.postRegister_Boolean":
 `@Override
public void postRegister(Boolean registrationDone) {
    if (resource instanceof MBeanRegistration) {
        ((MBeanRegistration) resource).postRegister(registrationDone);
    }
}`,"org.apache.catalina.util.LifecycleBase.<init>_":
 ``,"org.apache.tomcat.util.digester.Digester.setPublicId_String":
 `/**
 * Set the public id of the current file being parse.
 * @param publicId the DTD/Schema public's id.
 */
public void setPublicId(String publicId) {
    this.publicId = publicId;
}`,"org.apache.catalina.core.StandardContextValve.<init>_":
 `public StandardContextValve() {
    super(true);
}`,"org.apache.tomcat.util.digester.RulesBase.add_String_Rule":
 `// --------------------------------------------------------- Public Methods
/**
 * Register a new Rule instance matching the specified pattern.
 *
 * @param pattern Nesting pattern to be matched for this Rule
 * @param rule Rule instance to be registered
 */
@Override
public void add(String pattern, Rule rule) {
    // to help users who accidentally add '/' to the end of their patterns
    int patternLength = pattern.length();
    if (patternLength > 1 && pattern.endsWith("/")) {
        pattern = pattern.substring(0, patternLength - 1);
    }
    List<Rule> list = cache.get(pattern);
    if (list == null) {
        list = new ArrayList<>();
        cache.put(pattern, list);
    }
    list.add(rule);
    rules.add(rule);
    if (this.digester != null) {
        rule.setDigester(this.digester);
    }
}`,"org.apache.coyote.http11.AbstractHttp11JsseProtocol.getEndpoint_":
 `@Override
protected AbstractJsseEndpoint<S, ?> getEndpoint() {
    // Over-ridden to add cast
    return (AbstractJsseEndpoint<S, ?>) super.getEndpoint();
}`,"org.apache.catalina.loader.WebappClassLoaderBase.getJavaseClassLoader_":
 `// ------------------------------------------------------ Protected Methods
protected ClassLoader getJavaseClassLoader() {
    return javaseClassLoader;
}`,"org.apache.tomcat.util.modeler.FeatureInfo.getType_":
 `/**
 * @return the fully qualified Java class name of this element.
 */
public String getType() {
    return this.type;
}`,"org.apache.catalina.loader.WebappClassLoaderBase.destroy_":
 `@Override
public void destroy() {
    state = LifecycleState.DESTROYING;
    try {
        super.close();
    } catch (IOException ioe) {
        log.warn(sm.getString("webappClassLoader.superCloseFail"), ioe);
    }
    state = LifecycleState.DESTROYED;
}`,"org.apache.tomcat.util.modeler.OperationInfo.getReturnType_":
 `/**
 * @return the fully qualified Java class name of the return type for this
 * operation.
 */
public String getReturnType() {
    if (type == null) {
        type = "void";
    }
    return type;
}`,},
};
var treeData = [
{
  "call" : "org.apache.catalina.loader.TestVirtualWebappLoader#testLoaderInstance",
  "kiekerPattern" : "public void org.apache.catalina.loader.TestVirtualWebappLoader.testLoaderInstance()",
  "otherKiekerPattern" : null,
  "module" : "",
  "name" : "org.apache.catalina.loader.TestVirtualWebappLoader#testLoaderInstance",
  "key" : "org.apache.catalina.loader.TestVirtualWebappLoader.testLoaderInstance_",
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
    "name" : "org.apache.juli.logging.LogFactory#getLog",
    "key" : "org.apache.juli.logging.LogFactory.getLog_Class",
    "otherKey" : null,
    "parent" : "org.apache.catalina.loader.TestVirtualWebappLoader#testLoaderInstance",
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
      "ess" : 2,
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
      "ess" : 2,
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
        "ess" : 3,
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
          "ess" : 4,
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
    "name" : "org.apache.tomcat.util.res.StringManager#getManager",
    "key" : "org.apache.tomcat.util.res.StringManager.getManager_Class",
    "otherKey" : null,
    "parent" : "org.apache.catalina.loader.TestVirtualWebappLoader#testLoaderInstance",
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
    } ]
  }, {
    "call" : "org.apache.catalina.util.LifecycleBase#<init>",
    "kiekerPattern" : "public new org.apache.catalina.util.LifecycleBase.<init>()",
    "otherKiekerPattern" : null,
    "module" : "",
    "name" : "org.apache.catalina.util.LifecycleBase#<init>",
    "key" : "org.apache.catalina.util.LifecycleBase.<init>_",
    "otherKey" : null,
    "parent" : "org.apache.catalina.loader.TestVirtualWebappLoader#testLoaderInstance",
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
    "name" : "org.apache.catalina.util.LifecycleMBeanBase#<init>",
    "key" : "org.apache.catalina.util.LifecycleMBeanBase.<init>_",
    "otherKey" : null,
    "parent" : "org.apache.catalina.loader.TestVirtualWebappLoader#testLoaderInstance",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.apache.catalina.loader.WebappLoader#<init>",
    "kiekerPattern" : "public new org.apache.catalina.loader.WebappLoader.<init>()",
    "otherKiekerPattern" : null,
    "module" : "",
    "name" : "org.apache.catalina.loader.WebappLoader#<init>",
    "key" : "org.apache.catalina.loader.WebappLoader.<init>_",
    "otherKey" : null,
    "parent" : "org.apache.catalina.loader.TestVirtualWebappLoader#testLoaderInstance",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.apache.catalina.loader.WebappLoader#getClassLoader",
    "kiekerPattern" : "public java.lang.ClassLoader org.apache.catalina.loader.WebappLoader.getClassLoader()",
    "otherKiekerPattern" : null,
    "module" : "",
    "name" : "org.apache.catalina.loader.WebappLoader#getClassLoader",
    "key" : "org.apache.catalina.loader.WebappLoader.getClassLoader_",
    "otherKey" : null,
    "parent" : "org.apache.catalina.loader.TestVirtualWebappLoader#testLoaderInstance",
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
    "name" : "org.apache.tomcat.util.compat.JreCompat#isGraalAvailable",
    "key" : "org.apache.tomcat.util.compat.JreCompat.isGraalAvailable_",
    "otherKey" : null,
    "parent" : "org.apache.catalina.loader.TestVirtualWebappLoader#testLoaderInstance",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.apache.catalina.loader.WebappClassLoaderBase#<init>",
    "kiekerPattern" : "protected new org.apache.catalina.loader.WebappClassLoaderBase.<init>()",
    "otherKiekerPattern" : null,
    "module" : "",
    "name" : "org.apache.catalina.loader.WebappClassLoaderBase#<init>",
    "key" : "org.apache.catalina.loader.WebappClassLoaderBase.<init>_",
    "otherKey" : null,
    "parent" : "org.apache.catalina.loader.TestVirtualWebappLoader#testLoaderInstance",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.apache.catalina.loader.WebappClassLoader#<init>",
    "kiekerPattern" : "public new org.apache.catalina.loader.WebappClassLoader.<init>()",
    "otherKiekerPattern" : null,
    "module" : "",
    "name" : "org.apache.catalina.loader.WebappClassLoader#<init>",
    "key" : "org.apache.catalina.loader.WebappClassLoader.<init>_",
    "otherKey" : null,
    "parent" : "org.apache.catalina.loader.TestVirtualWebappLoader#testLoaderInstance",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.apache.catalina.loader.WebappLoader#setLoaderInstance",
    "kiekerPattern" : "public void org.apache.catalina.loader.WebappLoader.setLoaderInstance(org.apache.catalina.loader.WebappClassLoaderBase)",
    "otherKiekerPattern" : null,
    "module" : "",
    "name" : "org.apache.catalina.loader.WebappLoader#setLoaderInstance",
    "key" : "org.apache.catalina.loader.WebappLoader.setLoaderInstance_WebappClassLoaderBase",
    "otherKey" : null,
    "parent" : "org.apache.catalina.loader.TestVirtualWebappLoader#testLoaderInstance",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ {
      "call" : "org.apache.catalina.loader.WebappLoader#setLoaderClass",
      "kiekerPattern" : "public void org.apache.catalina.loader.WebappLoader.setLoaderClass(java.lang.String)",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "org.apache.catalina.loader.WebappLoader#setLoaderClass",
      "key" : "org.apache.catalina.loader.WebappLoader.setLoaderClass_String",
      "otherKey" : null,
      "parent" : "org.apache.catalina.loader.WebappLoader#setLoaderInstance",
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
    "call" : "org.apache.catalina.loader.WebappLoader#getLoaderClass",
    "kiekerPattern" : "public java.lang.String org.apache.catalina.loader.WebappLoader.getLoaderClass()",
    "otherKiekerPattern" : null,
    "module" : "",
    "name" : "org.apache.catalina.loader.WebappLoader#getLoaderClass",
    "key" : "org.apache.catalina.loader.WebappLoader.getLoaderClass_",
    "otherKey" : null,
    "parent" : "org.apache.catalina.loader.TestVirtualWebappLoader#testLoaderInstance",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.apache.catalina.startup.TomcatBaseTest#getTomcatInstance",
    "kiekerPattern" : "public org.apache.catalina.startup.Tomcat org.apache.catalina.startup.TomcatBaseTest.getTomcatInstance()",
    "otherKiekerPattern" : null,
    "module" : "",
    "name" : "org.apache.catalina.startup.TomcatBaseTest#getTomcatInstance",
    "key" : "org.apache.catalina.startup.TomcatBaseTest.getTomcatInstance_",
    "otherKey" : null,
    "parent" : "org.apache.catalina.loader.TestVirtualWebappLoader#testLoaderInstance",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.apache.catalina.startup.Tomcat#addContext",
    "kiekerPattern" : "public org.apache.catalina.Context org.apache.catalina.startup.Tomcat.addContext(java.lang.String,java.lang.String)",
    "otherKiekerPattern" : null,
    "module" : "",
    "name" : "org.apache.catalina.startup.Tomcat#addContext",
    "key" : "org.apache.catalina.startup.Tomcat.addContext_String_String",
    "otherKey" : null,
    "parent" : "org.apache.catalina.loader.TestVirtualWebappLoader#testLoaderInstance",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ {
      "call" : "org.apache.catalina.startup.Tomcat#getHost",
      "kiekerPattern" : "public org.apache.catalina.Host org.apache.catalina.startup.Tomcat.getHost()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "org.apache.catalina.startup.Tomcat#getHost",
      "key" : "org.apache.catalina.startup.Tomcat.getHost_",
      "otherKey" : null,
      "parent" : "org.apache.catalina.startup.Tomcat#addContext",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.apache.catalina.startup.Tomcat#getEngine",
        "kiekerPattern" : "public org.apache.catalina.Engine org.apache.catalina.startup.Tomcat.getEngine()",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "org.apache.catalina.startup.Tomcat#getEngine",
        "key" : "org.apache.catalina.startup.Tomcat.getEngine_",
        "otherKey" : null,
        "parent" : "org.apache.catalina.startup.Tomcat#getHost",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.apache.catalina.startup.Tomcat#getServer",
          "kiekerPattern" : "public org.apache.catalina.Server org.apache.catalina.startup.Tomcat.getServer()",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.catalina.startup.Tomcat#getServer",
          "key" : "org.apache.catalina.startup.Tomcat.getServer_",
          "otherKey" : null,
          "parent" : "org.apache.catalina.startup.Tomcat#getEngine",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.catalina.core.StandardServer#findServices",
          "kiekerPattern" : "public org.apache.catalina.Service[] org.apache.catalina.core.StandardServer.findServices()",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.catalina.core.StandardServer#findServices",
          "key" : "org.apache.catalina.core.StandardServer.findServices_",
          "otherKey" : null,
          "parent" : "org.apache.catalina.startup.Tomcat#getEngine",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.catalina.core.StandardService#getContainer",
          "kiekerPattern" : "public org.apache.catalina.Engine org.apache.catalina.core.StandardService.getContainer()",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.catalina.core.StandardService#getContainer",
          "key" : "org.apache.catalina.core.StandardService.getContainer_",
          "otherKey" : null,
          "parent" : "org.apache.catalina.startup.Tomcat#getEngine",
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
        "call" : "org.apache.catalina.core.ContainerBase#findChildren",
        "kiekerPattern" : "public org.apache.catalina.Container[] org.apache.catalina.core.ContainerBase.findChildren()",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "org.apache.catalina.core.ContainerBase#findChildren",
        "key" : "org.apache.catalina.core.ContainerBase.findChildren_",
        "otherKey" : null,
        "parent" : "org.apache.catalina.startup.Tomcat#getHost",
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
      "call" : "org.apache.catalina.startup.Tomcat#addContext",
      "kiekerPattern" : "public org.apache.catalina.Context org.apache.catalina.startup.Tomcat.addContext(org.apache.catalina.Host,java.lang.String,java.lang.String)",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "org.apache.catalina.startup.Tomcat#addContext",
      "key" : "org.apache.catalina.startup.Tomcat.addContext_Host_String_String",
      "otherKey" : null,
      "parent" : "org.apache.catalina.startup.Tomcat#addContext",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.apache.catalina.startup.Tomcat#addContext",
        "kiekerPattern" : "public org.apache.catalina.Context org.apache.catalina.startup.Tomcat.addContext(org.apache.catalina.Host,java.lang.String,java.lang.String,java.lang.String)",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "org.apache.catalina.startup.Tomcat#addContext",
        "key" : "org.apache.catalina.startup.Tomcat.addContext_Host_String_String_String",
        "otherKey" : null,
        "parent" : "org.apache.catalina.startup.Tomcat#addContext",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.apache.catalina.startup.Tomcat#silence",
          "kiekerPattern" : "private void org.apache.catalina.startup.Tomcat.silence(org.apache.catalina.Host,java.lang.String)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.catalina.startup.Tomcat#silence",
          "key" : "org.apache.catalina.startup.Tomcat.silence_Host_String",
          "otherKey" : null,
          "parent" : "org.apache.catalina.startup.Tomcat#addContext",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.apache.catalina.startup.Tomcat#getLoggerName",
            "kiekerPattern" : "private java.lang.String org.apache.catalina.startup.Tomcat.getLoggerName(org.apache.catalina.Host,java.lang.String)",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.catalina.startup.Tomcat#getLoggerName",
            "key" : "org.apache.catalina.startup.Tomcat.getLoggerName_Host_String",
            "otherKey" : null,
            "parent" : "org.apache.catalina.startup.Tomcat#silence",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ {
              "call" : "org.apache.catalina.core.ContainerBase#getParent",
              "kiekerPattern" : "public org.apache.catalina.Container org.apache.catalina.core.ContainerBase.getParent()",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.catalina.core.ContainerBase#getParent",
              "key" : "org.apache.catalina.core.ContainerBase.getParent_",
              "otherKey" : null,
              "parent" : "org.apache.catalina.startup.Tomcat#getLoggerName",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            }, {
              "call" : "org.apache.catalina.core.ContainerBase#getName",
              "kiekerPattern" : "public java.lang.String org.apache.catalina.core.ContainerBase.getName()",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.catalina.core.ContainerBase#getName",
              "key" : "org.apache.catalina.core.ContainerBase.getName_",
              "otherKey" : null,
              "parent" : "org.apache.catalina.startup.Tomcat#getLoggerName",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            }, {
              "call" : "org.apache.catalina.core.StandardHost#getName",
              "kiekerPattern" : "public java.lang.String org.apache.catalina.core.StandardHost.getName()",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.catalina.core.StandardHost#getName",
              "key" : "org.apache.catalina.core.StandardHost.getName_",
              "otherKey" : null,
              "parent" : "org.apache.catalina.startup.Tomcat#getLoggerName",
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
        }, {
          "call" : "org.apache.catalina.startup.Tomcat#createContext",
          "kiekerPattern" : "private org.apache.catalina.Context org.apache.catalina.startup.Tomcat.createContext(org.apache.catalina.Host,java.lang.String)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.catalina.startup.Tomcat#createContext",
          "key" : "org.apache.catalina.startup.Tomcat.createContext_Host_String",
          "otherKey" : null,
          "parent" : "org.apache.catalina.startup.Tomcat#addContext",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.apache.catalina.core.StandardHost#getContextClass",
            "kiekerPattern" : "public java.lang.String org.apache.catalina.core.StandardHost.getContextClass()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.catalina.core.StandardHost#getContextClass",
            "key" : "org.apache.catalina.core.StandardHost.getContextClass_",
            "otherKey" : null,
            "parent" : "org.apache.catalina.startup.Tomcat#createContext",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.apache.juli.logging.LogFactory#getLog",
            "kiekerPattern" : "public static org.apache.juli.logging.Log org.apache.juli.logging.LogFactory.getLog(java.lang.Class)",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.juli.logging.LogFactory#getLog",
            "key" : "org.apache.juli.logging.LogFactory.getLog_Class",
            "otherKey" : null,
            "parent" : "org.apache.catalina.startup.Tomcat#createContext",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
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
              "ess" : 6,
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
              "ess" : 6,
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
                "ess" : 7,
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
                  "ess" : 8,
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
                    "ess" : 9,
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
            "name" : "org.apache.catalina.util.LifecycleBase#<init>",
            "key" : "org.apache.catalina.util.LifecycleBase.<init>_",
            "otherKey" : null,
            "parent" : "org.apache.catalina.startup.Tomcat#createContext",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.apache.catalina.util.LifecycleMBeanBase#<init>",
            "kiekerPattern" : "public new org.apache.catalina.util.LifecycleMBeanBase.<init>()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.catalina.util.LifecycleMBeanBase#<init>",
            "key" : "org.apache.catalina.util.LifecycleMBeanBase.<init>_",
            "otherKey" : null,
            "parent" : "org.apache.catalina.startup.Tomcat#createContext",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.apache.catalina.core.StandardPipeline#<init>",
            "kiekerPattern" : "public new org.apache.catalina.core.StandardPipeline.<init>(org.apache.catalina.Container)",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.catalina.core.StandardPipeline#<init>",
            "key" : "org.apache.catalina.core.StandardPipeline.<init>_Container",
            "otherKey" : null,
            "parent" : "org.apache.catalina.startup.Tomcat#createContext",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ {
              "call" : "org.apache.catalina.core.StandardPipeline#setContainer",
              "kiekerPattern" : "public void org.apache.catalina.core.StandardPipeline.setContainer(org.apache.catalina.Container)",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.catalina.core.StandardPipeline#setContainer",
              "key" : "org.apache.catalina.core.StandardPipeline.setContainer_Container",
              "otherKey" : null,
              "parent" : "org.apache.catalina.core.StandardPipeline#<init>",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            } ]
          }, {
            "call" : "org.apache.catalina.core.ContainerBase#<init>",
            "kiekerPattern" : "public new org.apache.catalina.core.ContainerBase.<init>()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.catalina.core.ContainerBase#<init>",
            "key" : "org.apache.catalina.core.ContainerBase.<init>_",
            "otherKey" : null,
            "parent" : "org.apache.catalina.startup.Tomcat#createContext",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.apache.tomcat.util.compat.JreCompat#isGraalAvailable",
            "kiekerPattern" : "public static boolean org.apache.tomcat.util.compat.JreCompat.isGraalAvailable()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.tomcat.util.compat.JreCompat#isGraalAvailable",
            "key" : "org.apache.tomcat.util.compat.JreCompat.isGraalAvailable_",
            "otherKey" : null,
            "parent" : "org.apache.catalina.startup.Tomcat#createContext",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.apache.catalina.util.ErrorPageSupport#<init>",
            "kiekerPattern" : "public new org.apache.catalina.util.ErrorPageSupport.<init>()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.catalina.util.ErrorPageSupport#<init>",
            "key" : "org.apache.catalina.util.ErrorPageSupport.<init>_",
            "otherKey" : null,
            "parent" : "org.apache.catalina.startup.Tomcat#createContext",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.apache.catalina.core.StandardContext$ContextFilterMaps#<init>",
            "kiekerPattern" : "private new org.apache.catalina.core.StandardContext$ContextFilterMaps.<init>()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.catalina.core.StandardContext$ContextFilterMaps#<init>",
            "key" : "org.apache.catalina.core.StandardContext$ContextFilterMaps.<init>_",
            "otherKey" : null,
            "parent" : "org.apache.catalina.startup.Tomcat#createContext",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.apache.catalina.core.StandardContext#<init>",
            "kiekerPattern" : "public new org.apache.catalina.core.StandardContext.<init>()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.catalina.core.StandardContext#<init>",
            "key" : "org.apache.catalina.core.StandardContext.<init>_",
            "otherKey" : null,
            "parent" : "org.apache.catalina.startup.Tomcat#createContext",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ {
              "call" : "org.apache.tomcat.util.res.StringManager#getManager",
              "kiekerPattern" : "public static final org.apache.tomcat.util.res.StringManager org.apache.tomcat.util.res.StringManager.getManager(java.lang.Class)",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.tomcat.util.res.StringManager#getManager",
              "key" : "org.apache.tomcat.util.res.StringManager.getManager_Class",
              "otherKey" : null,
              "parent" : "org.apache.catalina.core.StandardContext#<init>",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
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
                "ess" : 7,
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
                  "ess" : 8,
                  "children" : [ ]
                } ]
              } ]
            }, {
              "call" : "org.apache.catalina.util.LifecycleBase#<init>",
              "kiekerPattern" : "public new org.apache.catalina.util.LifecycleBase.<init>()",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.catalina.util.LifecycleBase#<init>",
              "key" : "org.apache.catalina.util.LifecycleBase.<init>_",
              "otherKey" : null,
              "parent" : "org.apache.catalina.core.StandardContext#<init>",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            }, {
              "call" : "org.apache.catalina.util.LifecycleMBeanBase#<init>",
              "kiekerPattern" : "public new org.apache.catalina.util.LifecycleMBeanBase.<init>()",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.catalina.util.LifecycleMBeanBase#<init>",
              "key" : "org.apache.catalina.util.LifecycleMBeanBase.<init>_",
              "otherKey" : null,
              "parent" : "org.apache.catalina.core.StandardContext#<init>",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            }, {
              "call" : "org.apache.catalina.valves.ValveBase#<init>",
              "kiekerPattern" : "public new org.apache.catalina.valves.ValveBase.<init>(boolean)",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.catalina.valves.ValveBase#<init>",
              "key" : "org.apache.catalina.valves.ValveBase.<init>_boolean",
              "otherKey" : null,
              "parent" : "org.apache.catalina.core.StandardContext#<init>",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            }, {
              "call" : "org.apache.catalina.core.StandardContextValve#<init>",
              "kiekerPattern" : "public new org.apache.catalina.core.StandardContextValve.<init>()",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.catalina.core.StandardContextValve#<init>",
              "key" : "org.apache.catalina.core.StandardContextValve.<init>_",
              "otherKey" : null,
              "parent" : "org.apache.catalina.core.StandardContext#<init>",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            }, {
              "call" : "org.apache.catalina.core.StandardPipeline#setBasic",
              "kiekerPattern" : "public void org.apache.catalina.core.StandardPipeline.setBasic(org.apache.catalina.Valve)",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.catalina.core.StandardPipeline#setBasic",
              "key" : "org.apache.catalina.core.StandardPipeline.setBasic_Valve",
              "otherKey" : null,
              "parent" : "org.apache.catalina.core.StandardContext#<init>",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ {
                "call" : "org.apache.catalina.valves.ValveBase#setContainer",
                "kiekerPattern" : "public void org.apache.catalina.valves.ValveBase.setContainer(org.apache.catalina.Container)",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "org.apache.catalina.valves.ValveBase#setContainer",
                "key" : "org.apache.catalina.valves.ValveBase.setContainer_Container",
                "otherKey" : null,
                "parent" : "org.apache.catalina.core.StandardPipeline#setBasic",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              }, {
                "call" : "org.apache.catalina.util.LifecycleBase#getState",
                "kiekerPattern" : "public org.apache.catalina.LifecycleState org.apache.catalina.util.LifecycleBase.getState()",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "org.apache.catalina.util.LifecycleBase#getState",
                "key" : "org.apache.catalina.util.LifecycleBase.getState_",
                "otherKey" : null,
                "parent" : "org.apache.catalina.core.StandardPipeline#setBasic",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              }, {
                "call" : "org.apache.catalina.LifecycleState#isAvailable",
                "kiekerPattern" : "public boolean org.apache.catalina.LifecycleState.isAvailable()",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "org.apache.catalina.LifecycleState#isAvailable",
                "key" : "org.apache.catalina.LifecycleState.isAvailable_",
                "otherKey" : null,
                "parent" : "org.apache.catalina.core.StandardPipeline#setBasic",
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
          "call" : "org.apache.catalina.core.ContainerBase#setName",
          "kiekerPattern" : "public void org.apache.catalina.core.ContainerBase.setName(java.lang.String)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.catalina.core.ContainerBase#setName",
          "key" : "org.apache.catalina.core.ContainerBase.setName_String",
          "otherKey" : null,
          "parent" : "org.apache.catalina.startup.Tomcat#addContext",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.catalina.core.StandardContext#setPath",
          "kiekerPattern" : "public void org.apache.catalina.core.StandardContext.setPath(java.lang.String)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.catalina.core.StandardContext#setPath",
          "key" : "org.apache.catalina.core.StandardContext.setPath_String",
          "otherKey" : null,
          "parent" : "org.apache.catalina.startup.Tomcat#addContext",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.apache.catalina.util.URLEncoder#<init>",
            "kiekerPattern" : "private new org.apache.catalina.util.URLEncoder.<init>(java.util.BitSet)",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.catalina.util.URLEncoder#<init>",
            "key" : "org.apache.catalina.util.URLEncoder.<init>_BitSet",
            "otherKey" : null,
            "parent" : "org.apache.catalina.core.StandardContext#setPath",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.apache.catalina.util.URLEncoder#<init>",
            "kiekerPattern" : "public new org.apache.catalina.util.URLEncoder.<init>()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.catalina.util.URLEncoder#<init>",
            "key" : "org.apache.catalina.util.URLEncoder.<init>_",
            "otherKey" : null,
            "parent" : "org.apache.catalina.core.StandardContext#setPath",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ {
              "call" : "org.apache.catalina.util.URLEncoder#addSafeCharacter",
              "kiekerPattern" : "public void org.apache.catalina.util.URLEncoder.addSafeCharacter(char)",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.catalina.util.URLEncoder#addSafeCharacter",
              "key" : "org.apache.catalina.util.URLEncoder.addSafeCharacter_char",
              "otherKey" : null,
              "parent" : "org.apache.catalina.util.URLEncoder#<init>",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            } ]
          }, {
            "call" : "org.apache.catalina.util.URLEncoder#addSafeCharacter",
            "kiekerPattern" : "public void org.apache.catalina.util.URLEncoder.addSafeCharacter(char)",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.catalina.util.URLEncoder#addSafeCharacter",
            "key" : "org.apache.catalina.util.URLEncoder.addSafeCharacter_char",
            "otherKey" : null,
            "parent" : "org.apache.catalina.core.StandardContext#setPath",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.apache.catalina.util.URLEncoder#setEncodeSpaceAsPlus",
            "kiekerPattern" : "public void org.apache.catalina.util.URLEncoder.setEncodeSpaceAsPlus(boolean)",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.catalina.util.URLEncoder#setEncodeSpaceAsPlus",
            "key" : "org.apache.catalina.util.URLEncoder.setEncodeSpaceAsPlus_boolean",
            "otherKey" : null,
            "parent" : "org.apache.catalina.core.StandardContext#setPath",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.apache.catalina.util.URLEncoder#encode",
            "kiekerPattern" : "public java.lang.String org.apache.catalina.util.URLEncoder.encode(java.lang.String,java.nio.charset.Charset)",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.catalina.util.URLEncoder#encode",
            "key" : "org.apache.catalina.util.URLEncoder.encode_String_Charset",
            "otherKey" : null,
            "parent" : "org.apache.catalina.core.StandardContext#setPath",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.apache.catalina.core.ContainerBase#getName",
            "kiekerPattern" : "public java.lang.String org.apache.catalina.core.ContainerBase.getName()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.catalina.core.ContainerBase#getName",
            "key" : "org.apache.catalina.core.ContainerBase.getName_",
            "otherKey" : null,
            "parent" : "org.apache.catalina.core.StandardContext#setPath",
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
          "call" : "org.apache.catalina.core.StandardContext#setDocBase",
          "kiekerPattern" : "public void org.apache.catalina.core.StandardContext.setDocBase(java.lang.String)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.catalina.core.StandardContext#setDocBase",
          "key" : "org.apache.catalina.core.StandardContext.setDocBase_String",
          "otherKey" : null,
          "parent" : "org.apache.catalina.startup.Tomcat#addContext",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.catalina.startup.Tomcat$FixContextListener#<init>",
          "kiekerPattern" : "public new org.apache.catalina.startup.Tomcat$FixContextListener.<init>()",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.catalina.startup.Tomcat$FixContextListener#<init>",
          "key" : "org.apache.catalina.startup.Tomcat$FixContextListener.<init>_",
          "otherKey" : null,
          "parent" : "org.apache.catalina.startup.Tomcat#addContext",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.catalina.util.LifecycleBase#addLifecycleListener",
          "kiekerPattern" : "public void org.apache.catalina.util.LifecycleBase.addLifecycleListener(org.apache.catalina.LifecycleListener)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.catalina.util.LifecycleBase#addLifecycleListener",
          "key" : "org.apache.catalina.util.LifecycleBase.addLifecycleListener_LifecycleListener",
          "otherKey" : null,
          "parent" : "org.apache.catalina.startup.Tomcat#addContext",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.catalina.core.StandardHost#addChild",
          "kiekerPattern" : "public void org.apache.catalina.core.StandardHost.addChild(org.apache.catalina.Container)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.catalina.core.StandardHost#addChild",
          "key" : "org.apache.catalina.core.StandardHost.addChild_Container",
          "otherKey" : null,
          "parent" : "org.apache.catalina.startup.Tomcat#addContext",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.apache.catalina.core.StandardHost$MemoryLeakTrackingListener#<init>",
            "kiekerPattern" : "private new org.apache.catalina.core.StandardHost$MemoryLeakTrackingListener.<init>(org.apache.catalina.core.StandardHost)",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.catalina.core.StandardHost$MemoryLeakTrackingListener#<init>",
            "key" : "org.apache.catalina.core.StandardHost$MemoryLeakTrackingListener.<init>_StandardHost",
            "otherKey" : null,
            "parent" : "org.apache.catalina.core.StandardHost#addChild",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.apache.catalina.util.LifecycleBase#addLifecycleListener",
            "kiekerPattern" : "public void org.apache.catalina.util.LifecycleBase.addLifecycleListener(org.apache.catalina.LifecycleListener)",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.catalina.util.LifecycleBase#addLifecycleListener",
            "key" : "org.apache.catalina.util.LifecycleBase.addLifecycleListener_LifecycleListener",
            "otherKey" : null,
            "parent" : "org.apache.catalina.core.StandardHost#addChild",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.apache.catalina.core.StandardContext#getPath",
            "kiekerPattern" : "public java.lang.String org.apache.catalina.core.StandardContext.getPath()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.catalina.core.StandardContext#getPath",
            "key" : "org.apache.catalina.core.StandardContext.getPath_",
            "otherKey" : null,
            "parent" : "org.apache.catalina.core.StandardHost#addChild",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.apache.catalina.core.ContainerBase#addChild",
            "kiekerPattern" : "public void org.apache.catalina.core.ContainerBase.addChild(org.apache.catalina.Container)",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.catalina.core.ContainerBase#addChild",
            "key" : "org.apache.catalina.core.ContainerBase.addChild_Container",
            "otherKey" : null,
            "parent" : "org.apache.catalina.core.StandardHost#addChild",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ {
              "call" : "org.apache.catalina.core.ContainerBase#addChildInternal",
              "kiekerPattern" : "private void org.apache.catalina.core.ContainerBase.addChildInternal(org.apache.catalina.Container)",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.catalina.core.ContainerBase#addChildInternal",
              "key" : "org.apache.catalina.core.ContainerBase.addChildInternal_Container",
              "otherKey" : null,
              "parent" : "org.apache.catalina.core.ContainerBase#addChild",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ {
                "call" : "org.apache.juli.logging.DirectJDKLog#isDebugEnabled",
                "kiekerPattern" : "public final boolean org.apache.juli.logging.DirectJDKLog.isDebugEnabled()",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "org.apache.juli.logging.DirectJDKLog#isDebugEnabled",
                "key" : "org.apache.juli.logging.DirectJDKLog.isDebugEnabled_",
                "otherKey" : null,
                "parent" : "org.apache.catalina.core.ContainerBase#addChildInternal",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              }, {
                "call" : "org.apache.catalina.core.ContainerBase#getName",
                "kiekerPattern" : "public java.lang.String org.apache.catalina.core.ContainerBase.getName()",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "org.apache.catalina.core.ContainerBase#getName",
                "key" : "org.apache.catalina.core.ContainerBase.getName_",
                "otherKey" : null,
                "parent" : "org.apache.catalina.core.ContainerBase#addChildInternal",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              }, {
                "call" : "org.apache.catalina.core.ContainerBase#setParent",
                "kiekerPattern" : "public void org.apache.catalina.core.ContainerBase.setParent(org.apache.catalina.Container)",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "org.apache.catalina.core.ContainerBase#setParent",
                "key" : "org.apache.catalina.core.ContainerBase.setParent_Container",
                "otherKey" : null,
                "parent" : "org.apache.catalina.core.ContainerBase#addChildInternal",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              }, {
                "call" : "org.apache.catalina.core.ContainerBase#fireContainerEvent",
                "kiekerPattern" : "public void org.apache.catalina.core.ContainerBase.fireContainerEvent(java.lang.String,java.lang.Object)",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "org.apache.catalina.core.ContainerBase#fireContainerEvent",
                "key" : "org.apache.catalina.core.ContainerBase.fireContainerEvent_String_Object",
                "otherKey" : null,
                "parent" : "org.apache.catalina.core.ContainerBase#addChildInternal",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              }, {
                "call" : "org.apache.catalina.util.LifecycleBase#getState",
                "kiekerPattern" : "public org.apache.catalina.LifecycleState org.apache.catalina.util.LifecycleBase.getState()",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "org.apache.catalina.util.LifecycleBase#getState",
                "key" : "org.apache.catalina.util.LifecycleBase.getState_",
                "otherKey" : null,
                "parent" : "org.apache.catalina.core.ContainerBase#addChildInternal",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              }, {
                "call" : "org.apache.catalina.LifecycleState#isAvailable",
                "kiekerPattern" : "public boolean org.apache.catalina.LifecycleState.isAvailable()",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "org.apache.catalina.LifecycleState#isAvailable",
                "key" : "org.apache.catalina.LifecycleState.isAvailable_",
                "otherKey" : null,
                "parent" : "org.apache.catalina.core.ContainerBase#addChildInternal",
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
      } ]
    } ]
  }, {
    "call" : "org.apache.catalina.loader.WebappLoader#setContext",
    "kiekerPattern" : "public void org.apache.catalina.loader.WebappLoader.setContext(org.apache.catalina.Context)",
    "otherKiekerPattern" : null,
    "module" : "",
    "name" : "org.apache.catalina.loader.WebappLoader#setContext",
    "key" : "org.apache.catalina.loader.WebappLoader.setContext_Context",
    "otherKey" : null,
    "parent" : "org.apache.catalina.loader.TestVirtualWebappLoader#testLoaderInstance",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ {
      "call" : "org.apache.catalina.util.LifecycleBase#getState",
      "kiekerPattern" : "public org.apache.catalina.LifecycleState org.apache.catalina.util.LifecycleBase.getState()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "org.apache.catalina.util.LifecycleBase#getState",
      "key" : "org.apache.catalina.util.LifecycleBase.getState_",
      "otherKey" : null,
      "parent" : "org.apache.catalina.loader.WebappLoader#setContext",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.apache.catalina.LifecycleState#isAvailable",
      "kiekerPattern" : "public boolean org.apache.catalina.LifecycleState.isAvailable()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "org.apache.catalina.LifecycleState#isAvailable",
      "key" : "org.apache.catalina.LifecycleState.isAvailable_",
      "otherKey" : null,
      "parent" : "org.apache.catalina.loader.WebappLoader#setContext",
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
    "call" : "org.apache.catalina.core.StandardContext#setLoader",
    "kiekerPattern" : "public void org.apache.catalina.core.StandardContext.setLoader(org.apache.catalina.Loader)",
    "otherKiekerPattern" : null,
    "module" : "",
    "name" : "org.apache.catalina.core.StandardContext#setLoader",
    "key" : "org.apache.catalina.core.StandardContext.setLoader_Loader",
    "otherKey" : null,
    "parent" : "org.apache.catalina.loader.TestVirtualWebappLoader#testLoaderInstance",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ {
      "call" : "org.apache.catalina.util.LifecycleBase#getState",
      "kiekerPattern" : "public org.apache.catalina.LifecycleState org.apache.catalina.util.LifecycleBase.getState()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "org.apache.catalina.util.LifecycleBase#getState",
      "key" : "org.apache.catalina.util.LifecycleBase.getState_",
      "otherKey" : null,
      "parent" : "org.apache.catalina.core.StandardContext#setLoader",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.apache.catalina.LifecycleState#isAvailable",
      "kiekerPattern" : "public boolean org.apache.catalina.LifecycleState.isAvailable()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "org.apache.catalina.LifecycleState#isAvailable",
      "key" : "org.apache.catalina.LifecycleState.isAvailable_",
      "otherKey" : null,
      "parent" : "org.apache.catalina.core.StandardContext#setLoader",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.apache.catalina.loader.WebappLoader#setContext",
      "kiekerPattern" : "public void org.apache.catalina.loader.WebappLoader.setContext(org.apache.catalina.Context)",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "org.apache.catalina.loader.WebappLoader#setContext",
      "key" : "org.apache.catalina.loader.WebappLoader.setContext_Context",
      "otherKey" : null,
      "parent" : "org.apache.catalina.core.StandardContext#setLoader",
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
    "call" : "org.apache.catalina.util.LifecycleBase#start",
    "kiekerPattern" : "public final synchronized void org.apache.catalina.util.LifecycleBase.start()",
    "otherKiekerPattern" : null,
    "module" : "",
    "name" : "org.apache.catalina.util.LifecycleBase#start",
    "key" : "org.apache.catalina.util.LifecycleBase.start_",
    "otherKey" : null,
    "parent" : "org.apache.catalina.loader.TestVirtualWebappLoader#testLoaderInstance",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ {
      "call" : "org.apache.catalina.util.LifecycleBase#init",
      "kiekerPattern" : "public final synchronized void org.apache.catalina.util.LifecycleBase.init()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "org.apache.catalina.util.LifecycleBase#init",
      "key" : "org.apache.catalina.util.LifecycleBase.init_",
      "otherKey" : null,
      "parent" : "org.apache.catalina.util.LifecycleBase#start",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.apache.catalina.util.LifecycleBase#setStateInternal",
        "kiekerPattern" : "private synchronized void org.apache.catalina.util.LifecycleBase.setStateInternal(org.apache.catalina.LifecycleState,java.lang.Object,boolean)",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "org.apache.catalina.util.LifecycleBase#setStateInternal",
        "key" : "org.apache.catalina.util.LifecycleBase.setStateInternal_LifecycleState_Object_boolean",
        "otherKey" : null,
        "parent" : "org.apache.catalina.util.LifecycleBase#init",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.apache.juli.logging.DirectJDKLog#isDebugEnabled",
          "kiekerPattern" : "public final boolean org.apache.juli.logging.DirectJDKLog.isDebugEnabled()",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.juli.logging.DirectJDKLog#isDebugEnabled",
          "key" : "org.apache.juli.logging.DirectJDKLog.isDebugEnabled_",
          "otherKey" : null,
          "parent" : "org.apache.catalina.util.LifecycleBase#setStateInternal",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.catalina.LifecycleState#getLifecycleEvent",
          "kiekerPattern" : "public java.lang.String org.apache.catalina.LifecycleState.getLifecycleEvent()",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.catalina.LifecycleState#getLifecycleEvent",
          "key" : "org.apache.catalina.LifecycleState.getLifecycleEvent_",
          "otherKey" : null,
          "parent" : "org.apache.catalina.util.LifecycleBase#setStateInternal",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.catalina.util.LifecycleBase#fireLifecycleEvent",
          "kiekerPattern" : "protected void org.apache.catalina.util.LifecycleBase.fireLifecycleEvent(java.lang.String,java.lang.Object)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.catalina.util.LifecycleBase#fireLifecycleEvent",
          "key" : "org.apache.catalina.util.LifecycleBase.fireLifecycleEvent_String_Object",
          "otherKey" : null,
          "parent" : "org.apache.catalina.util.LifecycleBase#setStateInternal",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.apache.catalina.LifecycleEvent#<init>",
            "kiekerPattern" : "public new org.apache.catalina.LifecycleEvent.<init>(org.apache.catalina.Lifecycle,java.lang.String,java.lang.Object)",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.catalina.LifecycleEvent#<init>",
            "key" : "org.apache.catalina.LifecycleEvent.<init>_Lifecycle_String_Object",
            "otherKey" : null,
            "parent" : "org.apache.catalina.util.LifecycleBase#fireLifecycleEvent",
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
      }, {
        "call" : "org.apache.catalina.util.LifecycleMBeanBase#initInternal",
        "kiekerPattern" : "protected void org.apache.catalina.util.LifecycleMBeanBase.initInternal()",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "org.apache.catalina.util.LifecycleMBeanBase#initInternal",
        "key" : "org.apache.catalina.util.LifecycleMBeanBase.initInternal_",
        "otherKey" : null,
        "parent" : "org.apache.catalina.util.LifecycleBase#init",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.apache.catalina.loader.WebappLoader#getObjectNameKeyProperties",
          "kiekerPattern" : "protected java.lang.String org.apache.catalina.loader.WebappLoader.getObjectNameKeyProperties()",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.catalina.loader.WebappLoader#getObjectNameKeyProperties",
          "key" : "org.apache.catalina.loader.WebappLoader.getObjectNameKeyProperties_",
          "otherKey" : null,
          "parent" : "org.apache.catalina.util.LifecycleMBeanBase#initInternal",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.apache.catalina.core.ContainerBase#getParent",
            "kiekerPattern" : "public org.apache.catalina.Container org.apache.catalina.core.ContainerBase.getParent()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.catalina.core.ContainerBase#getParent",
            "key" : "org.apache.catalina.core.ContainerBase.getParent_",
            "otherKey" : null,
            "parent" : "org.apache.catalina.loader.WebappLoader#getObjectNameKeyProperties",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.apache.catalina.core.StandardHost#getName",
            "kiekerPattern" : "public java.lang.String org.apache.catalina.core.StandardHost.getName()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.catalina.core.StandardHost#getName",
            "key" : "org.apache.catalina.core.StandardHost.getName_",
            "otherKey" : null,
            "parent" : "org.apache.catalina.loader.WebappLoader#getObjectNameKeyProperties",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.apache.catalina.core.ContainerBase#getName",
            "kiekerPattern" : "public java.lang.String org.apache.catalina.core.ContainerBase.getName()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.catalina.core.ContainerBase#getName",
            "key" : "org.apache.catalina.core.ContainerBase.getName_",
            "otherKey" : null,
            "parent" : "org.apache.catalina.loader.WebappLoader#getObjectNameKeyProperties",
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
          "call" : "org.apache.catalina.util.LifecycleMBeanBase#register",
          "kiekerPattern" : "protected final javax.management.ObjectName org.apache.catalina.util.LifecycleMBeanBase.register(java.lang.Object,java.lang.String)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.catalina.util.LifecycleMBeanBase#register",
          "key" : "org.apache.catalina.util.LifecycleMBeanBase.register_Object_String",
          "otherKey" : null,
          "parent" : "org.apache.catalina.util.LifecycleMBeanBase#initInternal",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.apache.catalina.util.LifecycleMBeanBase#getDomain",
            "kiekerPattern" : "public final java.lang.String org.apache.catalina.util.LifecycleMBeanBase.getDomain()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.catalina.util.LifecycleMBeanBase#getDomain",
            "key" : "org.apache.catalina.util.LifecycleMBeanBase.getDomain_",
            "otherKey" : null,
            "parent" : "org.apache.catalina.util.LifecycleMBeanBase#register",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ {
              "call" : "org.apache.catalina.loader.WebappLoader#getDomainInternal",
              "kiekerPattern" : "protected java.lang.String org.apache.catalina.loader.WebappLoader.getDomainInternal()",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.catalina.loader.WebappLoader#getDomainInternal",
              "key" : "org.apache.catalina.loader.WebappLoader.getDomainInternal_",
              "otherKey" : null,
              "parent" : "org.apache.catalina.util.LifecycleMBeanBase#getDomain",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ {
                "call" : "org.apache.catalina.util.LifecycleMBeanBase#getDomain",
                "kiekerPattern" : "public final java.lang.String org.apache.catalina.util.LifecycleMBeanBase.getDomain()",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "org.apache.catalina.util.LifecycleMBeanBase#getDomain",
                "key" : "org.apache.catalina.util.LifecycleMBeanBase.getDomain_",
                "otherKey" : null,
                "parent" : "org.apache.catalina.loader.WebappLoader#getDomainInternal",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ {
                  "call" : "org.apache.catalina.core.ContainerBase#getDomainInternal",
                  "kiekerPattern" : "protected java.lang.String org.apache.catalina.core.ContainerBase.getDomainInternal()",
                  "otherKiekerPattern" : null,
                  "module" : "",
                  "name" : "org.apache.catalina.core.ContainerBase#getDomainInternal",
                  "key" : "org.apache.catalina.core.ContainerBase.getDomainInternal_",
                  "otherKey" : null,
                  "parent" : "org.apache.catalina.util.LifecycleMBeanBase#getDomain",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ {
                    "call" : "org.apache.catalina.core.ContainerBase#getParent",
                    "kiekerPattern" : "public org.apache.catalina.Container org.apache.catalina.core.ContainerBase.getParent()",
                    "otherKiekerPattern" : null,
                    "module" : "",
                    "name" : "org.apache.catalina.core.ContainerBase#getParent",
                    "key" : "org.apache.catalina.core.ContainerBase.getParent_",
                    "otherKey" : null,
                    "parent" : "org.apache.catalina.core.ContainerBase#getDomainInternal",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ ]
                  }, {
                    "call" : "org.apache.catalina.util.LifecycleMBeanBase#getDomain",
                    "kiekerPattern" : "public final java.lang.String org.apache.catalina.util.LifecycleMBeanBase.getDomain()",
                    "otherKiekerPattern" : null,
                    "module" : "",
                    "name" : "org.apache.catalina.util.LifecycleMBeanBase#getDomain",
                    "key" : "org.apache.catalina.util.LifecycleMBeanBase.getDomain_",
                    "otherKey" : null,
                    "parent" : "org.apache.catalina.core.ContainerBase#getDomainInternal",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ {
                      "call" : "org.apache.catalina.core.ContainerBase#getDomainInternal",
                      "kiekerPattern" : "protected java.lang.String org.apache.catalina.core.ContainerBase.getDomainInternal()",
                      "otherKiekerPattern" : null,
                      "module" : "",
                      "name" : "org.apache.catalina.core.ContainerBase#getDomainInternal",
                      "key" : "org.apache.catalina.core.ContainerBase.getDomainInternal_",
                      "otherKey" : null,
                      "parent" : "org.apache.catalina.util.LifecycleMBeanBase#getDomain",
                      "color" : "#FFF",
                      "statistic" : null,
                      "hasSourceChange" : false,
                      "state" : null,
                      "inVMDeviationPredecessor" : 0.0,
                      "inVMDeviation" : 0.0,
                      "ess" : 10,
                      "children" : [ {
                        "call" : "org.apache.catalina.core.ContainerBase#getParent",
                        "kiekerPattern" : "public org.apache.catalina.Container org.apache.catalina.core.ContainerBase.getParent()",
                        "otherKiekerPattern" : null,
                        "module" : "",
                        "name" : "org.apache.catalina.core.ContainerBase#getParent",
                        "key" : "org.apache.catalina.core.ContainerBase.getParent_",
                        "otherKey" : null,
                        "parent" : "org.apache.catalina.core.ContainerBase#getDomainInternal",
                        "color" : "#FFF",
                        "statistic" : null,
                        "hasSourceChange" : false,
                        "state" : null,
                        "inVMDeviationPredecessor" : 0.0,
                        "inVMDeviation" : 0.0,
                        "ess" : 11,
                        "children" : [ ]
                      }, {
                        "call" : "org.apache.catalina.util.LifecycleMBeanBase#getDomain",
                        "kiekerPattern" : "public final java.lang.String org.apache.catalina.util.LifecycleMBeanBase.getDomain()",
                        "otherKiekerPattern" : null,
                        "module" : "",
                        "name" : "org.apache.catalina.util.LifecycleMBeanBase#getDomain",
                        "key" : "org.apache.catalina.util.LifecycleMBeanBase.getDomain_",
                        "otherKey" : null,
                        "parent" : "org.apache.catalina.core.ContainerBase#getDomainInternal",
                        "color" : "#FFF",
                        "statistic" : null,
                        "hasSourceChange" : false,
                        "state" : null,
                        "inVMDeviationPredecessor" : 0.0,
                        "inVMDeviation" : 0.0,
                        "ess" : 11,
                        "children" : [ {
                          "call" : "org.apache.catalina.core.StandardEngine#getDomainInternal",
                          "kiekerPattern" : "protected java.lang.String org.apache.catalina.core.StandardEngine.getDomainInternal()",
                          "otherKiekerPattern" : null,
                          "module" : "",
                          "name" : "org.apache.catalina.core.StandardEngine#getDomainInternal",
                          "key" : "org.apache.catalina.core.StandardEngine.getDomainInternal_",
                          "otherKey" : null,
                          "parent" : "org.apache.catalina.util.LifecycleMBeanBase#getDomain",
                          "color" : "#FFF",
                          "statistic" : null,
                          "hasSourceChange" : false,
                          "state" : null,
                          "inVMDeviationPredecessor" : 0.0,
                          "inVMDeviation" : 0.0,
                          "ess" : 12,
                          "children" : [ {
                            "call" : "org.apache.catalina.core.ContainerBase#getName",
                            "kiekerPattern" : "public java.lang.String org.apache.catalina.core.ContainerBase.getName()",
                            "otherKiekerPattern" : null,
                            "module" : "",
                            "name" : "org.apache.catalina.core.ContainerBase#getName",
                            "key" : "org.apache.catalina.core.ContainerBase.getName_",
                            "otherKey" : null,
                            "parent" : "org.apache.catalina.core.StandardEngine#getDomainInternal",
                            "color" : "#FFF",
                            "statistic" : null,
                            "hasSourceChange" : false,
                            "state" : null,
                            "inVMDeviationPredecessor" : 0.0,
                            "inVMDeviation" : 0.0,
                            "ess" : 13,
                            "children" : [ ]
                          } ]
                        } ]
                      } ]
                    } ]
                  } ]
                } ]
              } ]
            } ]
          }, {
            "call" : "org.apache.juli.logging.LogFactory#getLog",
            "kiekerPattern" : "public static org.apache.juli.logging.Log org.apache.juli.logging.LogFactory.getLog(java.lang.Class)",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.juli.logging.LogFactory#getLog",
            "key" : "org.apache.juli.logging.LogFactory.getLog_Class",
            "otherKey" : null,
            "parent" : "org.apache.catalina.util.LifecycleMBeanBase#register",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
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
              "ess" : 6,
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
              "ess" : 6,
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
                "ess" : 7,
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
                  "ess" : 8,
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
                    "ess" : 9,
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
            "name" : "org.apache.tomcat.util.res.StringManager#getManager",
            "key" : "org.apache.tomcat.util.res.StringManager.getManager_Class",
            "otherKey" : null,
            "parent" : "org.apache.catalina.util.LifecycleMBeanBase#register",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
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
              "ess" : 6,
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
                "ess" : 7,
                "children" : [ ]
              } ]
            } ]
          }, {
            "call" : "org.apache.tomcat.util.modeler.Registry#getRegistry",
            "kiekerPattern" : "public static synchronized org.apache.tomcat.util.modeler.Registry org.apache.tomcat.util.modeler.Registry.getRegistry(java.lang.Object,java.lang.Object)",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.tomcat.util.modeler.Registry#getRegistry",
            "key" : "org.apache.tomcat.util.modeler.Registry.getRegistry_Object_Object",
            "otherKey" : null,
            "parent" : "org.apache.catalina.util.LifecycleMBeanBase#register",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ {
              "call" : "org.apache.tomcat.util.compat.JreCompat#isGraalAvailable",
              "kiekerPattern" : "public static boolean org.apache.tomcat.util.compat.JreCompat.isGraalAvailable()",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.tomcat.util.compat.JreCompat#isGraalAvailable",
              "key" : "org.apache.tomcat.util.compat.JreCompat.isGraalAvailable_",
              "otherKey" : null,
              "parent" : "org.apache.tomcat.util.modeler.Registry#getRegistry",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            }, {
              "call" : "org.apache.tomcat.util.modeler.Registry#<init>",
              "kiekerPattern" : "protected new org.apache.tomcat.util.modeler.Registry.<init>()",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.tomcat.util.modeler.Registry#<init>",
              "key" : "org.apache.tomcat.util.modeler.Registry.<init>_",
              "otherKey" : null,
              "parent" : "org.apache.tomcat.util.modeler.Registry#getRegistry",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            } ]
          }, {
            "call" : "org.apache.tomcat.util.modeler.Registry#registerComponent",
            "kiekerPattern" : "public void org.apache.tomcat.util.modeler.Registry.registerComponent(java.lang.Object,javax.management.ObjectName,java.lang.String)",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.tomcat.util.modeler.Registry#registerComponent",
            "key" : "org.apache.tomcat.util.modeler.Registry.registerComponent_Object_ObjectName_String",
            "otherKey" : null,
            "parent" : "org.apache.catalina.util.LifecycleMBeanBase#register",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ {
              "call" : "org.apache.juli.logging.DirectJDKLog#isDebugEnabled",
              "kiekerPattern" : "public final boolean org.apache.juli.logging.DirectJDKLog.isDebugEnabled()",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.juli.logging.DirectJDKLog#isDebugEnabled",
              "key" : "org.apache.juli.logging.DirectJDKLog.isDebugEnabled_",
              "otherKey" : null,
              "parent" : "org.apache.tomcat.util.modeler.Registry#registerComponent",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            }, {
              "call" : "org.apache.tomcat.util.modeler.Registry#findManagedBean",
              "kiekerPattern" : "public org.apache.tomcat.util.modeler.ManagedBean org.apache.tomcat.util.modeler.Registry.findManagedBean(java.lang.Object,java.lang.Class,java.lang.String)",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.tomcat.util.modeler.Registry#findManagedBean",
              "key" : "org.apache.tomcat.util.modeler.Registry.findManagedBean_Object_Class_String",
              "otherKey" : null,
              "parent" : "org.apache.tomcat.util.modeler.Registry#registerComponent",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ {
                "call" : "org.apache.tomcat.util.modeler.Registry#findManagedBean",
                "kiekerPattern" : "public org.apache.tomcat.util.modeler.ManagedBean org.apache.tomcat.util.modeler.Registry.findManagedBean(java.lang.String)",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "org.apache.tomcat.util.modeler.Registry#findManagedBean",
                "key" : "org.apache.tomcat.util.modeler.Registry.findManagedBean_String",
                "otherKey" : null,
                "parent" : "org.apache.tomcat.util.modeler.Registry#findManagedBean",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              }, {
                "call" : "org.apache.juli.logging.DirectJDKLog#isDebugEnabled",
                "kiekerPattern" : "public final boolean org.apache.juli.logging.DirectJDKLog.isDebugEnabled()",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "org.apache.juli.logging.DirectJDKLog#isDebugEnabled",
                "key" : "org.apache.juli.logging.DirectJDKLog.isDebugEnabled_",
                "otherKey" : null,
                "parent" : "org.apache.tomcat.util.modeler.Registry#findManagedBean",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              }, {
                "call" : "org.apache.tomcat.util.modeler.Registry#findDescriptor",
                "kiekerPattern" : "private void org.apache.tomcat.util.modeler.Registry.findDescriptor(java.lang.Class,java.lang.String)",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "org.apache.tomcat.util.modeler.Registry#findDescriptor",
                "key" : "org.apache.tomcat.util.modeler.Registry.findDescriptor_Class_String",
                "otherKey" : null,
                "parent" : "org.apache.tomcat.util.modeler.Registry#findManagedBean",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ {
                  "call" : "org.apache.tomcat.util.modeler.Registry#loadDescriptors",
                  "kiekerPattern" : "public void org.apache.tomcat.util.modeler.Registry.loadDescriptors(java.lang.String,java.lang.ClassLoader)",
                  "otherKiekerPattern" : null,
                  "module" : "",
                  "name" : "org.apache.tomcat.util.modeler.Registry#loadDescriptors",
                  "key" : "org.apache.tomcat.util.modeler.Registry.loadDescriptors_String_ClassLoader",
                  "otherKey" : null,
                  "parent" : "org.apache.tomcat.util.modeler.Registry#findDescriptor",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ {
                    "call" : "org.apache.juli.logging.DirectJDKLog#isTraceEnabled",
                    "kiekerPattern" : "public final boolean org.apache.juli.logging.DirectJDKLog.isTraceEnabled()",
                    "otherKiekerPattern" : null,
                    "module" : "",
                    "name" : "org.apache.juli.logging.DirectJDKLog#isTraceEnabled",
                    "key" : "org.apache.juli.logging.DirectJDKLog.isTraceEnabled_",
                    "otherKey" : null,
                    "parent" : "org.apache.tomcat.util.modeler.Registry#loadDescriptors",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ ]
                  }, {
                    "call" : "org.apache.juli.logging.DirectJDKLog#debug",
                    "kiekerPattern" : "public final void org.apache.juli.logging.DirectJDKLog.debug(java.lang.Object)",
                    "otherKiekerPattern" : null,
                    "module" : "",
                    "name" : "org.apache.juli.logging.DirectJDKLog#debug",
                    "key" : "org.apache.juli.logging.DirectJDKLog.debug_Object",
                    "otherKey" : null,
                    "parent" : "org.apache.tomcat.util.modeler.Registry#loadDescriptors",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ {
                      "call" : "org.apache.juli.logging.DirectJDKLog#log",
                      "kiekerPattern" : "private void org.apache.juli.logging.DirectJDKLog.log(java.util.logging.Level,java.lang.String,java.lang.Throwable)",
                      "otherKiekerPattern" : null,
                      "module" : "",
                      "name" : "org.apache.juli.logging.DirectJDKLog#log",
                      "key" : "org.apache.juli.logging.DirectJDKLog.log_Level_String_Throwable",
                      "otherKey" : null,
                      "parent" : "org.apache.juli.logging.DirectJDKLog#debug",
                      "color" : "#FFF",
                      "statistic" : null,
                      "hasSourceChange" : false,
                      "state" : null,
                      "inVMDeviationPredecessor" : 0.0,
                      "inVMDeviation" : 0.0,
                      "ess" : 10,
                      "children" : [ ]
                    } ]
                  }, {
                    "call" : "org.apache.tomcat.util.modeler.Registry#load",
                    "kiekerPattern" : "public java.util.List org.apache.tomcat.util.modeler.Registry.load(java.lang.String,java.lang.Object,java.lang.String)",
                    "otherKiekerPattern" : null,
                    "module" : "",
                    "name" : "org.apache.tomcat.util.modeler.Registry#load",
                    "key" : "org.apache.tomcat.util.modeler.Registry.load_String_Object_String",
                    "otherKey" : null,
                    "parent" : "org.apache.tomcat.util.modeler.Registry#loadDescriptors",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ {
                      "call" : "org.apache.juli.logging.DirectJDKLog#isTraceEnabled",
                      "kiekerPattern" : "public final boolean org.apache.juli.logging.DirectJDKLog.isTraceEnabled()",
                      "otherKiekerPattern" : null,
                      "module" : "",
                      "name" : "org.apache.juli.logging.DirectJDKLog#isTraceEnabled",
                      "key" : "org.apache.juli.logging.DirectJDKLog.isTraceEnabled_",
                      "otherKey" : null,
                      "parent" : "org.apache.tomcat.util.modeler.Registry#load",
                      "color" : "#FFF",
                      "statistic" : null,
                      "hasSourceChange" : false,
                      "state" : null,
                      "inVMDeviationPredecessor" : 0.0,
                      "inVMDeviation" : 0.0,
                      "ess" : 10,
                      "children" : [ ]
                    }, {
                      "call" : "org.apache.tomcat.util.modeler.Registry#getModelerSource",
                      "kiekerPattern" : "private org.apache.tomcat.util.modeler.modules.ModelerSource org.apache.tomcat.util.modeler.Registry.getModelerSource(java.lang.String)",
                      "otherKiekerPattern" : null,
                      "module" : "",
                      "name" : "org.apache.tomcat.util.modeler.Registry#getModelerSource",
                      "key" : "org.apache.tomcat.util.modeler.Registry.getModelerSource_String",
                      "otherKey" : null,
                      "parent" : "org.apache.tomcat.util.modeler.Registry#load",
                      "color" : "#FFF",
                      "statistic" : null,
                      "hasSourceChange" : false,
                      "state" : null,
                      "inVMDeviationPredecessor" : 0.0,
                      "inVMDeviation" : 0.0,
                      "ess" : 10,
                      "children" : [ {
                        "call" : "org.apache.tomcat.util.res.StringManager#getManager",
                        "kiekerPattern" : "public static final org.apache.tomcat.util.res.StringManager org.apache.tomcat.util.res.StringManager.getManager(java.lang.Class)",
                        "otherKiekerPattern" : null,
                        "module" : "",
                        "name" : "org.apache.tomcat.util.res.StringManager#getManager",
                        "key" : "org.apache.tomcat.util.res.StringManager.getManager_Class",
                        "otherKey" : null,
                        "parent" : "org.apache.tomcat.util.modeler.Registry#getModelerSource",
                        "color" : "#FFF",
                        "statistic" : null,
                        "hasSourceChange" : false,
                        "state" : null,
                        "inVMDeviationPredecessor" : 0.0,
                        "inVMDeviation" : 0.0,
                        "ess" : 11,
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
                          "ess" : 12,
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
                            "ess" : 13,
                            "children" : [ ]
                          } ]
                        } ]
                      }, {
                        "call" : "org.apache.juli.logging.LogFactory#getLog",
                        "kiekerPattern" : "public static org.apache.juli.logging.Log org.apache.juli.logging.LogFactory.getLog(java.lang.Class)",
                        "otherKiekerPattern" : null,
                        "module" : "",
                        "name" : "org.apache.juli.logging.LogFactory#getLog",
                        "key" : "org.apache.juli.logging.LogFactory.getLog_Class",
                        "otherKey" : null,
                        "parent" : "org.apache.tomcat.util.modeler.Registry#getModelerSource",
                        "color" : "#FFF",
                        "statistic" : null,
                        "hasSourceChange" : false,
                        "state" : null,
                        "inVMDeviationPredecessor" : 0.0,
                        "inVMDeviation" : 0.0,
                        "ess" : 11,
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
                          "ess" : 12,
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
                          "ess" : 12,
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
                            "ess" : 13,
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
                              "ess" : 14,
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
                                "ess" : 15,
                                "children" : [ ]
                              } ]
                            } ]
                          } ]
                        } ]
                      }, {
                        "call" : "org.apache.tomcat.util.modeler.modules.ModelerSource#<init>",
                        "kiekerPattern" : "public new org.apache.tomcat.util.modeler.modules.ModelerSource.<init>()",
                        "otherKiekerPattern" : null,
                        "module" : "",
                        "name" : "org.apache.tomcat.util.modeler.modules.ModelerSource#<init>",
                        "key" : "org.apache.tomcat.util.modeler.modules.ModelerSource.<init>_",
                        "otherKey" : null,
                        "parent" : "org.apache.tomcat.util.modeler.Registry#getModelerSource",
                        "color" : "#FFF",
                        "statistic" : null,
                        "hasSourceChange" : false,
                        "state" : null,
                        "inVMDeviationPredecessor" : 0.0,
                        "inVMDeviation" : 0.0,
                        "ess" : 11,
                        "children" : [ ]
                      }, {
                        "call" : "org.apache.tomcat.util.modeler.modules.MbeansDescriptorsDigesterSource#<init>",
                        "kiekerPattern" : "public new org.apache.tomcat.util.modeler.modules.MbeansDescriptorsDigesterSource.<init>()",
                        "otherKiekerPattern" : null,
                        "module" : "",
                        "name" : "org.apache.tomcat.util.modeler.modules.MbeansDescriptorsDigesterSource#<init>",
                        "key" : "org.apache.tomcat.util.modeler.modules.MbeansDescriptorsDigesterSource.<init>_",
                        "otherKey" : null,
                        "parent" : "org.apache.tomcat.util.modeler.Registry#getModelerSource",
                        "color" : "#FFF",
                        "statistic" : null,
                        "hasSourceChange" : false,
                        "state" : null,
                        "inVMDeviationPredecessor" : 0.0,
                        "inVMDeviation" : 0.0,
                        "ess" : 11,
                        "children" : [ ]
                      } ]
                    }, {
                      "call" : "org.apache.tomcat.util.modeler.modules.MbeansDescriptorsDigesterSource#loadDescriptors",
                      "kiekerPattern" : "public java.util.List org.apache.tomcat.util.modeler.modules.MbeansDescriptorsDigesterSource.loadDescriptors(org.apache.tomcat.util.modeler.Registry,java.lang.String,java.lang.Object)",
                      "otherKiekerPattern" : null,
                      "module" : "",
                      "name" : "org.apache.tomcat.util.modeler.modules.MbeansDescriptorsDigesterSource#loadDescriptors",
                      "key" : "org.apache.tomcat.util.modeler.modules.MbeansDescriptorsDigesterSource.loadDescriptors_Registry_String_Object",
                      "otherKey" : null,
                      "parent" : "org.apache.tomcat.util.modeler.Registry#load",
                      "color" : "#FFF",
                      "statistic" : null,
                      "hasSourceChange" : false,
                      "state" : null,
                      "inVMDeviationPredecessor" : 0.0,
                      "inVMDeviation" : 0.0,
                      "ess" : 10,
                      "children" : [ {
                        "call" : "org.apache.tomcat.util.modeler.modules.MbeansDescriptorsDigesterSource#setRegistry",
                        "kiekerPattern" : "public void org.apache.tomcat.util.modeler.modules.MbeansDescriptorsDigesterSource.setRegistry(org.apache.tomcat.util.modeler.Registry)",
                        "otherKiekerPattern" : null,
                        "module" : "",
                        "name" : "org.apache.tomcat.util.modeler.modules.MbeansDescriptorsDigesterSource#setRegistry",
                        "key" : "org.apache.tomcat.util.modeler.modules.MbeansDescriptorsDigesterSource.setRegistry_Registry",
                        "otherKey" : null,
                        "parent" : "org.apache.tomcat.util.modeler.modules.MbeansDescriptorsDigesterSource#loadDescriptors",
                        "color" : "#FFF",
                        "statistic" : null,
                        "hasSourceChange" : false,
                        "state" : null,
                        "inVMDeviationPredecessor" : 0.0,
                        "inVMDeviation" : 0.0,
                        "ess" : 11,
                        "children" : [ ]
                      }, {
                        "call" : "org.apache.tomcat.util.modeler.modules.MbeansDescriptorsDigesterSource#setSource",
                        "kiekerPattern" : "public void org.apache.tomcat.util.modeler.modules.MbeansDescriptorsDigesterSource.setSource(java.lang.Object)",
                        "otherKiekerPattern" : null,
                        "module" : "",
                        "name" : "org.apache.tomcat.util.modeler.modules.MbeansDescriptorsDigesterSource#setSource",
                        "key" : "org.apache.tomcat.util.modeler.modules.MbeansDescriptorsDigesterSource.setSource_Object",
                        "otherKey" : null,
                        "parent" : "org.apache.tomcat.util.modeler.modules.MbeansDescriptorsDigesterSource#loadDescriptors",
                        "color" : "#FFF",
                        "statistic" : null,
                        "hasSourceChange" : false,
                        "state" : null,
                        "inVMDeviationPredecessor" : 0.0,
                        "inVMDeviation" : 0.0,
                        "ess" : 11,
                        "children" : [ ]
                      }, {
                        "call" : "org.apache.tomcat.util.modeler.modules.MbeansDescriptorsDigesterSource#execute",
                        "kiekerPattern" : "public void org.apache.tomcat.util.modeler.modules.MbeansDescriptorsDigesterSource.execute()",
                        "otherKiekerPattern" : null,
                        "module" : "",
                        "name" : "org.apache.tomcat.util.modeler.modules.MbeansDescriptorsDigesterSource#execute",
                        "key" : "org.apache.tomcat.util.modeler.modules.MbeansDescriptorsDigesterSource.execute_",
                        "otherKey" : null,
                        "parent" : "org.apache.tomcat.util.modeler.modules.MbeansDescriptorsDigesterSource#loadDescriptors",
                        "color" : "#FFF",
                        "statistic" : null,
                        "hasSourceChange" : false,
                        "state" : null,
                        "inVMDeviationPredecessor" : 0.0,
                        "inVMDeviation" : 0.0,
                        "ess" : 11,
                        "children" : [ {
                          "call" : "org.apache.tomcat.util.modeler.modules.MbeansDescriptorsDigesterSource#createDigester",
                          "kiekerPattern" : "private static org.apache.tomcat.util.digester.Digester org.apache.tomcat.util.modeler.modules.MbeansDescriptorsDigesterSource.createDigester()",
                          "otherKiekerPattern" : null,
                          "module" : "",
                          "name" : "org.apache.tomcat.util.modeler.modules.MbeansDescriptorsDigesterSource#createDigester",
                          "key" : "org.apache.tomcat.util.modeler.modules.MbeansDescriptorsDigesterSource.createDigester_",
                          "otherKey" : null,
                          "parent" : "org.apache.tomcat.util.modeler.modules.MbeansDescriptorsDigesterSource#execute",
                          "color" : "#FFF",
                          "statistic" : null,
                          "hasSourceChange" : false,
                          "state" : null,
                          "inVMDeviationPredecessor" : 0.0,
                          "inVMDeviation" : 0.0,
                          "ess" : 12,
                          "children" : [ {
                            "call" : "org.apache.tomcat.util.res.StringManager#getManager",
                            "kiekerPattern" : "public static final org.apache.tomcat.util.res.StringManager org.apache.tomcat.util.res.StringManager.getManager(java.lang.Class)",
                            "otherKiekerPattern" : null,
                            "module" : "",
                            "name" : "org.apache.tomcat.util.res.StringManager#getManager",
                            "key" : "org.apache.tomcat.util.res.StringManager.getManager_Class",
                            "otherKey" : null,
                            "parent" : "org.apache.tomcat.util.modeler.modules.MbeansDescriptorsDigesterSource#createDigester",
                            "color" : "#FFF",
                            "statistic" : null,
                            "hasSourceChange" : false,
                            "state" : null,
                            "inVMDeviationPredecessor" : 0.0,
                            "inVMDeviation" : 0.0,
                            "ess" : 13,
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
                              "ess" : 14,
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
                                "ess" : 15,
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
                                  "ess" : 16,
                                  "children" : [ ]
                                } ]
                              } ]
                            } ]
                          }, {
                            "call" : "org.apache.tomcat.util.digester.Digester$SystemPropertySource#<init>",
                            "kiekerPattern" : "private new org.apache.tomcat.util.digester.Digester$SystemPropertySource.<init>()",
                            "otherKiekerPattern" : null,
                            "module" : "",
                            "name" : "org.apache.tomcat.util.digester.Digester$SystemPropertySource#<init>",
                            "key" : "org.apache.tomcat.util.digester.Digester$SystemPropertySource.<init>_",
                            "otherKey" : null,
                            "parent" : "org.apache.tomcat.util.modeler.modules.MbeansDescriptorsDigesterSource#createDigester",
                            "color" : "#FFF",
                            "statistic" : null,
                            "hasSourceChange" : false,
                            "state" : null,
                            "inVMDeviationPredecessor" : 0.0,
                            "inVMDeviation" : 0.0,
                            "ess" : 13,
                            "children" : [ ]
                          }, {
                            "call" : "org.apache.tomcat.util.digester.ArrayStack#<init>",
                            "kiekerPattern" : "public new org.apache.tomcat.util.digester.ArrayStack.<init>()",
                            "otherKiekerPattern" : null,
                            "module" : "",
                            "name" : "org.apache.tomcat.util.digester.ArrayStack#<init>",
                            "key" : "org.apache.tomcat.util.digester.ArrayStack.<init>_",
                            "otherKey" : null,
                            "parent" : "org.apache.tomcat.util.modeler.modules.MbeansDescriptorsDigesterSource#createDigester",
                            "color" : "#FFF",
                            "statistic" : null,
                            "hasSourceChange" : false,
                            "state" : null,
                            "inVMDeviationPredecessor" : 0.0,
                            "inVMDeviation" : 0.0,
                            "ess" : 13,
                            "children" : [ ]
                          }, {
                            "call" : "org.apache.tomcat.util.digester.ArrayStack#<init>",
                            "kiekerPattern" : "public new org.apache.tomcat.util.digester.ArrayStack.<init>(int)",
                            "otherKiekerPattern" : null,
                            "module" : "",
                            "name" : "org.apache.tomcat.util.digester.ArrayStack#<init>",
                            "key" : "org.apache.tomcat.util.digester.ArrayStack.<init>_int",
                            "otherKey" : null,
                            "parent" : "org.apache.tomcat.util.modeler.modules.MbeansDescriptorsDigesterSource#createDigester",
                            "color" : "#FFF",
                            "statistic" : null,
                            "hasSourceChange" : false,
                            "state" : null,
                            "inVMDeviationPredecessor" : 0.0,
                            "inVMDeviation" : 0.0,
                            "ess" : 13,
                            "children" : [ ]
                          }, {
                            "call" : "org.apache.juli.logging.LogFactory#getLog",
                            "kiekerPattern" : "public static org.apache.juli.logging.Log org.apache.juli.logging.LogFactory.getLog(java.lang.Class)",
                            "otherKiekerPattern" : null,
                            "module" : "",
                            "name" : "org.apache.juli.logging.LogFactory#getLog",
                            "key" : "org.apache.juli.logging.LogFactory.getLog_Class",
                            "otherKey" : null,
                            "parent" : "org.apache.tomcat.util.modeler.modules.MbeansDescriptorsDigesterSource#createDigester",
                            "color" : "#FFF",
                            "statistic" : null,
                            "hasSourceChange" : false,
                            "state" : null,
                            "inVMDeviationPredecessor" : 0.0,
                            "inVMDeviation" : 0.0,
                            "ess" : 13,
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
                              "ess" : 14,
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
                              "ess" : 14,
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
                                "ess" : 15,
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
                                  "ess" : 16,
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
                                    "ess" : 17,
                                    "children" : [ ]
                                  } ]
                                } ]
                              } ]
                            } ]
                          }, {
                            "call" : "org.apache.juli.logging.LogFactory#getLog",
                            "kiekerPattern" : "public static org.apache.juli.logging.Log org.apache.juli.logging.LogFactory.getLog(java.lang.String)",
                            "otherKiekerPattern" : null,
                            "module" : "",
                            "name" : "org.apache.juli.logging.LogFactory#getLog",
                            "key" : "org.apache.juli.logging.LogFactory.getLog_String",
                            "otherKey" : null,
                            "parent" : "org.apache.tomcat.util.modeler.modules.MbeansDescriptorsDigesterSource#createDigester",
                            "color" : "#FFF",
                            "statistic" : null,
                            "hasSourceChange" : false,
                            "state" : null,
                            "inVMDeviationPredecessor" : 0.0,
                            "inVMDeviation" : 0.0,
                            "ess" : 13,
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
                              "ess" : 14,
                              "children" : [ ]
                            }, {
                              "call" : "org.apache.juli.logging.LogFactory#getInstance",
                              "kiekerPattern" : "public org.apache.juli.logging.Log org.apache.juli.logging.LogFactory.getInstance(java.lang.String)",
                              "otherKiekerPattern" : null,
                              "module" : "",
                              "name" : "org.apache.juli.logging.LogFactory#getInstance",
                              "key" : "org.apache.juli.logging.LogFactory.getInstance_String",
                              "otherKey" : null,
                              "parent" : "org.apache.juli.logging.LogFactory#getLog",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
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
                                "ess" : 15,
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
                                  "ess" : 16,
                                  "children" : [ ]
                                } ]
                              } ]
                            } ]
                          }, {
                            "call" : "org.apache.tomcat.util.digester.Digester#<init>",
                            "kiekerPattern" : "public new org.apache.tomcat.util.digester.Digester.<init>()",
                            "otherKiekerPattern" : null,
                            "module" : "",
                            "name" : "org.apache.tomcat.util.digester.Digester#<init>",
                            "key" : "org.apache.tomcat.util.digester.Digester.<init>_",
                            "otherKey" : null,
                            "parent" : "org.apache.tomcat.util.modeler.modules.MbeansDescriptorsDigesterSource#createDigester",
                            "color" : "#FFF",
                            "statistic" : null,
                            "hasSourceChange" : false,
                            "state" : null,
                            "inVMDeviationPredecessor" : 0.0,
                            "inVMDeviation" : 0.0,
                            "ess" : 13,
                            "children" : [ ]
                          }, {
                            "call" : "org.apache.tomcat.util.digester.Digester#setNamespaceAware",
                            "kiekerPattern" : "public void org.apache.tomcat.util.digester.Digester.setNamespaceAware(boolean)",
                            "otherKiekerPattern" : null,
                            "module" : "",
                            "name" : "org.apache.tomcat.util.digester.Digester#setNamespaceAware",
                            "key" : "org.apache.tomcat.util.digester.Digester.setNamespaceAware_boolean",
                            "otherKey" : null,
                            "parent" : "org.apache.tomcat.util.modeler.modules.MbeansDescriptorsDigesterSource#createDigester",
                            "color" : "#FFF",
                            "statistic" : null,
                            "hasSourceChange" : false,
                            "state" : null,
                            "inVMDeviationPredecessor" : 0.0,
                            "inVMDeviation" : 0.0,
                            "ess" : 13,
                            "children" : [ ]
                          }, {
                            "call" : "org.apache.tomcat.util.digester.Digester#setValidating",
                            "kiekerPattern" : "public void org.apache.tomcat.util.digester.Digester.setValidating(boolean)",
                            "otherKiekerPattern" : null,
                            "module" : "",
                            "name" : "org.apache.tomcat.util.digester.Digester#setValidating",
                            "key" : "org.apache.tomcat.util.digester.Digester.setValidating_boolean",
                            "otherKey" : null,
                            "parent" : "org.apache.tomcat.util.modeler.modules.MbeansDescriptorsDigesterSource#createDigester",
                            "color" : "#FFF",
                            "statistic" : null,
                            "hasSourceChange" : false,
                            "state" : null,
                            "inVMDeviationPredecessor" : 0.0,
                            "inVMDeviation" : 0.0,
                            "ess" : 13,
                            "children" : [ ]
                          }, {
                            "call" : "org.apache.tomcat.util.modeler.Registry#getRegistry",
                            "kiekerPattern" : "public static synchronized org.apache.tomcat.util.modeler.Registry org.apache.tomcat.util.modeler.Registry.getRegistry(java.lang.Object,java.lang.Object)",
                            "otherKiekerPattern" : null,
                            "module" : "",
                            "name" : "org.apache.tomcat.util.modeler.Registry#getRegistry",
                            "key" : "org.apache.tomcat.util.modeler.Registry.getRegistry_Object_Object",
                            "otherKey" : null,
                            "parent" : "org.apache.tomcat.util.modeler.modules.MbeansDescriptorsDigesterSource#createDigester",
                            "color" : "#FFF",
                            "statistic" : null,
                            "hasSourceChange" : false,
                            "state" : null,
                            "inVMDeviationPredecessor" : 0.0,
                            "inVMDeviation" : 0.0,
                            "ess" : 13,
                            "children" : [ ]
                          }, {
                            "call" : "org.apache.tomcat.util.digester.Digester#register",
                            "kiekerPattern" : "public void org.apache.tomcat.util.digester.Digester.register(java.lang.String,java.lang.String)",
                            "otherKiekerPattern" : null,
                            "module" : "",
                            "name" : "org.apache.tomcat.util.digester.Digester#register",
                            "key" : "org.apache.tomcat.util.digester.Digester.register_String_String",
                            "otherKey" : null,
                            "parent" : "org.apache.tomcat.util.modeler.modules.MbeansDescriptorsDigesterSource#createDigester",
                            "color" : "#FFF",
                            "statistic" : null,
                            "hasSourceChange" : false,
                            "state" : null,
                            "inVMDeviationPredecessor" : 0.0,
                            "inVMDeviation" : 0.0,
                            "ess" : 13,
                            "children" : [ {
                              "call" : "org.apache.juli.logging.DirectJDKLog#isDebugEnabled",
                              "kiekerPattern" : "public final boolean org.apache.juli.logging.DirectJDKLog.isDebugEnabled()",
                              "otherKiekerPattern" : null,
                              "module" : "",
                              "name" : "org.apache.juli.logging.DirectJDKLog#isDebugEnabled",
                              "key" : "org.apache.juli.logging.DirectJDKLog.isDebugEnabled_",
                              "otherKey" : null,
                              "parent" : "org.apache.tomcat.util.digester.Digester#register",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ ]
                            } ]
                          }, {
                            "call" : "org.apache.tomcat.util.digester.Digester#addObjectCreate",
                            "kiekerPattern" : "public void org.apache.tomcat.util.digester.Digester.addObjectCreate(java.lang.String,java.lang.String)",
                            "otherKiekerPattern" : null,
                            "module" : "",
                            "name" : "org.apache.tomcat.util.digester.Digester#addObjectCreate",
                            "key" : "org.apache.tomcat.util.digester.Digester.addObjectCreate_String_String",
                            "otherKey" : null,
                            "parent" : "org.apache.tomcat.util.modeler.modules.MbeansDescriptorsDigesterSource#createDigester",
                            "color" : "#FFF",
                            "statistic" : null,
                            "hasSourceChange" : false,
                            "state" : null,
                            "inVMDeviationPredecessor" : 0.0,
                            "inVMDeviation" : 0.0,
                            "ess" : 13,
                            "children" : [ {
                              "call" : "org.apache.tomcat.util.res.StringManager#getManager",
                              "kiekerPattern" : "public static final org.apache.tomcat.util.res.StringManager org.apache.tomcat.util.res.StringManager.getManager(java.lang.Class)",
                              "otherKiekerPattern" : null,
                              "module" : "",
                              "name" : "org.apache.tomcat.util.res.StringManager#getManager",
                              "key" : "org.apache.tomcat.util.res.StringManager.getManager_Class",
                              "otherKey" : null,
                              "parent" : "org.apache.tomcat.util.digester.Digester#addObjectCreate",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
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
                                "ess" : 15,
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
                                  "ess" : 16,
                                  "children" : [ ]
                                } ]
                              } ]
                            }, {
                              "call" : "org.apache.tomcat.util.digester.Rule#<init>",
                              "kiekerPattern" : "public new org.apache.tomcat.util.digester.Rule.<init>()",
                              "otherKiekerPattern" : null,
                              "module" : "",
                              "name" : "org.apache.tomcat.util.digester.Rule#<init>",
                              "key" : "org.apache.tomcat.util.digester.Rule.<init>_",
                              "otherKey" : null,
                              "parent" : "org.apache.tomcat.util.digester.Digester#addObjectCreate",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ ]
                            }, {
                              "call" : "org.apache.tomcat.util.digester.ObjectCreateRule#<init>",
                              "kiekerPattern" : "public new org.apache.tomcat.util.digester.ObjectCreateRule.<init>(java.lang.String,java.lang.String)",
                              "otherKiekerPattern" : null,
                              "module" : "",
                              "name" : "org.apache.tomcat.util.digester.ObjectCreateRule#<init>",
                              "key" : "org.apache.tomcat.util.digester.ObjectCreateRule.<init>_String_String",
                              "otherKey" : null,
                              "parent" : "org.apache.tomcat.util.digester.Digester#addObjectCreate",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ ]
                            }, {
                              "call" : "org.apache.tomcat.util.digester.ObjectCreateRule#<init>",
                              "kiekerPattern" : "public new org.apache.tomcat.util.digester.ObjectCreateRule.<init>(java.lang.String)",
                              "otherKiekerPattern" : null,
                              "module" : "",
                              "name" : "org.apache.tomcat.util.digester.ObjectCreateRule#<init>",
                              "key" : "org.apache.tomcat.util.digester.ObjectCreateRule.<init>_String",
                              "otherKey" : null,
                              "parent" : "org.apache.tomcat.util.digester.Digester#addObjectCreate",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ ]
                            }, {
                              "call" : "org.apache.tomcat.util.digester.Digester#addRule",
                              "kiekerPattern" : "public void org.apache.tomcat.util.digester.Digester.addRule(java.lang.String,org.apache.tomcat.util.digester.Rule)",
                              "otherKiekerPattern" : null,
                              "module" : "",
                              "name" : "org.apache.tomcat.util.digester.Digester#addRule",
                              "key" : "org.apache.tomcat.util.digester.Digester.addRule_String_Rule",
                              "otherKey" : null,
                              "parent" : "org.apache.tomcat.util.digester.Digester#addObjectCreate",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ {
                                "call" : "org.apache.tomcat.util.digester.Rule#setDigester",
                                "kiekerPattern" : "public void org.apache.tomcat.util.digester.Rule.setDigester(org.apache.tomcat.util.digester.Digester)",
                                "otherKiekerPattern" : null,
                                "module" : "",
                                "name" : "org.apache.tomcat.util.digester.Rule#setDigester",
                                "key" : "org.apache.tomcat.util.digester.Rule.setDigester_Digester",
                                "otherKey" : null,
                                "parent" : "org.apache.tomcat.util.digester.Digester#addRule",
                                "color" : "#FFF",
                                "statistic" : null,
                                "hasSourceChange" : false,
                                "state" : null,
                                "inVMDeviationPredecessor" : 0.0,
                                "inVMDeviation" : 0.0,
                                "ess" : 15,
                                "children" : [ ]
                              }, {
                                "call" : "org.apache.tomcat.util.digester.Digester#getRules",
                                "kiekerPattern" : "public org.apache.tomcat.util.digester.Rules org.apache.tomcat.util.digester.Digester.getRules()",
                                "otherKiekerPattern" : null,
                                "module" : "",
                                "name" : "org.apache.tomcat.util.digester.Digester#getRules",
                                "key" : "org.apache.tomcat.util.digester.Digester.getRules_",
                                "otherKey" : null,
                                "parent" : "org.apache.tomcat.util.digester.Digester#addRule",
                                "color" : "#FFF",
                                "statistic" : null,
                                "hasSourceChange" : false,
                                "state" : null,
                                "inVMDeviationPredecessor" : 0.0,
                                "inVMDeviation" : 0.0,
                                "ess" : 15,
                                "children" : [ {
                                  "call" : "org.apache.tomcat.util.digester.RulesBase#<init>",
                                  "kiekerPattern" : "public new org.apache.tomcat.util.digester.RulesBase.<init>()",
                                  "otherKiekerPattern" : null,
                                  "module" : "",
                                  "name" : "org.apache.tomcat.util.digester.RulesBase#<init>",
                                  "key" : "org.apache.tomcat.util.digester.RulesBase.<init>_",
                                  "otherKey" : null,
                                  "parent" : "org.apache.tomcat.util.digester.Digester#getRules",
                                  "color" : "#FFF",
                                  "statistic" : null,
                                  "hasSourceChange" : false,
                                  "state" : null,
                                  "inVMDeviationPredecessor" : 0.0,
                                  "inVMDeviation" : 0.0,
                                  "ess" : 16,
                                  "children" : [ ]
                                }, {
                                  "call" : "org.apache.tomcat.util.digester.RulesBase#setDigester",
                                  "kiekerPattern" : "public void org.apache.tomcat.util.digester.RulesBase.setDigester(org.apache.tomcat.util.digester.Digester)",
                                  "otherKiekerPattern" : null,
                                  "module" : "",
                                  "name" : "org.apache.tomcat.util.digester.RulesBase#setDigester",
                                  "key" : "org.apache.tomcat.util.digester.RulesBase.setDigester_Digester",
                                  "otherKey" : null,
                                  "parent" : "org.apache.tomcat.util.digester.Digester#getRules",
                                  "color" : "#FFF",
                                  "statistic" : null,
                                  "hasSourceChange" : false,
                                  "state" : null,
                                  "inVMDeviationPredecessor" : 0.0,
                                  "inVMDeviation" : 0.0,
                                  "ess" : 16,
                                  "children" : [ ]
                                } ]
                              }, {
                                "call" : "org.apache.tomcat.util.digester.RulesBase#add",
                                "kiekerPattern" : "public void org.apache.tomcat.util.digester.RulesBase.add(java.lang.String,org.apache.tomcat.util.digester.Rule)",
                                "otherKiekerPattern" : null,
                                "module" : "",
                                "name" : "org.apache.tomcat.util.digester.RulesBase#add",
                                "key" : "org.apache.tomcat.util.digester.RulesBase.add_String_Rule",
                                "otherKey" : null,
                                "parent" : "org.apache.tomcat.util.digester.Digester#addRule",
                                "color" : "#FFF",
                                "statistic" : null,
                                "hasSourceChange" : false,
                                "state" : null,
                                "inVMDeviationPredecessor" : 0.0,
                                "inVMDeviation" : 0.0,
                                "ess" : 15,
                                "children" : [ {
                                  "call" : "org.apache.tomcat.util.digester.Rule#setDigester",
                                  "kiekerPattern" : "public void org.apache.tomcat.util.digester.Rule.setDigester(org.apache.tomcat.util.digester.Digester)",
                                  "otherKiekerPattern" : null,
                                  "module" : "",
                                  "name" : "org.apache.tomcat.util.digester.Rule#setDigester",
                                  "key" : "org.apache.tomcat.util.digester.Rule.setDigester_Digester",
                                  "otherKey" : null,
                                  "parent" : "org.apache.tomcat.util.digester.RulesBase#add",
                                  "color" : "#FFF",
                                  "statistic" : null,
                                  "hasSourceChange" : false,
                                  "state" : null,
                                  "inVMDeviationPredecessor" : 0.0,
                                  "inVMDeviation" : 0.0,
                                  "ess" : 16,
                                  "children" : [ ]
                                } ]
                              } ]
                            } ]
                          }, {
                            "call" : "org.apache.tomcat.util.digester.Digester#addSetProperties",
                            "kiekerPattern" : "public void org.apache.tomcat.util.digester.Digester.addSetProperties(java.lang.String)",
                            "otherKiekerPattern" : null,
                            "module" : "",
                            "name" : "org.apache.tomcat.util.digester.Digester#addSetProperties",
                            "key" : "org.apache.tomcat.util.digester.Digester.addSetProperties_String",
                            "otherKey" : null,
                            "parent" : "org.apache.tomcat.util.modeler.modules.MbeansDescriptorsDigesterSource#createDigester",
                            "color" : "#FFF",
                            "statistic" : null,
                            "hasSourceChange" : false,
                            "state" : null,
                            "inVMDeviationPredecessor" : 0.0,
                            "inVMDeviation" : 0.0,
                            "ess" : 13,
                            "children" : [ {
                              "call" : "org.apache.tomcat.util.digester.Rule#<init>",
                              "kiekerPattern" : "public new org.apache.tomcat.util.digester.Rule.<init>()",
                              "otherKiekerPattern" : null,
                              "module" : "",
                              "name" : "org.apache.tomcat.util.digester.Rule#<init>",
                              "key" : "org.apache.tomcat.util.digester.Rule.<init>_",
                              "otherKey" : null,
                              "parent" : "org.apache.tomcat.util.digester.Digester#addSetProperties",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ ]
                            }, {
                              "call" : "org.apache.tomcat.util.digester.SetPropertiesRule#<init>",
                              "kiekerPattern" : "public new org.apache.tomcat.util.digester.SetPropertiesRule.<init>()",
                              "otherKiekerPattern" : null,
                              "module" : "",
                              "name" : "org.apache.tomcat.util.digester.SetPropertiesRule#<init>",
                              "key" : "org.apache.tomcat.util.digester.SetPropertiesRule.<init>_",
                              "otherKey" : null,
                              "parent" : "org.apache.tomcat.util.digester.Digester#addSetProperties",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ ]
                            }, {
                              "call" : "org.apache.tomcat.util.digester.Digester#addRule",
                              "kiekerPattern" : "public void org.apache.tomcat.util.digester.Digester.addRule(java.lang.String,org.apache.tomcat.util.digester.Rule)",
                              "otherKiekerPattern" : null,
                              "module" : "",
                              "name" : "org.apache.tomcat.util.digester.Digester#addRule",
                              "key" : "org.apache.tomcat.util.digester.Digester.addRule_String_Rule",
                              "otherKey" : null,
                              "parent" : "org.apache.tomcat.util.digester.Digester#addSetProperties",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ {
                                "call" : "org.apache.tomcat.util.digester.Rule#setDigester",
                                "kiekerPattern" : "public void org.apache.tomcat.util.digester.Rule.setDigester(org.apache.tomcat.util.digester.Digester)",
                                "otherKiekerPattern" : null,
                                "module" : "",
                                "name" : "org.apache.tomcat.util.digester.Rule#setDigester",
                                "key" : "org.apache.tomcat.util.digester.Rule.setDigester_Digester",
                                "otherKey" : null,
                                "parent" : "org.apache.tomcat.util.digester.Digester#addRule",
                                "color" : "#FFF",
                                "statistic" : null,
                                "hasSourceChange" : false,
                                "state" : null,
                                "inVMDeviationPredecessor" : 0.0,
                                "inVMDeviation" : 0.0,
                                "ess" : 15,
                                "children" : [ ]
                              }, {
                                "call" : "org.apache.tomcat.util.digester.Digester#getRules",
                                "kiekerPattern" : "public org.apache.tomcat.util.digester.Rules org.apache.tomcat.util.digester.Digester.getRules()",
                                "otherKiekerPattern" : null,
                                "module" : "",
                                "name" : "org.apache.tomcat.util.digester.Digester#getRules",
                                "key" : "org.apache.tomcat.util.digester.Digester.getRules_",
                                "otherKey" : null,
                                "parent" : "org.apache.tomcat.util.digester.Digester#addRule",
                                "color" : "#FFF",
                                "statistic" : null,
                                "hasSourceChange" : false,
                                "state" : null,
                                "inVMDeviationPredecessor" : 0.0,
                                "inVMDeviation" : 0.0,
                                "ess" : 15,
                                "children" : [ ]
                              }, {
                                "call" : "org.apache.tomcat.util.digester.RulesBase#add",
                                "kiekerPattern" : "public void org.apache.tomcat.util.digester.RulesBase.add(java.lang.String,org.apache.tomcat.util.digester.Rule)",
                                "otherKiekerPattern" : null,
                                "module" : "",
                                "name" : "org.apache.tomcat.util.digester.RulesBase#add",
                                "key" : "org.apache.tomcat.util.digester.RulesBase.add_String_Rule",
                                "otherKey" : null,
                                "parent" : "org.apache.tomcat.util.digester.Digester#addRule",
                                "color" : "#FFF",
                                "statistic" : null,
                                "hasSourceChange" : false,
                                "state" : null,
                                "inVMDeviationPredecessor" : 0.0,
                                "inVMDeviation" : 0.0,
                                "ess" : 15,
                                "children" : [ {
                                  "call" : "org.apache.tomcat.util.digester.Rule#setDigester",
                                  "kiekerPattern" : "public void org.apache.tomcat.util.digester.Rule.setDigester(org.apache.tomcat.util.digester.Digester)",
                                  "otherKiekerPattern" : null,
                                  "module" : "",
                                  "name" : "org.apache.tomcat.util.digester.Rule#setDigester",
                                  "key" : "org.apache.tomcat.util.digester.Rule.setDigester_Digester",
                                  "otherKey" : null,
                                  "parent" : "org.apache.tomcat.util.digester.RulesBase#add",
                                  "color" : "#FFF",
                                  "statistic" : null,
                                  "hasSourceChange" : false,
                                  "state" : null,
                                  "inVMDeviationPredecessor" : 0.0,
                                  "inVMDeviation" : 0.0,
                                  "ess" : 16,
                                  "children" : [ ]
                                } ]
                              } ]
                            } ]
                          }, {
                            "call" : "org.apache.tomcat.util.digester.Digester#addSetNext",
                            "kiekerPattern" : "public void org.apache.tomcat.util.digester.Digester.addSetNext(java.lang.String,java.lang.String,java.lang.String)",
                            "otherKiekerPattern" : null,
                            "module" : "",
                            "name" : "org.apache.tomcat.util.digester.Digester#addSetNext",
                            "key" : "org.apache.tomcat.util.digester.Digester.addSetNext_String_String_String",
                            "otherKey" : null,
                            "parent" : "org.apache.tomcat.util.modeler.modules.MbeansDescriptorsDigesterSource#createDigester",
                            "color" : "#FFF",
                            "statistic" : null,
                            "hasSourceChange" : false,
                            "state" : null,
                            "inVMDeviationPredecessor" : 0.0,
                            "inVMDeviation" : 0.0,
                            "ess" : 13,
                            "children" : [ {
                              "call" : "org.apache.tomcat.util.digester.Rule#<init>",
                              "kiekerPattern" : "public new org.apache.tomcat.util.digester.Rule.<init>()",
                              "otherKiekerPattern" : null,
                              "module" : "",
                              "name" : "org.apache.tomcat.util.digester.Rule#<init>",
                              "key" : "org.apache.tomcat.util.digester.Rule.<init>_",
                              "otherKey" : null,
                              "parent" : "org.apache.tomcat.util.digester.Digester#addSetNext",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ ]
                            }, {
                              "call" : "org.apache.tomcat.util.digester.SetNextRule#<init>",
                              "kiekerPattern" : "public new org.apache.tomcat.util.digester.SetNextRule.<init>(java.lang.String,java.lang.String)",
                              "otherKiekerPattern" : null,
                              "module" : "",
                              "name" : "org.apache.tomcat.util.digester.SetNextRule#<init>",
                              "key" : "org.apache.tomcat.util.digester.SetNextRule.<init>_String_String",
                              "otherKey" : null,
                              "parent" : "org.apache.tomcat.util.digester.Digester#addSetNext",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ ]
                            }, {
                              "call" : "org.apache.tomcat.util.digester.Digester#addRule",
                              "kiekerPattern" : "public void org.apache.tomcat.util.digester.Digester.addRule(java.lang.String,org.apache.tomcat.util.digester.Rule)",
                              "otherKiekerPattern" : null,
                              "module" : "",
                              "name" : "org.apache.tomcat.util.digester.Digester#addRule",
                              "key" : "org.apache.tomcat.util.digester.Digester.addRule_String_Rule",
                              "otherKey" : null,
                              "parent" : "org.apache.tomcat.util.digester.Digester#addSetNext",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ {
                                "call" : "org.apache.tomcat.util.digester.Rule#setDigester",
                                "kiekerPattern" : "public void org.apache.tomcat.util.digester.Rule.setDigester(org.apache.tomcat.util.digester.Digester)",
                                "otherKiekerPattern" : null,
                                "module" : "",
                                "name" : "org.apache.tomcat.util.digester.Rule#setDigester",
                                "key" : "org.apache.tomcat.util.digester.Rule.setDigester_Digester",
                                "otherKey" : null,
                                "parent" : "org.apache.tomcat.util.digester.Digester#addRule",
                                "color" : "#FFF",
                                "statistic" : null,
                                "hasSourceChange" : false,
                                "state" : null,
                                "inVMDeviationPredecessor" : 0.0,
                                "inVMDeviation" : 0.0,
                                "ess" : 15,
                                "children" : [ ]
                              }, {
                                "call" : "org.apache.tomcat.util.digester.Digester#getRules",
                                "kiekerPattern" : "public org.apache.tomcat.util.digester.Rules org.apache.tomcat.util.digester.Digester.getRules()",
                                "otherKiekerPattern" : null,
                                "module" : "",
                                "name" : "org.apache.tomcat.util.digester.Digester#getRules",
                                "key" : "org.apache.tomcat.util.digester.Digester.getRules_",
                                "otherKey" : null,
                                "parent" : "org.apache.tomcat.util.digester.Digester#addRule",
                                "color" : "#FFF",
                                "statistic" : null,
                                "hasSourceChange" : false,
                                "state" : null,
                                "inVMDeviationPredecessor" : 0.0,
                                "inVMDeviation" : 0.0,
                                "ess" : 15,
                                "children" : [ ]
                              }, {
                                "call" : "org.apache.tomcat.util.digester.RulesBase#add",
                                "kiekerPattern" : "public void org.apache.tomcat.util.digester.RulesBase.add(java.lang.String,org.apache.tomcat.util.digester.Rule)",
                                "otherKiekerPattern" : null,
                                "module" : "",
                                "name" : "org.apache.tomcat.util.digester.RulesBase#add",
                                "key" : "org.apache.tomcat.util.digester.RulesBase.add_String_Rule",
                                "otherKey" : null,
                                "parent" : "org.apache.tomcat.util.digester.Digester#addRule",
                                "color" : "#FFF",
                                "statistic" : null,
                                "hasSourceChange" : false,
                                "state" : null,
                                "inVMDeviationPredecessor" : 0.0,
                                "inVMDeviation" : 0.0,
                                "ess" : 15,
                                "children" : [ {
                                  "call" : "org.apache.tomcat.util.digester.Rule#setDigester",
                                  "kiekerPattern" : "public void org.apache.tomcat.util.digester.Rule.setDigester(org.apache.tomcat.util.digester.Digester)",
                                  "otherKiekerPattern" : null,
                                  "module" : "",
                                  "name" : "org.apache.tomcat.util.digester.Rule#setDigester",
                                  "key" : "org.apache.tomcat.util.digester.Rule.setDigester_Digester",
                                  "otherKey" : null,
                                  "parent" : "org.apache.tomcat.util.digester.RulesBase#add",
                                  "color" : "#FFF",
                                  "statistic" : null,
                                  "hasSourceChange" : false,
                                  "state" : null,
                                  "inVMDeviationPredecessor" : 0.0,
                                  "inVMDeviation" : 0.0,
                                  "ess" : 16,
                                  "children" : [ ]
                                } ]
                              } ]
                            } ]
                          }, {
                            "call" : "org.apache.tomcat.util.digester.Digester#addCallMethod",
                            "kiekerPattern" : "public void org.apache.tomcat.util.digester.Digester.addCallMethod(java.lang.String,java.lang.String,int)",
                            "otherKiekerPattern" : null,
                            "module" : "",
                            "name" : "org.apache.tomcat.util.digester.Digester#addCallMethod",
                            "key" : "org.apache.tomcat.util.digester.Digester.addCallMethod_String_String_int",
                            "otherKey" : null,
                            "parent" : "org.apache.tomcat.util.modeler.modules.MbeansDescriptorsDigesterSource#createDigester",
                            "color" : "#FFF",
                            "statistic" : null,
                            "hasSourceChange" : false,
                            "state" : null,
                            "inVMDeviationPredecessor" : 0.0,
                            "inVMDeviation" : 0.0,
                            "ess" : 13,
                            "children" : [ {
                              "call" : "org.apache.tomcat.util.digester.Rule#<init>",
                              "kiekerPattern" : "public new org.apache.tomcat.util.digester.Rule.<init>()",
                              "otherKiekerPattern" : null,
                              "module" : "",
                              "name" : "org.apache.tomcat.util.digester.Rule#<init>",
                              "key" : "org.apache.tomcat.util.digester.Rule.<init>_",
                              "otherKey" : null,
                              "parent" : "org.apache.tomcat.util.digester.Digester#addCallMethod",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ ]
                            }, {
                              "call" : "org.apache.tomcat.util.digester.CallMethodRule#<init>",
                              "kiekerPattern" : "public new org.apache.tomcat.util.digester.CallMethodRule.<init>(int,java.lang.String,int)",
                              "otherKiekerPattern" : null,
                              "module" : "",
                              "name" : "org.apache.tomcat.util.digester.CallMethodRule#<init>",
                              "key" : "org.apache.tomcat.util.digester.CallMethodRule.<init>_int_String_int",
                              "otherKey" : null,
                              "parent" : "org.apache.tomcat.util.digester.Digester#addCallMethod",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ ]
                            }, {
                              "call" : "org.apache.tomcat.util.digester.CallMethodRule#<init>",
                              "kiekerPattern" : "public new org.apache.tomcat.util.digester.CallMethodRule.<init>(java.lang.String,int)",
                              "otherKiekerPattern" : null,
                              "module" : "",
                              "name" : "org.apache.tomcat.util.digester.CallMethodRule#<init>",
                              "key" : "org.apache.tomcat.util.digester.CallMethodRule.<init>_String_int",
                              "otherKey" : null,
                              "parent" : "org.apache.tomcat.util.digester.Digester#addCallMethod",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ ]
                            }, {
                              "call" : "org.apache.tomcat.util.digester.Digester#addRule",
                              "kiekerPattern" : "public void org.apache.tomcat.util.digester.Digester.addRule(java.lang.String,org.apache.tomcat.util.digester.Rule)",
                              "otherKiekerPattern" : null,
                              "module" : "",
                              "name" : "org.apache.tomcat.util.digester.Digester#addRule",
                              "key" : "org.apache.tomcat.util.digester.Digester.addRule_String_Rule",
                              "otherKey" : null,
                              "parent" : "org.apache.tomcat.util.digester.Digester#addCallMethod",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ {
                                "call" : "org.apache.tomcat.util.digester.Rule#setDigester",
                                "kiekerPattern" : "public void org.apache.tomcat.util.digester.Rule.setDigester(org.apache.tomcat.util.digester.Digester)",
                                "otherKiekerPattern" : null,
                                "module" : "",
                                "name" : "org.apache.tomcat.util.digester.Rule#setDigester",
                                "key" : "org.apache.tomcat.util.digester.Rule.setDigester_Digester",
                                "otherKey" : null,
                                "parent" : "org.apache.tomcat.util.digester.Digester#addRule",
                                "color" : "#FFF",
                                "statistic" : null,
                                "hasSourceChange" : false,
                                "state" : null,
                                "inVMDeviationPredecessor" : 0.0,
                                "inVMDeviation" : 0.0,
                                "ess" : 15,
                                "children" : [ ]
                              }, {
                                "call" : "org.apache.tomcat.util.digester.Digester#getRules",
                                "kiekerPattern" : "public org.apache.tomcat.util.digester.Rules org.apache.tomcat.util.digester.Digester.getRules()",
                                "otherKiekerPattern" : null,
                                "module" : "",
                                "name" : "org.apache.tomcat.util.digester.Digester#getRules",
                                "key" : "org.apache.tomcat.util.digester.Digester.getRules_",
                                "otherKey" : null,
                                "parent" : "org.apache.tomcat.util.digester.Digester#addRule",
                                "color" : "#FFF",
                                "statistic" : null,
                                "hasSourceChange" : false,
                                "state" : null,
                                "inVMDeviationPredecessor" : 0.0,
                                "inVMDeviation" : 0.0,
                                "ess" : 15,
                                "children" : [ ]
                              }, {
                                "call" : "org.apache.tomcat.util.digester.RulesBase#add",
                                "kiekerPattern" : "public void org.apache.tomcat.util.digester.RulesBase.add(java.lang.String,org.apache.tomcat.util.digester.Rule)",
                                "otherKiekerPattern" : null,
                                "module" : "",
                                "name" : "org.apache.tomcat.util.digester.RulesBase#add",
                                "key" : "org.apache.tomcat.util.digester.RulesBase.add_String_Rule",
                                "otherKey" : null,
                                "parent" : "org.apache.tomcat.util.digester.Digester#addRule",
                                "color" : "#FFF",
                                "statistic" : null,
                                "hasSourceChange" : false,
                                "state" : null,
                                "inVMDeviationPredecessor" : 0.0,
                                "inVMDeviation" : 0.0,
                                "ess" : 15,
                                "children" : [ {
                                  "call" : "org.apache.tomcat.util.digester.Rule#setDigester",
                                  "kiekerPattern" : "public void org.apache.tomcat.util.digester.Rule.setDigester(org.apache.tomcat.util.digester.Digester)",
                                  "otherKiekerPattern" : null,
                                  "module" : "",
                                  "name" : "org.apache.tomcat.util.digester.Rule#setDigester",
                                  "key" : "org.apache.tomcat.util.digester.Rule.setDigester_Digester",
                                  "otherKey" : null,
                                  "parent" : "org.apache.tomcat.util.digester.RulesBase#add",
                                  "color" : "#FFF",
                                  "statistic" : null,
                                  "hasSourceChange" : false,
                                  "state" : null,
                                  "inVMDeviationPredecessor" : 0.0,
                                  "inVMDeviation" : 0.0,
                                  "ess" : 16,
                                  "children" : [ ]
                                } ]
                              } ]
                            } ]
                          } ]
                        }, {
                          "call" : "org.apache.tomcat.util.digester.Digester#push",
                          "kiekerPattern" : "public void org.apache.tomcat.util.digester.Digester.push(java.lang.Object)",
                          "otherKiekerPattern" : null,
                          "module" : "",
                          "name" : "org.apache.tomcat.util.digester.Digester#push",
                          "key" : "org.apache.tomcat.util.digester.Digester.push_Object",
                          "otherKey" : null,
                          "parent" : "org.apache.tomcat.util.modeler.modules.MbeansDescriptorsDigesterSource#execute",
                          "color" : "#FFF",
                          "statistic" : null,
                          "hasSourceChange" : false,
                          "state" : null,
                          "inVMDeviationPredecessor" : 0.0,
                          "inVMDeviation" : 0.0,
                          "ess" : 12,
                          "children" : [ {
                            "call" : "org.apache.tomcat.util.digester.ArrayStack#push",
                            "kiekerPattern" : "public org.apache.tomcat.util.digester.E org.apache.tomcat.util.digester.ArrayStack.push(org.apache.tomcat.util.digester.E)",
                            "otherKiekerPattern" : null,
                            "module" : "",
                            "name" : "org.apache.tomcat.util.digester.ArrayStack#push",
                            "key" : "org.apache.tomcat.util.digester.ArrayStack.push_E",
                            "otherKey" : null,
                            "parent" : "org.apache.tomcat.util.digester.Digester#push",
                            "color" : "#FFF",
                            "statistic" : null,
                            "hasSourceChange" : false,
                            "state" : null,
                            "inVMDeviationPredecessor" : 0.0,
                            "inVMDeviation" : 0.0,
                            "ess" : 13,
                            "children" : [ ]
                          } ]
                        }, {
                          "call" : "org.apache.tomcat.util.digester.Digester#parse",
                          "kiekerPattern" : "public java.lang.Object org.apache.tomcat.util.digester.Digester.parse(java.io.InputStream)",
                          "otherKiekerPattern" : null,
                          "module" : "",
                          "name" : "org.apache.tomcat.util.digester.Digester#parse",
                          "key" : "org.apache.tomcat.util.digester.Digester.parse_InputStream",
                          "otherKey" : null,
                          "parent" : "org.apache.tomcat.util.modeler.modules.MbeansDescriptorsDigesterSource#execute",
                          "color" : "#FFF",
                          "statistic" : null,
                          "hasSourceChange" : false,
                          "state" : null,
                          "inVMDeviationPredecessor" : 0.0,
                          "inVMDeviation" : 0.0,
                          "ess" : 12,
                          "children" : [ {
                            "call" : "org.apache.tomcat.util.digester.Digester#configure",
                            "kiekerPattern" : "protected void org.apache.tomcat.util.digester.Digester.configure()",
                            "otherKiekerPattern" : null,
                            "module" : "",
                            "name" : "org.apache.tomcat.util.digester.Digester#configure",
                            "key" : "org.apache.tomcat.util.digester.Digester.configure_",
                            "otherKey" : null,
                            "parent" : "org.apache.tomcat.util.digester.Digester#parse",
                            "color" : "#FFF",
                            "statistic" : null,
                            "hasSourceChange" : false,
                            "state" : null,
                            "inVMDeviationPredecessor" : 0.0,
                            "inVMDeviation" : 0.0,
                            "ess" : 13,
                            "children" : [ {
                              "call" : "org.apache.juli.logging.LogFactory#getLog",
                              "kiekerPattern" : "public static org.apache.juli.logging.Log org.apache.juli.logging.LogFactory.getLog(java.lang.String)",
                              "otherKiekerPattern" : null,
                              "module" : "",
                              "name" : "org.apache.juli.logging.LogFactory#getLog",
                              "key" : "org.apache.juli.logging.LogFactory.getLog_String",
                              "otherKey" : null,
                              "parent" : "org.apache.tomcat.util.digester.Digester#configure",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
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
                                "ess" : 15,
                                "children" : [ ]
                              }, {
                                "call" : "org.apache.juli.logging.LogFactory#getInstance",
                                "kiekerPattern" : "public org.apache.juli.logging.Log org.apache.juli.logging.LogFactory.getInstance(java.lang.String)",
                                "otherKiekerPattern" : null,
                                "module" : "",
                                "name" : "org.apache.juli.logging.LogFactory#getInstance",
                                "key" : "org.apache.juli.logging.LogFactory.getInstance_String",
                                "otherKey" : null,
                                "parent" : "org.apache.juli.logging.LogFactory#getLog",
                                "color" : "#FFF",
                                "statistic" : null,
                                "hasSourceChange" : false,
                                "state" : null,
                                "inVMDeviationPredecessor" : 0.0,
                                "inVMDeviation" : 0.0,
                                "ess" : 15,
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
                                  "ess" : 16,
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
                                    "ess" : 17,
                                    "children" : [ ]
                                  } ]
                                } ]
                              } ]
                            } ]
                          }, {
                            "call" : "org.apache.tomcat.util.digester.Digester#getXMLReader",
                            "kiekerPattern" : "public org.xml.sax.XMLReader org.apache.tomcat.util.digester.Digester.getXMLReader()",
                            "otherKiekerPattern" : null,
                            "module" : "",
                            "name" : "org.apache.tomcat.util.digester.Digester#getXMLReader",
                            "key" : "org.apache.tomcat.util.digester.Digester.getXMLReader_",
                            "otherKey" : null,
                            "parent" : "org.apache.tomcat.util.digester.Digester#parse",
                            "color" : "#FFF",
                            "statistic" : null,
                            "hasSourceChange" : false,
                            "state" : null,
                            "inVMDeviationPredecessor" : 0.0,
                            "inVMDeviation" : 0.0,
                            "ess" : 13,
                            "children" : [ {
                              "call" : "org.apache.tomcat.util.digester.Digester#getParser",
                              "kiekerPattern" : "public javax.xml.parsers.SAXParser org.apache.tomcat.util.digester.Digester.getParser()",
                              "otherKiekerPattern" : null,
                              "module" : "",
                              "name" : "org.apache.tomcat.util.digester.Digester#getParser",
                              "key" : "org.apache.tomcat.util.digester.Digester.getParser_",
                              "otherKey" : null,
                              "parent" : "org.apache.tomcat.util.digester.Digester#getXMLReader",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ {
                                "call" : "org.apache.tomcat.util.digester.Digester#getFactory",
                                "kiekerPattern" : "public javax.xml.parsers.SAXParserFactory org.apache.tomcat.util.digester.Digester.getFactory()",
                                "otherKiekerPattern" : null,
                                "module" : "",
                                "name" : "org.apache.tomcat.util.digester.Digester#getFactory",
                                "key" : "org.apache.tomcat.util.digester.Digester.getFactory_",
                                "otherKey" : null,
                                "parent" : "org.apache.tomcat.util.digester.Digester#getParser",
                                "color" : "#FFF",
                                "statistic" : null,
                                "hasSourceChange" : false,
                                "state" : null,
                                "inVMDeviationPredecessor" : 0.0,
                                "inVMDeviation" : 0.0,
                                "ess" : 15,
                                "children" : [ ]
                              } ]
                            }, {
                              "call" : "org.apache.tomcat.util.digester.Digester#getEntityResolver",
                              "kiekerPattern" : "public org.xml.sax.EntityResolver org.apache.tomcat.util.digester.Digester.getEntityResolver()",
                              "otherKiekerPattern" : null,
                              "module" : "",
                              "name" : "org.apache.tomcat.util.digester.Digester#getEntityResolver",
                              "key" : "org.apache.tomcat.util.digester.Digester.getEntityResolver_",
                              "otherKey" : null,
                              "parent" : "org.apache.tomcat.util.digester.Digester#getXMLReader",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ ]
                            }, {
                              "call" : "org.apache.tomcat.util.digester.Digester$EntityResolverWrapper#<init>",
                              "kiekerPattern" : "public new org.apache.tomcat.util.digester.Digester$EntityResolverWrapper.<init>(org.xml.sax.EntityResolver,org.apache.tomcat.util.IntrospectionUtils.PropertySource[],java.lang.ClassLoader)",
                              "otherKiekerPattern" : null,
                              "module" : "",
                              "name" : "org.apache.tomcat.util.digester.Digester$EntityResolverWrapper#<init>",
                              "key" : "org.apache.tomcat.util.digester.Digester$EntityResolverWrapper.<init>_EntityResolver_PropertySource[]_ClassLoader",
                              "otherKey" : null,
                              "parent" : "org.apache.tomcat.util.digester.Digester#getXMLReader",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ ]
                            }, {
                              "call" : "org.apache.tomcat.util.digester.Digester$EntityResolver2Wrapper#<init>",
                              "kiekerPattern" : "public new org.apache.tomcat.util.digester.Digester$EntityResolver2Wrapper.<init>(org.xml.sax.ext.EntityResolver2,org.apache.tomcat.util.IntrospectionUtils.PropertySource[],java.lang.ClassLoader)",
                              "otherKiekerPattern" : null,
                              "module" : "",
                              "name" : "org.apache.tomcat.util.digester.Digester$EntityResolver2Wrapper#<init>",
                              "key" : "org.apache.tomcat.util.digester.Digester$EntityResolver2Wrapper.<init>_EntityResolver2_PropertySource[]_ClassLoader",
                              "otherKey" : null,
                              "parent" : "org.apache.tomcat.util.digester.Digester#getXMLReader",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ ]
                            } ]
                          }, {
                            "call" : "org.apache.tomcat.util.digester.Digester#setDocumentLocator",
                            "kiekerPattern" : "public void org.apache.tomcat.util.digester.Digester.setDocumentLocator(org.xml.sax.Locator)",
                            "otherKiekerPattern" : null,
                            "module" : "",
                            "name" : "org.apache.tomcat.util.digester.Digester#setDocumentLocator",
                            "key" : "org.apache.tomcat.util.digester.Digester.setDocumentLocator_Locator",
                            "otherKey" : null,
                            "parent" : "org.apache.tomcat.util.digester.Digester#parse",
                            "color" : "#FFF",
                            "statistic" : null,
                            "hasSourceChange" : false,
                            "state" : null,
                            "inVMDeviationPredecessor" : 0.0,
                            "inVMDeviation" : 0.0,
                            "ess" : 13,
                            "children" : [ {
                              "call" : "org.apache.juli.logging.DirectJDKLog#isDebugEnabled",
                              "kiekerPattern" : "public final boolean org.apache.juli.logging.DirectJDKLog.isDebugEnabled()",
                              "otherKiekerPattern" : null,
                              "module" : "",
                              "name" : "org.apache.juli.logging.DirectJDKLog#isDebugEnabled",
                              "key" : "org.apache.juli.logging.DirectJDKLog.isDebugEnabled_",
                              "otherKey" : null,
                              "parent" : "org.apache.tomcat.util.digester.Digester#setDocumentLocator",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ ]
                            } ]
                          }, {
                            "call" : "org.apache.tomcat.util.digester.Digester#startDocument",
                            "kiekerPattern" : "public void org.apache.tomcat.util.digester.Digester.startDocument()",
                            "otherKiekerPattern" : null,
                            "module" : "",
                            "name" : "org.apache.tomcat.util.digester.Digester#startDocument",
                            "key" : "org.apache.tomcat.util.digester.Digester.startDocument_",
                            "otherKey" : null,
                            "parent" : "org.apache.tomcat.util.digester.Digester#parse",
                            "color" : "#FFF",
                            "statistic" : null,
                            "hasSourceChange" : false,
                            "state" : null,
                            "inVMDeviationPredecessor" : 0.0,
                            "inVMDeviation" : 0.0,
                            "ess" : 13,
                            "children" : [ {
                              "call" : "org.apache.juli.logging.DirectJDKLog#isDebugEnabled",
                              "kiekerPattern" : "public final boolean org.apache.juli.logging.DirectJDKLog.isDebugEnabled()",
                              "otherKiekerPattern" : null,
                              "module" : "",
                              "name" : "org.apache.juli.logging.DirectJDKLog#isDebugEnabled",
                              "key" : "org.apache.juli.logging.DirectJDKLog.isDebugEnabled_",
                              "otherKey" : null,
                              "parent" : "org.apache.tomcat.util.digester.Digester#startDocument",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ ]
                            }, {
                              "call" : "org.apache.tomcat.util.digester.Digester#configure",
                              "kiekerPattern" : "protected void org.apache.tomcat.util.digester.Digester.configure()",
                              "otherKiekerPattern" : null,
                              "module" : "",
                              "name" : "org.apache.tomcat.util.digester.Digester#configure",
                              "key" : "org.apache.tomcat.util.digester.Digester.configure_",
                              "otherKey" : null,
                              "parent" : "org.apache.tomcat.util.digester.Digester#startDocument",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ ]
                            } ]
                          }, {
                            "call" : "org.apache.tomcat.util.digester.Digester#startDTD",
                            "kiekerPattern" : "public void org.apache.tomcat.util.digester.Digester.startDTD(java.lang.String,java.lang.String,java.lang.String)",
                            "otherKiekerPattern" : null,
                            "module" : "",
                            "name" : "org.apache.tomcat.util.digester.Digester#startDTD",
                            "key" : "org.apache.tomcat.util.digester.Digester.startDTD_String_String_String",
                            "otherKey" : null,
                            "parent" : "org.apache.tomcat.util.digester.Digester#parse",
                            "color" : "#FFF",
                            "statistic" : null,
                            "hasSourceChange" : false,
                            "state" : null,
                            "inVMDeviationPredecessor" : 0.0,
                            "inVMDeviation" : 0.0,
                            "ess" : 13,
                            "children" : [ {
                              "call" : "org.apache.tomcat.util.digester.Digester#setPublicId",
                              "kiekerPattern" : "public void org.apache.tomcat.util.digester.Digester.setPublicId(java.lang.String)",
                              "otherKiekerPattern" : null,
                              "module" : "",
                              "name" : "org.apache.tomcat.util.digester.Digester#setPublicId",
                              "key" : "org.apache.tomcat.util.digester.Digester.setPublicId_String",
                              "otherKey" : null,
                              "parent" : "org.apache.tomcat.util.digester.Digester#startDTD",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ ]
                            } ]
                          }, {
                            "call" : "org.apache.tomcat.util.digester.Digester$EntityResolver2Wrapper#resolveEntity",
                            "kiekerPattern" : "public org.xml.sax.InputSource org.apache.tomcat.util.digester.Digester$EntityResolver2Wrapper.resolveEntity(java.lang.String,java.lang.String,java.lang.String,java.lang.String)",
                            "otherKiekerPattern" : null,
                            "module" : "",
                            "name" : "org.apache.tomcat.util.digester.Digester$EntityResolver2Wrapper#resolveEntity",
                            "key" : "org.apache.tomcat.util.digester.Digester$EntityResolver2Wrapper.resolveEntity_String_String_String_String",
                            "otherKey" : null,
                            "parent" : "org.apache.tomcat.util.digester.Digester#parse",
                            "color" : "#FFF",
                            "statistic" : null,
                            "hasSourceChange" : false,
                            "state" : null,
                            "inVMDeviationPredecessor" : 0.0,
                            "inVMDeviation" : 0.0,
                            "ess" : 13,
                            "children" : [ {
                              "call" : "org.apache.tomcat.util.digester.Digester$EntityResolverWrapper#replace",
                              "kiekerPattern" : "protected java.lang.String org.apache.tomcat.util.digester.Digester$EntityResolverWrapper.replace(java.lang.String)",
                              "otherKiekerPattern" : null,
                              "module" : "",
                              "name" : "org.apache.tomcat.util.digester.Digester$EntityResolverWrapper#replace",
                              "key" : "org.apache.tomcat.util.digester.Digester$EntityResolverWrapper.replace_String",
                              "otherKey" : null,
                              "parent" : "org.apache.tomcat.util.digester.Digester$EntityResolver2Wrapper#resolveEntity",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ {
                                "call" : "org.apache.tomcat.util.IntrospectionUtils#replaceProperties",
                                "kiekerPattern" : "public static java.lang.String org.apache.tomcat.util.IntrospectionUtils.replaceProperties(java.lang.String,java.util.Hashtable,org.apache.tomcat.util.IntrospectionUtils$SecurePropertySource[],java.lang.ClassLoader)",
                                "otherKiekerPattern" : null,
                                "module" : "",
                                "name" : "org.apache.tomcat.util.IntrospectionUtils#replaceProperties",
                                "key" : "org.apache.tomcat.util.IntrospectionUtils.replaceProperties_String_Hashtable_IntrospectionUtils$SecurePropertySource[]_ClassLoader",
                                "otherKey" : null,
                                "parent" : "org.apache.tomcat.util.digester.Digester$EntityResolverWrapper#replace",
                                "color" : "#FFF",
                                "statistic" : null,
                                "hasSourceChange" : false,
                                "state" : null,
                                "inVMDeviationPredecessor" : 0.0,
                                "inVMDeviation" : 0.0,
                                "ess" : 15,
                                "children" : [ {
                                  "call" : "org.apache.tomcat.util.IntrospectionUtils#replaceProperties",
                                  "kiekerPattern" : "private static java.lang.String org.apache.tomcat.util.IntrospectionUtils.replaceProperties(java.lang.String,java.util.Hashtable,org.apache.tomcat.util.IntrospectionUtils$SecurePropertySource[],java.lang.ClassLoader,int)",
                                  "otherKiekerPattern" : null,
                                  "module" : "",
                                  "name" : "org.apache.tomcat.util.IntrospectionUtils#replaceProperties",
                                  "key" : "org.apache.tomcat.util.IntrospectionUtils.replaceProperties_String_Hashtable_IntrospectionUtils$SecurePropertySource[]_ClassLoader_int",
                                  "otherKey" : null,
                                  "parent" : "org.apache.tomcat.util.IntrospectionUtils#replaceProperties",
                                  "color" : "#FFF",
                                  "statistic" : null,
                                  "hasSourceChange" : false,
                                  "state" : null,
                                  "inVMDeviationPredecessor" : 0.0,
                                  "inVMDeviation" : 0.0,
                                  "ess" : 16,
                                  "children" : [ ]
                                } ]
                              } ]
                            }, {
                              "call" : "org.apache.tomcat.util.digester.Digester#resolveEntity",
                              "kiekerPattern" : "public org.xml.sax.InputSource org.apache.tomcat.util.digester.Digester.resolveEntity(java.lang.String,java.lang.String,java.lang.String,java.lang.String)",
                              "otherKiekerPattern" : null,
                              "module" : "",
                              "name" : "org.apache.tomcat.util.digester.Digester#resolveEntity",
                              "key" : "org.apache.tomcat.util.digester.Digester.resolveEntity_String_String_String_String",
                              "otherKey" : null,
                              "parent" : "org.apache.tomcat.util.digester.Digester$EntityResolver2Wrapper#resolveEntity",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ {
                                "call" : "org.apache.juli.logging.DirectJDKLog#isDebugEnabled",
                                "kiekerPattern" : "public final boolean org.apache.juli.logging.DirectJDKLog.isDebugEnabled()",
                                "otherKiekerPattern" : null,
                                "module" : "",
                                "name" : "org.apache.juli.logging.DirectJDKLog#isDebugEnabled",
                                "key" : "org.apache.juli.logging.DirectJDKLog.isDebugEnabled_",
                                "otherKey" : null,
                                "parent" : "org.apache.tomcat.util.digester.Digester#resolveEntity",
                                "color" : "#FFF",
                                "statistic" : null,
                                "hasSourceChange" : false,
                                "state" : null,
                                "inVMDeviationPredecessor" : 0.0,
                                "inVMDeviation" : 0.0,
                                "ess" : 15,
                                "children" : [ ]
                              } ]
                            } ]
                          }, {
                            "call" : "org.apache.tomcat.util.digester.Digester#startElement",
                            "kiekerPattern" : "public void org.apache.tomcat.util.digester.Digester.startElement(java.lang.String,java.lang.String,java.lang.String,org.xml.sax.Attributes)",
                            "otherKiekerPattern" : null,
                            "module" : "",
                            "name" : "org.apache.tomcat.util.digester.Digester#startElement",
                            "key" : "org.apache.tomcat.util.digester.Digester.startElement_String_String_String_Attributes",
                            "otherKey" : null,
                            "parent" : "org.apache.tomcat.util.digester.Digester#parse",
                            "color" : "#FFF",
                            "statistic" : null,
                            "hasSourceChange" : false,
                            "state" : null,
                            "inVMDeviationPredecessor" : 0.0,
                            "inVMDeviation" : 0.0,
                            "ess" : 13,
                            "children" : [ {
                              "call" : "org.apache.juli.logging.DirectJDKLog#isDebugEnabled",
                              "kiekerPattern" : "public final boolean org.apache.juli.logging.DirectJDKLog.isDebugEnabled()",
                              "otherKiekerPattern" : null,
                              "module" : "",
                              "name" : "org.apache.juli.logging.DirectJDKLog#isDebugEnabled",
                              "key" : "org.apache.juli.logging.DirectJDKLog.isDebugEnabled_",
                              "otherKey" : null,
                              "parent" : "org.apache.tomcat.util.digester.Digester#startElement",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ ]
                            }, {
                              "call" : "org.apache.tomcat.util.digester.Digester#updateAttributes",
                              "kiekerPattern" : "private org.xml.sax.Attributes org.apache.tomcat.util.digester.Digester.updateAttributes(org.xml.sax.Attributes)",
                              "otherKiekerPattern" : null,
                              "module" : "",
                              "name" : "org.apache.tomcat.util.digester.Digester#updateAttributes",
                              "key" : "org.apache.tomcat.util.digester.Digester.updateAttributes_Attributes",
                              "otherKey" : null,
                              "parent" : "org.apache.tomcat.util.digester.Digester#startElement",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ {
                                "call" : "org.apache.tomcat.util.digester.Digester#getClassLoader",
                                "kiekerPattern" : "public java.lang.ClassLoader org.apache.tomcat.util.digester.Digester.getClassLoader()",
                                "otherKiekerPattern" : null,
                                "module" : "",
                                "name" : "org.apache.tomcat.util.digester.Digester#getClassLoader",
                                "key" : "org.apache.tomcat.util.digester.Digester.getClassLoader_",
                                "otherKey" : null,
                                "parent" : "org.apache.tomcat.util.digester.Digester#updateAttributes",
                                "color" : "#FFF",
                                "statistic" : null,
                                "hasSourceChange" : false,
                                "state" : null,
                                "inVMDeviationPredecessor" : 0.0,
                                "inVMDeviation" : 0.0,
                                "ess" : 15,
                                "children" : [ ]
                              }, {
                                "call" : "org.apache.tomcat.util.IntrospectionUtils#replaceProperties",
                                "kiekerPattern" : "public static java.lang.String org.apache.tomcat.util.IntrospectionUtils.replaceProperties(java.lang.String,java.util.Hashtable,org.apache.tomcat.util.IntrospectionUtils$SecurePropertySource[],java.lang.ClassLoader)",
                                "otherKiekerPattern" : null,
                                "module" : "",
                                "name" : "org.apache.tomcat.util.IntrospectionUtils#replaceProperties",
                                "key" : "org.apache.tomcat.util.IntrospectionUtils.replaceProperties_String_Hashtable_IntrospectionUtils$SecurePropertySource[]_ClassLoader",
                                "otherKey" : null,
                                "parent" : "org.apache.tomcat.util.digester.Digester#updateAttributes",
                                "color" : "#FFF",
                                "statistic" : null,
                                "hasSourceChange" : false,
                                "state" : null,
                                "inVMDeviationPredecessor" : 0.0,
                                "inVMDeviation" : 0.0,
                                "ess" : 15,
                                "children" : [ {
                                  "call" : "org.apache.tomcat.util.IntrospectionUtils#replaceProperties",
                                  "kiekerPattern" : "private static java.lang.String org.apache.tomcat.util.IntrospectionUtils.replaceProperties(java.lang.String,java.util.Hashtable,org.apache.tomcat.util.IntrospectionUtils$SecurePropertySource[],java.lang.ClassLoader,int)",
                                  "otherKiekerPattern" : null,
                                  "module" : "",
                                  "name" : "org.apache.tomcat.util.IntrospectionUtils#replaceProperties",
                                  "key" : "org.apache.tomcat.util.IntrospectionUtils.replaceProperties_String_Hashtable_IntrospectionUtils$SecurePropertySource[]_ClassLoader_int",
                                  "otherKey" : null,
                                  "parent" : "org.apache.tomcat.util.IntrospectionUtils#replaceProperties",
                                  "color" : "#FFF",
                                  "statistic" : null,
                                  "hasSourceChange" : false,
                                  "state" : null,
                                  "inVMDeviationPredecessor" : 0.0,
                                  "inVMDeviation" : 0.0,
                                  "ess" : 16,
                                  "children" : [ ]
                                } ]
                              } ]
                            }, {
                              "call" : "org.apache.tomcat.util.digester.ArrayStack#push",
                              "kiekerPattern" : "public org.apache.tomcat.util.digester.E org.apache.tomcat.util.digester.ArrayStack.push(org.apache.tomcat.util.digester.E)",
                              "otherKiekerPattern" : null,
                              "module" : "",
                              "name" : "org.apache.tomcat.util.digester.ArrayStack#push",
                              "key" : "org.apache.tomcat.util.digester.ArrayStack.push_E",
                              "otherKey" : null,
                              "parent" : "org.apache.tomcat.util.digester.Digester#startElement",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ ]
                            }, {
                              "call" : "org.apache.tomcat.util.digester.Digester#getRules",
                              "kiekerPattern" : "public org.apache.tomcat.util.digester.Rules org.apache.tomcat.util.digester.Digester.getRules()",
                              "otherKiekerPattern" : null,
                              "module" : "",
                              "name" : "org.apache.tomcat.util.digester.Digester#getRules",
                              "key" : "org.apache.tomcat.util.digester.Digester.getRules_",
                              "otherKey" : null,
                              "parent" : "org.apache.tomcat.util.digester.Digester#startElement",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ ]
                            }, {
                              "call" : "org.apache.tomcat.util.digester.RulesBase#match",
                              "kiekerPattern" : "public java.util.List org.apache.tomcat.util.digester.RulesBase.match(java.lang.String,java.lang.String)",
                              "otherKiekerPattern" : null,
                              "module" : "",
                              "name" : "org.apache.tomcat.util.digester.RulesBase#match",
                              "key" : "org.apache.tomcat.util.digester.RulesBase.match_String_String",
                              "otherKey" : null,
                              "parent" : "org.apache.tomcat.util.digester.Digester#startElement",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ {
                                "call" : "org.apache.tomcat.util.digester.RulesBase#lookup",
                                "kiekerPattern" : "protected java.util.List org.apache.tomcat.util.digester.RulesBase.lookup(java.lang.String,java.lang.String)",
                                "otherKiekerPattern" : null,
                                "module" : "",
                                "name" : "org.apache.tomcat.util.digester.RulesBase#lookup",
                                "key" : "org.apache.tomcat.util.digester.RulesBase.lookup_String_String",
                                "otherKey" : null,
                                "parent" : "org.apache.tomcat.util.digester.RulesBase#match",
                                "color" : "#FFF",
                                "statistic" : null,
                                "hasSourceChange" : false,
                                "state" : null,
                                "inVMDeviationPredecessor" : 0.0,
                                "inVMDeviation" : 0.0,
                                "ess" : 15,
                                "children" : [ ]
                              } ]
                            }, {
                              "call" : "org.apache.tomcat.util.digester.ObjectCreateRule#begin",
                              "kiekerPattern" : "public void org.apache.tomcat.util.digester.ObjectCreateRule.begin(java.lang.String,java.lang.String,org.xml.sax.Attributes)",
                              "otherKiekerPattern" : null,
                              "module" : "",
                              "name" : "org.apache.tomcat.util.digester.ObjectCreateRule#begin",
                              "key" : "org.apache.tomcat.util.digester.ObjectCreateRule.begin_String_String_Attributes",
                              "otherKey" : null,
                              "parent" : "org.apache.tomcat.util.digester.Digester#startElement",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ {
                                "call" : "org.apache.tomcat.util.digester.ObjectCreateRule#getRealClassName",
                                "kiekerPattern" : "protected java.lang.String org.apache.tomcat.util.digester.ObjectCreateRule.getRealClassName(org.xml.sax.Attributes)",
                                "otherKiekerPattern" : null,
                                "module" : "",
                                "name" : "org.apache.tomcat.util.digester.ObjectCreateRule#getRealClassName",
                                "key" : "org.apache.tomcat.util.digester.ObjectCreateRule.getRealClassName_Attributes",
                                "otherKey" : null,
                                "parent" : "org.apache.tomcat.util.digester.ObjectCreateRule#begin",
                                "color" : "#FFF",
                                "statistic" : null,
                                "hasSourceChange" : false,
                                "state" : null,
                                "inVMDeviationPredecessor" : 0.0,
                                "inVMDeviation" : 0.0,
                                "ess" : 15,
                                "children" : [ ]
                              }, {
                                "call" : "org.apache.tomcat.util.digester.Digester#getClassLoader",
                                "kiekerPattern" : "public java.lang.ClassLoader org.apache.tomcat.util.digester.Digester.getClassLoader()",
                                "otherKiekerPattern" : null,
                                "module" : "",
                                "name" : "org.apache.tomcat.util.digester.Digester#getClassLoader",
                                "key" : "org.apache.tomcat.util.digester.Digester.getClassLoader_",
                                "otherKey" : null,
                                "parent" : "org.apache.tomcat.util.digester.ObjectCreateRule#begin",
                                "color" : "#FFF",
                                "statistic" : null,
                                "hasSourceChange" : false,
                                "state" : null,
                                "inVMDeviationPredecessor" : 0.0,
                                "inVMDeviation" : 0.0,
                                "ess" : 15,
                                "children" : [ ]
                              }, {
                                "call" : "org.apache.tomcat.util.res.StringManager#getManager",
                                "kiekerPattern" : "public static final org.apache.tomcat.util.res.StringManager org.apache.tomcat.util.res.StringManager.getManager(java.lang.Class)",
                                "otherKiekerPattern" : null,
                                "module" : "",
                                "name" : "org.apache.tomcat.util.res.StringManager#getManager",
                                "key" : "org.apache.tomcat.util.res.StringManager.getManager_Class",
                                "otherKey" : null,
                                "parent" : "org.apache.tomcat.util.digester.ObjectCreateRule#begin",
                                "color" : "#FFF",
                                "statistic" : null,
                                "hasSourceChange" : false,
                                "state" : null,
                                "inVMDeviationPredecessor" : 0.0,
                                "inVMDeviation" : 0.0,
                                "ess" : 15,
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
                                  "ess" : 16,
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
                                    "ess" : 17,
                                    "children" : [ ]
                                  } ]
                                } ]
                              }, {
                                "call" : "org.apache.tomcat.util.modeler.ManagedBean#<init>",
                                "kiekerPattern" : "public new org.apache.tomcat.util.modeler.ManagedBean.<init>()",
                                "otherKiekerPattern" : null,
                                "module" : "",
                                "name" : "org.apache.tomcat.util.modeler.ManagedBean#<init>",
                                "key" : "org.apache.tomcat.util.modeler.ManagedBean.<init>_",
                                "otherKey" : null,
                                "parent" : "org.apache.tomcat.util.digester.ObjectCreateRule#begin",
                                "color" : "#FFF",
                                "statistic" : null,
                                "hasSourceChange" : false,
                                "state" : null,
                                "inVMDeviationPredecessor" : 0.0,
                                "inVMDeviation" : 0.0,
                                "ess" : 15,
                                "children" : [ {
                                  "call" : "org.apache.tomcat.util.modeler.FeatureInfo#<init>",
                                  "kiekerPattern" : "public new org.apache.tomcat.util.modeler.FeatureInfo.<init>()",
                                  "otherKiekerPattern" : null,
                                  "module" : "",
                                  "name" : "org.apache.tomcat.util.modeler.FeatureInfo#<init>",
                                  "key" : "org.apache.tomcat.util.modeler.FeatureInfo.<init>_",
                                  "otherKey" : null,
                                  "parent" : "org.apache.tomcat.util.modeler.ManagedBean#<init>",
                                  "color" : "#FFF",
                                  "statistic" : null,
                                  "hasSourceChange" : false,
                                  "state" : null,
                                  "inVMDeviationPredecessor" : 0.0,
                                  "inVMDeviation" : 0.0,
                                  "ess" : 16,
                                  "children" : [ ]
                                }, {
                                  "call" : "org.apache.tomcat.util.modeler.AttributeInfo#<init>",
                                  "kiekerPattern" : "public new org.apache.tomcat.util.modeler.AttributeInfo.<init>()",
                                  "otherKiekerPattern" : null,
                                  "module" : "",
                                  "name" : "org.apache.tomcat.util.modeler.AttributeInfo#<init>",
                                  "key" : "org.apache.tomcat.util.modeler.AttributeInfo.<init>_",
                                  "otherKey" : null,
                                  "parent" : "org.apache.tomcat.util.modeler.ManagedBean#<init>",
                                  "color" : "#FFF",
                                  "statistic" : null,
                                  "hasSourceChange" : false,
                                  "state" : null,
                                  "inVMDeviationPredecessor" : 0.0,
                                  "inVMDeviation" : 0.0,
                                  "ess" : 16,
                                  "children" : [ ]
                                }, {
                                  "call" : "org.apache.tomcat.util.modeler.FeatureInfo#setName",
                                  "kiekerPattern" : "public void org.apache.tomcat.util.modeler.FeatureInfo.setName(java.lang.String)",
                                  "otherKiekerPattern" : null,
                                  "module" : "",
                                  "name" : "org.apache.tomcat.util.modeler.FeatureInfo#setName",
                                  "key" : "org.apache.tomcat.util.modeler.FeatureInfo.setName_String",
                                  "otherKey" : null,
                                  "parent" : "org.apache.tomcat.util.modeler.ManagedBean#<init>",
                                  "color" : "#FFF",
                                  "statistic" : null,
                                  "hasSourceChange" : false,
                                  "state" : null,
                                  "inVMDeviationPredecessor" : 0.0,
                                  "inVMDeviation" : 0.0,
                                  "ess" : 16,
                                  "children" : [ ]
                                }, {
                                  "call" : "org.apache.tomcat.util.modeler.FeatureInfo#setDescription",
                                  "kiekerPattern" : "public void org.apache.tomcat.util.modeler.FeatureInfo.setDescription(java.lang.String)",
                                  "otherKiekerPattern" : null,
                                  "module" : "",
                                  "name" : "org.apache.tomcat.util.modeler.FeatureInfo#setDescription",
                                  "key" : "org.apache.tomcat.util.modeler.FeatureInfo.setDescription_String",
                                  "otherKey" : null,
                                  "parent" : "org.apache.tomcat.util.modeler.ManagedBean#<init>",
                                  "color" : "#FFF",
                                  "statistic" : null,
                                  "hasSourceChange" : false,
                                  "state" : null,
                                  "inVMDeviationPredecessor" : 0.0,
                                  "inVMDeviation" : 0.0,
                                  "ess" : 16,
                                  "children" : [ ]
                                }, {
                                  "call" : "org.apache.tomcat.util.modeler.FeatureInfo#setType",
                                  "kiekerPattern" : "public void org.apache.tomcat.util.modeler.FeatureInfo.setType(java.lang.String)",
                                  "otherKiekerPattern" : null,
                                  "module" : "",
                                  "name" : "org.apache.tomcat.util.modeler.FeatureInfo#setType",
                                  "key" : "org.apache.tomcat.util.modeler.FeatureInfo.setType_String",
                                  "otherKey" : null,
                                  "parent" : "org.apache.tomcat.util.modeler.ManagedBean#<init>",
                                  "color" : "#FFF",
                                  "statistic" : null,
                                  "hasSourceChange" : false,
                                  "state" : null,
                                  "inVMDeviationPredecessor" : 0.0,
                                  "inVMDeviation" : 0.0,
                                  "ess" : 16,
                                  "children" : [ ]
                                }, {
                                  "call" : "org.apache.tomcat.util.modeler.AttributeInfo#setWriteable",
                                  "kiekerPattern" : "public void org.apache.tomcat.util.modeler.AttributeInfo.setWriteable(boolean)",
                                  "otherKiekerPattern" : null,
                                  "module" : "",
                                  "name" : "org.apache.tomcat.util.modeler.AttributeInfo#setWriteable",
                                  "key" : "org.apache.tomcat.util.modeler.AttributeInfo.setWriteable_boolean",
                                  "otherKey" : null,
                                  "parent" : "org.apache.tomcat.util.modeler.ManagedBean#<init>",
                                  "color" : "#FFF",
                                  "statistic" : null,
                                  "hasSourceChange" : false,
                                  "state" : null,
                                  "inVMDeviationPredecessor" : 0.0,
                                  "inVMDeviation" : 0.0,
                                  "ess" : 16,
                                  "children" : [ ]
                                }, {
                                  "call" : "org.apache.tomcat.util.modeler.ManagedBean#addAttribute",
                                  "kiekerPattern" : "public void org.apache.tomcat.util.modeler.ManagedBean.addAttribute(org.apache.tomcat.util.modeler.AttributeInfo)",
                                  "otherKiekerPattern" : null,
                                  "module" : "",
                                  "name" : "org.apache.tomcat.util.modeler.ManagedBean#addAttribute",
                                  "key" : "org.apache.tomcat.util.modeler.ManagedBean.addAttribute_AttributeInfo",
                                  "otherKey" : null,
                                  "parent" : "org.apache.tomcat.util.modeler.ManagedBean#<init>",
                                  "color" : "#FFF",
                                  "statistic" : null,
                                  "hasSourceChange" : false,
                                  "state" : null,
                                  "inVMDeviationPredecessor" : 0.0,
                                  "inVMDeviation" : 0.0,
                                  "ess" : 16,
                                  "children" : [ {
                                    "call" : "org.apache.tomcat.util.modeler.FeatureInfo#getName",
                                    "kiekerPattern" : "public java.lang.String org.apache.tomcat.util.modeler.FeatureInfo.getName()",
                                    "otherKiekerPattern" : null,
                                    "module" : "",
                                    "name" : "org.apache.tomcat.util.modeler.FeatureInfo#getName",
                                    "key" : "org.apache.tomcat.util.modeler.FeatureInfo.getName_",
                                    "otherKey" : null,
                                    "parent" : "org.apache.tomcat.util.modeler.ManagedBean#addAttribute",
                                    "color" : "#FFF",
                                    "statistic" : null,
                                    "hasSourceChange" : false,
                                    "state" : null,
                                    "inVMDeviationPredecessor" : 0.0,
                                    "inVMDeviation" : 0.0,
                                    "ess" : 17,
                                    "children" : [ ]
                                  } ]
                                } ]
                              }, {
                                "call" : "org.apache.tomcat.util.digester.Digester#push",
                                "kiekerPattern" : "public void org.apache.tomcat.util.digester.Digester.push(java.lang.Object)",
                                "otherKiekerPattern" : null,
                                "module" : "",
                                "name" : "org.apache.tomcat.util.digester.Digester#push",
                                "key" : "org.apache.tomcat.util.digester.Digester.push_Object",
                                "otherKey" : null,
                                "parent" : "org.apache.tomcat.util.digester.ObjectCreateRule#begin",
                                "color" : "#FFF",
                                "statistic" : null,
                                "hasSourceChange" : false,
                                "state" : null,
                                "inVMDeviationPredecessor" : 0.0,
                                "inVMDeviation" : 0.0,
                                "ess" : 15,
                                "children" : [ {
                                  "call" : "org.apache.tomcat.util.digester.ArrayStack#push",
                                  "kiekerPattern" : "public org.apache.tomcat.util.digester.E org.apache.tomcat.util.digester.ArrayStack.push(org.apache.tomcat.util.digester.E)",
                                  "otherKiekerPattern" : null,
                                  "module" : "",
                                  "name" : "org.apache.tomcat.util.digester.ArrayStack#push",
                                  "key" : "org.apache.tomcat.util.digester.ArrayStack.push_E",
                                  "otherKey" : null,
                                  "parent" : "org.apache.tomcat.util.digester.Digester#push",
                                  "color" : "#FFF",
                                  "statistic" : null,
                                  "hasSourceChange" : false,
                                  "state" : null,
                                  "inVMDeviationPredecessor" : 0.0,
                                  "inVMDeviation" : 0.0,
                                  "ess" : 16,
                                  "children" : [ ]
                                } ]
                              }, {
                                "call" : "org.apache.tomcat.util.digester.Digester#getGeneratedCode",
                                "kiekerPattern" : "public java.lang.StringBuilder org.apache.tomcat.util.digester.Digester.getGeneratedCode()",
                                "otherKiekerPattern" : null,
                                "module" : "",
                                "name" : "org.apache.tomcat.util.digester.Digester#getGeneratedCode",
                                "key" : "org.apache.tomcat.util.digester.Digester.getGeneratedCode_",
                                "otherKey" : null,
                                "parent" : "org.apache.tomcat.util.digester.ObjectCreateRule#begin",
                                "color" : "#FFF",
                                "statistic" : null,
                                "hasSourceChange" : false,
                                "state" : null,
                                "inVMDeviationPredecessor" : 0.0,
                                "inVMDeviation" : 0.0,
                                "ess" : 15,
                                "children" : [ ]
                              }, {
                                "call" : "org.apache.tomcat.util.modeler.FeatureInfo#<init>",
                                "kiekerPattern" : "public new org.apache.tomcat.util.modeler.FeatureInfo.<init>()",
                                "otherKiekerPattern" : null,
                                "module" : "",
                                "name" : "org.apache.tomcat.util.modeler.FeatureInfo#<init>",
                                "key" : "org.apache.tomcat.util.modeler.FeatureInfo.<init>_",
                                "otherKey" : null,
                                "parent" : "org.apache.tomcat.util.digester.ObjectCreateRule#begin",
                                "color" : "#FFF",
                                "statistic" : null,
                                "hasSourceChange" : false,
                                "state" : null,
                                "inVMDeviationPredecessor" : 0.0,
                                "inVMDeviation" : 0.0,
                                "ess" : 15,
                                "children" : [ ]
                              }, {
                                "call" : "org.apache.tomcat.util.modeler.AttributeInfo#<init>",
                                "kiekerPattern" : "public new org.apache.tomcat.util.modeler.AttributeInfo.<init>()",
                                "otherKiekerPattern" : null,
                                "module" : "",
                                "name" : "org.apache.tomcat.util.modeler.AttributeInfo#<init>",
                                "key" : "org.apache.tomcat.util.modeler.AttributeInfo.<init>_",
                                "otherKey" : null,
                                "parent" : "org.apache.tomcat.util.digester.ObjectCreateRule#begin",
                                "color" : "#FFF",
                                "statistic" : null,
                                "hasSourceChange" : false,
                                "state" : null,
                                "inVMDeviationPredecessor" : 0.0,
                                "inVMDeviation" : 0.0,
                                "ess" : 15,
                                "children" : [ ]
                              }, {
                                "call" : "org.apache.tomcat.util.modeler.OperationInfo#<init>",
                                "kiekerPattern" : "public new org.apache.tomcat.util.modeler.OperationInfo.<init>()",
                                "otherKiekerPattern" : null,
                                "module" : "",
                                "name" : "org.apache.tomcat.util.modeler.OperationInfo#<init>",
                                "key" : "org.apache.tomcat.util.modeler.OperationInfo.<init>_",
                                "otherKey" : null,
                                "parent" : "org.apache.tomcat.util.digester.ObjectCreateRule#begin",
                                "color" : "#FFF",
                                "statistic" : null,
                                "hasSourceChange" : false,
                                "state" : null,
                                "inVMDeviationPredecessor" : 0.0,
                                "inVMDeviation" : 0.0,
                                "ess" : 15,
                                "children" : [ ]
                              }, {
                                "call" : "org.apache.tomcat.util.modeler.ParameterInfo#<init>",
                                "kiekerPattern" : "public new org.apache.tomcat.util.modeler.ParameterInfo.<init>()",
                                "otherKiekerPattern" : null,
                                "module" : "",
                                "name" : "org.apache.tomcat.util.modeler.ParameterInfo#<init>",
                                "key" : "org.apache.tomcat.util.modeler.ParameterInfo.<init>_",
                                "otherKey" : null,
                                "parent" : "org.apache.tomcat.util.digester.ObjectCreateRule#begin",
                                "color" : "#FFF",
                                "statistic" : null,
                                "hasSourceChange" : false,
                                "state" : null,
                                "inVMDeviationPredecessor" : 0.0,
                                "inVMDeviation" : 0.0,
                                "ess" : 15,
                                "children" : [ ]
                              } ]
                            }, {
                              "call" : "org.apache.tomcat.util.digester.SetPropertiesRule#begin",
                              "kiekerPattern" : "public void org.apache.tomcat.util.digester.SetPropertiesRule.begin(java.lang.String,java.lang.String,org.xml.sax.Attributes)",
                              "otherKiekerPattern" : null,
                              "module" : "",
                              "name" : "org.apache.tomcat.util.digester.SetPropertiesRule#begin",
                              "key" : "org.apache.tomcat.util.digester.SetPropertiesRule.begin_String_String_Attributes",
                              "otherKey" : null,
                              "parent" : "org.apache.tomcat.util.digester.Digester#startElement",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ {
                                "call" : "org.apache.tomcat.util.digester.Digester#peek",
                                "kiekerPattern" : "public java.lang.Object org.apache.tomcat.util.digester.Digester.peek()",
                                "otherKiekerPattern" : null,
                                "module" : "",
                                "name" : "org.apache.tomcat.util.digester.Digester#peek",
                                "key" : "org.apache.tomcat.util.digester.Digester.peek_",
                                "otherKey" : null,
                                "parent" : "org.apache.tomcat.util.digester.SetPropertiesRule#begin",
                                "color" : "#FFF",
                                "statistic" : null,
                                "hasSourceChange" : false,
                                "state" : null,
                                "inVMDeviationPredecessor" : 0.0,
                                "inVMDeviation" : 0.0,
                                "ess" : 15,
                                "children" : [ {
                                  "call" : "org.apache.tomcat.util.digester.ArrayStack#peek",
                                  "kiekerPattern" : "public org.apache.tomcat.util.digester.E org.apache.tomcat.util.digester.ArrayStack.peek()",
                                  "otherKiekerPattern" : null,
                                  "module" : "",
                                  "name" : "org.apache.tomcat.util.digester.ArrayStack#peek",
                                  "key" : "org.apache.tomcat.util.digester.ArrayStack.peek_",
                                  "otherKey" : null,
                                  "parent" : "org.apache.tomcat.util.digester.Digester#peek",
                                  "color" : "#FFF",
                                  "statistic" : null,
                                  "hasSourceChange" : false,
                                  "state" : null,
                                  "inVMDeviationPredecessor" : 0.0,
                                  "inVMDeviation" : 0.0,
                                  "ess" : 16,
                                  "children" : [ ]
                                } ]
                              }, {
                                "call" : "org.apache.juli.logging.DirectJDKLog#isDebugEnabled",
                                "kiekerPattern" : "public final boolean org.apache.juli.logging.DirectJDKLog.isDebugEnabled()",
                                "otherKiekerPattern" : null,
                                "module" : "",
                                "name" : "org.apache.juli.logging.DirectJDKLog#isDebugEnabled",
                                "key" : "org.apache.juli.logging.DirectJDKLog.isDebugEnabled_",
                                "otherKey" : null,
                                "parent" : "org.apache.tomcat.util.digester.SetPropertiesRule#begin",
                                "color" : "#FFF",
                                "statistic" : null,
                                "hasSourceChange" : false,
                                "state" : null,
                                "inVMDeviationPredecessor" : 0.0,
                                "inVMDeviation" : 0.0,
                                "ess" : 15,
                                "children" : [ ]
                              }, {
                                "call" : "org.apache.tomcat.util.digester.Digester#getGeneratedCode",
                                "kiekerPattern" : "public java.lang.StringBuilder org.apache.tomcat.util.digester.Digester.getGeneratedCode()",
                                "otherKiekerPattern" : null,
                                "module" : "",
                                "name" : "org.apache.tomcat.util.digester.Digester#getGeneratedCode",
                                "key" : "org.apache.tomcat.util.digester.Digester.getGeneratedCode_",
                                "otherKey" : null,
                                "parent" : "org.apache.tomcat.util.digester.SetPropertiesRule#begin",
                                "color" : "#FFF",
                                "statistic" : null,
                                "hasSourceChange" : false,
                                "state" : null,
                                "inVMDeviationPredecessor" : 0.0,
                                "inVMDeviation" : 0.0,
                                "ess" : 15,
                                "children" : [ ]
                              }, {
                                "call" : "org.apache.tomcat.util.digester.Digester#isFakeAttribute",
                                "kiekerPattern" : "public boolean org.apache.tomcat.util.digester.Digester.isFakeAttribute(java.lang.Object,java.lang.String)",
                                "otherKiekerPattern" : null,
                                "module" : "",
                                "name" : "org.apache.tomcat.util.digester.Digester#isFakeAttribute",
                                "key" : "org.apache.tomcat.util.digester.Digester.isFakeAttribute_Object_String",
                                "otherKey" : null,
                                "parent" : "org.apache.tomcat.util.digester.SetPropertiesRule#begin",
                                "color" : "#FFF",
                                "statistic" : null,
                                "hasSourceChange" : false,
                                "state" : null,
                                "inVMDeviationPredecessor" : 0.0,
                                "inVMDeviation" : 0.0,
                                "ess" : 15,
                                "children" : [ ]
                              }, {
                                "call" : "org.apache.tomcat.util.IntrospectionUtils#setProperty",
                                "kiekerPattern" : "public static boolean org.apache.tomcat.util.IntrospectionUtils.setProperty(java.lang.Object,java.lang.String,java.lang.String,boolean,java.lang.StringBuilder)",
                                "otherKiekerPattern" : null,
                                "module" : "",
                                "name" : "org.apache.tomcat.util.IntrospectionUtils#setProperty",
                                "key" : "org.apache.tomcat.util.IntrospectionUtils.setProperty_Object_String_String_boolean_StringBuilder",
                                "otherKey" : null,
                                "parent" : "org.apache.tomcat.util.digester.SetPropertiesRule#begin",
                                "color" : "#FFF",
                                "statistic" : null,
                                "hasSourceChange" : false,
                                "state" : null,
                                "inVMDeviationPredecessor" : 0.0,
                                "inVMDeviation" : 0.0,
                                "ess" : 15,
                                "children" : [ {
                                  "call" : "org.apache.juli.logging.DirectJDKLog#isDebugEnabled",
                                  "kiekerPattern" : "public final boolean org.apache.juli.logging.DirectJDKLog.isDebugEnabled()",
                                  "otherKiekerPattern" : null,
                                  "module" : "",
                                  "name" : "org.apache.juli.logging.DirectJDKLog#isDebugEnabled",
                                  "key" : "org.apache.juli.logging.DirectJDKLog.isDebugEnabled_",
                                  "otherKey" : null,
                                  "parent" : "org.apache.tomcat.util.IntrospectionUtils#setProperty",
                                  "color" : "#FFF",
                                  "statistic" : null,
                                  "hasSourceChange" : false,
                                  "state" : null,
                                  "inVMDeviationPredecessor" : 0.0,
                                  "inVMDeviation" : 0.0,
                                  "ess" : 16,
                                  "children" : [ ]
                                }, {
                                  "call" : "org.apache.tomcat.util.XReflectionIntrospectionUtils#isEnabled",
                                  "kiekerPattern" : "static boolean org.apache.tomcat.util.XReflectionIntrospectionUtils.isEnabled()",
                                  "otherKiekerPattern" : null,
                                  "module" : "",
                                  "name" : "org.apache.tomcat.util.XReflectionIntrospectionUtils#isEnabled",
                                  "key" : "org.apache.tomcat.util.XReflectionIntrospectionUtils.isEnabled_",
                                  "otherKey" : null,
                                  "parent" : "org.apache.tomcat.util.IntrospectionUtils#setProperty",
                                  "color" : "#FFF",
                                  "statistic" : null,
                                  "hasSourceChange" : false,
                                  "state" : null,
                                  "inVMDeviationPredecessor" : 0.0,
                                  "inVMDeviation" : 0.0,
                                  "ess" : 16,
                                  "children" : [ ]
                                }, {
                                  "call" : "org.apache.tomcat.util.IntrospectionUtils#capitalize",
                                  "kiekerPattern" : "public static java.lang.String org.apache.tomcat.util.IntrospectionUtils.capitalize(java.lang.String)",
                                  "otherKiekerPattern" : null,
                                  "module" : "",
                                  "name" : "org.apache.tomcat.util.IntrospectionUtils#capitalize",
                                  "key" : "org.apache.tomcat.util.IntrospectionUtils.capitalize_String",
                                  "otherKey" : null,
                                  "parent" : "org.apache.tomcat.util.IntrospectionUtils#setProperty",
                                  "color" : "#FFF",
                                  "statistic" : null,
                                  "hasSourceChange" : false,
                                  "state" : null,
                                  "inVMDeviationPredecessor" : 0.0,
                                  "inVMDeviation" : 0.0,
                                  "ess" : 16,
                                  "children" : [ ]
                                }, {
                                  "call" : "org.apache.tomcat.util.IntrospectionUtils#findMethods",
                                  "kiekerPattern" : "public static java.lang.reflect.Method[] org.apache.tomcat.util.IntrospectionUtils.findMethods(java.lang.Class)",
                                  "otherKiekerPattern" : null,
                                  "module" : "",
                                  "name" : "org.apache.tomcat.util.IntrospectionUtils#findMethods",
                                  "key" : "org.apache.tomcat.util.IntrospectionUtils.findMethods_Class",
                                  "otherKey" : null,
                                  "parent" : "org.apache.tomcat.util.IntrospectionUtils#setProperty",
                                  "color" : "#FFF",
                                  "statistic" : null,
                                  "hasSourceChange" : false,
                                  "state" : null,
                                  "inVMDeviationPredecessor" : 0.0,
                                  "inVMDeviation" : 0.0,
                                  "ess" : 16,
                                  "children" : [ ]
                                }, {
                                  "call" : "org.apache.tomcat.util.modeler.ManagedBean#setName",
                                  "kiekerPattern" : "public void org.apache.tomcat.util.modeler.ManagedBean.setName(java.lang.String)",
                                  "otherKiekerPattern" : null,
                                  "module" : "",
                                  "name" : "org.apache.tomcat.util.modeler.ManagedBean#setName",
                                  "key" : "org.apache.tomcat.util.modeler.ManagedBean.setName_String",
                                  "otherKey" : null,
                                  "parent" : "org.apache.tomcat.util.IntrospectionUtils#setProperty",
                                  "color" : "#FFF",
                                  "statistic" : null,
                                  "hasSourceChange" : false,
                                  "state" : null,
                                  "inVMDeviationPredecessor" : 0.0,
                                  "inVMDeviation" : 0.0,
                                  "ess" : 16,
                                  "children" : [ ]
                                }, {
                                  "call" : "org.apache.tomcat.util.modeler.ManagedBean#setDescription",
                                  "kiekerPattern" : "public void org.apache.tomcat.util.modeler.ManagedBean.setDescription(java.lang.String)",
                                  "otherKiekerPattern" : null,
                                  "module" : "",
                                  "name" : "org.apache.tomcat.util.modeler.ManagedBean#setDescription",
                                  "key" : "org.apache.tomcat.util.modeler.ManagedBean.setDescription_String",
                                  "otherKey" : null,
                                  "parent" : "org.apache.tomcat.util.IntrospectionUtils#setProperty",
                                  "color" : "#FFF",
                                  "statistic" : null,
                                  "hasSourceChange" : false,
                                  "state" : null,
                                  "inVMDeviationPredecessor" : 0.0,
                                  "inVMDeviation" : 0.0,
                                  "ess" : 16,
                                  "children" : [ ]
                                }, {
                                  "call" : "org.apache.tomcat.util.modeler.ManagedBean#setDomain",
                                  "kiekerPattern" : "public void org.apache.tomcat.util.modeler.ManagedBean.setDomain(java.lang.String)",
                                  "otherKiekerPattern" : null,
                                  "module" : "",
                                  "name" : "org.apache.tomcat.util.modeler.ManagedBean#setDomain",
                                  "key" : "org.apache.tomcat.util.modeler.ManagedBean.setDomain_String",
                                  "otherKey" : null,
                                  "parent" : "org.apache.tomcat.util.IntrospectionUtils#setProperty",
                                  "color" : "#FFF",
                                  "statistic" : null,
                                  "hasSourceChange" : false,
                                  "state" : null,
                                  "inVMDeviationPredecessor" : 0.0,
                                  "inVMDeviation" : 0.0,
                                  "ess" : 16,
                                  "children" : [ ]
                                }, {
                                  "call" : "org.apache.tomcat.util.modeler.ManagedBean#setGroup",
                                  "kiekerPattern" : "public void org.apache.tomcat.util.modeler.ManagedBean.setGroup(java.lang.String)",
                                  "otherKiekerPattern" : null,
                                  "module" : "",
                                  "name" : "org.apache.tomcat.util.modeler.ManagedBean#setGroup",
                                  "key" : "org.apache.tomcat.util.modeler.ManagedBean.setGroup_String",
                                  "otherKey" : null,
                                  "parent" : "org.apache.tomcat.util.IntrospectionUtils#setProperty",
                                  "color" : "#FFF",
                                  "statistic" : null,
                                  "hasSourceChange" : false,
                                  "state" : null,
                                  "inVMDeviationPredecessor" : 0.0,
                                  "inVMDeviation" : 0.0,
                                  "ess" : 16,
                                  "children" : [ ]
                                }, {
                                  "call" : "org.apache.tomcat.util.modeler.ManagedBean#setType",
                                  "kiekerPattern" : "public void org.apache.tomcat.util.modeler.ManagedBean.setType(java.lang.String)",
                                  "otherKiekerPattern" : null,
                                  "module" : "",
                                  "name" : "org.apache.tomcat.util.modeler.ManagedBean#setType",
                                  "key" : "org.apache.tomcat.util.modeler.ManagedBean.setType_String",
                                  "otherKey" : null,
                                  "parent" : "org.apache.tomcat.util.IntrospectionUtils#setProperty",
                                  "color" : "#FFF",
                                  "statistic" : null,
                                  "hasSourceChange" : false,
                                  "state" : null,
                                  "inVMDeviationPredecessor" : 0.0,
                                  "inVMDeviation" : 0.0,
                                  "ess" : 16,
                                  "children" : [ ]
                                }, {
                                  "call" : "org.apache.tomcat.util.modeler.FeatureInfo#setName",
                                  "kiekerPattern" : "public void org.apache.tomcat.util.modeler.FeatureInfo.setName(java.lang.String)",
                                  "otherKiekerPattern" : null,
                                  "module" : "",
                                  "name" : "org.apache.tomcat.util.modeler.FeatureInfo#setName",
                                  "key" : "org.apache.tomcat.util.modeler.FeatureInfo.setName_String",
                                  "otherKey" : null,
                                  "parent" : "org.apache.tomcat.util.IntrospectionUtils#setProperty",
                                  "color" : "#FFF",
                                  "statistic" : null,
                                  "hasSourceChange" : false,
                                  "state" : null,
                                  "inVMDeviationPredecessor" : 0.0,
                                  "inVMDeviation" : 0.0,
                                  "ess" : 16,
                                  "children" : [ ]
                                }, {
                                  "call" : "org.apache.tomcat.util.modeler.FeatureInfo#setDescription",
                                  "kiekerPattern" : "public void org.apache.tomcat.util.modeler.FeatureInfo.setDescription(java.lang.String)",
                                  "otherKiekerPattern" : null,
                                  "module" : "",
                                  "name" : "org.apache.tomcat.util.modeler.FeatureInfo#setDescription",
                                  "key" : "org.apache.tomcat.util.modeler.FeatureInfo.setDescription_String",
                                  "otherKey" : null,
                                  "parent" : "org.apache.tomcat.util.IntrospectionUtils#setProperty",
                                  "color" : "#FFF",
                                  "statistic" : null,
                                  "hasSourceChange" : false,
                                  "state" : null,
                                  "inVMDeviationPredecessor" : 0.0,
                                  "inVMDeviation" : 0.0,
                                  "ess" : 16,
                                  "children" : [ ]
                                }, {
                                  "call" : "org.apache.tomcat.util.modeler.FeatureInfo#setType",
                                  "kiekerPattern" : "public void org.apache.tomcat.util.modeler.FeatureInfo.setType(java.lang.String)",
                                  "otherKiekerPattern" : null,
                                  "module" : "",
                                  "name" : "org.apache.tomcat.util.modeler.FeatureInfo#setType",
                                  "key" : "org.apache.tomcat.util.modeler.FeatureInfo.setType_String",
                                  "otherKey" : null,
                                  "parent" : "org.apache.tomcat.util.IntrospectionUtils#setProperty",
                                  "color" : "#FFF",
                                  "statistic" : null,
                                  "hasSourceChange" : false,
                                  "state" : null,
                                  "inVMDeviationPredecessor" : 0.0,
                                  "inVMDeviation" : 0.0,
                                  "ess" : 16,
                                  "children" : [ ]
                                }, {
                                  "call" : "org.apache.tomcat.util.modeler.AttributeInfo#setWriteable",
                                  "kiekerPattern" : "public void org.apache.tomcat.util.modeler.AttributeInfo.setWriteable(boolean)",
                                  "otherKiekerPattern" : null,
                                  "module" : "",
                                  "name" : "org.apache.tomcat.util.modeler.AttributeInfo#setWriteable",
                                  "key" : "org.apache.tomcat.util.modeler.AttributeInfo.setWriteable_boolean",
                                  "otherKey" : null,
                                  "parent" : "org.apache.tomcat.util.IntrospectionUtils#setProperty",
                                  "color" : "#FFF",
                                  "statistic" : null,
                                  "hasSourceChange" : false,
                                  "state" : null,
                                  "inVMDeviationPredecessor" : 0.0,
                                  "inVMDeviation" : 0.0,
                                  "ess" : 16,
                                  "children" : [ ]
                                }, {
                                  "call" : "org.apache.tomcat.util.modeler.OperationInfo#setImpact",
                                  "kiekerPattern" : "public void org.apache.tomcat.util.modeler.OperationInfo.setImpact(java.lang.String)",
                                  "otherKiekerPattern" : null,
                                  "module" : "",
                                  "name" : "org.apache.tomcat.util.modeler.OperationInfo#setImpact",
                                  "key" : "org.apache.tomcat.util.modeler.OperationInfo.setImpact_String",
                                  "otherKey" : null,
                                  "parent" : "org.apache.tomcat.util.IntrospectionUtils#setProperty",
                                  "color" : "#FFF",
                                  "statistic" : null,
                                  "hasSourceChange" : false,
                                  "state" : null,
                                  "inVMDeviationPredecessor" : 0.0,
                                  "inVMDeviation" : 0.0,
                                  "ess" : 16,
                                  "children" : [ ]
                                }, {
                                  "call" : "org.apache.tomcat.util.modeler.OperationInfo#setReturnType",
                                  "kiekerPattern" : "public void org.apache.tomcat.util.modeler.OperationInfo.setReturnType(java.lang.String)",
                                  "otherKiekerPattern" : null,
                                  "module" : "",
                                  "name" : "org.apache.tomcat.util.modeler.OperationInfo#setReturnType",
                                  "key" : "org.apache.tomcat.util.modeler.OperationInfo.setReturnType_String",
                                  "otherKey" : null,
                                  "parent" : "org.apache.tomcat.util.IntrospectionUtils#setProperty",
                                  "color" : "#FFF",
                                  "statistic" : null,
                                  "hasSourceChange" : false,
                                  "state" : null,
                                  "inVMDeviationPredecessor" : 0.0,
                                  "inVMDeviation" : 0.0,
                                  "ess" : 16,
                                  "children" : [ ]
                                }, {
                                  "call" : "org.apache.tomcat.util.modeler.ManagedBean#setClassName",
                                  "kiekerPattern" : "public void org.apache.tomcat.util.modeler.ManagedBean.setClassName(java.lang.String)",
                                  "otherKiekerPattern" : null,
                                  "module" : "",
                                  "name" : "org.apache.tomcat.util.modeler.ManagedBean#setClassName",
                                  "key" : "org.apache.tomcat.util.modeler.ManagedBean.setClassName_String",
                                  "otherKey" : null,
                                  "parent" : "org.apache.tomcat.util.IntrospectionUtils#setProperty",
                                  "color" : "#FFF",
                                  "statistic" : null,
                                  "hasSourceChange" : false,
                                  "state" : null,
                                  "inVMDeviationPredecessor" : 0.0,
                                  "inVMDeviation" : 0.0,
                                  "ess" : 16,
                                  "children" : [ ]
                                } ]
                              } ]
                            }, {
                              "call" : "org.apache.tomcat.util.digester.Rule#begin",
                              "kiekerPattern" : "public void org.apache.tomcat.util.digester.Rule.begin(java.lang.String,java.lang.String,org.xml.sax.Attributes)",
                              "otherKiekerPattern" : null,
                              "module" : "",
                              "name" : "org.apache.tomcat.util.digester.Rule#begin",
                              "key" : "org.apache.tomcat.util.digester.Rule.begin_String_String_Attributes",
                              "otherKey" : null,
                              "parent" : "org.apache.tomcat.util.digester.Digester#startElement",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ ]
                            } ]
                          }, {
                            "call" : "org.apache.tomcat.util.digester.Digester#ignorableWhitespace",
                            "kiekerPattern" : "public void org.apache.tomcat.util.digester.Digester.ignorableWhitespace(char[],int,int)",
                            "otherKiekerPattern" : null,
                            "module" : "",
                            "name" : "org.apache.tomcat.util.digester.Digester#ignorableWhitespace",
                            "key" : "org.apache.tomcat.util.digester.Digester.ignorableWhitespace_char[]_int_int",
                            "otherKey" : null,
                            "parent" : "org.apache.tomcat.util.digester.Digester#parse",
                            "color" : "#FFF",
                            "statistic" : null,
                            "hasSourceChange" : false,
                            "state" : null,
                            "inVMDeviationPredecessor" : 0.0,
                            "inVMDeviation" : 0.0,
                            "ess" : 13,
                            "children" : [ {
                              "call" : "org.apache.juli.logging.DirectJDKLog#isDebugEnabled",
                              "kiekerPattern" : "public final boolean org.apache.juli.logging.DirectJDKLog.isDebugEnabled()",
                              "otherKiekerPattern" : null,
                              "module" : "",
                              "name" : "org.apache.juli.logging.DirectJDKLog#isDebugEnabled",
                              "key" : "org.apache.juli.logging.DirectJDKLog.isDebugEnabled_",
                              "otherKey" : null,
                              "parent" : "org.apache.tomcat.util.digester.Digester#ignorableWhitespace",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ ]
                            } ]
                          }, {
                            "call" : "org.apache.tomcat.util.digester.Digester#endElement",
                            "kiekerPattern" : "public void org.apache.tomcat.util.digester.Digester.endElement(java.lang.String,java.lang.String,java.lang.String)",
                            "otherKiekerPattern" : null,
                            "module" : "",
                            "name" : "org.apache.tomcat.util.digester.Digester#endElement",
                            "key" : "org.apache.tomcat.util.digester.Digester.endElement_String_String_String",
                            "otherKey" : null,
                            "parent" : "org.apache.tomcat.util.digester.Digester#parse",
                            "color" : "#FFF",
                            "statistic" : null,
                            "hasSourceChange" : false,
                            "state" : null,
                            "inVMDeviationPredecessor" : 0.0,
                            "inVMDeviation" : 0.0,
                            "ess" : 13,
                            "children" : [ {
                              "call" : "org.apache.juli.logging.DirectJDKLog#isDebugEnabled",
                              "kiekerPattern" : "public final boolean org.apache.juli.logging.DirectJDKLog.isDebugEnabled()",
                              "otherKiekerPattern" : null,
                              "module" : "",
                              "name" : "org.apache.juli.logging.DirectJDKLog#isDebugEnabled",
                              "key" : "org.apache.juli.logging.DirectJDKLog.isDebugEnabled_",
                              "otherKey" : null,
                              "parent" : "org.apache.tomcat.util.digester.Digester#endElement",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ ]
                            }, {
                              "call" : "org.apache.tomcat.util.digester.Digester#updateBodyText",
                              "kiekerPattern" : "private java.lang.StringBuilder org.apache.tomcat.util.digester.Digester.updateBodyText(java.lang.StringBuilder)",
                              "otherKiekerPattern" : null,
                              "module" : "",
                              "name" : "org.apache.tomcat.util.digester.Digester#updateBodyText",
                              "key" : "org.apache.tomcat.util.digester.Digester.updateBodyText_StringBuilder",
                              "otherKey" : null,
                              "parent" : "org.apache.tomcat.util.digester.Digester#endElement",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ {
                                "call" : "org.apache.tomcat.util.digester.Digester#getClassLoader",
                                "kiekerPattern" : "public java.lang.ClassLoader org.apache.tomcat.util.digester.Digester.getClassLoader()",
                                "otherKiekerPattern" : null,
                                "module" : "",
                                "name" : "org.apache.tomcat.util.digester.Digester#getClassLoader",
                                "key" : "org.apache.tomcat.util.digester.Digester.getClassLoader_",
                                "otherKey" : null,
                                "parent" : "org.apache.tomcat.util.digester.Digester#updateBodyText",
                                "color" : "#FFF",
                                "statistic" : null,
                                "hasSourceChange" : false,
                                "state" : null,
                                "inVMDeviationPredecessor" : 0.0,
                                "inVMDeviation" : 0.0,
                                "ess" : 15,
                                "children" : [ ]
                              }, {
                                "call" : "org.apache.tomcat.util.IntrospectionUtils#replaceProperties",
                                "kiekerPattern" : "public static java.lang.String org.apache.tomcat.util.IntrospectionUtils.replaceProperties(java.lang.String,java.util.Hashtable,org.apache.tomcat.util.IntrospectionUtils$SecurePropertySource[],java.lang.ClassLoader)",
                                "otherKiekerPattern" : null,
                                "module" : "",
                                "name" : "org.apache.tomcat.util.IntrospectionUtils#replaceProperties",
                                "key" : "org.apache.tomcat.util.IntrospectionUtils.replaceProperties_String_Hashtable_IntrospectionUtils$SecurePropertySource[]_ClassLoader",
                                "otherKey" : null,
                                "parent" : "org.apache.tomcat.util.digester.Digester#updateBodyText",
                                "color" : "#FFF",
                                "statistic" : null,
                                "hasSourceChange" : false,
                                "state" : null,
                                "inVMDeviationPredecessor" : 0.0,
                                "inVMDeviation" : 0.0,
                                "ess" : 15,
                                "children" : [ {
                                  "call" : "org.apache.tomcat.util.IntrospectionUtils#replaceProperties",
                                  "kiekerPattern" : "private static java.lang.String org.apache.tomcat.util.IntrospectionUtils.replaceProperties(java.lang.String,java.util.Hashtable,org.apache.tomcat.util.IntrospectionUtils$SecurePropertySource[],java.lang.ClassLoader,int)",
                                  "otherKiekerPattern" : null,
                                  "module" : "",
                                  "name" : "org.apache.tomcat.util.IntrospectionUtils#replaceProperties",
                                  "key" : "org.apache.tomcat.util.IntrospectionUtils.replaceProperties_String_Hashtable_IntrospectionUtils$SecurePropertySource[]_ClassLoader_int",
                                  "otherKey" : null,
                                  "parent" : "org.apache.tomcat.util.IntrospectionUtils#replaceProperties",
                                  "color" : "#FFF",
                                  "statistic" : null,
                                  "hasSourceChange" : false,
                                  "state" : null,
                                  "inVMDeviationPredecessor" : 0.0,
                                  "inVMDeviation" : 0.0,
                                  "ess" : 16,
                                  "children" : [ ]
                                } ]
                              } ]
                            }, {
                              "call" : "org.apache.tomcat.util.digester.ArrayStack#pop",
                              "kiekerPattern" : "public org.apache.tomcat.util.digester.E org.apache.tomcat.util.digester.ArrayStack.pop()",
                              "otherKiekerPattern" : null,
                              "module" : "",
                              "name" : "org.apache.tomcat.util.digester.ArrayStack#pop",
                              "key" : "org.apache.tomcat.util.digester.ArrayStack.pop_",
                              "otherKey" : null,
                              "parent" : "org.apache.tomcat.util.digester.Digester#endElement",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ ]
                            }, {
                              "call" : "org.apache.tomcat.util.digester.Rule#body",
                              "kiekerPattern" : "public void org.apache.tomcat.util.digester.Rule.body(java.lang.String,java.lang.String,java.lang.String)",
                              "otherKiekerPattern" : null,
                              "module" : "",
                              "name" : "org.apache.tomcat.util.digester.Rule#body",
                              "key" : "org.apache.tomcat.util.digester.Rule.body_String_String_String",
                              "otherKey" : null,
                              "parent" : "org.apache.tomcat.util.digester.Digester#endElement",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ ]
                            }, {
                              "call" : "org.apache.tomcat.util.digester.SetNextRule#end",
                              "kiekerPattern" : "public void org.apache.tomcat.util.digester.SetNextRule.end(java.lang.String,java.lang.String)",
                              "otherKiekerPattern" : null,
                              "module" : "",
                              "name" : "org.apache.tomcat.util.digester.SetNextRule#end",
                              "key" : "org.apache.tomcat.util.digester.SetNextRule.end_String_String",
                              "otherKey" : null,
                              "parent" : "org.apache.tomcat.util.digester.Digester#endElement",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ {
                                "call" : "org.apache.tomcat.util.digester.Digester#peek",
                                "kiekerPattern" : "public java.lang.Object org.apache.tomcat.util.digester.Digester.peek(int)",
                                "otherKiekerPattern" : null,
                                "module" : "",
                                "name" : "org.apache.tomcat.util.digester.Digester#peek",
                                "key" : "org.apache.tomcat.util.digester.Digester.peek_int",
                                "otherKey" : null,
                                "parent" : "org.apache.tomcat.util.digester.SetNextRule#end",
                                "color" : "#FFF",
                                "statistic" : null,
                                "hasSourceChange" : false,
                                "state" : null,
                                "inVMDeviationPredecessor" : 0.0,
                                "inVMDeviation" : 0.0,
                                "ess" : 15,
                                "children" : [ {
                                  "call" : "org.apache.tomcat.util.digester.ArrayStack#peek",
                                  "kiekerPattern" : "public org.apache.tomcat.util.digester.E org.apache.tomcat.util.digester.ArrayStack.peek(int)",
                                  "otherKiekerPattern" : null,
                                  "module" : "",
                                  "name" : "org.apache.tomcat.util.digester.ArrayStack#peek",
                                  "key" : "org.apache.tomcat.util.digester.ArrayStack.peek_int",
                                  "otherKey" : null,
                                  "parent" : "org.apache.tomcat.util.digester.Digester#peek",
                                  "color" : "#FFF",
                                  "statistic" : null,
                                  "hasSourceChange" : false,
                                  "state" : null,
                                  "inVMDeviationPredecessor" : 0.0,
                                  "inVMDeviation" : 0.0,
                                  "ess" : 16,
                                  "children" : [ ]
                                } ]
                              }, {
                                "call" : "org.apache.juli.logging.DirectJDKLog#isDebugEnabled",
                                "kiekerPattern" : "public final boolean org.apache.juli.logging.DirectJDKLog.isDebugEnabled()",
                                "otherKiekerPattern" : null,
                                "module" : "",
                                "name" : "org.apache.juli.logging.DirectJDKLog#isDebugEnabled",
                                "key" : "org.apache.juli.logging.DirectJDKLog.isDebugEnabled_",
                                "otherKey" : null,
                                "parent" : "org.apache.tomcat.util.digester.SetNextRule#end",
                                "color" : "#FFF",
                                "statistic" : null,
                                "hasSourceChange" : false,
                                "state" : null,
                                "inVMDeviationPredecessor" : 0.0,
                                "inVMDeviation" : 0.0,
                                "ess" : 15,
                                "children" : [ ]
                              }, {
                                "call" : "org.apache.tomcat.util.digester.Digester#getClassLoader",
                                "kiekerPattern" : "public java.lang.ClassLoader org.apache.tomcat.util.digester.Digester.getClassLoader()",
                                "otherKiekerPattern" : null,
                                "module" : "",
                                "name" : "org.apache.tomcat.util.digester.Digester#getClassLoader",
                                "key" : "org.apache.tomcat.util.digester.Digester.getClassLoader_",
                                "otherKey" : null,
                                "parent" : "org.apache.tomcat.util.digester.SetNextRule#end",
                                "color" : "#FFF",
                                "statistic" : null,
                                "hasSourceChange" : false,
                                "state" : null,
                                "inVMDeviationPredecessor" : 0.0,
                                "inVMDeviation" : 0.0,
                                "ess" : 15,
                                "children" : [ ]
                              }, {
                                "call" : "org.apache.tomcat.util.IntrospectionUtils#callMethod1",
                                "kiekerPattern" : "public static java.lang.Object org.apache.tomcat.util.IntrospectionUtils.callMethod1(java.lang.Object,java.lang.String,java.lang.Object,java.lang.String,java.lang.ClassLoader)",
                                "otherKiekerPattern" : null,
                                "module" : "",
                                "name" : "org.apache.tomcat.util.IntrospectionUtils#callMethod1",
                                "key" : "org.apache.tomcat.util.IntrospectionUtils.callMethod1_Object_String_Object_String_ClassLoader",
                                "otherKey" : null,
                                "parent" : "org.apache.tomcat.util.digester.SetNextRule#end",
                                "color" : "#FFF",
                                "statistic" : null,
                                "hasSourceChange" : false,
                                "state" : null,
                                "inVMDeviationPredecessor" : 0.0,
                                "inVMDeviation" : 0.0,
                                "ess" : 15,
                                "children" : [ {
                                  "call" : "org.apache.juli.logging.DirectJDKLog#isDebugEnabled",
                                  "kiekerPattern" : "public final boolean org.apache.juli.logging.DirectJDKLog.isDebugEnabled()",
                                  "otherKiekerPattern" : null,
                                  "module" : "",
                                  "name" : "org.apache.juli.logging.DirectJDKLog#isDebugEnabled",
                                  "key" : "org.apache.juli.logging.DirectJDKLog.isDebugEnabled_",
                                  "otherKey" : null,
                                  "parent" : "org.apache.tomcat.util.IntrospectionUtils#callMethod1",
                                  "color" : "#FFF",
                                  "statistic" : null,
                                  "hasSourceChange" : false,
                                  "state" : null,
                                  "inVMDeviationPredecessor" : 0.0,
                                  "inVMDeviation" : 0.0,
                                  "ess" : 16,
                                  "children" : [ ]
                                }, {
                                  "call" : "org.apache.tomcat.util.IntrospectionUtils#findMethod",
                                  "kiekerPattern" : "public static java.lang.reflect.Method org.apache.tomcat.util.IntrospectionUtils.findMethod(java.lang.Class,java.lang.String,java.lang.Class[])",
                                  "otherKiekerPattern" : null,
                                  "module" : "",
                                  "name" : "org.apache.tomcat.util.IntrospectionUtils#findMethod",
                                  "key" : "org.apache.tomcat.util.IntrospectionUtils.findMethod_Class_String_Class[]",
                                  "otherKey" : null,
                                  "parent" : "org.apache.tomcat.util.IntrospectionUtils#callMethod1",
                                  "color" : "#FFF",
                                  "statistic" : null,
                                  "hasSourceChange" : false,
                                  "state" : null,
                                  "inVMDeviationPredecessor" : 0.0,
                                  "inVMDeviation" : 0.0,
                                  "ess" : 16,
                                  "children" : [ {
                                    "call" : "org.apache.tomcat.util.IntrospectionUtils#findMethods",
                                    "kiekerPattern" : "public static java.lang.reflect.Method[] org.apache.tomcat.util.IntrospectionUtils.findMethods(java.lang.Class)",
                                    "otherKiekerPattern" : null,
                                    "module" : "",
                                    "name" : "org.apache.tomcat.util.IntrospectionUtils#findMethods",
                                    "key" : "org.apache.tomcat.util.IntrospectionUtils.findMethods_Class",
                                    "otherKey" : null,
                                    "parent" : "org.apache.tomcat.util.IntrospectionUtils#findMethod",
                                    "color" : "#FFF",
                                    "statistic" : null,
                                    "hasSourceChange" : false,
                                    "state" : null,
                                    "inVMDeviationPredecessor" : 0.0,
                                    "inVMDeviation" : 0.0,
                                    "ess" : 17,
                                    "children" : [ ]
                                  } ]
                                }, {
                                  "call" : "org.apache.tomcat.util.modeler.ManagedBean#addAttribute",
                                  "kiekerPattern" : "public void org.apache.tomcat.util.modeler.ManagedBean.addAttribute(org.apache.tomcat.util.modeler.AttributeInfo)",
                                  "otherKiekerPattern" : null,
                                  "module" : "",
                                  "name" : "org.apache.tomcat.util.modeler.ManagedBean#addAttribute",
                                  "key" : "org.apache.tomcat.util.modeler.ManagedBean.addAttribute_AttributeInfo",
                                  "otherKey" : null,
                                  "parent" : "org.apache.tomcat.util.IntrospectionUtils#callMethod1",
                                  "color" : "#FFF",
                                  "statistic" : null,
                                  "hasSourceChange" : false,
                                  "state" : null,
                                  "inVMDeviationPredecessor" : 0.0,
                                  "inVMDeviation" : 0.0,
                                  "ess" : 16,
                                  "children" : [ {
                                    "call" : "org.apache.tomcat.util.modeler.FeatureInfo#getName",
                                    "kiekerPattern" : "public java.lang.String org.apache.tomcat.util.modeler.FeatureInfo.getName()",
                                    "otherKiekerPattern" : null,
                                    "module" : "",
                                    "name" : "org.apache.tomcat.util.modeler.FeatureInfo#getName",
                                    "key" : "org.apache.tomcat.util.modeler.FeatureInfo.getName_",
                                    "otherKey" : null,
                                    "parent" : "org.apache.tomcat.util.modeler.ManagedBean#addAttribute",
                                    "color" : "#FFF",
                                    "statistic" : null,
                                    "hasSourceChange" : false,
                                    "state" : null,
                                    "inVMDeviationPredecessor" : 0.0,
                                    "inVMDeviation" : 0.0,
                                    "ess" : 17,
                                    "children" : [ ]
                                  } ]
                                }, {
                                  "call" : "org.apache.tomcat.util.modeler.ManagedBean#addOperation",
                                  "kiekerPattern" : "public void org.apache.tomcat.util.modeler.ManagedBean.addOperation(org.apache.tomcat.util.modeler.OperationInfo)",
                                  "otherKiekerPattern" : null,
                                  "module" : "",
                                  "name" : "org.apache.tomcat.util.modeler.ManagedBean#addOperation",
                                  "key" : "org.apache.tomcat.util.modeler.ManagedBean.addOperation_OperationInfo",
                                  "otherKey" : null,
                                  "parent" : "org.apache.tomcat.util.IntrospectionUtils#callMethod1",
                                  "color" : "#FFF",
                                  "statistic" : null,
                                  "hasSourceChange" : false,
                                  "state" : null,
                                  "inVMDeviationPredecessor" : 0.0,
                                  "inVMDeviation" : 0.0,
                                  "ess" : 16,
                                  "children" : [ {
                                    "call" : "org.apache.tomcat.util.modeler.ManagedBean#createOperationKey",
                                    "kiekerPattern" : "private java.lang.String org.apache.tomcat.util.modeler.ManagedBean.createOperationKey(org.apache.tomcat.util.modeler.OperationInfo)",
                                    "otherKiekerPattern" : null,
                                    "module" : "",
                                    "name" : "org.apache.tomcat.util.modeler.ManagedBean#createOperationKey",
                                    "key" : "org.apache.tomcat.util.modeler.ManagedBean.createOperationKey_OperationInfo",
                                    "otherKey" : null,
                                    "parent" : "org.apache.tomcat.util.modeler.ManagedBean#addOperation",
                                    "color" : "#FFF",
                                    "statistic" : null,
                                    "hasSourceChange" : false,
                                    "state" : null,
                                    "inVMDeviationPredecessor" : 0.0,
                                    "inVMDeviation" : 0.0,
                                    "ess" : 17,
                                    "children" : [ {
                                      "call" : "org.apache.tomcat.util.modeler.FeatureInfo#getName",
                                      "kiekerPattern" : "public java.lang.String org.apache.tomcat.util.modeler.FeatureInfo.getName()",
                                      "otherKiekerPattern" : null,
                                      "module" : "",
                                      "name" : "org.apache.tomcat.util.modeler.FeatureInfo#getName",
                                      "key" : "org.apache.tomcat.util.modeler.FeatureInfo.getName_",
                                      "otherKey" : null,
                                      "parent" : "org.apache.tomcat.util.modeler.ManagedBean#createOperationKey",
                                      "color" : "#FFF",
                                      "statistic" : null,
                                      "hasSourceChange" : false,
                                      "state" : null,
                                      "inVMDeviationPredecessor" : 0.0,
                                      "inVMDeviation" : 0.0,
                                      "ess" : 18,
                                      "children" : [ ]
                                    }, {
                                      "call" : "org.apache.tomcat.util.modeler.OperationInfo#getSignature",
                                      "kiekerPattern" : "public org.apache.tomcat.util.modeler.ParameterInfo[] org.apache.tomcat.util.modeler.OperationInfo.getSignature()",
                                      "otherKiekerPattern" : null,
                                      "module" : "",
                                      "name" : "org.apache.tomcat.util.modeler.OperationInfo#getSignature",
                                      "key" : "org.apache.tomcat.util.modeler.OperationInfo.getSignature_",
                                      "otherKey" : null,
                                      "parent" : "org.apache.tomcat.util.modeler.ManagedBean#createOperationKey",
                                      "color" : "#FFF",
                                      "statistic" : null,
                                      "hasSourceChange" : false,
                                      "state" : null,
                                      "inVMDeviationPredecessor" : 0.0,
                                      "inVMDeviation" : 0.0,
                                      "ess" : 18,
                                      "children" : [ ]
                                    }, {
                                      "call" : "org.apache.tomcat.util.buf.StringUtils#join",
                                      "kiekerPattern" : "public static void org.apache.tomcat.util.buf.StringUtils.join(org.apache.tomcat.util.buf.T[],char,java.util.function.Function,java.lang.StringBuilder)",
                                      "otherKiekerPattern" : null,
                                      "module" : "",
                                      "name" : "org.apache.tomcat.util.buf.StringUtils#join",
                                      "key" : "org.apache.tomcat.util.buf.StringUtils.join_T[]_char_Function_StringBuilder",
                                      "otherKey" : null,
                                      "parent" : "org.apache.tomcat.util.modeler.ManagedBean#createOperationKey",
                                      "color" : "#FFF",
                                      "statistic" : null,
                                      "hasSourceChange" : false,
                                      "state" : null,
                                      "inVMDeviationPredecessor" : 0.0,
                                      "inVMDeviation" : 0.0,
                                      "ess" : 18,
                                      "children" : [ {
                                        "call" : "org.apache.tomcat.util.buf.StringUtils#join",
                                        "kiekerPattern" : "public static void org.apache.tomcat.util.buf.StringUtils.join(java.lang.Iterable,char,java.util.function.Function,java.lang.StringBuilder)",
                                        "otherKiekerPattern" : null,
                                        "module" : "",
                                        "name" : "org.apache.tomcat.util.buf.StringUtils#join",
                                        "key" : "org.apache.tomcat.util.buf.StringUtils.join_Iterable_char_Function_StringBuilder",
                                        "otherKey" : null,
                                        "parent" : "org.apache.tomcat.util.buf.StringUtils#join",
                                        "color" : "#FFF",
                                        "statistic" : null,
                                        "hasSourceChange" : false,
                                        "state" : null,
                                        "inVMDeviationPredecessor" : 0.0,
                                        "inVMDeviation" : 0.0,
                                        "ess" : 19,
                                        "children" : [ {
                                          "call" : "org.apache.tomcat.util.modeler.FeatureInfo#getType",
                                          "kiekerPattern" : "public java.lang.String org.apache.tomcat.util.modeler.FeatureInfo.getType()",
                                          "otherKiekerPattern" : null,
                                          "module" : "",
                                          "name" : "org.apache.tomcat.util.modeler.FeatureInfo#getType",
                                          "key" : "org.apache.tomcat.util.modeler.FeatureInfo.getType_",
                                          "otherKey" : null,
                                          "parent" : "org.apache.tomcat.util.buf.StringUtils#join",
                                          "color" : "#FFF",
                                          "statistic" : null,
                                          "hasSourceChange" : false,
                                          "state" : null,
                                          "inVMDeviationPredecessor" : 0.0,
                                          "inVMDeviation" : 0.0,
                                          "ess" : 20,
                                          "children" : [ ]
                                        } ]
                                      } ]
                                    } ]
                                  } ]
                                }, {
                                  "call" : "org.apache.tomcat.util.modeler.OperationInfo#addParameter",
                                  "kiekerPattern" : "public void org.apache.tomcat.util.modeler.OperationInfo.addParameter(org.apache.tomcat.util.modeler.ParameterInfo)",
                                  "otherKiekerPattern" : null,
                                  "module" : "",
                                  "name" : "org.apache.tomcat.util.modeler.OperationInfo#addParameter",
                                  "key" : "org.apache.tomcat.util.modeler.OperationInfo.addParameter_ParameterInfo",
                                  "otherKey" : null,
                                  "parent" : "org.apache.tomcat.util.IntrospectionUtils#callMethod1",
                                  "color" : "#FFF",
                                  "statistic" : null,
                                  "hasSourceChange" : false,
                                  "state" : null,
                                  "inVMDeviationPredecessor" : 0.0,
                                  "inVMDeviation" : 0.0,
                                  "ess" : 16,
                                  "children" : [ ]
                                } ]
                              }, {
                                "call" : "org.apache.tomcat.util.digester.Digester#getGeneratedCode",
                                "kiekerPattern" : "public java.lang.StringBuilder org.apache.tomcat.util.digester.Digester.getGeneratedCode()",
                                "otherKiekerPattern" : null,
                                "module" : "",
                                "name" : "org.apache.tomcat.util.digester.Digester#getGeneratedCode",
                                "key" : "org.apache.tomcat.util.digester.Digester.getGeneratedCode_",
                                "otherKey" : null,
                                "parent" : "org.apache.tomcat.util.digester.SetNextRule#end",
                                "color" : "#FFF",
                                "statistic" : null,
                                "hasSourceChange" : false,
                                "state" : null,
                                "inVMDeviationPredecessor" : 0.0,
                                "inVMDeviation" : 0.0,
                                "ess" : 15,
                                "children" : [ ]
                              } ]
                            }, {
                              "call" : "org.apache.tomcat.util.digester.Rule#end",
                              "kiekerPattern" : "public void org.apache.tomcat.util.digester.Rule.end(java.lang.String,java.lang.String)",
                              "otherKiekerPattern" : null,
                              "module" : "",
                              "name" : "org.apache.tomcat.util.digester.Rule#end",
                              "key" : "org.apache.tomcat.util.digester.Rule.end_String_String",
                              "otherKey" : null,
                              "parent" : "org.apache.tomcat.util.digester.Digester#endElement",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ ]
                            }, {
                              "call" : "org.apache.tomcat.util.digester.ObjectCreateRule#end",
                              "kiekerPattern" : "public void org.apache.tomcat.util.digester.ObjectCreateRule.end(java.lang.String,java.lang.String)",
                              "otherKiekerPattern" : null,
                              "module" : "",
                              "name" : "org.apache.tomcat.util.digester.ObjectCreateRule#end",
                              "key" : "org.apache.tomcat.util.digester.ObjectCreateRule.end_String_String",
                              "otherKey" : null,
                              "parent" : "org.apache.tomcat.util.digester.Digester#endElement",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ {
                                "call" : "org.apache.tomcat.util.digester.Digester#pop",
                                "kiekerPattern" : "public java.lang.Object org.apache.tomcat.util.digester.Digester.pop()",
                                "otherKiekerPattern" : null,
                                "module" : "",
                                "name" : "org.apache.tomcat.util.digester.Digester#pop",
                                "key" : "org.apache.tomcat.util.digester.Digester.pop_",
                                "otherKey" : null,
                                "parent" : "org.apache.tomcat.util.digester.ObjectCreateRule#end",
                                "color" : "#FFF",
                                "statistic" : null,
                                "hasSourceChange" : false,
                                "state" : null,
                                "inVMDeviationPredecessor" : 0.0,
                                "inVMDeviation" : 0.0,
                                "ess" : 15,
                                "children" : [ {
                                  "call" : "org.apache.tomcat.util.digester.ArrayStack#pop",
                                  "kiekerPattern" : "public org.apache.tomcat.util.digester.E org.apache.tomcat.util.digester.ArrayStack.pop()",
                                  "otherKiekerPattern" : null,
                                  "module" : "",
                                  "name" : "org.apache.tomcat.util.digester.ArrayStack#pop",
                                  "key" : "org.apache.tomcat.util.digester.ArrayStack.pop_",
                                  "otherKey" : null,
                                  "parent" : "org.apache.tomcat.util.digester.Digester#pop",
                                  "color" : "#FFF",
                                  "statistic" : null,
                                  "hasSourceChange" : false,
                                  "state" : null,
                                  "inVMDeviationPredecessor" : 0.0,
                                  "inVMDeviation" : 0.0,
                                  "ess" : 16,
                                  "children" : [ ]
                                } ]
                              }, {
                                "call" : "org.apache.juli.logging.DirectJDKLog#isDebugEnabled",
                                "kiekerPattern" : "public final boolean org.apache.juli.logging.DirectJDKLog.isDebugEnabled()",
                                "otherKiekerPattern" : null,
                                "module" : "",
                                "name" : "org.apache.juli.logging.DirectJDKLog#isDebugEnabled",
                                "key" : "org.apache.juli.logging.DirectJDKLog.isDebugEnabled_",
                                "otherKey" : null,
                                "parent" : "org.apache.tomcat.util.digester.ObjectCreateRule#end",
                                "color" : "#FFF",
                                "statistic" : null,
                                "hasSourceChange" : false,
                                "state" : null,
                                "inVMDeviationPredecessor" : 0.0,
                                "inVMDeviation" : 0.0,
                                "ess" : 15,
                                "children" : [ ]
                              } ]
                            } ]
                          }, {
                            "call" : "org.apache.tomcat.util.digester.Digester#endDocument",
                            "kiekerPattern" : "public void org.apache.tomcat.util.digester.Digester.endDocument()",
                            "otherKiekerPattern" : null,
                            "module" : "",
                            "name" : "org.apache.tomcat.util.digester.Digester#endDocument",
                            "key" : "org.apache.tomcat.util.digester.Digester.endDocument_",
                            "otherKey" : null,
                            "parent" : "org.apache.tomcat.util.digester.Digester#parse",
                            "color" : "#FFF",
                            "statistic" : null,
                            "hasSourceChange" : false,
                            "state" : null,
                            "inVMDeviationPredecessor" : 0.0,
                            "inVMDeviation" : 0.0,
                            "ess" : 13,
                            "children" : [ {
                              "call" : "org.apache.juli.logging.DirectJDKLog#isDebugEnabled",
                              "kiekerPattern" : "public final boolean org.apache.juli.logging.DirectJDKLog.isDebugEnabled()",
                              "otherKiekerPattern" : null,
                              "module" : "",
                              "name" : "org.apache.juli.logging.DirectJDKLog#isDebugEnabled",
                              "key" : "org.apache.juli.logging.DirectJDKLog.isDebugEnabled_",
                              "otherKey" : null,
                              "parent" : "org.apache.tomcat.util.digester.Digester#endDocument",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ ]
                            }, {
                              "call" : "org.apache.tomcat.util.digester.Digester#getCount",
                              "kiekerPattern" : "public int org.apache.tomcat.util.digester.Digester.getCount()",
                              "otherKiekerPattern" : null,
                              "module" : "",
                              "name" : "org.apache.tomcat.util.digester.Digester#getCount",
                              "key" : "org.apache.tomcat.util.digester.Digester.getCount_",
                              "otherKey" : null,
                              "parent" : "org.apache.tomcat.util.digester.Digester#endDocument",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ ]
                            }, {
                              "call" : "org.apache.tomcat.util.digester.Digester#getRules",
                              "kiekerPattern" : "public org.apache.tomcat.util.digester.Rules org.apache.tomcat.util.digester.Digester.getRules()",
                              "otherKiekerPattern" : null,
                              "module" : "",
                              "name" : "org.apache.tomcat.util.digester.Digester#getRules",
                              "key" : "org.apache.tomcat.util.digester.Digester.getRules_",
                              "otherKey" : null,
                              "parent" : "org.apache.tomcat.util.digester.Digester#endDocument",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ ]
                            }, {
                              "call" : "org.apache.tomcat.util.digester.RulesBase#rules",
                              "kiekerPattern" : "public java.util.List org.apache.tomcat.util.digester.RulesBase.rules()",
                              "otherKiekerPattern" : null,
                              "module" : "",
                              "name" : "org.apache.tomcat.util.digester.RulesBase#rules",
                              "key" : "org.apache.tomcat.util.digester.RulesBase.rules_",
                              "otherKey" : null,
                              "parent" : "org.apache.tomcat.util.digester.Digester#endDocument",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ ]
                            }, {
                              "call" : "org.apache.tomcat.util.digester.Rule#finish",
                              "kiekerPattern" : "public void org.apache.tomcat.util.digester.Rule.finish()",
                              "otherKiekerPattern" : null,
                              "module" : "",
                              "name" : "org.apache.tomcat.util.digester.Rule#finish",
                              "key" : "org.apache.tomcat.util.digester.Rule.finish_",
                              "otherKey" : null,
                              "parent" : "org.apache.tomcat.util.digester.Digester#endDocument",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ ]
                            }, {
                              "call" : "org.apache.tomcat.util.digester.CallMethodRule#finish",
                              "kiekerPattern" : "public void org.apache.tomcat.util.digester.CallMethodRule.finish()",
                              "otherKiekerPattern" : null,
                              "module" : "",
                              "name" : "org.apache.tomcat.util.digester.CallMethodRule#finish",
                              "key" : "org.apache.tomcat.util.digester.CallMethodRule.finish_",
                              "otherKey" : null,
                              "parent" : "org.apache.tomcat.util.digester.Digester#endDocument",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ ]
                            }, {
                              "call" : "org.apache.tomcat.util.digester.Digester#clear",
                              "kiekerPattern" : "public void org.apache.tomcat.util.digester.Digester.clear()",
                              "otherKiekerPattern" : null,
                              "module" : "",
                              "name" : "org.apache.tomcat.util.digester.Digester#clear",
                              "key" : "org.apache.tomcat.util.digester.Digester.clear_",
                              "otherKey" : null,
                              "parent" : "org.apache.tomcat.util.digester.Digester#endDocument",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ ]
                            } ]
                          } ]
                        }, {
                          "call" : "org.apache.tomcat.util.digester.Digester#reset",
                          "kiekerPattern" : "public void org.apache.tomcat.util.digester.Digester.reset()",
                          "otherKiekerPattern" : null,
                          "module" : "",
                          "name" : "org.apache.tomcat.util.digester.Digester#reset",
                          "key" : "org.apache.tomcat.util.digester.Digester.reset_",
                          "otherKey" : null,
                          "parent" : "org.apache.tomcat.util.modeler.modules.MbeansDescriptorsDigesterSource#execute",
                          "color" : "#FFF",
                          "statistic" : null,
                          "hasSourceChange" : false,
                          "state" : null,
                          "inVMDeviationPredecessor" : 0.0,
                          "inVMDeviation" : 0.0,
                          "ess" : 12,
                          "children" : [ {
                            "call" : "org.apache.tomcat.util.digester.Digester#setErrorHandler",
                            "kiekerPattern" : "public void org.apache.tomcat.util.digester.Digester.setErrorHandler(org.xml.sax.ErrorHandler)",
                            "otherKiekerPattern" : null,
                            "module" : "",
                            "name" : "org.apache.tomcat.util.digester.Digester#setErrorHandler",
                            "key" : "org.apache.tomcat.util.digester.Digester.setErrorHandler_ErrorHandler",
                            "otherKey" : null,
                            "parent" : "org.apache.tomcat.util.digester.Digester#reset",
                            "color" : "#FFF",
                            "statistic" : null,
                            "hasSourceChange" : false,
                            "state" : null,
                            "inVMDeviationPredecessor" : 0.0,
                            "inVMDeviation" : 0.0,
                            "ess" : 13,
                            "children" : [ ]
                          }, {
                            "call" : "org.apache.tomcat.util.digester.Digester#clear",
                            "kiekerPattern" : "public void org.apache.tomcat.util.digester.Digester.clear()",
                            "otherKiekerPattern" : null,
                            "module" : "",
                            "name" : "org.apache.tomcat.util.digester.Digester#clear",
                            "key" : "org.apache.tomcat.util.digester.Digester.clear_",
                            "otherKey" : null,
                            "parent" : "org.apache.tomcat.util.digester.Digester#reset",
                            "color" : "#FFF",
                            "statistic" : null,
                            "hasSourceChange" : false,
                            "state" : null,
                            "inVMDeviationPredecessor" : 0.0,
                            "inVMDeviation" : 0.0,
                            "ess" : 13,
                            "children" : [ ]
                          } ]
                        }, {
                          "call" : "org.apache.tomcat.util.modeler.Registry#addManagedBean",
                          "kiekerPattern" : "public void org.apache.tomcat.util.modeler.Registry.addManagedBean(org.apache.tomcat.util.modeler.ManagedBean)",
                          "otherKiekerPattern" : null,
                          "module" : "",
                          "name" : "org.apache.tomcat.util.modeler.Registry#addManagedBean",
                          "key" : "org.apache.tomcat.util.modeler.Registry.addManagedBean_ManagedBean",
                          "otherKey" : null,
                          "parent" : "org.apache.tomcat.util.modeler.modules.MbeansDescriptorsDigesterSource#execute",
                          "color" : "#FFF",
                          "statistic" : null,
                          "hasSourceChange" : false,
                          "state" : null,
                          "inVMDeviationPredecessor" : 0.0,
                          "inVMDeviation" : 0.0,
                          "ess" : 12,
                          "children" : [ {
                            "call" : "org.apache.tomcat.util.modeler.ManagedBean#getName",
                            "kiekerPattern" : "public java.lang.String org.apache.tomcat.util.modeler.ManagedBean.getName()",
                            "otherKiekerPattern" : null,
                            "module" : "",
                            "name" : "org.apache.tomcat.util.modeler.ManagedBean#getName",
                            "key" : "org.apache.tomcat.util.modeler.ManagedBean.getName_",
                            "otherKey" : null,
                            "parent" : "org.apache.tomcat.util.modeler.Registry#addManagedBean",
                            "color" : "#FFF",
                            "statistic" : null,
                            "hasSourceChange" : false,
                            "state" : null,
                            "inVMDeviationPredecessor" : 0.0,
                            "inVMDeviation" : 0.0,
                            "ess" : 13,
                            "children" : [ ]
                          }, {
                            "call" : "org.apache.tomcat.util.modeler.ManagedBean#getType",
                            "kiekerPattern" : "public java.lang.String org.apache.tomcat.util.modeler.ManagedBean.getType()",
                            "otherKiekerPattern" : null,
                            "module" : "",
                            "name" : "org.apache.tomcat.util.modeler.ManagedBean#getType",
                            "key" : "org.apache.tomcat.util.modeler.ManagedBean.getType_",
                            "otherKey" : null,
                            "parent" : "org.apache.tomcat.util.modeler.Registry#addManagedBean",
                            "color" : "#FFF",
                            "statistic" : null,
                            "hasSourceChange" : false,
                            "state" : null,
                            "inVMDeviationPredecessor" : 0.0,
                            "inVMDeviation" : 0.0,
                            "ess" : 13,
                            "children" : [ ]
                          } ]
                        } ]
                      } ]
                    } ]
                  } ]
                } ]
              } ]
            }, {
              "call" : "org.apache.tomcat.util.modeler.ManagedBean#createMBean",
              "kiekerPattern" : "public javax.management.DynamicMBean org.apache.tomcat.util.modeler.ManagedBean.createMBean(java.lang.Object)",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.tomcat.util.modeler.ManagedBean#createMBean",
              "key" : "org.apache.tomcat.util.modeler.ManagedBean.createMBean_Object",
              "otherKey" : null,
              "parent" : "org.apache.tomcat.util.modeler.Registry#registerComponent",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ {
                "call" : "org.apache.tomcat.util.modeler.ManagedBean#getClassName",
                "kiekerPattern" : "public java.lang.String org.apache.tomcat.util.modeler.ManagedBean.getClassName()",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "org.apache.tomcat.util.modeler.ManagedBean#getClassName",
                "key" : "org.apache.tomcat.util.modeler.ManagedBean.getClassName_",
                "otherKey" : null,
                "parent" : "org.apache.tomcat.util.modeler.ManagedBean#createMBean",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              }, {
                "call" : "org.apache.tomcat.util.modeler.BaseModelMBean#<init>",
                "kiekerPattern" : "public new org.apache.tomcat.util.modeler.BaseModelMBean.<init>()",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "org.apache.tomcat.util.modeler.BaseModelMBean#<init>",
                "key" : "org.apache.tomcat.util.modeler.BaseModelMBean.<init>_",
                "otherKey" : null,
                "parent" : "org.apache.tomcat.util.modeler.ManagedBean#createMBean",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              }, {
                "call" : "org.apache.tomcat.util.modeler.BaseModelMBean#setManagedBean",
                "kiekerPattern" : "public void org.apache.tomcat.util.modeler.BaseModelMBean.setManagedBean(org.apache.tomcat.util.modeler.ManagedBean)",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "org.apache.tomcat.util.modeler.BaseModelMBean#setManagedBean",
                "key" : "org.apache.tomcat.util.modeler.BaseModelMBean.setManagedBean_ManagedBean",
                "otherKey" : null,
                "parent" : "org.apache.tomcat.util.modeler.ManagedBean#createMBean",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              }, {
                "call" : "org.apache.tomcat.util.modeler.BaseModelMBean#setManagedResource",
                "kiekerPattern" : "public void org.apache.tomcat.util.modeler.BaseModelMBean.setManagedResource(java.lang.Object,java.lang.String)",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "org.apache.tomcat.util.modeler.BaseModelMBean#setManagedResource",
                "key" : "org.apache.tomcat.util.modeler.BaseModelMBean.setManagedResource_Object_String",
                "otherKey" : null,
                "parent" : "org.apache.tomcat.util.modeler.ManagedBean#createMBean",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              } ]
            }, {
              "call" : "org.apache.tomcat.util.modeler.Registry#getMBeanServer",
              "kiekerPattern" : "public javax.management.MBeanServer org.apache.tomcat.util.modeler.Registry.getMBeanServer()",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.tomcat.util.modeler.Registry#getMBeanServer",
              "key" : "org.apache.tomcat.util.modeler.Registry.getMBeanServer_",
              "otherKey" : null,
              "parent" : "org.apache.tomcat.util.modeler.Registry#registerComponent",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ {
                "call" : "org.apache.juli.logging.DirectJDKLog#isDebugEnabled",
                "kiekerPattern" : "public final boolean org.apache.juli.logging.DirectJDKLog.isDebugEnabled()",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "org.apache.juli.logging.DirectJDKLog#isDebugEnabled",
                "key" : "org.apache.juli.logging.DirectJDKLog.isDebugEnabled_",
                "otherKey" : null,
                "parent" : "org.apache.tomcat.util.modeler.Registry#getMBeanServer",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              } ]
            }, {
              "call" : "org.apache.tomcat.util.modeler.BaseModelMBean#getMBeanInfo",
              "kiekerPattern" : "public javax.management.MBeanInfo org.apache.tomcat.util.modeler.BaseModelMBean.getMBeanInfo()",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.tomcat.util.modeler.BaseModelMBean#getMBeanInfo",
              "key" : "org.apache.tomcat.util.modeler.BaseModelMBean.getMBeanInfo_",
              "otherKey" : null,
              "parent" : "org.apache.tomcat.util.modeler.Registry#registerComponent",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ {
                "call" : "org.apache.tomcat.util.modeler.ManagedBean#getMBeanInfo",
                "kiekerPattern" : "javax.management.MBeanInfo org.apache.tomcat.util.modeler.ManagedBean.getMBeanInfo()",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "org.apache.tomcat.util.modeler.ManagedBean#getMBeanInfo",
                "key" : "org.apache.tomcat.util.modeler.ManagedBean.getMBeanInfo_",
                "otherKey" : null,
                "parent" : "org.apache.tomcat.util.modeler.BaseModelMBean#getMBeanInfo",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ {
                  "call" : "org.apache.tomcat.util.modeler.ManagedBean#getAttributes",
                  "kiekerPattern" : "public org.apache.tomcat.util.modeler.AttributeInfo[] org.apache.tomcat.util.modeler.ManagedBean.getAttributes()",
                  "otherKiekerPattern" : null,
                  "module" : "",
                  "name" : "org.apache.tomcat.util.modeler.ManagedBean#getAttributes",
                  "key" : "org.apache.tomcat.util.modeler.ManagedBean.getAttributes_",
                  "otherKey" : null,
                  "parent" : "org.apache.tomcat.util.modeler.ManagedBean#getMBeanInfo",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ ]
                }, {
                  "call" : "org.apache.tomcat.util.modeler.AttributeInfo#createAttributeInfo",
                  "kiekerPattern" : "javax.management.MBeanAttributeInfo org.apache.tomcat.util.modeler.AttributeInfo.createAttributeInfo()",
                  "otherKiekerPattern" : null,
                  "module" : "",
                  "name" : "org.apache.tomcat.util.modeler.AttributeInfo#createAttributeInfo",
                  "key" : "org.apache.tomcat.util.modeler.AttributeInfo.createAttributeInfo_",
                  "otherKey" : null,
                  "parent" : "org.apache.tomcat.util.modeler.ManagedBean#getMBeanInfo",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ {
                    "call" : "org.apache.tomcat.util.modeler.FeatureInfo#getName",
                    "kiekerPattern" : "public java.lang.String org.apache.tomcat.util.modeler.FeatureInfo.getName()",
                    "otherKiekerPattern" : null,
                    "module" : "",
                    "name" : "org.apache.tomcat.util.modeler.FeatureInfo#getName",
                    "key" : "org.apache.tomcat.util.modeler.FeatureInfo.getName_",
                    "otherKey" : null,
                    "parent" : "org.apache.tomcat.util.modeler.AttributeInfo#createAttributeInfo",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ ]
                  }, {
                    "call" : "org.apache.tomcat.util.modeler.FeatureInfo#getType",
                    "kiekerPattern" : "public java.lang.String org.apache.tomcat.util.modeler.FeatureInfo.getType()",
                    "otherKiekerPattern" : null,
                    "module" : "",
                    "name" : "org.apache.tomcat.util.modeler.FeatureInfo#getType",
                    "key" : "org.apache.tomcat.util.modeler.FeatureInfo.getType_",
                    "otherKey" : null,
                    "parent" : "org.apache.tomcat.util.modeler.AttributeInfo#createAttributeInfo",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ ]
                  }, {
                    "call" : "org.apache.tomcat.util.modeler.FeatureInfo#getDescription",
                    "kiekerPattern" : "public java.lang.String org.apache.tomcat.util.modeler.FeatureInfo.getDescription()",
                    "otherKiekerPattern" : null,
                    "module" : "",
                    "name" : "org.apache.tomcat.util.modeler.FeatureInfo#getDescription",
                    "key" : "org.apache.tomcat.util.modeler.FeatureInfo.getDescription_",
                    "otherKey" : null,
                    "parent" : "org.apache.tomcat.util.modeler.AttributeInfo#createAttributeInfo",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ ]
                  }, {
                    "call" : "org.apache.tomcat.util.modeler.AttributeInfo#isReadable",
                    "kiekerPattern" : "public boolean org.apache.tomcat.util.modeler.AttributeInfo.isReadable()",
                    "otherKiekerPattern" : null,
                    "module" : "",
                    "name" : "org.apache.tomcat.util.modeler.AttributeInfo#isReadable",
                    "key" : "org.apache.tomcat.util.modeler.AttributeInfo.isReadable_",
                    "otherKey" : null,
                    "parent" : "org.apache.tomcat.util.modeler.AttributeInfo#createAttributeInfo",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ ]
                  }, {
                    "call" : "org.apache.tomcat.util.modeler.AttributeInfo#isWriteable",
                    "kiekerPattern" : "public boolean org.apache.tomcat.util.modeler.AttributeInfo.isWriteable()",
                    "otherKiekerPattern" : null,
                    "module" : "",
                    "name" : "org.apache.tomcat.util.modeler.AttributeInfo#isWriteable",
                    "key" : "org.apache.tomcat.util.modeler.AttributeInfo.isWriteable_",
                    "otherKey" : null,
                    "parent" : "org.apache.tomcat.util.modeler.AttributeInfo#createAttributeInfo",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ ]
                  } ]
                }, {
                  "call" : "org.apache.tomcat.util.modeler.ManagedBean#getOperations",
                  "kiekerPattern" : "public org.apache.tomcat.util.modeler.OperationInfo[] org.apache.tomcat.util.modeler.ManagedBean.getOperations()",
                  "otherKiekerPattern" : null,
                  "module" : "",
                  "name" : "org.apache.tomcat.util.modeler.ManagedBean#getOperations",
                  "key" : "org.apache.tomcat.util.modeler.ManagedBean.getOperations_",
                  "otherKey" : null,
                  "parent" : "org.apache.tomcat.util.modeler.ManagedBean#getMBeanInfo",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ ]
                }, {
                  "call" : "org.apache.tomcat.util.modeler.OperationInfo#createOperationInfo",
                  "kiekerPattern" : "javax.management.MBeanOperationInfo org.apache.tomcat.util.modeler.OperationInfo.createOperationInfo()",
                  "otherKiekerPattern" : null,
                  "module" : "",
                  "name" : "org.apache.tomcat.util.modeler.OperationInfo#createOperationInfo",
                  "key" : "org.apache.tomcat.util.modeler.OperationInfo.createOperationInfo_",
                  "otherKey" : null,
                  "parent" : "org.apache.tomcat.util.modeler.ManagedBean#getMBeanInfo",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ {
                    "call" : "org.apache.tomcat.util.modeler.OperationInfo#getImpact",
                    "kiekerPattern" : "public java.lang.String org.apache.tomcat.util.modeler.OperationInfo.getImpact()",
                    "otherKiekerPattern" : null,
                    "module" : "",
                    "name" : "org.apache.tomcat.util.modeler.OperationInfo#getImpact",
                    "key" : "org.apache.tomcat.util.modeler.OperationInfo.getImpact_",
                    "otherKey" : null,
                    "parent" : "org.apache.tomcat.util.modeler.OperationInfo#createOperationInfo",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ ]
                  }, {
                    "call" : "org.apache.tomcat.util.modeler.FeatureInfo#getName",
                    "kiekerPattern" : "public java.lang.String org.apache.tomcat.util.modeler.FeatureInfo.getName()",
                    "otherKiekerPattern" : null,
                    "module" : "",
                    "name" : "org.apache.tomcat.util.modeler.FeatureInfo#getName",
                    "key" : "org.apache.tomcat.util.modeler.FeatureInfo.getName_",
                    "otherKey" : null,
                    "parent" : "org.apache.tomcat.util.modeler.OperationInfo#createOperationInfo",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ ]
                  }, {
                    "call" : "org.apache.tomcat.util.modeler.FeatureInfo#getDescription",
                    "kiekerPattern" : "public java.lang.String org.apache.tomcat.util.modeler.FeatureInfo.getDescription()",
                    "otherKiekerPattern" : null,
                    "module" : "",
                    "name" : "org.apache.tomcat.util.modeler.FeatureInfo#getDescription",
                    "key" : "org.apache.tomcat.util.modeler.FeatureInfo.getDescription_",
                    "otherKey" : null,
                    "parent" : "org.apache.tomcat.util.modeler.OperationInfo#createOperationInfo",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ ]
                  }, {
                    "call" : "org.apache.tomcat.util.modeler.OperationInfo#getMBeanParameterInfo",
                    "kiekerPattern" : "protected javax.management.MBeanParameterInfo[] org.apache.tomcat.util.modeler.OperationInfo.getMBeanParameterInfo()",
                    "otherKiekerPattern" : null,
                    "module" : "",
                    "name" : "org.apache.tomcat.util.modeler.OperationInfo#getMBeanParameterInfo",
                    "key" : "org.apache.tomcat.util.modeler.OperationInfo.getMBeanParameterInfo_",
                    "otherKey" : null,
                    "parent" : "org.apache.tomcat.util.modeler.OperationInfo#createOperationInfo",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ {
                      "call" : "org.apache.tomcat.util.modeler.OperationInfo#getSignature",
                      "kiekerPattern" : "public org.apache.tomcat.util.modeler.ParameterInfo[] org.apache.tomcat.util.modeler.OperationInfo.getSignature()",
                      "otherKiekerPattern" : null,
                      "module" : "",
                      "name" : "org.apache.tomcat.util.modeler.OperationInfo#getSignature",
                      "key" : "org.apache.tomcat.util.modeler.OperationInfo.getSignature_",
                      "otherKey" : null,
                      "parent" : "org.apache.tomcat.util.modeler.OperationInfo#getMBeanParameterInfo",
                      "color" : "#FFF",
                      "statistic" : null,
                      "hasSourceChange" : false,
                      "state" : null,
                      "inVMDeviationPredecessor" : 0.0,
                      "inVMDeviation" : 0.0,
                      "ess" : 10,
                      "children" : [ ]
                    } ]
                  }, {
                    "call" : "org.apache.tomcat.util.modeler.OperationInfo#getReturnType",
                    "kiekerPattern" : "public java.lang.String org.apache.tomcat.util.modeler.OperationInfo.getReturnType()",
                    "otherKiekerPattern" : null,
                    "module" : "",
                    "name" : "org.apache.tomcat.util.modeler.OperationInfo#getReturnType",
                    "key" : "org.apache.tomcat.util.modeler.OperationInfo.getReturnType_",
                    "otherKey" : null,
                    "parent" : "org.apache.tomcat.util.modeler.OperationInfo#createOperationInfo",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ ]
                  } ]
                }, {
                  "call" : "org.apache.tomcat.util.modeler.ManagedBean#getNotifications",
                  "kiekerPattern" : "public org.apache.tomcat.util.modeler.NotificationInfo[] org.apache.tomcat.util.modeler.ManagedBean.getNotifications()",
                  "otherKiekerPattern" : null,
                  "module" : "",
                  "name" : "org.apache.tomcat.util.modeler.ManagedBean#getNotifications",
                  "key" : "org.apache.tomcat.util.modeler.ManagedBean.getNotifications_",
                  "otherKey" : null,
                  "parent" : "org.apache.tomcat.util.modeler.ManagedBean#getMBeanInfo",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ ]
                }, {
                  "call" : "org.apache.tomcat.util.modeler.ManagedBean#getClassName",
                  "kiekerPattern" : "public java.lang.String org.apache.tomcat.util.modeler.ManagedBean.getClassName()",
                  "otherKiekerPattern" : null,
                  "module" : "",
                  "name" : "org.apache.tomcat.util.modeler.ManagedBean#getClassName",
                  "key" : "org.apache.tomcat.util.modeler.ManagedBean.getClassName_",
                  "otherKey" : null,
                  "parent" : "org.apache.tomcat.util.modeler.ManagedBean#getMBeanInfo",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ ]
                }, {
                  "call" : "org.apache.tomcat.util.modeler.ManagedBean#getDescription",
                  "kiekerPattern" : "public java.lang.String org.apache.tomcat.util.modeler.ManagedBean.getDescription()",
                  "otherKiekerPattern" : null,
                  "module" : "",
                  "name" : "org.apache.tomcat.util.modeler.ManagedBean#getDescription",
                  "key" : "org.apache.tomcat.util.modeler.ManagedBean.getDescription_",
                  "otherKey" : null,
                  "parent" : "org.apache.tomcat.util.modeler.ManagedBean#getMBeanInfo",
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
              "call" : "org.apache.tomcat.util.modeler.BaseModelMBean#preRegister",
              "kiekerPattern" : "public javax.management.ObjectName org.apache.tomcat.util.modeler.BaseModelMBean.preRegister(javax.management.MBeanServer,javax.management.ObjectName)",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.tomcat.util.modeler.BaseModelMBean#preRegister",
              "key" : "org.apache.tomcat.util.modeler.BaseModelMBean.preRegister_MBeanServer_ObjectName",
              "otherKey" : null,
              "parent" : "org.apache.tomcat.util.modeler.Registry#registerComponent",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ {
                "call" : "org.apache.juli.logging.DirectJDKLog#isDebugEnabled",
                "kiekerPattern" : "public final boolean org.apache.juli.logging.DirectJDKLog.isDebugEnabled()",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "org.apache.juli.logging.DirectJDKLog#isDebugEnabled",
                "key" : "org.apache.juli.logging.DirectJDKLog.isDebugEnabled_",
                "otherKey" : null,
                "parent" : "org.apache.tomcat.util.modeler.BaseModelMBean#preRegister",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              }, {
                "call" : "org.apache.catalina.util.LifecycleMBeanBase#preRegister",
                "kiekerPattern" : "public final javax.management.ObjectName org.apache.catalina.util.LifecycleMBeanBase.preRegister(javax.management.MBeanServer,javax.management.ObjectName)",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "org.apache.catalina.util.LifecycleMBeanBase#preRegister",
                "key" : "org.apache.catalina.util.LifecycleMBeanBase.preRegister_MBeanServer_ObjectName",
                "otherKey" : null,
                "parent" : "org.apache.tomcat.util.modeler.BaseModelMBean#preRegister",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              } ]
            }, {
              "call" : "org.apache.tomcat.util.modeler.BaseModelMBean#postRegister",
              "kiekerPattern" : "public void org.apache.tomcat.util.modeler.BaseModelMBean.postRegister(java.lang.Boolean)",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.tomcat.util.modeler.BaseModelMBean#postRegister",
              "key" : "org.apache.tomcat.util.modeler.BaseModelMBean.postRegister_Boolean",
              "otherKey" : null,
              "parent" : "org.apache.tomcat.util.modeler.Registry#registerComponent",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ {
                "call" : "org.apache.catalina.util.LifecycleMBeanBase#postRegister",
                "kiekerPattern" : "public final void org.apache.catalina.util.LifecycleMBeanBase.postRegister(java.lang.Boolean)",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "org.apache.catalina.util.LifecycleMBeanBase#postRegister",
                "key" : "org.apache.catalina.util.LifecycleMBeanBase.postRegister_Boolean",
                "otherKey" : null,
                "parent" : "org.apache.tomcat.util.modeler.BaseModelMBean#postRegister",
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
      } ]
    }, {
      "call" : "org.apache.catalina.util.LifecycleBase#setStateInternal",
      "kiekerPattern" : "private synchronized void org.apache.catalina.util.LifecycleBase.setStateInternal(org.apache.catalina.LifecycleState,java.lang.Object,boolean)",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "org.apache.catalina.util.LifecycleBase#setStateInternal",
      "key" : "org.apache.catalina.util.LifecycleBase.setStateInternal_LifecycleState_Object_boolean",
      "otherKey" : null,
      "parent" : "org.apache.catalina.util.LifecycleBase#start",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.apache.juli.logging.DirectJDKLog#isDebugEnabled",
        "kiekerPattern" : "public final boolean org.apache.juli.logging.DirectJDKLog.isDebugEnabled()",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "org.apache.juli.logging.DirectJDKLog#isDebugEnabled",
        "key" : "org.apache.juli.logging.DirectJDKLog.isDebugEnabled_",
        "otherKey" : null,
        "parent" : "org.apache.catalina.util.LifecycleBase#setStateInternal",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.apache.catalina.LifecycleState#getLifecycleEvent",
        "kiekerPattern" : "public java.lang.String org.apache.catalina.LifecycleState.getLifecycleEvent()",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "org.apache.catalina.LifecycleState#getLifecycleEvent",
        "key" : "org.apache.catalina.LifecycleState.getLifecycleEvent_",
        "otherKey" : null,
        "parent" : "org.apache.catalina.util.LifecycleBase#setStateInternal",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.apache.catalina.util.LifecycleBase#fireLifecycleEvent",
        "kiekerPattern" : "protected void org.apache.catalina.util.LifecycleBase.fireLifecycleEvent(java.lang.String,java.lang.Object)",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "org.apache.catalina.util.LifecycleBase#fireLifecycleEvent",
        "key" : "org.apache.catalina.util.LifecycleBase.fireLifecycleEvent_String_Object",
        "otherKey" : null,
        "parent" : "org.apache.catalina.util.LifecycleBase#setStateInternal",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.apache.catalina.LifecycleEvent#<init>",
          "kiekerPattern" : "public new org.apache.catalina.LifecycleEvent.<init>(org.apache.catalina.Lifecycle,java.lang.String,java.lang.Object)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.catalina.LifecycleEvent#<init>",
          "key" : "org.apache.catalina.LifecycleEvent.<init>_Lifecycle_String_Object",
          "otherKey" : null,
          "parent" : "org.apache.catalina.util.LifecycleBase#fireLifecycleEvent",
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
      "call" : "org.apache.catalina.loader.WebappLoader#startInternal",
      "kiekerPattern" : "protected void org.apache.catalina.loader.WebappLoader.startInternal()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "org.apache.catalina.loader.WebappLoader#startInternal",
      "key" : "org.apache.catalina.loader.WebappLoader.startInternal_",
      "otherKey" : null,
      "parent" : "org.apache.catalina.util.LifecycleBase#start",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.apache.juli.logging.DirectJDKLog#isDebugEnabled",
        "kiekerPattern" : "public final boolean org.apache.juli.logging.DirectJDKLog.isDebugEnabled()",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "org.apache.juli.logging.DirectJDKLog#isDebugEnabled",
        "key" : "org.apache.juli.logging.DirectJDKLog.isDebugEnabled_",
        "otherKey" : null,
        "parent" : "org.apache.catalina.loader.WebappLoader#startInternal",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.apache.catalina.core.StandardContext#getResources",
        "kiekerPattern" : "public org.apache.catalina.WebResourceRoot org.apache.catalina.core.StandardContext.getResources()",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "org.apache.catalina.core.StandardContext#getResources",
        "key" : "org.apache.catalina.core.StandardContext.getResources_",
        "otherKey" : null,
        "parent" : "org.apache.catalina.loader.WebappLoader#startInternal",
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
        "kiekerPattern" : "public java.lang.String org.apache.tomcat.util.res.StringManager.getString(java.lang.String,java.lang.Object)",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "org.apache.tomcat.util.res.StringManager#getString",
        "key" : "org.apache.tomcat.util.res.StringManager.getString_String_Object",
        "otherKey" : null,
        "parent" : "org.apache.catalina.loader.WebappLoader#startInternal",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.apache.tomcat.util.res.StringManager#getString",
          "kiekerPattern" : "public java.lang.String org.apache.tomcat.util.res.StringManager.getString(java.lang.String)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.tomcat.util.res.StringManager#getString",
          "key" : "org.apache.tomcat.util.res.StringManager.getString_String",
          "otherKey" : null,
          "parent" : "org.apache.tomcat.util.res.StringManager#getString",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.catalina.core.ContainerBase#toString",
          "kiekerPattern" : "public final java.lang.String org.apache.catalina.core.ContainerBase.toString()",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.catalina.core.ContainerBase#toString",
          "key" : "org.apache.catalina.core.ContainerBase.toString_",
          "otherKey" : null,
          "parent" : "org.apache.tomcat.util.res.StringManager#getString",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.apache.catalina.core.ContainerBase#getParent",
            "kiekerPattern" : "public org.apache.catalina.Container org.apache.catalina.core.ContainerBase.getParent()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.catalina.core.ContainerBase#getParent",
            "key" : "org.apache.catalina.core.ContainerBase.getParent_",
            "otherKey" : null,
            "parent" : "org.apache.catalina.core.ContainerBase#toString",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.apache.catalina.core.ContainerBase#toString",
            "kiekerPattern" : "public final java.lang.String org.apache.catalina.core.ContainerBase.toString()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.catalina.core.ContainerBase#toString",
            "key" : "org.apache.catalina.core.ContainerBase.toString_",
            "otherKey" : null,
            "parent" : "org.apache.catalina.core.ContainerBase#toString",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ {
              "call" : "org.apache.catalina.core.ContainerBase#getParent",
              "kiekerPattern" : "public org.apache.catalina.Container org.apache.catalina.core.ContainerBase.getParent()",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.catalina.core.ContainerBase#getParent",
              "key" : "org.apache.catalina.core.ContainerBase.getParent_",
              "otherKey" : null,
              "parent" : "org.apache.catalina.core.ContainerBase#toString",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            }, {
              "call" : "org.apache.catalina.core.ContainerBase#toString",
              "kiekerPattern" : "public final java.lang.String org.apache.catalina.core.ContainerBase.toString()",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.catalina.core.ContainerBase#toString",
              "key" : "org.apache.catalina.core.ContainerBase.toString_",
              "otherKey" : null,
              "parent" : "org.apache.catalina.core.ContainerBase#toString",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ {
                "call" : "org.apache.catalina.core.ContainerBase#getParent",
                "kiekerPattern" : "public org.apache.catalina.Container org.apache.catalina.core.ContainerBase.getParent()",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "org.apache.catalina.core.ContainerBase#getParent",
                "key" : "org.apache.catalina.core.ContainerBase.getParent_",
                "otherKey" : null,
                "parent" : "org.apache.catalina.core.ContainerBase#toString",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              }, {
                "call" : "org.apache.catalina.core.ContainerBase#getName",
                "kiekerPattern" : "public java.lang.String org.apache.catalina.core.ContainerBase.getName()",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "org.apache.catalina.core.ContainerBase#getName",
                "key" : "org.apache.catalina.core.ContainerBase.getName_",
                "otherKey" : null,
                "parent" : "org.apache.catalina.core.ContainerBase#toString",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              } ]
            }, {
              "call" : "org.apache.catalina.core.StandardHost#getName",
              "kiekerPattern" : "public java.lang.String org.apache.catalina.core.StandardHost.getName()",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.catalina.core.StandardHost#getName",
              "key" : "org.apache.catalina.core.StandardHost.getName_",
              "otherKey" : null,
              "parent" : "org.apache.catalina.core.ContainerBase#toString",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            } ]
          }, {
            "call" : "org.apache.catalina.core.ContainerBase#getName",
            "kiekerPattern" : "public java.lang.String org.apache.catalina.core.ContainerBase.getName()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.catalina.core.ContainerBase#getName",
            "key" : "org.apache.catalina.core.ContainerBase.getName_",
            "otherKey" : null,
            "parent" : "org.apache.catalina.core.ContainerBase#toString",
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
      }, {
        "call" : "org.apache.juli.logging.DirectJDKLog#info",
        "kiekerPattern" : "public final void org.apache.juli.logging.DirectJDKLog.info(java.lang.Object)",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "org.apache.juli.logging.DirectJDKLog#info",
        "key" : "org.apache.juli.logging.DirectJDKLog.info_Object",
        "otherKey" : null,
        "parent" : "org.apache.catalina.loader.WebappLoader#startInternal",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.apache.juli.logging.DirectJDKLog#log",
          "kiekerPattern" : "private void org.apache.juli.logging.DirectJDKLog.log(java.util.logging.Level,java.lang.String,java.lang.Throwable)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.juli.logging.DirectJDKLog#log",
          "key" : "org.apache.juli.logging.DirectJDKLog.log_Level_String_Throwable",
          "otherKey" : null,
          "parent" : "org.apache.juli.logging.DirectJDKLog#info",
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
        "call" : "org.apache.catalina.util.LifecycleBase#setState",
        "kiekerPattern" : "protected synchronized void org.apache.catalina.util.LifecycleBase.setState(org.apache.catalina.LifecycleState)",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "org.apache.catalina.util.LifecycleBase#setState",
        "key" : "org.apache.catalina.util.LifecycleBase.setState_LifecycleState",
        "otherKey" : null,
        "parent" : "org.apache.catalina.loader.WebappLoader#startInternal",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.apache.catalina.util.LifecycleBase#setStateInternal",
          "kiekerPattern" : "private synchronized void org.apache.catalina.util.LifecycleBase.setStateInternal(org.apache.catalina.LifecycleState,java.lang.Object,boolean)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.catalina.util.LifecycleBase#setStateInternal",
          "key" : "org.apache.catalina.util.LifecycleBase.setStateInternal_LifecycleState_Object_boolean",
          "otherKey" : null,
          "parent" : "org.apache.catalina.util.LifecycleBase#setState",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.apache.juli.logging.DirectJDKLog#isDebugEnabled",
            "kiekerPattern" : "public final boolean org.apache.juli.logging.DirectJDKLog.isDebugEnabled()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.juli.logging.DirectJDKLog#isDebugEnabled",
            "key" : "org.apache.juli.logging.DirectJDKLog.isDebugEnabled_",
            "otherKey" : null,
            "parent" : "org.apache.catalina.util.LifecycleBase#setStateInternal",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.apache.catalina.LifecycleState#getLifecycleEvent",
            "kiekerPattern" : "public java.lang.String org.apache.catalina.LifecycleState.getLifecycleEvent()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.catalina.LifecycleState#getLifecycleEvent",
            "key" : "org.apache.catalina.LifecycleState.getLifecycleEvent_",
            "otherKey" : null,
            "parent" : "org.apache.catalina.util.LifecycleBase#setStateInternal",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.apache.catalina.util.LifecycleBase#fireLifecycleEvent",
            "kiekerPattern" : "protected void org.apache.catalina.util.LifecycleBase.fireLifecycleEvent(java.lang.String,java.lang.Object)",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.catalina.util.LifecycleBase#fireLifecycleEvent",
            "key" : "org.apache.catalina.util.LifecycleBase.fireLifecycleEvent_String_Object",
            "otherKey" : null,
            "parent" : "org.apache.catalina.util.LifecycleBase#setStateInternal",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ {
              "call" : "org.apache.catalina.LifecycleEvent#<init>",
              "kiekerPattern" : "public new org.apache.catalina.LifecycleEvent.<init>(org.apache.catalina.Lifecycle,java.lang.String,java.lang.Object)",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.catalina.LifecycleEvent#<init>",
              "key" : "org.apache.catalina.LifecycleEvent.<init>_Lifecycle_String_Object",
              "otherKey" : null,
              "parent" : "org.apache.catalina.util.LifecycleBase#fireLifecycleEvent",
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
    } ]
  }, {
    "call" : "org.apache.catalina.util.LifecycleBase#stop",
    "kiekerPattern" : "public final synchronized void org.apache.catalina.util.LifecycleBase.stop()",
    "otherKiekerPattern" : null,
    "module" : "",
    "name" : "org.apache.catalina.util.LifecycleBase#stop",
    "key" : "org.apache.catalina.util.LifecycleBase.stop_",
    "otherKey" : null,
    "parent" : "org.apache.catalina.loader.TestVirtualWebappLoader#testLoaderInstance",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ {
      "call" : "org.apache.catalina.util.LifecycleBase#setStateInternal",
      "kiekerPattern" : "private synchronized void org.apache.catalina.util.LifecycleBase.setStateInternal(org.apache.catalina.LifecycleState,java.lang.Object,boolean)",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "org.apache.catalina.util.LifecycleBase#setStateInternal",
      "key" : "org.apache.catalina.util.LifecycleBase.setStateInternal_LifecycleState_Object_boolean",
      "otherKey" : null,
      "parent" : "org.apache.catalina.util.LifecycleBase#stop",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.apache.juli.logging.DirectJDKLog#isDebugEnabled",
        "kiekerPattern" : "public final boolean org.apache.juli.logging.DirectJDKLog.isDebugEnabled()",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "org.apache.juli.logging.DirectJDKLog#isDebugEnabled",
        "key" : "org.apache.juli.logging.DirectJDKLog.isDebugEnabled_",
        "otherKey" : null,
        "parent" : "org.apache.catalina.util.LifecycleBase#setStateInternal",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.apache.catalina.LifecycleState#getLifecycleEvent",
        "kiekerPattern" : "public java.lang.String org.apache.catalina.LifecycleState.getLifecycleEvent()",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "org.apache.catalina.LifecycleState#getLifecycleEvent",
        "key" : "org.apache.catalina.LifecycleState.getLifecycleEvent_",
        "otherKey" : null,
        "parent" : "org.apache.catalina.util.LifecycleBase#setStateInternal",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.apache.catalina.util.LifecycleBase#fireLifecycleEvent",
        "kiekerPattern" : "protected void org.apache.catalina.util.LifecycleBase.fireLifecycleEvent(java.lang.String,java.lang.Object)",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "org.apache.catalina.util.LifecycleBase#fireLifecycleEvent",
        "key" : "org.apache.catalina.util.LifecycleBase.fireLifecycleEvent_String_Object",
        "otherKey" : null,
        "parent" : "org.apache.catalina.util.LifecycleBase#setStateInternal",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.apache.catalina.LifecycleEvent#<init>",
          "kiekerPattern" : "public new org.apache.catalina.LifecycleEvent.<init>(org.apache.catalina.Lifecycle,java.lang.String,java.lang.Object)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.catalina.LifecycleEvent#<init>",
          "key" : "org.apache.catalina.LifecycleEvent.<init>_Lifecycle_String_Object",
          "otherKey" : null,
          "parent" : "org.apache.catalina.util.LifecycleBase#fireLifecycleEvent",
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
      "call" : "org.apache.catalina.loader.WebappLoader#stopInternal",
      "kiekerPattern" : "protected void org.apache.catalina.loader.WebappLoader.stopInternal()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "org.apache.catalina.loader.WebappLoader#stopInternal",
      "key" : "org.apache.catalina.loader.WebappLoader.stopInternal_",
      "otherKey" : null,
      "parent" : "org.apache.catalina.util.LifecycleBase#stop",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.apache.juli.logging.DirectJDKLog#isDebugEnabled",
        "kiekerPattern" : "public final boolean org.apache.juli.logging.DirectJDKLog.isDebugEnabled()",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "org.apache.juli.logging.DirectJDKLog#isDebugEnabled",
        "key" : "org.apache.juli.logging.DirectJDKLog.isDebugEnabled_",
        "otherKey" : null,
        "parent" : "org.apache.catalina.loader.WebappLoader#stopInternal",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.apache.catalina.util.LifecycleBase#setState",
        "kiekerPattern" : "protected synchronized void org.apache.catalina.util.LifecycleBase.setState(org.apache.catalina.LifecycleState)",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "org.apache.catalina.util.LifecycleBase#setState",
        "key" : "org.apache.catalina.util.LifecycleBase.setState_LifecycleState",
        "otherKey" : null,
        "parent" : "org.apache.catalina.loader.WebappLoader#stopInternal",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.apache.catalina.util.LifecycleBase#setStateInternal",
          "kiekerPattern" : "private synchronized void org.apache.catalina.util.LifecycleBase.setStateInternal(org.apache.catalina.LifecycleState,java.lang.Object,boolean)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.catalina.util.LifecycleBase#setStateInternal",
          "key" : "org.apache.catalina.util.LifecycleBase.setStateInternal_LifecycleState_Object_boolean",
          "otherKey" : null,
          "parent" : "org.apache.catalina.util.LifecycleBase#setState",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.apache.juli.logging.DirectJDKLog#isDebugEnabled",
            "kiekerPattern" : "public final boolean org.apache.juli.logging.DirectJDKLog.isDebugEnabled()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.juli.logging.DirectJDKLog#isDebugEnabled",
            "key" : "org.apache.juli.logging.DirectJDKLog.isDebugEnabled_",
            "otherKey" : null,
            "parent" : "org.apache.catalina.util.LifecycleBase#setStateInternal",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.apache.catalina.LifecycleState#getLifecycleEvent",
            "kiekerPattern" : "public java.lang.String org.apache.catalina.LifecycleState.getLifecycleEvent()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.catalina.LifecycleState#getLifecycleEvent",
            "key" : "org.apache.catalina.LifecycleState.getLifecycleEvent_",
            "otherKey" : null,
            "parent" : "org.apache.catalina.util.LifecycleBase#setStateInternal",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.apache.catalina.util.LifecycleBase#fireLifecycleEvent",
            "kiekerPattern" : "protected void org.apache.catalina.util.LifecycleBase.fireLifecycleEvent(java.lang.String,java.lang.Object)",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.catalina.util.LifecycleBase#fireLifecycleEvent",
            "key" : "org.apache.catalina.util.LifecycleBase.fireLifecycleEvent_String_Object",
            "otherKey" : null,
            "parent" : "org.apache.catalina.util.LifecycleBase#setStateInternal",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ {
              "call" : "org.apache.catalina.LifecycleEvent#<init>",
              "kiekerPattern" : "public new org.apache.catalina.LifecycleEvent.<init>(org.apache.catalina.Lifecycle,java.lang.String,java.lang.Object)",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.catalina.LifecycleEvent#<init>",
              "key" : "org.apache.catalina.LifecycleEvent.<init>_Lifecycle_String_Object",
              "otherKey" : null,
              "parent" : "org.apache.catalina.util.LifecycleBase#fireLifecycleEvent",
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
        "call" : "org.apache.catalina.core.StandardContext#getServletContext",
        "kiekerPattern" : "public jakarta.servlet.ServletContext org.apache.catalina.core.StandardContext.getServletContext()",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "org.apache.catalina.core.StandardContext#getServletContext",
        "key" : "org.apache.catalina.core.StandardContext.getServletContext_",
        "otherKey" : null,
        "parent" : "org.apache.catalina.loader.WebappLoader#stopInternal",
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
          "name" : "org.apache.tomcat.util.res.StringManager#getManager",
          "key" : "org.apache.tomcat.util.res.StringManager.getManager_String",
          "otherKey" : null,
          "parent" : "org.apache.catalina.core.StandardContext#getServletContext",
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
            "ess" : 5,
            "children" : [ ]
          } ]
        }, {
          "call" : "org.apache.catalina.core.ApplicationContextFacade#<init>",
          "kiekerPattern" : "public new org.apache.catalina.core.ApplicationContextFacade.<init>(org.apache.catalina.core.ApplicationContext)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.catalina.core.ApplicationContextFacade#<init>",
          "key" : "org.apache.catalina.core.ApplicationContextFacade.<init>_ApplicationContext",
          "otherKey" : null,
          "parent" : "org.apache.catalina.core.StandardContext#getServletContext",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.apache.catalina.core.ApplicationContextFacade#initClassCache",
            "kiekerPattern" : "private void org.apache.catalina.core.ApplicationContextFacade.initClassCache()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.catalina.core.ApplicationContextFacade#initClassCache",
            "key" : "org.apache.catalina.core.ApplicationContextFacade.initClassCache_",
            "otherKey" : null,
            "parent" : "org.apache.catalina.core.ApplicationContextFacade#<init>",
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
          "call" : "org.apache.catalina.core.ApplicationContext#<init>",
          "kiekerPattern" : "public new org.apache.catalina.core.ApplicationContext.<init>(org.apache.catalina.core.StandardContext)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.catalina.core.ApplicationContext#<init>",
          "key" : "org.apache.catalina.core.ApplicationContext.<init>_StandardContext",
          "otherKey" : null,
          "parent" : "org.apache.catalina.core.StandardContext#getServletContext",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.apache.catalina.core.ContainerBase#getParent",
            "kiekerPattern" : "public org.apache.catalina.Container org.apache.catalina.core.ContainerBase.getParent()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.catalina.core.ContainerBase#getParent",
            "key" : "org.apache.catalina.core.ContainerBase.getParent_",
            "otherKey" : null,
            "parent" : "org.apache.catalina.core.ApplicationContext#<init>",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.apache.catalina.core.StandardEngine#getService",
            "kiekerPattern" : "public org.apache.catalina.Service org.apache.catalina.core.StandardEngine.getService()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.catalina.core.StandardEngine#getService",
            "key" : "org.apache.catalina.core.StandardEngine.getService_",
            "otherKey" : null,
            "parent" : "org.apache.catalina.core.ApplicationContext#<init>",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.apache.tomcat.util.res.StringManager#getManager",
            "kiekerPattern" : "public static final org.apache.tomcat.util.res.StringManager org.apache.tomcat.util.res.StringManager.getManager(java.lang.String)",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.tomcat.util.res.StringManager#getManager",
            "key" : "org.apache.tomcat.util.res.StringManager.getManager_String",
            "otherKey" : null,
            "parent" : "org.apache.catalina.core.ApplicationContext#<init>",
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
              "ess" : 6,
              "children" : [ ]
            } ]
          }, {
            "call" : "org.apache.catalina.core.ApplicationSessionCookieConfig#<init>",
            "kiekerPattern" : "public new org.apache.catalina.core.ApplicationSessionCookieConfig.<init>(org.apache.catalina.core.StandardContext)",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.catalina.core.ApplicationSessionCookieConfig#<init>",
            "key" : "org.apache.catalina.core.ApplicationSessionCookieConfig.<init>_StandardContext",
            "otherKey" : null,
            "parent" : "org.apache.catalina.core.ApplicationContext#<init>",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.apache.catalina.core.ApplicationContext#populateSessionTrackingModes",
            "kiekerPattern" : "private void org.apache.catalina.core.ApplicationContext.populateSessionTrackingModes()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.catalina.core.ApplicationContext#populateSessionTrackingModes",
            "key" : "org.apache.catalina.core.ApplicationContext.populateSessionTrackingModes_",
            "otherKey" : null,
            "parent" : "org.apache.catalina.core.ApplicationContext#<init>",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ {
              "call" : "jakarta.servlet.SessionTrackingMode#<init>",
              "kiekerPattern" : "public new jakarta.servlet.SessionTrackingMode.<init>()",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "jakarta.servlet.SessionTrackingMode#<init>",
              "key" : "jakarta.servlet.SessionTrackingMode.<init>_",
              "otherKey" : null,
              "parent" : "org.apache.catalina.core.ApplicationContext#populateSessionTrackingModes",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            }, {
              "call" : "org.apache.catalina.core.StandardContext#getCookies",
              "kiekerPattern" : "public boolean org.apache.catalina.core.StandardContext.getCookies()",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.catalina.core.StandardContext#getCookies",
              "key" : "org.apache.catalina.core.StandardContext.getCookies_",
              "otherKey" : null,
              "parent" : "org.apache.catalina.core.ApplicationContext#populateSessionTrackingModes",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            }, {
              "call" : "org.apache.catalina.core.StandardService#findConnectors",
              "kiekerPattern" : "public org.apache.catalina.connector.Connector[] org.apache.catalina.core.StandardService.findConnectors()",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.catalina.core.StandardService#findConnectors",
              "key" : "org.apache.catalina.core.StandardService.findConnectors_",
              "otherKey" : null,
              "parent" : "org.apache.catalina.core.ApplicationContext#populateSessionTrackingModes",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            }, {
              "call" : "org.apache.catalina.connector.Connector#getProperty",
              "kiekerPattern" : "public java.lang.Object org.apache.catalina.connector.Connector.getProperty(java.lang.String)",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.catalina.connector.Connector#getProperty",
              "key" : "org.apache.catalina.connector.Connector.getProperty_String",
              "otherKey" : null,
              "parent" : "org.apache.catalina.core.ApplicationContext#populateSessionTrackingModes",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ {
                "call" : "org.apache.tomcat.util.IntrospectionUtils#getProperty",
                "kiekerPattern" : "public static java.lang.Object org.apache.tomcat.util.IntrospectionUtils.getProperty(java.lang.Object,java.lang.String)",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "org.apache.tomcat.util.IntrospectionUtils#getProperty",
                "key" : "org.apache.tomcat.util.IntrospectionUtils.getProperty_Object_String",
                "otherKey" : null,
                "parent" : "org.apache.catalina.connector.Connector#getProperty",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ {
                  "call" : "org.apache.tomcat.util.XReflectionIntrospectionUtils#isEnabled",
                  "kiekerPattern" : "static boolean org.apache.tomcat.util.XReflectionIntrospectionUtils.isEnabled()",
                  "otherKiekerPattern" : null,
                  "module" : "",
                  "name" : "org.apache.tomcat.util.XReflectionIntrospectionUtils#isEnabled",
                  "key" : "org.apache.tomcat.util.XReflectionIntrospectionUtils.isEnabled_",
                  "otherKey" : null,
                  "parent" : "org.apache.tomcat.util.IntrospectionUtils#getProperty",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ ]
                }, {
                  "call" : "org.apache.tomcat.util.IntrospectionUtils#capitalize",
                  "kiekerPattern" : "public static java.lang.String org.apache.tomcat.util.IntrospectionUtils.capitalize(java.lang.String)",
                  "otherKiekerPattern" : null,
                  "module" : "",
                  "name" : "org.apache.tomcat.util.IntrospectionUtils#capitalize",
                  "key" : "org.apache.tomcat.util.IntrospectionUtils.capitalize_String",
                  "otherKey" : null,
                  "parent" : "org.apache.tomcat.util.IntrospectionUtils#getProperty",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ ]
                }, {
                  "call" : "org.apache.tomcat.util.IntrospectionUtils#findMethods",
                  "kiekerPattern" : "public static java.lang.reflect.Method[] org.apache.tomcat.util.IntrospectionUtils.findMethods(java.lang.Class)",
                  "otherKiekerPattern" : null,
                  "module" : "",
                  "name" : "org.apache.tomcat.util.IntrospectionUtils#findMethods",
                  "key" : "org.apache.tomcat.util.IntrospectionUtils.findMethods_Class",
                  "otherKey" : null,
                  "parent" : "org.apache.tomcat.util.IntrospectionUtils#getProperty",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ ]
                }, {
                  "call" : "org.apache.coyote.http11.AbstractHttp11Protocol#isSSLEnabled",
                  "kiekerPattern" : "public boolean org.apache.coyote.http11.AbstractHttp11Protocol.isSSLEnabled()",
                  "otherKiekerPattern" : null,
                  "module" : "",
                  "name" : "org.apache.coyote.http11.AbstractHttp11Protocol#isSSLEnabled",
                  "key" : "org.apache.coyote.http11.AbstractHttp11Protocol.isSSLEnabled_",
                  "otherKey" : null,
                  "parent" : "org.apache.tomcat.util.IntrospectionUtils#getProperty",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ {
                    "call" : "org.apache.coyote.http11.AbstractHttp11JsseProtocol#getEndpoint",
                    "kiekerPattern" : "protected org.apache.tomcat.util.net.AbstractJsseEndpoint org.apache.coyote.http11.AbstractHttp11JsseProtocol.getEndpoint()",
                    "otherKiekerPattern" : null,
                    "module" : "",
                    "name" : "org.apache.coyote.http11.AbstractHttp11JsseProtocol#getEndpoint",
                    "key" : "org.apache.coyote.http11.AbstractHttp11JsseProtocol.getEndpoint_",
                    "otherKey" : null,
                    "parent" : "org.apache.coyote.http11.AbstractHttp11Protocol#isSSLEnabled",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ {
                      "call" : "org.apache.coyote.http11.AbstractHttp11Protocol#getEndpoint",
                      "kiekerPattern" : "protected org.apache.tomcat.util.net.AbstractEndpoint org.apache.coyote.http11.AbstractHttp11Protocol.getEndpoint()",
                      "otherKiekerPattern" : null,
                      "module" : "",
                      "name" : "org.apache.coyote.http11.AbstractHttp11Protocol#getEndpoint",
                      "key" : "org.apache.coyote.http11.AbstractHttp11Protocol.getEndpoint_",
                      "otherKey" : null,
                      "parent" : "org.apache.coyote.http11.AbstractHttp11JsseProtocol#getEndpoint",
                      "color" : "#FFF",
                      "statistic" : null,
                      "hasSourceChange" : false,
                      "state" : null,
                      "inVMDeviationPredecessor" : 0.0,
                      "inVMDeviation" : 0.0,
                      "ess" : 10,
                      "children" : [ {
                        "call" : "org.apache.coyote.AbstractProtocol#getEndpoint",
                        "kiekerPattern" : "protected org.apache.tomcat.util.net.AbstractEndpoint org.apache.coyote.AbstractProtocol.getEndpoint()",
                        "otherKiekerPattern" : null,
                        "module" : "",
                        "name" : "org.apache.coyote.AbstractProtocol#getEndpoint",
                        "key" : "org.apache.coyote.AbstractProtocol.getEndpoint_",
                        "otherKey" : null,
                        "parent" : "org.apache.coyote.http11.AbstractHttp11Protocol#getEndpoint",
                        "color" : "#FFF",
                        "statistic" : null,
                        "hasSourceChange" : false,
                        "state" : null,
                        "inVMDeviationPredecessor" : 0.0,
                        "inVMDeviation" : 0.0,
                        "ess" : 11,
                        "children" : [ ]
                      } ]
                    } ]
                  }, {
                    "call" : "org.apache.tomcat.util.net.AbstractEndpoint#isSSLEnabled",
                    "kiekerPattern" : "public boolean org.apache.tomcat.util.net.AbstractEndpoint.isSSLEnabled()",
                    "otherKiekerPattern" : null,
                    "module" : "",
                    "name" : "org.apache.tomcat.util.net.AbstractEndpoint#isSSLEnabled",
                    "key" : "org.apache.tomcat.util.net.AbstractEndpoint.isSSLEnabled_",
                    "otherKey" : null,
                    "parent" : "org.apache.coyote.http11.AbstractHttp11Protocol#isSSLEnabled",
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
        }, {
          "call" : "org.apache.catalina.core.ApplicationContext#getFacade",
          "kiekerPattern" : "protected jakarta.servlet.ServletContext org.apache.catalina.core.ApplicationContext.getFacade()",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.catalina.core.ApplicationContext#getFacade",
          "key" : "org.apache.catalina.core.ApplicationContext.getFacade_",
          "otherKey" : null,
          "parent" : "org.apache.catalina.core.StandardContext#getServletContext",
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
        "call" : "org.apache.catalina.core.ApplicationContextFacade#removeAttribute",
        "kiekerPattern" : "public void org.apache.catalina.core.ApplicationContextFacade.removeAttribute(java.lang.String)",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "org.apache.catalina.core.ApplicationContextFacade#removeAttribute",
        "key" : "org.apache.catalina.core.ApplicationContextFacade.removeAttribute_String",
        "otherKey" : null,
        "parent" : "org.apache.catalina.loader.WebappLoader#stopInternal",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.apache.juli.logging.LogFactory#getLog",
          "kiekerPattern" : "public static org.apache.juli.logging.Log org.apache.juli.logging.LogFactory.getLog(java.lang.Class)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.juli.logging.LogFactory#getLog",
          "key" : "org.apache.juli.logging.LogFactory.getLog_Class",
          "otherKey" : null,
          "parent" : "org.apache.catalina.core.ApplicationContextFacade#removeAttribute",
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
            "ess" : 5,
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
            "ess" : 5,
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
              "ess" : 6,
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
                "ess" : 7,
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
                  "ess" : 8,
                  "children" : [ ]
                } ]
              } ]
            } ]
          } ]
        }, {
          "call" : "org.apache.tomcat.util.res.StringManager#getManager",
          "kiekerPattern" : "public static final org.apache.tomcat.util.res.StringManager org.apache.tomcat.util.res.StringManager.getManager(java.lang.String)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.tomcat.util.res.StringManager#getManager",
          "key" : "org.apache.tomcat.util.res.StringManager.getManager_String",
          "otherKey" : null,
          "parent" : "org.apache.catalina.core.ApplicationContextFacade#removeAttribute",
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
            "ess" : 5,
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
              "ess" : 6,
              "children" : [ ]
            } ]
          } ]
        }, {
          "call" : "org.apache.catalina.security.SecurityUtil#isPackageProtectionEnabled",
          "kiekerPattern" : "public static boolean org.apache.catalina.security.SecurityUtil.isPackageProtectionEnabled()",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.catalina.security.SecurityUtil#isPackageProtectionEnabled",
          "key" : "org.apache.catalina.security.SecurityUtil.isPackageProtectionEnabled_",
          "otherKey" : null,
          "parent" : "org.apache.catalina.core.ApplicationContextFacade#removeAttribute",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.catalina.core.ApplicationContext#removeAttribute",
          "kiekerPattern" : "public void org.apache.catalina.core.ApplicationContext.removeAttribute(java.lang.String)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.catalina.core.ApplicationContext#removeAttribute",
          "key" : "org.apache.catalina.core.ApplicationContext.removeAttribute_String",
          "otherKey" : null,
          "parent" : "org.apache.catalina.core.ApplicationContextFacade#removeAttribute",
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
        "call" : "org.apache.catalina.loader.WebappClassLoaderBase#stop",
        "kiekerPattern" : "public void org.apache.catalina.loader.WebappClassLoaderBase.stop()",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "org.apache.catalina.loader.WebappClassLoaderBase#stop",
        "key" : "org.apache.catalina.loader.WebappClassLoaderBase.stop_",
        "otherKey" : null,
        "parent" : "org.apache.catalina.loader.WebappLoader#stopInternal",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.apache.catalina.loader.WebappClassLoaderBase#clearReferences",
          "kiekerPattern" : "protected void org.apache.catalina.loader.WebappClassLoaderBase.clearReferences()",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.catalina.loader.WebappClassLoaderBase#clearReferences",
          "key" : "org.apache.catalina.loader.WebappClassLoaderBase.clearReferences_",
          "otherKey" : null,
          "parent" : "org.apache.catalina.loader.WebappClassLoaderBase#stop",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.apache.tomcat.util.compat.JreCompat#isGraalAvailable",
            "kiekerPattern" : "public static boolean org.apache.tomcat.util.compat.JreCompat.isGraalAvailable()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.tomcat.util.compat.JreCompat#isGraalAvailable",
            "key" : "org.apache.tomcat.util.compat.JreCompat.isGraalAvailable_",
            "otherKey" : null,
            "parent" : "org.apache.catalina.loader.WebappClassLoaderBase#clearReferences",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.apache.catalina.loader.WebappClassLoaderBase#clearReferencesJdbc",
            "kiekerPattern" : "private final void org.apache.catalina.loader.WebappClassLoaderBase.clearReferencesJdbc()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.catalina.loader.WebappClassLoaderBase#clearReferencesJdbc",
            "key" : "org.apache.catalina.loader.WebappClassLoaderBase.clearReferencesJdbc_",
            "otherKey" : null,
            "parent" : "org.apache.catalina.loader.WebappClassLoaderBase#clearReferences",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ {
              "call" : "org.apache.catalina.loader.WebappClassLoaderBase#getResourceAsStream",
              "kiekerPattern" : "public java.io.InputStream org.apache.catalina.loader.WebappClassLoaderBase.getResourceAsStream(java.lang.String)",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.catalina.loader.WebappClassLoaderBase#getResourceAsStream",
              "key" : "org.apache.catalina.loader.WebappClassLoaderBase.getResourceAsStream_String",
              "otherKey" : null,
              "parent" : "org.apache.catalina.loader.WebappClassLoaderBase#clearReferencesJdbc",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ {
                "call" : "org.apache.juli.logging.DirectJDKLog#isDebugEnabled",
                "kiekerPattern" : "public final boolean org.apache.juli.logging.DirectJDKLog.isDebugEnabled()",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "org.apache.juli.logging.DirectJDKLog#isDebugEnabled",
                "key" : "org.apache.juli.logging.DirectJDKLog.isDebugEnabled_",
                "otherKey" : null,
                "parent" : "org.apache.catalina.loader.WebappClassLoaderBase#getResourceAsStream",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              }, {
                "call" : "org.apache.catalina.loader.WebappClassLoaderBase#checkStateForResourceLoading",
                "kiekerPattern" : "protected void org.apache.catalina.loader.WebappClassLoaderBase.checkStateForResourceLoading(java.lang.String)",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "org.apache.catalina.loader.WebappClassLoaderBase#checkStateForResourceLoading",
                "key" : "org.apache.catalina.loader.WebappClassLoaderBase.checkStateForResourceLoading_String",
                "otherKey" : null,
                "parent" : "org.apache.catalina.loader.WebappClassLoaderBase#getResourceAsStream",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ {
                  "call" : "org.apache.catalina.LifecycleState#isAvailable",
                  "kiekerPattern" : "public boolean org.apache.catalina.LifecycleState.isAvailable()",
                  "otherKiekerPattern" : null,
                  "module" : "",
                  "name" : "org.apache.catalina.LifecycleState#isAvailable",
                  "key" : "org.apache.catalina.LifecycleState.isAvailable_",
                  "otherKey" : null,
                  "parent" : "org.apache.catalina.loader.WebappClassLoaderBase#checkStateForResourceLoading",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ ]
                } ]
              }, {
                "call" : "org.apache.catalina.loader.WebappClassLoaderBase#filter",
                "kiekerPattern" : "protected boolean org.apache.catalina.loader.WebappClassLoaderBase.filter(java.lang.String,boolean)",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "org.apache.catalina.loader.WebappClassLoaderBase#filter",
                "key" : "org.apache.catalina.loader.WebappClassLoaderBase.filter_String_boolean",
                "otherKey" : null,
                "parent" : "org.apache.catalina.loader.WebappClassLoaderBase#getResourceAsStream",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              } ]
            }, {
              "call" : "org.apache.catalina.loader.WebappClassLoaderBase#loadClass",
              "kiekerPattern" : "public java.lang.Class org.apache.catalina.loader.WebappClassLoaderBase.loadClass(java.lang.String)",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.catalina.loader.WebappClassLoaderBase#loadClass",
              "key" : "org.apache.catalina.loader.WebappClassLoaderBase.loadClass_String",
              "otherKey" : null,
              "parent" : "org.apache.catalina.loader.WebappClassLoaderBase#clearReferencesJdbc",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ {
                "call" : "org.apache.catalina.loader.WebappClassLoaderBase#loadClass",
                "kiekerPattern" : "public java.lang.Class org.apache.catalina.loader.WebappClassLoaderBase.loadClass(java.lang.String,boolean)",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "org.apache.catalina.loader.WebappClassLoaderBase#loadClass",
                "key" : "org.apache.catalina.loader.WebappClassLoaderBase.loadClass_String_boolean",
                "otherKey" : null,
                "parent" : "org.apache.catalina.loader.WebappClassLoaderBase#loadClass",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ {
                  "call" : "org.apache.tomcat.util.compat.JreCompat#isGraalAvailable",
                  "kiekerPattern" : "public static boolean org.apache.tomcat.util.compat.JreCompat.isGraalAvailable()",
                  "otherKiekerPattern" : null,
                  "module" : "",
                  "name" : "org.apache.tomcat.util.compat.JreCompat#isGraalAvailable",
                  "key" : "org.apache.tomcat.util.compat.JreCompat.isGraalAvailable_",
                  "otherKey" : null,
                  "parent" : "org.apache.catalina.loader.WebappClassLoaderBase#loadClass",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ ]
                }, {
                  "call" : "org.apache.catalina.loader.WebappClassLoader#getClassLoadingLock",
                  "kiekerPattern" : "protected java.lang.Object org.apache.catalina.loader.WebappClassLoader.getClassLoadingLock(java.lang.String)",
                  "otherKiekerPattern" : null,
                  "module" : "",
                  "name" : "org.apache.catalina.loader.WebappClassLoader#getClassLoadingLock",
                  "key" : "org.apache.catalina.loader.WebappClassLoader.getClassLoadingLock_String",
                  "otherKey" : null,
                  "parent" : "org.apache.catalina.loader.WebappClassLoaderBase#loadClass",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ ]
                }, {
                  "call" : "org.apache.juli.logging.DirectJDKLog#isDebugEnabled",
                  "kiekerPattern" : "public final boolean org.apache.juli.logging.DirectJDKLog.isDebugEnabled()",
                  "otherKiekerPattern" : null,
                  "module" : "",
                  "name" : "org.apache.juli.logging.DirectJDKLog#isDebugEnabled",
                  "key" : "org.apache.juli.logging.DirectJDKLog.isDebugEnabled_",
                  "otherKey" : null,
                  "parent" : "org.apache.catalina.loader.WebappClassLoaderBase#loadClass",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ ]
                }, {
                  "call" : "org.apache.catalina.loader.WebappClassLoaderBase#checkStateForClassLoading",
                  "kiekerPattern" : "protected void org.apache.catalina.loader.WebappClassLoaderBase.checkStateForClassLoading(java.lang.String)",
                  "otherKiekerPattern" : null,
                  "module" : "",
                  "name" : "org.apache.catalina.loader.WebappClassLoaderBase#checkStateForClassLoading",
                  "key" : "org.apache.catalina.loader.WebappClassLoaderBase.checkStateForClassLoading_String",
                  "otherKey" : null,
                  "parent" : "org.apache.catalina.loader.WebappClassLoaderBase#loadClass",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ {
                    "call" : "org.apache.catalina.loader.WebappClassLoaderBase#checkStateForResourceLoading",
                    "kiekerPattern" : "protected void org.apache.catalina.loader.WebappClassLoaderBase.checkStateForResourceLoading(java.lang.String)",
                    "otherKiekerPattern" : null,
                    "module" : "",
                    "name" : "org.apache.catalina.loader.WebappClassLoaderBase#checkStateForResourceLoading",
                    "key" : "org.apache.catalina.loader.WebappClassLoaderBase.checkStateForResourceLoading_String",
                    "otherKey" : null,
                    "parent" : "org.apache.catalina.loader.WebappClassLoaderBase#checkStateForClassLoading",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ {
                      "call" : "org.apache.catalina.LifecycleState#isAvailable",
                      "kiekerPattern" : "public boolean org.apache.catalina.LifecycleState.isAvailable()",
                      "otherKiekerPattern" : null,
                      "module" : "",
                      "name" : "org.apache.catalina.LifecycleState#isAvailable",
                      "key" : "org.apache.catalina.LifecycleState.isAvailable_",
                      "otherKey" : null,
                      "parent" : "org.apache.catalina.loader.WebappClassLoaderBase#checkStateForResourceLoading",
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
                  "call" : "org.apache.catalina.loader.WebappClassLoaderBase#findLoadedClass0",
                  "kiekerPattern" : "protected java.lang.Class org.apache.catalina.loader.WebappClassLoaderBase.findLoadedClass0(java.lang.String)",
                  "otherKiekerPattern" : null,
                  "module" : "",
                  "name" : "org.apache.catalina.loader.WebappClassLoaderBase#findLoadedClass0",
                  "key" : "org.apache.catalina.loader.WebappClassLoaderBase.findLoadedClass0_String",
                  "otherKey" : null,
                  "parent" : "org.apache.catalina.loader.WebappClassLoaderBase#loadClass",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ {
                    "call" : "org.apache.catalina.loader.WebappClassLoaderBase#binaryNameToPath",
                    "kiekerPattern" : "private java.lang.String org.apache.catalina.loader.WebappClassLoaderBase.binaryNameToPath(java.lang.String,boolean)",
                    "otherKiekerPattern" : null,
                    "module" : "",
                    "name" : "org.apache.catalina.loader.WebappClassLoaderBase#binaryNameToPath",
                    "key" : "org.apache.catalina.loader.WebappClassLoaderBase.binaryNameToPath_String_boolean",
                    "otherKey" : null,
                    "parent" : "org.apache.catalina.loader.WebappClassLoaderBase#findLoadedClass0",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ ]
                  } ]
                }, {
                  "call" : "org.apache.catalina.loader.WebappClassLoaderBase#binaryNameToPath",
                  "kiekerPattern" : "private java.lang.String org.apache.catalina.loader.WebappClassLoaderBase.binaryNameToPath(java.lang.String,boolean)",
                  "otherKiekerPattern" : null,
                  "module" : "",
                  "name" : "org.apache.catalina.loader.WebappClassLoaderBase#binaryNameToPath",
                  "key" : "org.apache.catalina.loader.WebappClassLoaderBase.binaryNameToPath_String_boolean",
                  "otherKey" : null,
                  "parent" : "org.apache.catalina.loader.WebappClassLoaderBase#loadClass",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ ]
                }, {
                  "call" : "org.apache.catalina.loader.WebappClassLoaderBase#getJavaseClassLoader",
                  "kiekerPattern" : "protected org.apache.catalina.loader.WebappClassLoaderBase$PrivilegedGetClassLoader org.apache.catalina.loader.WebappClassLoaderBase.getJavaseClassLoader()",
                  "otherKiekerPattern" : null,
                  "module" : "",
                  "name" : "org.apache.catalina.loader.WebappClassLoaderBase#getJavaseClassLoader",
                  "key" : "org.apache.catalina.loader.WebappClassLoaderBase.getJavaseClassLoader_",
                  "otherKey" : null,
                  "parent" : "org.apache.catalina.loader.WebappClassLoaderBase#loadClass",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ ]
                }, {
                  "call" : "org.apache.catalina.loader.WebappClassLoaderBase#filter",
                  "kiekerPattern" : "protected boolean org.apache.catalina.loader.WebappClassLoaderBase.filter(java.lang.String,boolean)",
                  "otherKiekerPattern" : null,
                  "module" : "",
                  "name" : "org.apache.catalina.loader.WebappClassLoaderBase#filter",
                  "key" : "org.apache.catalina.loader.WebappClassLoaderBase.filter_String_boolean",
                  "otherKey" : null,
                  "parent" : "org.apache.catalina.loader.WebappClassLoaderBase#loadClass",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ ]
                }, {
                  "call" : "org.apache.catalina.loader.WebappClassLoaderBase#findClass",
                  "kiekerPattern" : "public java.lang.Class org.apache.catalina.loader.WebappClassLoaderBase.findClass(java.lang.String)",
                  "otherKiekerPattern" : null,
                  "module" : "",
                  "name" : "org.apache.catalina.loader.WebappClassLoaderBase#findClass",
                  "key" : "org.apache.catalina.loader.WebappClassLoaderBase.findClass_String",
                  "otherKey" : null,
                  "parent" : "org.apache.catalina.loader.WebappClassLoaderBase#loadClass",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ {
                    "call" : "org.apache.juli.logging.DirectJDKLog#isDebugEnabled",
                    "kiekerPattern" : "public final boolean org.apache.juli.logging.DirectJDKLog.isDebugEnabled()",
                    "otherKiekerPattern" : null,
                    "module" : "",
                    "name" : "org.apache.juli.logging.DirectJDKLog#isDebugEnabled",
                    "key" : "org.apache.juli.logging.DirectJDKLog.isDebugEnabled_",
                    "otherKey" : null,
                    "parent" : "org.apache.catalina.loader.WebappClassLoaderBase#findClass",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ ]
                  }, {
                    "call" : "org.apache.catalina.loader.WebappClassLoaderBase#checkStateForClassLoading",
                    "kiekerPattern" : "protected void org.apache.catalina.loader.WebappClassLoaderBase.checkStateForClassLoading(java.lang.String)",
                    "otherKiekerPattern" : null,
                    "module" : "",
                    "name" : "org.apache.catalina.loader.WebappClassLoaderBase#checkStateForClassLoading",
                    "key" : "org.apache.catalina.loader.WebappClassLoaderBase.checkStateForClassLoading_String",
                    "otherKey" : null,
                    "parent" : "org.apache.catalina.loader.WebappClassLoaderBase#findClass",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ {
                      "call" : "org.apache.catalina.loader.WebappClassLoaderBase#checkStateForResourceLoading",
                      "kiekerPattern" : "protected void org.apache.catalina.loader.WebappClassLoaderBase.checkStateForResourceLoading(java.lang.String)",
                      "otherKiekerPattern" : null,
                      "module" : "",
                      "name" : "org.apache.catalina.loader.WebappClassLoaderBase#checkStateForResourceLoading",
                      "key" : "org.apache.catalina.loader.WebappClassLoaderBase.checkStateForResourceLoading_String",
                      "otherKey" : null,
                      "parent" : "org.apache.catalina.loader.WebappClassLoaderBase#checkStateForClassLoading",
                      "color" : "#FFF",
                      "statistic" : null,
                      "hasSourceChange" : false,
                      "state" : null,
                      "inVMDeviationPredecessor" : 0.0,
                      "inVMDeviation" : 0.0,
                      "ess" : 10,
                      "children" : [ {
                        "call" : "org.apache.catalina.LifecycleState#isAvailable",
                        "kiekerPattern" : "public boolean org.apache.catalina.LifecycleState.isAvailable()",
                        "otherKiekerPattern" : null,
                        "module" : "",
                        "name" : "org.apache.catalina.LifecycleState#isAvailable",
                        "key" : "org.apache.catalina.LifecycleState.isAvailable_",
                        "otherKey" : null,
                        "parent" : "org.apache.catalina.loader.WebappClassLoaderBase#checkStateForResourceLoading",
                        "color" : "#FFF",
                        "statistic" : null,
                        "hasSourceChange" : false,
                        "state" : null,
                        "inVMDeviationPredecessor" : 0.0,
                        "inVMDeviation" : 0.0,
                        "ess" : 11,
                        "children" : [ ]
                      } ]
                    } ]
                  }, {
                    "call" : "org.apache.juli.logging.DirectJDKLog#isTraceEnabled",
                    "kiekerPattern" : "public final boolean org.apache.juli.logging.DirectJDKLog.isTraceEnabled()",
                    "otherKiekerPattern" : null,
                    "module" : "",
                    "name" : "org.apache.juli.logging.DirectJDKLog#isTraceEnabled",
                    "key" : "org.apache.juli.logging.DirectJDKLog.isTraceEnabled_",
                    "otherKey" : null,
                    "parent" : "org.apache.catalina.loader.WebappClassLoaderBase#findClass",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ ]
                  }, {
                    "call" : "org.apache.catalina.loader.WebappClassLoaderBase#findClassInternal",
                    "kiekerPattern" : "protected java.lang.Class org.apache.catalina.loader.WebappClassLoaderBase.findClassInternal(java.lang.String)",
                    "otherKiekerPattern" : null,
                    "module" : "",
                    "name" : "org.apache.catalina.loader.WebappClassLoaderBase#findClassInternal",
                    "key" : "org.apache.catalina.loader.WebappClassLoaderBase.findClassInternal_String",
                    "otherKey" : null,
                    "parent" : "org.apache.catalina.loader.WebappClassLoaderBase#findClass",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ {
                      "call" : "org.apache.catalina.loader.WebappClassLoaderBase#checkStateForResourceLoading",
                      "kiekerPattern" : "protected void org.apache.catalina.loader.WebappClassLoaderBase.checkStateForResourceLoading(java.lang.String)",
                      "otherKiekerPattern" : null,
                      "module" : "",
                      "name" : "org.apache.catalina.loader.WebappClassLoaderBase#checkStateForResourceLoading",
                      "key" : "org.apache.catalina.loader.WebappClassLoaderBase.checkStateForResourceLoading_String",
                      "otherKey" : null,
                      "parent" : "org.apache.catalina.loader.WebappClassLoaderBase#findClassInternal",
                      "color" : "#FFF",
                      "statistic" : null,
                      "hasSourceChange" : false,
                      "state" : null,
                      "inVMDeviationPredecessor" : 0.0,
                      "inVMDeviation" : 0.0,
                      "ess" : 10,
                      "children" : [ {
                        "call" : "org.apache.catalina.LifecycleState#isAvailable",
                        "kiekerPattern" : "public boolean org.apache.catalina.LifecycleState.isAvailable()",
                        "otherKiekerPattern" : null,
                        "module" : "",
                        "name" : "org.apache.catalina.LifecycleState#isAvailable",
                        "key" : "org.apache.catalina.LifecycleState.isAvailable_",
                        "otherKey" : null,
                        "parent" : "org.apache.catalina.loader.WebappClassLoaderBase#checkStateForResourceLoading",
                        "color" : "#FFF",
                        "statistic" : null,
                        "hasSourceChange" : false,
                        "state" : null,
                        "inVMDeviationPredecessor" : 0.0,
                        "inVMDeviation" : 0.0,
                        "ess" : 11,
                        "children" : [ ]
                      } ]
                    }, {
                      "call" : "org.apache.catalina.loader.WebappClassLoaderBase#binaryNameToPath",
                      "kiekerPattern" : "private java.lang.String org.apache.catalina.loader.WebappClassLoaderBase.binaryNameToPath(java.lang.String,boolean)",
                      "otherKiekerPattern" : null,
                      "module" : "",
                      "name" : "org.apache.catalina.loader.WebappClassLoaderBase#binaryNameToPath",
                      "key" : "org.apache.catalina.loader.WebappClassLoaderBase.binaryNameToPath_String_boolean",
                      "otherKey" : null,
                      "parent" : "org.apache.catalina.loader.WebappClassLoaderBase#findClassInternal",
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
                } ]
              } ]
            }, {
              "call" : "org.apache.tomcat.util.ExceptionUtils#unwrapInvocationTargetException",
              "kiekerPattern" : "public static java.lang.Throwable org.apache.tomcat.util.ExceptionUtils.unwrapInvocationTargetException(java.lang.Throwable)",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.tomcat.util.ExceptionUtils#unwrapInvocationTargetException",
              "key" : "org.apache.tomcat.util.ExceptionUtils.unwrapInvocationTargetException_Throwable",
              "otherKey" : null,
              "parent" : "org.apache.catalina.loader.WebappClassLoaderBase#clearReferencesJdbc",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            }, {
              "call" : "org.apache.tomcat.util.ExceptionUtils#handleThrowable",
              "kiekerPattern" : "public static void org.apache.tomcat.util.ExceptionUtils.handleThrowable(java.lang.Throwable)",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.tomcat.util.ExceptionUtils#handleThrowable",
              "key" : "org.apache.tomcat.util.ExceptionUtils.handleThrowable_Throwable",
              "otherKey" : null,
              "parent" : "org.apache.catalina.loader.WebappClassLoaderBase#clearReferencesJdbc",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            }, {
              "call" : "org.apache.catalina.loader.WebappClassLoaderBase#getContextName",
              "kiekerPattern" : "public java.lang.String org.apache.catalina.loader.WebappClassLoaderBase.getContextName()",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.catalina.loader.WebappClassLoaderBase#getContextName",
              "key" : "org.apache.catalina.loader.WebappClassLoaderBase.getContextName_",
              "otherKey" : null,
              "parent" : "org.apache.catalina.loader.WebappClassLoaderBase#clearReferencesJdbc",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            }, {
              "call" : "org.apache.tomcat.util.res.StringManager#getString",
              "kiekerPattern" : "public java.lang.String org.apache.tomcat.util.res.StringManager.getString(java.lang.String,java.lang.Object)",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.tomcat.util.res.StringManager#getString",
              "key" : "org.apache.tomcat.util.res.StringManager.getString_String_Object",
              "otherKey" : null,
              "parent" : "org.apache.catalina.loader.WebappClassLoaderBase#clearReferencesJdbc",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ {
                "call" : "org.apache.tomcat.util.res.StringManager#getString",
                "kiekerPattern" : "public java.lang.String org.apache.tomcat.util.res.StringManager.getString(java.lang.String)",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "org.apache.tomcat.util.res.StringManager#getString",
                "key" : "org.apache.tomcat.util.res.StringManager.getString_String",
                "otherKey" : null,
                "parent" : "org.apache.tomcat.util.res.StringManager#getString",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              } ]
            }, {
              "call" : "org.apache.juli.logging.DirectJDKLog#warn",
              "kiekerPattern" : "public final void org.apache.juli.logging.DirectJDKLog.warn(java.lang.Object,java.lang.Throwable)",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.juli.logging.DirectJDKLog#warn",
              "key" : "org.apache.juli.logging.DirectJDKLog.warn_Object_Throwable",
              "otherKey" : null,
              "parent" : "org.apache.catalina.loader.WebappClassLoaderBase#clearReferencesJdbc",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ {
                "call" : "org.apache.juli.logging.DirectJDKLog#log",
                "kiekerPattern" : "private void org.apache.juli.logging.DirectJDKLog.log(java.util.logging.Level,java.lang.String,java.lang.Throwable)",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "org.apache.juli.logging.DirectJDKLog#log",
                "key" : "org.apache.juli.logging.DirectJDKLog.log_Level_String_Throwable",
                "otherKey" : null,
                "parent" : "org.apache.juli.logging.DirectJDKLog#warn",
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
            "call" : "org.apache.catalina.loader.WebappClassLoaderBase#clearReferencesThreads",
            "kiekerPattern" : "private void org.apache.catalina.loader.WebappClassLoaderBase.clearReferencesThreads()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.catalina.loader.WebappClassLoaderBase#clearReferencesThreads",
            "key" : "org.apache.catalina.loader.WebappClassLoaderBase.clearReferencesThreads_",
            "otherKey" : null,
            "parent" : "org.apache.catalina.loader.WebappClassLoaderBase#clearReferences",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ {
              "call" : "org.apache.catalina.loader.WebappClassLoaderBase#getThreads",
              "kiekerPattern" : "private java.lang.Thread[] org.apache.catalina.loader.WebappClassLoaderBase.getThreads()",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.catalina.loader.WebappClassLoaderBase#getThreads",
              "key" : "org.apache.catalina.loader.WebappClassLoaderBase.getThreads_",
              "otherKey" : null,
              "parent" : "org.apache.catalina.loader.WebappClassLoaderBase#clearReferencesThreads",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            } ]
          }, {
            "call" : "org.apache.catalina.loader.WebappClassLoaderBase#clearReferencesObjectStreamClassCaches",
            "kiekerPattern" : "private void org.apache.catalina.loader.WebappClassLoaderBase.clearReferencesObjectStreamClassCaches()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.catalina.loader.WebappClassLoaderBase#clearReferencesObjectStreamClassCaches",
            "key" : "org.apache.catalina.loader.WebappClassLoaderBase.clearReferencesObjectStreamClassCaches_",
            "otherKey" : null,
            "parent" : "org.apache.catalina.loader.WebappClassLoaderBase#clearReferences",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ {
              "call" : "org.apache.catalina.loader.WebappClassLoaderBase#clearCache",
              "kiekerPattern" : "private void org.apache.catalina.loader.WebappClassLoaderBase.clearCache(java.lang.Class,java.lang.String)",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.catalina.loader.WebappClassLoaderBase#clearCache",
              "key" : "org.apache.catalina.loader.WebappClassLoaderBase.clearCache_Class_String",
              "otherKey" : null,
              "parent" : "org.apache.catalina.loader.WebappClassLoaderBase#clearReferencesObjectStreamClassCaches",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            }, {
              "call" : "org.apache.catalina.loader.WebappClassLoaderBase#getContextName",
              "kiekerPattern" : "public java.lang.String org.apache.catalina.loader.WebappClassLoaderBase.getContextName()",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.catalina.loader.WebappClassLoaderBase#getContextName",
              "key" : "org.apache.catalina.loader.WebappClassLoaderBase.getContextName_",
              "otherKey" : null,
              "parent" : "org.apache.catalina.loader.WebappClassLoaderBase#clearReferencesObjectStreamClassCaches",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            }, {
              "call" : "org.apache.tomcat.util.res.StringManager#getString",
              "kiekerPattern" : "public java.lang.String org.apache.tomcat.util.res.StringManager.getString(java.lang.String,java.lang.Object)",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.tomcat.util.res.StringManager#getString",
              "key" : "org.apache.tomcat.util.res.StringManager.getString_String_Object",
              "otherKey" : null,
              "parent" : "org.apache.catalina.loader.WebappClassLoaderBase#clearReferencesObjectStreamClassCaches",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ {
                "call" : "org.apache.tomcat.util.res.StringManager#getString",
                "kiekerPattern" : "public java.lang.String org.apache.tomcat.util.res.StringManager.getString(java.lang.String)",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "org.apache.tomcat.util.res.StringManager#getString",
                "key" : "org.apache.tomcat.util.res.StringManager.getString_String",
                "otherKey" : null,
                "parent" : "org.apache.tomcat.util.res.StringManager#getString",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              } ]
            }, {
              "call" : "org.apache.juli.logging.DirectJDKLog#warn",
              "kiekerPattern" : "public final void org.apache.juli.logging.DirectJDKLog.warn(java.lang.Object,java.lang.Throwable)",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.juli.logging.DirectJDKLog#warn",
              "key" : "org.apache.juli.logging.DirectJDKLog.warn_Object_Throwable",
              "otherKey" : null,
              "parent" : "org.apache.catalina.loader.WebappClassLoaderBase#clearReferencesObjectStreamClassCaches",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ {
                "call" : "org.apache.juli.logging.DirectJDKLog#log",
                "kiekerPattern" : "private void org.apache.juli.logging.DirectJDKLog.log(java.util.logging.Level,java.lang.String,java.lang.Throwable)",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "org.apache.juli.logging.DirectJDKLog#log",
                "key" : "org.apache.juli.logging.DirectJDKLog.log_Level_String_Throwable",
                "otherKey" : null,
                "parent" : "org.apache.juli.logging.DirectJDKLog#warn",
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
            "call" : "org.apache.catalina.loader.WebappClassLoaderBase#checkThreadLocalsForLeaks",
            "kiekerPattern" : "private void org.apache.catalina.loader.WebappClassLoaderBase.checkThreadLocalsForLeaks()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.catalina.loader.WebappClassLoaderBase#checkThreadLocalsForLeaks",
            "key" : "org.apache.catalina.loader.WebappClassLoaderBase.checkThreadLocalsForLeaks_",
            "otherKey" : null,
            "parent" : "org.apache.catalina.loader.WebappClassLoaderBase#clearReferences",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ {
              "call" : "org.apache.catalina.loader.WebappClassLoaderBase#getThreads",
              "kiekerPattern" : "private java.lang.Thread[] org.apache.catalina.loader.WebappClassLoaderBase.getThreads()",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.catalina.loader.WebappClassLoaderBase#getThreads",
              "key" : "org.apache.catalina.loader.WebappClassLoaderBase.getThreads_",
              "otherKey" : null,
              "parent" : "org.apache.catalina.loader.WebappClassLoaderBase#checkThreadLocalsForLeaks",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            }, {
              "call" : "org.apache.catalina.loader.WebappClassLoaderBase#checkThreadLocalMapForLeaks",
              "kiekerPattern" : "private void org.apache.catalina.loader.WebappClassLoaderBase.checkThreadLocalMapForLeaks(java.lang.Object,java.lang.reflect.Field)",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.catalina.loader.WebappClassLoaderBase#checkThreadLocalMapForLeaks",
              "key" : "org.apache.catalina.loader.WebappClassLoaderBase.checkThreadLocalMapForLeaks_Object_Field",
              "otherKey" : null,
              "parent" : "org.apache.catalina.loader.WebappClassLoaderBase#checkThreadLocalsForLeaks",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ {
                "call" : "org.apache.catalina.loader.WebappClassLoaderBase#loadedByThisOrChild",
                "kiekerPattern" : "private boolean org.apache.catalina.loader.WebappClassLoaderBase.loadedByThisOrChild(java.lang.Object)",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "org.apache.catalina.loader.WebappClassLoaderBase#loadedByThisOrChild",
                "key" : "org.apache.catalina.loader.WebappClassLoaderBase.loadedByThisOrChild_Object",
                "otherKey" : null,
                "parent" : "org.apache.catalina.loader.WebappClassLoaderBase#checkThreadLocalMapForLeaks",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ {
                  "call" : "org.apache.catalina.loader.WebappClassLoaderBase#loadedByThisOrChild",
                  "kiekerPattern" : "private boolean org.apache.catalina.loader.WebappClassLoaderBase.loadedByThisOrChild(java.lang.Object)",
                  "otherKiekerPattern" : null,
                  "module" : "",
                  "name" : "org.apache.catalina.loader.WebappClassLoaderBase#loadedByThisOrChild",
                  "key" : "org.apache.catalina.loader.WebappClassLoaderBase.loadedByThisOrChild_Object",
                  "otherKey" : null,
                  "parent" : "org.apache.catalina.loader.WebappClassLoaderBase#loadedByThisOrChild",
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
          }, {
            "call" : "org.apache.catalina.loader.WebappClassLoaderBase#clearReferencesRmiTargets",
            "kiekerPattern" : "private void org.apache.catalina.loader.WebappClassLoaderBase.clearReferencesRmiTargets()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.catalina.loader.WebappClassLoaderBase#clearReferencesRmiTargets",
            "key" : "org.apache.catalina.loader.WebappClassLoaderBase.clearReferencesRmiTargets_",
            "otherKey" : null,
            "parent" : "org.apache.catalina.loader.WebappClassLoaderBase#clearReferences",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.apache.tomcat.util.IntrospectionUtils#clear",
            "kiekerPattern" : "public static void org.apache.tomcat.util.IntrospectionUtils.clear()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.tomcat.util.IntrospectionUtils#clear",
            "key" : "org.apache.tomcat.util.IntrospectionUtils.clear_",
            "otherKey" : null,
            "parent" : "org.apache.catalina.loader.WebappClassLoaderBase#clearReferences",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.apache.juli.logging.LogFactory#release",
            "kiekerPattern" : "public static void org.apache.juli.logging.LogFactory.release(java.lang.ClassLoader)",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.juli.logging.LogFactory#release",
            "key" : "org.apache.juli.logging.LogFactory.release_ClassLoader",
            "otherKey" : null,
            "parent" : "org.apache.catalina.loader.WebappClassLoaderBase#clearReferences",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.apache.catalina.webresources.TomcatURLStreamHandlerFactory#release",
            "kiekerPattern" : "public static void org.apache.catalina.webresources.TomcatURLStreamHandlerFactory.release(java.lang.ClassLoader)",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.catalina.webresources.TomcatURLStreamHandlerFactory#release",
            "key" : "org.apache.catalina.webresources.TomcatURLStreamHandlerFactory.release_ClassLoader",
            "otherKey" : null,
            "parent" : "org.apache.catalina.loader.WebappClassLoaderBase#clearReferences",
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
      }, {
        "call" : "org.apache.catalina.loader.WebappClassLoaderBase#destroy",
        "kiekerPattern" : "public void org.apache.catalina.loader.WebappClassLoaderBase.destroy()",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "org.apache.catalina.loader.WebappClassLoaderBase#destroy",
        "key" : "org.apache.catalina.loader.WebappClassLoaderBase.destroy_",
        "otherKey" : null,
        "parent" : "org.apache.catalina.loader.WebappLoader#stopInternal",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.apache.catalina.core.ContainerBase#getName",
        "kiekerPattern" : "public java.lang.String org.apache.catalina.core.ContainerBase.getName()",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "org.apache.catalina.core.ContainerBase#getName",
        "key" : "org.apache.catalina.core.ContainerBase.getName_",
        "otherKey" : null,
        "parent" : "org.apache.catalina.loader.WebappLoader#stopInternal",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.apache.catalina.util.LifecycleMBeanBase#getDomain",
        "kiekerPattern" : "public final java.lang.String org.apache.catalina.util.LifecycleMBeanBase.getDomain()",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "org.apache.catalina.util.LifecycleMBeanBase#getDomain",
        "key" : "org.apache.catalina.util.LifecycleMBeanBase.getDomain_",
        "otherKey" : null,
        "parent" : "org.apache.catalina.loader.WebappLoader#stopInternal",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.apache.catalina.core.ContainerBase#getParent",
        "kiekerPattern" : "public org.apache.catalina.Container org.apache.catalina.core.ContainerBase.getParent()",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "org.apache.catalina.core.ContainerBase#getParent",
        "key" : "org.apache.catalina.core.ContainerBase.getParent_",
        "otherKey" : null,
        "parent" : "org.apache.catalina.loader.WebappLoader#stopInternal",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.apache.catalina.core.StandardHost#getName",
        "kiekerPattern" : "public java.lang.String org.apache.catalina.core.StandardHost.getName()",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "org.apache.catalina.core.StandardHost#getName",
        "key" : "org.apache.catalina.core.StandardHost.getName_",
        "otherKey" : null,
        "parent" : "org.apache.catalina.loader.WebappLoader#stopInternal",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.apache.tomcat.util.modeler.Registry#getRegistry",
        "kiekerPattern" : "public static synchronized org.apache.tomcat.util.modeler.Registry org.apache.tomcat.util.modeler.Registry.getRegistry(java.lang.Object,java.lang.Object)",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "org.apache.tomcat.util.modeler.Registry#getRegistry",
        "key" : "org.apache.tomcat.util.modeler.Registry.getRegistry_Object_Object",
        "otherKey" : null,
        "parent" : "org.apache.catalina.loader.WebappLoader#stopInternal",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.apache.tomcat.util.modeler.Registry#unregisterComponent",
        "kiekerPattern" : "public void org.apache.tomcat.util.modeler.Registry.unregisterComponent(javax.management.ObjectName)",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "org.apache.tomcat.util.modeler.Registry#unregisterComponent",
        "key" : "org.apache.tomcat.util.modeler.Registry.unregisterComponent_ObjectName",
        "otherKey" : null,
        "parent" : "org.apache.catalina.loader.WebappLoader#stopInternal",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.apache.tomcat.util.modeler.Registry#getMBeanServer",
          "kiekerPattern" : "public javax.management.MBeanServer org.apache.tomcat.util.modeler.Registry.getMBeanServer()",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.tomcat.util.modeler.Registry#getMBeanServer",
          "key" : "org.apache.tomcat.util.modeler.Registry.getMBeanServer_",
          "otherKey" : null,
          "parent" : "org.apache.tomcat.util.modeler.Registry#unregisterComponent",
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
var margin = {top: 20, right: 120, bottom: 20, left: 483},
   width = 9254- margin.right - margin.left,
   height = 2170 - margin.top - margin.bottom;
