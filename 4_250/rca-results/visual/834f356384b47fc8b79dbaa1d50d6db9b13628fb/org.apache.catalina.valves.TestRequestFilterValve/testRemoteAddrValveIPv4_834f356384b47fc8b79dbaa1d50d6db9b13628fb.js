if (document.getElementById('testcaseDiv') != null) { 
   document.getElementById('testcaseDiv').innerHTML="Commit: <a href='javascript:fallbackCopyTextToClipboard(\"-commit 834f356384b47fc8b79dbaa1d50d6db9b13628fb -test org.apache.catalina.valves.TestRequestFilterValve#testRemoteAddrValveIPv4\")'>834f356384b47fc8b79dbaa1d50d6db9b13628fb</a><br>Test Case: org.apache.catalina.valves.TestRequestFilterValve#testRemoteAddrValveIPv4<br>";
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
}`,"org.apache.coyote.RequestGroupInfo.<init>_":
 ``,"org.apache.catalina.valves.RequestFilterValve.getAddConnectorPort_":
 `/**
 * Get the flag deciding whether we add the server connector port to the
 * property compared in the filtering method. The port will be appended
 * using a ";" as a separator.
 * @return <code>true</code> to add the connector port
 */
public boolean getAddConnectorPort() {
    return addConnectorPort;
}`,"org.apache.tomcat.util.IntrospectionUtils.findMethods_Class":
 `public static Method[] findMethods(Class<?> c) {
    Method[] methods = objectMethods.get(c);
    if (methods != null)
        return methods;
    methods = c.getMethods();
    objectMethods.put(c, methods);
    return methods;
}`,"org.apache.tomcat.util.http.MimeHeaderField.getName_":
 ``,"org.apache.tomcat.util.buf.UDecoder.<init>_":
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
}`,"org.apache.coyote.Request.getMimeHeaders_":
 `// ------------------------------------------------------------- Properties
public MimeHeaders getMimeHeaders() {
    return headers;
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
}`,"org.apache.tomcat.util.http.Parameters.<init>_":
 `public Parameters() {
    // NO-OP
}`,"org.apache.catalina.connector.Connector.setProperty_String_String":
 `/**
 * Set a property on the protocol handler.
 *
 * @param name the property name
 * @param value the property value
 * @return <code>true</code> if the property was successfully set
 */
public boolean setProperty(String name, String value) {
    if (protocolHandler == null) {
        return false;
    }
    return IntrospectionUtils.setProperty(protocolHandler, name, value);
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
}`,"org.apache.catalina.mapper.MappingData.<init>_":
 ``,"org.apache.tomcat.util.compat.JreCompat.<init>_":
 ``,"org.apache.catalina.connector.Request.setRemoteAddr_String":
 `/**
 * Set the IP address of the remote client associated with this Request.
 *
 * @param remoteAddr The remote IP address
 */
public void setRemoteAddr(String remoteAddr) {
    this.remoteAddr = remoteAddr;
}`,"org.apache.catalina.connector.CoyoteReader.<init>_InputBuffer":
 `// ----------------------------------------------------------- Constructors
public CoyoteReader(InputBuffer ib) {
    super(ib, 1);
    this.ib = ib;
}`,"org.apache.tomcat.util.collections.ConcurrentCache.<init>_int":
 `public ConcurrentCache(int size) {
    this.size = size;
    this.eden = new ConcurrentHashMap<>(size);
    this.longterm = new WeakHashMap<>(size);
}`,"org.apache.catalina.valves.RequestFilterValve.<init>_":
 `// ------------------------------------------------------ Constructor
public RequestFilterValve() {
    super(true);
}`,"org.apache.tomcat.util.IntrospectionUtils.setProperty_Object_String_String":
 `/**
 * Find a method with the right name If found, call the method ( if param is
 * int or boolean we'll convert value to the right type before) - that means
 * you can have setDebug(1).
 * @param o The object to set a property on
 * @param name The property name
 * @param value The property value
 * @return <code>true</code> if operation was successful
 */
public static boolean setProperty(Object o, String name, String value) {
    return setProperty(o, name, value, true, null);
}`,"org.apache.catalina.valves.ValveBase.getNext_":
 `/**
 * Return the next Valve in this pipeline, or <code>null</code> if this
 * is the last Valve in the pipeline.
 */
@Override
public Valve getNext() {
    return next;
}`,"org.apache.tomcat.util.net.AbstractEndpoint.getPort_":
 `public int getPort() {
    return port;
}`,"org.apache.catalina.connector.Request.getCoyoteRequest_":
 `/**
 * Get the Coyote request.
 *
 * @return the Coyote request object
 */
public org.apache.coyote.Request getCoyoteRequest() {
    return this.coyoteRequest;
}`,"org.apache.coyote.AbstractProtocol.getPort_":
 `public int getPort() {
    return endpoint.getPort();
}`,"org.apache.catalina.util.LifecycleMBeanBase.<init>_":
 ``,"org.apache.juli.logging.DirectJDKLog.isDebugEnabled_":
 `@Override
public final boolean isDebugEnabled() {
    return logger.isLoggable(Level.FINE);
}`,"org.apache.catalina.valves.RequestFilterValve.isAllowed_String":
 `/**
 * Perform the test implemented by this Valve, matching against the
 * specified request property value. This method is public so that it can be
 * called through JMX, e.g. to test whether certain IP address is allowed or
 * denied by the valve configuration.
 *
 * @param property The request property value on which to filter
 * @return <code>true</code> if the request is allowed
 */
public boolean isAllowed(String property) {
    // Use local copies for thread safety
    Pattern deny = this.deny;
    Pattern allow = this.allow;
    // Check the deny patterns, if any
    if (deny != null && deny.matcher(property).matches()) {
        return false;
    }
    // Check the allow patterns, if any
    if (allow != null && allow.matcher(property).matches()) {
        return true;
    }
    // Allow if denies specified but not allows
    if (deny != null && allow == null) {
        return true;
    }
    // Deny this request
    return false;
}`,"org.apache.coyote.AbstractProtocol.setHandler_Handler":
 `protected void setHandler(Handler<S> handler) {
    this.handler = handler;
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
}`,"org.apache.tomcat.util.http.ServerCookies.<init>_int":
 `public ServerCookies(int initialSize) {
    serverCookies = new ServerCookie[initialSize];
}`,"org.apache.catalina.connector.RequestFacade.<init>_Request":
 `// ----------------------------------------------------------- Constructors
/**
 * Construct a wrapper for the specified request.
 *
 * @param request The request to be wrapped
 */
public RequestFacade(Request request) {
    this.request = request;
}`,"org.apache.catalina.connector.RequestFacade.getRemoteAddr_":
 `@Override
public String getRemoteAddr() {
    if (request == null) {
        throw new IllegalStateException(sm.getString("requestFacade.nullRequest"));
    }
    return request.getRemoteAddr();
}`,"org.apache.tomcat.util.http.MimeHeaders.addValue_String":
 `/**
 * Create a new named header , return the MessageBytes
 * container for the new value
 * @param name The header name
 * @return the message bytes container for the value
 */
public MessageBytes addValue(String name) {
    MimeHeaderField mh = createHeader();
    mh.getName().setString(name);
    return mh.getValue();
}`,"org.apache.tomcat.util.http.Parameters.setURLDecoder_UDecoder":
 `public void setURLDecoder(UDecoder u) {
    urlDec = u;
}`,"org.apache.juli.logging.DirectJDKLog.getInstance_String":
 `static Log getInstance(String name) {
    return new DirectJDKLog(name);
}`,"org.apache.tomcat.util.net.AbstractEndpoint.setTcpNoDelay_boolean":
 `public void setTcpNoDelay(boolean tcpNoDelay) {
    socketProperties.setTcpNoDelay(tcpNoDelay);
}`,"org.apache.juli.logging.DirectJDKLog.<init>_String":
 `public DirectJDKLog(String name) {
    logger = Logger.getLogger(name);
}`,"org.apache.tomcat.util.buf.AbstractChunk.<init>_":
 ``,"org.apache.catalina.valves.RemoteAddrValve.getLog_":
 `@Override
protected Log getLog() {
    return log;
}`,"org.apache.tomcat.util.buf.UEncoder.initialSafeChars_":
 `// -------------------- Internal implementation --------------------
private static BitSet initialSafeChars() {
    BitSet initialSafeChars = new BitSet(128);
    int i;
    for (i = 'a'; i <= 'z'; i++) {
        initialSafeChars.set(i);
    }
    for (i = 'A'; i <= 'Z'; i++) {
        initialSafeChars.set(i);
    }
    for (i = '0'; i <= '9'; i++) {
        initialSafeChars.set(i);
    }
    // safe
    initialSafeChars.set('$');
    initialSafeChars.set('-');
    initialSafeChars.set('_');
    initialSafeChars.set('.');
    // Dangerous: someone may treat this as " "
    // RFC1738 does allow it, it's not reserved
    // initialSafeChars.set('+');
    // extra
    initialSafeChars.set('!');
    initialSafeChars.set('*');
    initialSafeChars.set('\'');
    initialSafeChars.set('(');
    initialSafeChars.set(')');
    initialSafeChars.set(',');
    return initialSafeChars;
}`,"org.apache.catalina.core.ApplicationMapping.<init>_MappingData":
 `public ApplicationMapping(MappingData mappingData) {
    this.mappingData = mappingData;
}`,"org.apache.tomcat.util.http.MimeHeaders.getValue_String":
 `// -------------------- Getting headers --------------------
/**
 * Finds and returns a header field with the given name.  If no such
 * field exists, null is returned.  If more than one such field is
 * in the header, an arbitrary one is returned.
 * @param name The header name
 * @return the value
 */
public MessageBytes getValue(String name) {
    for (int i = 0; i < count; i++) {
        if (headers[i].getName().equalsIgnoreCase(name)) {
            return headers[i].getValue();
        }
    }
    return null;
}`,"org.apache.catalina.connector.Request.getConnector_":
 `/**
 * @return the Connector through which this Request was received.
 */
public Connector getConnector() {
    return this.connector;
}`,"org.apache.catalina.connector.Request.getPeerAddr_":
 `/**
 * @return the connection peer IP address making this Request.
 */
public String getPeerAddr() {
    if (peerAddr == null) {
        coyoteRequest.action(ActionCode.REQ_PEER_ADDR_ATTRIBUTE, coyoteRequest);
        peerAddr = coyoteRequest.peerAddr().toString();
    }
    return peerAddr;
}`,"org.apache.catalina.valves.RequestFilterValve.setUsePeerAddress_boolean":
 `/**
 * Set the flag deciding whether we use the connection peer address
 * or the remote address. This makes a dfifference when
 * using AJP or the RemoteIpValve.
 *
 * @param usePeerAddress The new flag
 */
public void setUsePeerAddress(boolean usePeerAddress) {
    this.usePeerAddress = usePeerAddress;
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
}`,"org.apache.catalina.util.LifecycleBase.setThrowOnFailure_boolean":
 `/**
 * Configure if a {@link LifecycleException} thrown by a sub-class during
 * {@link #initInternal()}, {@link #startInternal()},
 * {@link #stopInternal()} or {@link #destroyInternal()} will be re-thrown
 * for the caller to handle or if it will be logged instead.
 *
 * @param throwOnFailure {@code true} if the exception should be re-thrown,
 *                       otherwise {@code false}
 */
public void setThrowOnFailure(boolean throwOnFailure) {
    this.throwOnFailure = throwOnFailure;
}`,"org.apache.catalina.connector.OutputBuffer.<init>_int":
 `// ----------------------------------------------------------- Constructors
/**
 * Create the buffer with the specified initial size.
 *
 * @param size Buffer size to use
 */
public OutputBuffer(int size) {
    defaultBufferSize = size;
    bb = ByteBuffer.allocate(size);
    clear(bb);
    cb = CharBuffer.allocate(size);
    clear(cb);
}`,"org.apache.catalina.connector.Request.getRemoteAddr_":
 `/**
 * @return the remote IP address making this Request.
 */
@Override
public String getRemoteAddr() {
    if (remoteAddr == null) {
        coyoteRequest.action(ActionCode.REQ_HOST_ADDR_ATTRIBUTE, coyoteRequest);
        remoteAddr = coyoteRequest.remoteAddr().toString();
    }
    return remoteAddr;
}`,"org.apache.coyote.AbstractProtocol.setConnectionLinger_int":
 `public void setConnectionLinger(int connectionLinger) {
    endpoint.setConnectionLinger(connectionLinger);
}`,"org.apache.tomcat.util.net.SocketProperties.setSoTimeout_int":
 `public void setSoTimeout(int soTimeout) {
    this.soTimeout = Integer.valueOf(soTimeout);
}`,"org.apache.tomcat.util.net.AbstractEndpoint.setHandler_AbstractEndpoint$Handler":
 `public void setHandler(Handler<S> handler) {
    this.handler = handler;
}`,"org.apache.catalina.connector.Request.<init>_Connector":
 `/**
 * Create a new Request object associated with the given Connector.
 *
 * @param connector The Connector with which this Request object will always
 *                  be associated. In normal usage this must be non-null. In
 *                  some test scenarios, it may be possible to use a null
 *                  Connector without triggering an NPE.
 */
public Request(Connector connector) {
    this.connector = connector;
}`,"org.apache.tomcat.util.http.MimeHeaders.<init>_":
 `/**
 * Creates a new MimeHeaders object using a default buffer size.
 */
public MimeHeaders() {
    // NO-OP
}`,"org.apache.catalina.connector.Request.setCoyoteRequest_Request":
 `/**
 * Set the Coyote request.
 *
 * @param coyoteRequest The Coyote request
 */
public void setCoyoteRequest(org.apache.coyote.Request coyoteRequest) {
    this.coyoteRequest = coyoteRequest;
    inputBuffer.setRequest(coyoteRequest);
}`,"org.apache.catalina.valves.TestRequestFilterValve.testRemoteAddrValveIPv4_":
 `@Test
public void testRemoteAddrValveIPv4() {
    standardTests(ADDR_ALLOW_PAT, ADDR_DENY_PAT, ADDR_ONLY_ALLOW, ADDR_ONLY_DENY, ADDR_ALLOW_AND_DENY, ADDR_NO_ALLOW_NO_DENY, false, "Addr");
    standardTests(ADDR_ALLOW_PAT, ADDR_DENY_PAT, ADDR_ONLY_ALLOW, ADDR_ONLY_DENY, ADDR_ALLOW_AND_DENY, ADDR_NO_ALLOW_NO_DENY, true, "Addr");
}`,"jakarta.servlet.ServletInputStream.<init>_":
 `/**
 * Does nothing, because this is an abstract class.
 */
protected ServletInputStream() {
    // NOOP
}`,"org.apache.coyote.http11.AbstractHttp11Protocol.getEndpoint_":
 `/**
 * {@inheritDoc}
 * <p>
 * Over-ridden here to make the method visible to nested classes.
 */
@Override
protected AbstractEndpoint<S, ?> getEndpoint() {
    return super.getEndpoint();
}`,"org.apache.catalina.connector.InputBuffer.<init>_int":
 `/**
 * Alternate constructor which allows specifying the initial buffer size.
 *
 * @param size Buffer size to use
 */
public InputBuffer(int size) {
    this.size = size;
    bb = ByteBuffer.allocate(size);
    clear(bb);
    cb = CharBuffer.allocate(size);
    clear(cb);
    readLimit = size;
}`,"org.apache.catalina.connector.CoyoteInputStream.<init>_InputBuffer":
 `protected CoyoteInputStream(InputBuffer ib) {
    this.ib = ib;
}`,"org.apache.catalina.valves.ValveBase.<init>_":
 `// ------------------------------------------------------ Constructor
public ValveBase() {
    this(false);
}`,"org.apache.tomcat.util.net.AbstractEndpoint.<init>_":
 ``,"org.apache.juli.logging.LogFactory.getInstance_Class":
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
}`,"org.apache.coyote.AbstractProtocol.getPortOffset_":
 `public int getPortOffset() {
    return endpoint.getPortOffset();
}`,"org.apache.coyote.AbstractProtocol.setPort_int":
 `public void setPort(int port) {
    endpoint.setPort(port);
}`,"org.apache.catalina.connector.Connector.getPort_":
 `/**
 * @return the port number on which this connector is configured to listen
 * for requests. The special value of 0 means select a random free port
 * when the socket is bound.
 */
public int getPort() {
    // Try shortcut that should work for nearly all uses first as it does
    // not use reflection and is therefore faster.
    if (protocolHandler instanceof AbstractProtocol<?>) {
        return ((AbstractProtocol<?>) protocolHandler).getPort();
    }
    // Fall back for custom protocol handlers not based on AbstractProtocol
    Object port = getProperty("port");
    if (port instanceof Integer) {
        return ((Integer) port).intValue();
    }
    // Usually means an invalid protocol has been configured
    return -1;
}`,"org.apache.catalina.connector.Connector.<init>_":
 `// ------------------------------------------------------------ Constructor
/**
 * Defaults to using HTTP/1.1 NIO implementation.
 */
public Connector() {
    this("HTTP/1.1");
}`,"org.apache.catalina.valves.TestRequestFilterValve.standardTests_String_String_String_String_String_String_boolean_String":
 `private void standardTests(String allow_pat, String deny_pat, String OnlyAllow, String OnlyDeny, String AllowAndDeny, String NoAllowNoDeny, boolean auth, String type) {
    String apat;
    String dpat;
    // Test without ports
    apat = allow_pat;
    dpat = deny_pat;
    twoTests(null, null, false, false, auth, AllowAndDeny, type, false);
    twoTests(null, null, true, false, auth, AllowAndDeny, type, false);
    twoTests(apat, null, false, false, auth, AllowAndDeny, type, true);
    twoTests(apat, null, false, false, auth, NoAllowNoDeny, type, false);
    twoTests(apat, null, true, false, auth, AllowAndDeny, type, true);
    twoTests(apat, null, true, false, auth, NoAllowNoDeny, type, false);
    twoTests(null, dpat, false, false, auth, AllowAndDeny, type, false);
    twoTests(null, dpat, false, false, auth, NoAllowNoDeny, type, true);
    twoTests(null, dpat, true, false, auth, AllowAndDeny, type, false);
    twoTests(null, dpat, true, false, auth, NoAllowNoDeny, type, true);
    twoTests(apat, dpat, false, false, auth, NoAllowNoDeny, type, false);
    twoTests(apat, dpat, false, false, auth, OnlyAllow, type, true);
    twoTests(apat, dpat, false, false, auth, OnlyDeny, type, false);
    twoTests(apat, dpat, false, false, auth, AllowAndDeny, type, false);
    twoTests(apat, dpat, true, false, auth, NoAllowNoDeny, type, false);
    twoTests(apat, dpat, true, false, auth, OnlyAllow, type, true);
    twoTests(apat, dpat, true, false, auth, OnlyDeny, type, false);
    twoTests(apat, dpat, true, false, auth, AllowAndDeny, type, false);
    // Test with port in pattern but forgotten "addConnectorPort"
    apat = allow_pat + PORT_MATCH_PATTERN;
    dpat = deny_pat + PORT_MATCH_PATTERN;
    twoTests(null, null, false, false, auth, AllowAndDeny, type, false);
    twoTests(null, null, true, false, auth, AllowAndDeny, type, false);
    twoTests(apat, null, false, false, auth, AllowAndDeny, type, false);
    twoTests(apat, null, false, false, auth, NoAllowNoDeny, type, false);
    twoTests(apat, null, true, false, auth, AllowAndDeny, type, false);
    twoTests(apat, null, true, false, auth, NoAllowNoDeny, type, false);
    twoTests(null, dpat, false, false, auth, AllowAndDeny, type, true);
    twoTests(null, dpat, false, false, auth, NoAllowNoDeny, type, true);
    twoTests(null, dpat, true, false, auth, AllowAndDeny, type, true);
    twoTests(null, dpat, true, false, auth, NoAllowNoDeny, type, true);
    twoTests(apat, dpat, false, false, auth, NoAllowNoDeny, type, false);
    twoTests(apat, dpat, false, false, auth, OnlyAllow, type, false);
    twoTests(apat, dpat, false, false, auth, OnlyDeny, type, false);
    twoTests(apat, dpat, false, false, auth, AllowAndDeny, type, false);
    twoTests(apat, dpat, true, false, auth, NoAllowNoDeny, type, false);
    twoTests(apat, dpat, true, false, auth, OnlyAllow, type, false);
    twoTests(apat, dpat, true, false, auth, OnlyDeny, type, false);
    twoTests(apat, dpat, true, false, auth, AllowAndDeny, type, false);
    // Test with "addConnectorPort" but port not in pattern
    apat = allow_pat;
    dpat = deny_pat;
    twoTests(null, null, false, true, auth, AllowAndDeny, type, false);
    twoTests(null, null, true, true, auth, AllowAndDeny, type, false);
    twoTests(apat, null, false, true, auth, AllowAndDeny, type, false);
    twoTests(apat, null, false, true, auth, NoAllowNoDeny, type, false);
    twoTests(apat, null, true, true, auth, AllowAndDeny, type, false);
    twoTests(apat, null, true, true, auth, NoAllowNoDeny, type, false);
    twoTests(null, dpat, false, true, auth, AllowAndDeny, type, true);
    twoTests(null, dpat, false, true, auth, NoAllowNoDeny, type, true);
    twoTests(null, dpat, true, true, auth, AllowAndDeny, type, true);
    twoTests(null, dpat, true, true, auth, NoAllowNoDeny, type, true);
    twoTests(apat, dpat, false, true, auth, NoAllowNoDeny, type, false);
    twoTests(apat, dpat, false, true, auth, OnlyAllow, type, false);
    twoTests(apat, dpat, false, true, auth, OnlyDeny, type, false);
    twoTests(apat, dpat, false, true, auth, AllowAndDeny, type, false);
    twoTests(apat, dpat, true, true, auth, NoAllowNoDeny, type, false);
    twoTests(apat, dpat, true, true, auth, OnlyAllow, type, false);
    twoTests(apat, dpat, true, true, auth, OnlyDeny, type, false);
    twoTests(apat, dpat, true, true, auth, AllowAndDeny, type, false);
    // Test "addConnectorPort" and with port matching in both patterns
    apat = allow_pat + PORT_MATCH_PATTERN;
    dpat = deny_pat + PORT_MATCH_PATTERN;
    twoTests(null, null, false, true, auth, AllowAndDeny, type, false);
    twoTests(null, null, true, true, auth, AllowAndDeny, type, false);
    twoTests(apat, null, false, true, auth, AllowAndDeny, type, true);
    twoTests(apat, null, false, true, auth, NoAllowNoDeny, type, false);
    twoTests(apat, null, true, true, auth, AllowAndDeny, type, true);
    twoTests(apat, null, true, true, auth, NoAllowNoDeny, type, false);
    twoTests(null, dpat, false, true, auth, AllowAndDeny, type, false);
    twoTests(null, dpat, false, true, auth, NoAllowNoDeny, type, true);
    twoTests(null, dpat, true, true, auth, AllowAndDeny, type, false);
    twoTests(null, dpat, true, true, auth, NoAllowNoDeny, type, true);
    twoTests(apat, dpat, false, true, auth, NoAllowNoDeny, type, false);
    twoTests(apat, dpat, false, true, auth, OnlyAllow, type, true);
    twoTests(apat, dpat, false, true, auth, OnlyDeny, type, false);
    twoTests(apat, dpat, false, true, auth, AllowAndDeny, type, false);
    twoTests(apat, dpat, true, true, auth, NoAllowNoDeny, type, false);
    twoTests(apat, dpat, true, true, auth, OnlyAllow, type, true);
    twoTests(apat, dpat, true, true, auth, OnlyDeny, type, false);
    twoTests(apat, dpat, true, true, auth, AllowAndDeny, type, false);
    // Test "addConnectorPort" and with port not matching in both patterns
    apat = allow_pat + PORT_NO_MATCH_PATTERN;
    dpat = deny_pat + PORT_NO_MATCH_PATTERN;
    twoTests(null, null, false, true, auth, AllowAndDeny, type, false);
    twoTests(null, null, true, true, auth, AllowAndDeny, type, false);
    twoTests(apat, null, false, true, auth, AllowAndDeny, type, false);
    twoTests(apat, null, false, true, auth, NoAllowNoDeny, type, false);
    twoTests(apat, null, true, true, auth, AllowAndDeny, type, false);
    twoTests(apat, null, true, true, auth, NoAllowNoDeny, type, false);
    twoTests(null, dpat, false, true, auth, AllowAndDeny, type, true);
    twoTests(null, dpat, false, true, auth, NoAllowNoDeny, type, true);
    twoTests(null, dpat, true, true, auth, AllowAndDeny, type, true);
    twoTests(null, dpat, true, true, auth, NoAllowNoDeny, type, true);
    twoTests(apat, dpat, false, true, auth, NoAllowNoDeny, type, false);
    twoTests(apat, dpat, false, true, auth, OnlyAllow, type, false);
    twoTests(apat, dpat, false, true, auth, OnlyDeny, type, false);
    twoTests(apat, dpat, false, true, auth, AllowAndDeny, type, false);
    twoTests(apat, dpat, true, true, auth, NoAllowNoDeny, type, false);
    twoTests(apat, dpat, true, true, auth, OnlyAllow, type, false);
    twoTests(apat, dpat, true, true, auth, OnlyDeny, type, false);
    twoTests(apat, dpat, true, true, auth, AllowAndDeny, type, false);
    // Test "addConnectorPort" and with port matching only in allow
    apat = allow_pat + PORT_MATCH_PATTERN;
    dpat = deny_pat + PORT_NO_MATCH_PATTERN;
    twoTests(null, null, false, true, auth, AllowAndDeny, type, false);
    twoTests(null, null, true, true, auth, AllowAndDeny, type, false);
    twoTests(apat, null, false, true, auth, AllowAndDeny, type, true);
    twoTests(apat, null, false, true, auth, NoAllowNoDeny, type, false);
    twoTests(apat, null, true, true, auth, AllowAndDeny, type, true);
    twoTests(apat, null, true, true, auth, NoAllowNoDeny, type, false);
    twoTests(null, dpat, false, true, auth, AllowAndDeny, type, true);
    twoTests(null, dpat, false, true, auth, NoAllowNoDeny, type, true);
    twoTests(null, dpat, true, true, auth, AllowAndDeny, type, true);
    twoTests(null, dpat, true, true, auth, NoAllowNoDeny, type, true);
    twoTests(apat, dpat, false, true, auth, NoAllowNoDeny, type, false);
    twoTests(apat, dpat, false, true, auth, OnlyAllow, type, true);
    twoTests(apat, dpat, false, true, auth, OnlyDeny, type, false);
    twoTests(apat, dpat, false, true, auth, AllowAndDeny, type, true);
    twoTests(apat, dpat, true, true, auth, NoAllowNoDeny, type, false);
    twoTests(apat, dpat, true, true, auth, OnlyAllow, type, true);
    twoTests(apat, dpat, true, true, auth, OnlyDeny, type, false);
    twoTests(apat, dpat, true, true, auth, AllowAndDeny, type, true);
    // Test "addConnectorPort" and with port matching only in deny
    apat = allow_pat + PORT_NO_MATCH_PATTERN;
    dpat = deny_pat + PORT_MATCH_PATTERN;
    twoTests(null, null, false, true, auth, AllowAndDeny, type, false);
    twoTests(null, null, true, true, auth, AllowAndDeny, type, false);
    twoTests(apat, null, false, true, auth, AllowAndDeny, type, false);
    twoTests(apat, null, false, true, auth, NoAllowNoDeny, type, false);
    twoTests(apat, null, true, true, auth, AllowAndDeny, type, false);
    twoTests(apat, null, true, true, auth, NoAllowNoDeny, type, false);
    twoTests(null, dpat, false, true, auth, AllowAndDeny, type, false);
    twoTests(null, dpat, false, true, auth, NoAllowNoDeny, type, true);
    twoTests(null, dpat, true, true, auth, AllowAndDeny, type, false);
    twoTests(null, dpat, true, true, auth, NoAllowNoDeny, type, true);
    twoTests(apat, dpat, false, true, auth, NoAllowNoDeny, type, false);
    twoTests(apat, dpat, false, true, auth, OnlyAllow, type, false);
    twoTests(apat, dpat, false, true, auth, OnlyDeny, type, false);
    twoTests(apat, dpat, false, true, auth, AllowAndDeny, type, false);
    twoTests(apat, dpat, true, true, auth, NoAllowNoDeny, type, false);
    twoTests(apat, dpat, true, true, auth, OnlyAllow, type, false);
    twoTests(apat, dpat, true, true, auth, OnlyDeny, type, false);
    twoTests(apat, dpat, true, true, auth, AllowAndDeny, type, false);
}`,"org.apache.catalina.valves.RequestFilterValve.getUsePeerAddress_":
 `/**
 * Get the flag deciding whether we use the connection peer address
 * or the remote address. This makes a dfifference when
 * using AJP or the RemoteIpValve.
 * @return <code>true</code> if we use the connection peer address
 */
public boolean getUsePeerAddress() {
    return usePeerAddress;
}`,"org.apache.tomcat.util.net.AbstractEndpoint.setConnectionTimeout_int":
 `public void setConnectionTimeout(int soTimeout) {
    socketProperties.setSoTimeout(soTimeout);
}`,"org.apache.catalina.connector.Response.<init>_":
 `// ----------------------------------------------------- Instance Variables
public Response() {
    this(OutputBuffer.DEFAULT_BUFFER_SIZE);
}`,"org.apache.catalina.connector.Request.getContext_":
 `/**
 * Return the Context within which this Request is being processed.
 * <p>
 * This is available as soon as the appropriate Context is identified.
 * Note that availability of a Context allows <code>getContextPath()</code>
 * to return a value, and thus enables parsing of the request URI.
 *
 * @return the Context mapped with the request
 */
public Context getContext() {
    return mappingData.context;
}`,"org.apache.catalina.core.StandardContext.setPreemptiveAuthentication_boolean":
 `@Override
public void setPreemptiveAuthentication(boolean preemptiveAuthentication) {
    this.preemptiveAuthentication = preemptiveAuthentication;
}`,"org.apache.catalina.util.LifecycleBase.getState_":
 `/**
 * {@inheritDoc}
 */
@Override
public LifecycleState getState() {
    return state;
}`,"org.apache.catalina.valves.TestRequestFilterValve$MockResponse.<init>_":
 ``,"org.apache.catalina.connector.OutputBuffer.clear_Buffer":
 `private void clear(Buffer buffer) {
    buffer.rewind().limit(0);
}`,"org.apache.catalina.LifecycleState.<init>_boolean_String":
 `private LifecycleState(boolean available, String lifecycleEvent) {
    this.available = available;
    this.lifecycleEvent = lifecycleEvent;
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
}`,"org.apache.tomcat.util.buf.MessageBytes$MessageBytesFactory.<init>_":
 `protected MessageBytesFactory() {
}`,"org.apache.tomcat.util.http.Parameters.setQuery_MessageBytes":
 `public void setQuery(MessageBytes queryMB) {
    this.queryMB = queryMB;
}`,"org.apache.tomcat.util.buf.MessageBytes.setString_String":
 `/**
 * Set the content to be a string
 * @param s The string
 */
public void setString(String s) {
    strValue = s;
    hasHashCode = false;
    hasLongValue = false;
    if (s == null) {
        hasStrValue = false;
        type = T_NULL;
    } else {
        hasStrValue = true;
        type = T_STR;
    }
}`,"org.apache.tomcat.util.collections.SynchronizedStack.<init>_":
 `public SynchronizedStack() {
    this(DEFAULT_SIZE, DEFAULT_LIMIT);
}`,"org.apache.catalina.connector.Connector.setPort_int":
 `/**
 * Set the port number on which we listen for requests.
 *
 * @param port The new port number
 */
public void setPort(int port) {
    setProperty("port", String.valueOf(port));
}`,"org.apache.catalina.valves.RequestFilterValve.setAllow_String":
 `/**
 * Set the regular expression used to test for allowed requests for this
 * Valve, if any.
 *
 * @param allow The new allow expression
 */
public void setAllow(String allow) {
    if (allow == null || allow.length() == 0) {
        this.allow = null;
        allowValue = null;
        allowValid = true;
    } else {
        boolean success = false;
        try {
            allowValue = allow;
            this.allow = Pattern.compile(allow);
            success = true;
        } finally {
            allowValid = success;
        }
    }
}`,"org.apache.catalina.connector.Connector.getPortWithOffset_":
 `public int getPortWithOffset() {
    int port = getPort();
    // Zero is a special case and negative values are invalid
    if (port > 0) {
        return port + getPortOffset();
    }
    return port;
}`,"org.apache.tomcat.util.buf.CharChunk.<init>_":
 `/**
 * Creates a new, uninitialized CharChunk object.
 */
public CharChunk() {
}`,"org.apache.coyote.http11.AbstractHttp11Protocol.<init>_AbstractEndpoint":
 `public AbstractHttp11Protocol(AbstractEndpoint<S, ?> endpoint) {
    super(endpoint);
    setConnectionTimeout(Constants.DEFAULT_CONNECTION_TIMEOUT);
    ConnectionHandler<S> cHandler = new ConnectionHandler<>(this);
    setHandler(cHandler);
    getEndpoint().setHandler(cHandler);
}`,"org.apache.tomcat.util.collections.SynchronizedStack.<init>_int_int":
 `public SynchronizedStack(int size, int limit) {
    if (limit > -1 && size > limit) {
        this.size = limit;
    } else {
        this.size = size;
    }
    this.limit = limit;
    stack = new Object[size];
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
}`,"org.apache.tomcat.util.http.parser.MediaTypeCache.<init>_int":
 `public MediaTypeCache(int size) {
    cache = new ConcurrentCache<>(size);
}`,"org.apache.tomcat.util.net.SocketProperties.setTcpNoDelay_boolean":
 `public void setTcpNoDelay(boolean tcpNoDelay) {
    this.tcpNoDelay = Boolean.valueOf(tcpNoDelay);
}`,"org.apache.tomcat.util.buf.MessageBytes$MessageBytesFactory.newInstance_":
 `public MessageBytes newInstance() {
    return new MessageBytes();
}`,"org.apache.catalina.valves.RequestFilterValve.process_String_Request_Response":
 `/**
 * Perform the filtering that has been configured for this Valve, matching
 * against the specified request property.
 *
 * @param property The request property on which to filter
 * @param request The servlet request to be processed
 * @param response The servlet response to be processed
 *
 * @exception IOException if an input/output error occurs
 * @exception ServletException if a servlet error occurs
 */
protected void process(String property, Request request, Response response) throws IOException, ServletException {
    if (isAllowed(property)) {
        getNext().invoke(request, response);
        return;
    }
    if (getLog().isDebugEnabled()) {
        getLog().debug(sm.getString("requestFilterValve.deny", request.getRequestURI(), property));
    }
    // Deny this request
    denyRequest(request, response);
}`,"org.apache.catalina.valves.RequestFilterValve.setDenyStatus_int":
 `/**
 * Set response status code that is used to reject denied request.
 * @param denyStatus The status code
 */
public void setDenyStatus(int denyStatus) {
    this.denyStatus = denyStatus;
}`,"org.apache.tomcat.util.http.MimeHeaders.createHeader_":
 `// -------------------- Adding headers --------------------
/**
 * Adds a partially constructed field to the header.  This
 * field has not had its name or value initialized.
 */
private MimeHeaderField createHeader() {
    if (limit > -1 && count >= limit) {
        throw new IllegalStateException(sm.getString("headers.maxCountFail", Integer.valueOf(limit)));
    }
    MimeHeaderField mh;
    int len = headers.length;
    if (count >= len) {
        // expand header list array
        int newLength = count * 2;
        if (limit > 0 && newLength > limit) {
            newLength = limit;
        }
        MimeHeaderField[] tmp = new MimeHeaderField[newLength];
        System.arraycopy(headers, 0, tmp, 0, len);
        headers = tmp;
    }
    if ((mh = headers[count]) == null) {
        headers[count] = mh = new MimeHeaderField();
    }
    count++;
    return mh;
}`,"org.apache.catalina.connector.Connector.<init>_String":
 `public Connector(String protocol) {
    configuredProtocol = protocol;
    ProtocolHandler p = null;
    try {
        p = ProtocolHandler.create(protocol);
    } catch (Exception e) {
        log.error(sm.getString("coyoteConnector.protocolHandlerInstantiationFailed"), e);
    }
    if (p != null) {
        protocolHandler = p;
        protocolHandlerClassName = protocolHandler.getClass().getName();
    } else {
        protocolHandler = null;
        protocolHandlerClassName = protocol;
    }
    // Default for Connector depends on this system property
    setThrowOnFailure(Boolean.getBoolean("org.apache.catalina.startup.EXIT_ON_INIT_FAILURE"));
}`,"org.apache.catalina.valves.RequestFilterValve.setInvalidAuthenticationWhenDeny_boolean":
 `/**
 * Set invalidAuthenticationWhenDeny property.
 * @param value <code>true</code> to handle a deny by setting an invalid auth header
 */
public void setInvalidAuthenticationWhenDeny(boolean value) {
    invalidAuthenticationWhenDeny = value;
}`,"org.apache.catalina.connector.Connector.getPortOffset_":
 `public int getPortOffset() {
    // Try shortcut that should work for nearly all uses first as it does
    // not use reflection and is therefore faster.
    if (protocolHandler instanceof AbstractProtocol<?>) {
        return ((AbstractProtocol<?>) protocolHandler).getPortOffset();
    }
    // Fall back for custom protocol handlers not based on AbstractProtocol
    Object port = getProperty("portOffset");
    if (port instanceof Integer) {
        return ((Integer) port).intValue();
    }
    // Usually means an invalid protocol has been configured.
    return 0;
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
}`,"org.apache.catalina.connector.InputBuffer.clear_Buffer":
 `private void clear(Buffer buffer) {
    buffer.rewind().limit(0);
}`,"org.apache.tomcat.util.buf.UEncoder.<init>_SafeCharsSet":
 `/**
 * Create a UEncoder with an unmodifiable safe character set.
 *
 * @param safeCharsSet safe characters for this encoder
 */
public UEncoder(SafeCharsSet safeCharsSet) {
    this.safeChars = safeCharsSet.getSafeChars();
}`,"org.apache.coyote.AbstractProtocol$RecycledProcessors.<init>_AbstractProtocol$ConnectionHandler":
 `public RecycledProcessors(ConnectionHandler<?> handler) {
    this.handler = handler;
}`,"org.apache.tomcat.util.net.SocketProperties.setSoLingerOn_boolean":
 `public void setSoLingerOn(boolean soLingerOn) {
    this.soLingerOn = Boolean.valueOf(soLingerOn);
}`,"org.apache.catalina.valves.TestRequestFilterValve$TerminatingValve.<init>_":
 ``,"org.apache.catalina.valves.ValveBase.setNext_Valve":
 `/**
 * Set the Valve that follows this one in the pipeline it is part of.
 *
 * @param valve The new next valve
 */
@Override
public void setNext(Valve valve) {
    this.next = valve;
}`,"org.apache.coyote.AbstractProtocol.setTcpNoDelay_boolean":
 `public void setTcpNoDelay(boolean tcpNoDelay) {
    endpoint.setTcpNoDelay(tcpNoDelay);
}`,"org.apache.tomcat.util.http.MimeHeaders.getHeader_String":
 `// bad shortcut - it'll convert to string ( too early probably,
// encoding is guessed very late )
public String getHeader(String name) {
    MessageBytes mh = getValue(name);
    return mh != null ? mh.toString() : null;
}`,"org.apache.coyote.Request.action_ActionCode_Object":
 `public void action(ActionCode actionCode, Object param) {
    if (hook != null) {
        if (param == null) {
            hook.action(actionCode, this);
        } else {
            hook.action(actionCode, param);
        }
    }
}`,"org.apache.tomcat.util.net.AbstractEndpoint.setPort_int":
 `public void setPort(int port) {
    this.port = port;
}`,"org.apache.catalina.valves.RequestFilterValve.denyRequest_Request_Response":
 `/**
 * Reject the request that was denied by this valve.
 * <p>If <code>invalidAuthenticationWhenDeny</code> is true
 * and the context has <code>preemptiveAuthentication</code>
 * set, set an invalid authorization header to trigger basic auth.
 *
 * @param request The servlet request to be processed
 * @param response The servlet response to be processed
 * @exception IOException if an input/output error occurs
 * @exception ServletException if a servlet error occurs
 */
protected void denyRequest(Request request, Response response) throws IOException, ServletException {
    if (invalidAuthenticationWhenDeny) {
        Context context = request.getContext();
        if (context != null && context.getPreemptiveAuthentication()) {
            if (request.getCoyoteRequest().getMimeHeaders().getValue("authorization") == null) {
                request.getCoyoteRequest().getMimeHeaders().addValue("authorization").setString("invalid");
            }
            getNext().invoke(request, response);
            return;
        }
    }
    response.sendError(denyStatus);
}`,"org.apache.tomcat.util.buf.UDecoder$DecodeException.fillInStackTrace_":
 `@Override
public synchronized Throwable fillInStackTrace() {
    // This class does not provide a stack trace
    return this;
}`,"org.apache.catalina.connector.Request.getRequest_":
 `/**
 * @return the <code>ServletRequest</code> for which this object
 * is the facade.  This method must be implemented by a subclass.
 */
public HttpServletRequest getRequest() {
    if (facade == null) {
        facade = new RequestFacade(this);
    }
    if (applicationRequest == null) {
        applicationRequest = facade;
    }
    return applicationRequest;
}`,"org.apache.catalina.valves.RemoteAddrValve.invoke_Request_Response":
 `// --------------------------------------------------------- Public Methods
@Override
public void invoke(Request request, Response response) throws IOException, ServletException {
    String property;
    if (getUsePeerAddress()) {
        property = request.getPeerAddr();
    } else {
        property = request.getRequest().getRemoteAddr();
    }
    if (getAddConnectorPort()) {
        property = property + ";" + request.getConnector().getPortWithOffset();
    }
    process(property, request, response);
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
}`,"org.apache.catalina.connector.Response.<init>_int":
 `public Response(int outputBufferSize) {
    outputBuffer = new OutputBuffer(outputBufferSize);
}`,"org.apache.tomcat.util.net.AbstractEndpoint.getPortOffset_":
 `public int getPortOffset() {
    return portOffset;
}`,"org.apache.catalina.valves.RequestFilterValve.setDeny_String":
 `/**
 * Set the regular expression used to test for denied requests for this
 * Valve, if any.
 *
 * @param deny The new deny expression
 */
public void setDeny(String deny) {
    if (deny == null || deny.length() == 0) {
        this.deny = null;
        denyValue = null;
        denyValid = true;
    } else {
        boolean success = false;
        try {
            denyValue = deny;
            this.deny = Pattern.compile(deny);
            success = true;
        } finally {
            denyValid = success;
        }
    }
}`,"org.apache.tomcat.util.buf.MessageBytes.equalsIgnoreCase_String":
 `/**
 * Compares the message bytes to the specified String object.
 * @param s the String to compare
 * @return <code>true</code> if the comparison succeeded, <code>false</code> otherwise
 */
public boolean equalsIgnoreCase(String s) {
    switch(type) {
        case T_STR:
            if (strValue == null) {
                return s == null;
            }
            return strValue.equalsIgnoreCase(s);
        case T_CHARS:
            return charC.equalsIgnoreCase(s);
        case T_BYTES:
            return byteC.equalsIgnoreCase(s);
        default:
            return false;
    }
}`,"org.apache.tomcat.util.net.SocketProperties.<init>_":
 ``,"org.apache.tomcat.util.buf.MessageBytes.<init>_":
 `/**
 * Creates a new, uninitialized MessageBytes object.
 * Use static newInstance() in order to allow
 *   future hooks.
 */
private MessageBytes() {
}`,"org.apache.tomcat.util.http.MimeHeaderField.getValue_":
 ``,"org.apache.tomcat.util.net.NioEndpoint.<init>_":
 ``,"org.apache.catalina.valves.ValveBase.setContainer_Container":
 `/**
 * Set the Container with which this Valve is associated, if any.
 *
 * @param container The new associated container
 */
@Override
public void setContainer(Container container) {
    this.container = container;
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
}`,"org.apache.tomcat.util.compat.JreCompat.isGraalAvailable_":
 `public static boolean isGraalAvailable() {
    return graalAvailable;
}`,"org.apache.catalina.valves.ValveBase.<init>_boolean":
 `public ValveBase(boolean asyncSupported) {
    this.asyncSupported = asyncSupported;
}`,"org.apache.catalina.valves.TestRequestFilterValve$TerminatingValve.invoke_Request_Response":
 `@Override
public void invoke(Request request, Response response) throws IOException, ServletException {
}`,"org.apache.coyote.AbstractProtocol.<init>_AbstractEndpoint":
 `public AbstractProtocol(AbstractEndpoint<S, ?> endpoint) {
    this.endpoint = endpoint;
    setConnectionLinger(Constants.DEFAULT_CONNECTION_LINGER);
    setTcpNoDelay(Constants.DEFAULT_TCP_NO_DELAY);
}`,"org.apache.catalina.valves.RemoteAddrValve.<init>_":
 ``,"org.apache.coyote.AbstractProtocol$ConnectionHandler.<init>_AbstractProtocol":
 `public ConnectionHandler(AbstractProtocol<S> proto) {
    this.proto = proto;
}`,"org.apache.catalina.util.ParameterMap.<init>_":
 `/**
 * Construct a new, empty map with the default initial capacity and
 * load factor.
 */
public ParameterMap() {
    delegatedMap = new LinkedHashMap<>();
    unmodifiableDelegatedMap = Collections.unmodifiableMap(delegatedMap);
}`,"org.apache.coyote.http11.Http11NioProtocol.<init>_":
 `public Http11NioProtocol() {
    super(new NioEndpoint());
}`,"org.apache.tomcat.util.compat.Jre9Compat.jarFileRuntimeMajorVersion_":
 `@Override
public int jarFileRuntimeMajorVersion() {
    return RUNTIME_MAJOR_VERSION;
}`,"org.apache.tomcat.util.modeler.BaseModelMBean.<init>_":
 ``,"org.apache.coyote.RequestInfo.<init>_Request":
 `// ----------------------------------------------------------- Constructors
public RequestInfo(Request req) {
    this.req = req;
}`,"org.apache.catalina.connector.Request.getMappingData_":
 `/**
 * @return mapping data.
 */
public MappingData getMappingData() {
    return mappingData;
}`,"org.apache.catalina.connector.Request.getHeader_String":
 `/**
 * Return the first value of the specified header, if any; otherwise,
 * return <code>null</code>
 *
 * @param name Name of the requested header
 * @return the header value
 */
@Override
public String getHeader(String name) {
    return coyoteRequest.getHeader(name);
}`,"org.apache.coyote.Request.<init>_":
 `// ----------------------------------------------------------- Constructors
public Request() {
    parameters.setQuery(queryMB);
    parameters.setURLDecoder(urlDecoder);
}`,"org.apache.catalina.core.ContainerBase.<init>_":
 ``,"org.apache.coyote.ContinueResponseTiming.<init>_String":
 `private ContinueResponseTiming(String configValue) {
    this.configValue = configValue;
}`,"org.apache.tomcat.util.XReflectionIntrospectionUtils.isEnabled_":
 `static boolean isEnabled() {
    return false;
}`,"org.apache.catalina.core.StandardContext.getPreemptiveAuthentication_":
 `@Override
public boolean getPreemptiveAuthentication() {
    return preemptiveAuthentication;
}`,"org.apache.catalina.valves.TestRequestFilterValve$MockResponse.getStatus_":
 `@Override
public int getStatus() {
    return status;
}`,"org.apache.tomcat.util.net.AbstractJsseEndpoint.<init>_":
 ``,"org.apache.catalina.connector.InputBuffer.<init>_":
 `// ----------------------------------------------------------- Constructors
/**
 * Default constructor. Allocate the buffer with the default buffer size.
 */
public InputBuffer() {
    this(DEFAULT_BUFFER_SIZE);
}`,"org.apache.tomcat.util.net.AbstractEndpoint.setConnectionLinger_int":
 `public void setConnectionLinger(int connectionLinger) {
    socketProperties.setSoLingerTime(connectionLinger);
    socketProperties.setSoLingerOn(connectionLinger >= 0);
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
}`,"org.apache.coyote.ActionCode.<init>_":
 ``,"org.apache.coyote.AbstractProtocol.getEndpoint_":
 `// ----------------------------------------------- Accessors for sub-classes
protected AbstractEndpoint<S, ?> getEndpoint() {
    return endpoint;
}`,"org.apache.tomcat.util.buf.MessageBytes.toString_":
 `// -------------------- Conversion and getters --------------------
/**
 * Compute the string value.
 * @return the string
 */
@Override
public String toString() {
    if (hasStrValue) {
        return strValue;
    }
    switch(type) {
        case T_CHARS:
            strValue = charC.toString();
            hasStrValue = true;
            return strValue;
        case T_BYTES:
            strValue = byteC.toString();
            hasStrValue = true;
            return strValue;
    }
    return null;
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
}`,"org.apache.tomcat.util.compat.Jre9Compat.<init>_":
 ``,"org.apache.juli.logging.LogFactory.getFactory_":
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
}`,"org.apache.tomcat.util.buf.MessageBytes.newInstance_":
 `/**
 * Construct a new MessageBytes instance.
 * @return the instance
 */
public static MessageBytes newInstance() {
    return factory.newInstance();
}`,"org.apache.catalina.core.StandardContext$ContextFilterMaps.<init>_":
 ``,"org.apache.coyote.Request.getHeader_String":
 `public String getHeader(String name) {
    return headers.getHeader(name);
}`,"org.apache.catalina.util.LifecycleBase.<init>_":
 ``,"org.apache.catalina.valves.TestRequestFilterValve$MockResponse.sendError_int":
 `@Override
public void sendError(int status) throws IOException {
    this.status = status;
}`,"org.apache.coyote.http11.AbstractHttp11JsseProtocol.<init>_AbstractJsseEndpoint":
 `public AbstractHttp11JsseProtocol(AbstractJsseEndpoint<S, ?> endpoint) {
    super(endpoint);
}`,"org.apache.catalina.core.StandardContextValve.<init>_":
 `public StandardContextValve() {
    super(true);
}`,"org.apache.tomcat.util.buf.ByteChunk.<init>_":
 `/**
 * Creates a new, uninitialized ByteChunk object.
 */
public ByteChunk() {
}`,"org.apache.coyote.ProtocolHandler.create_String":
 `/**
 * Create a new ProtocolHandler for the given protocol.
 * @param protocol the protocol
 * @return the newly instantiated protocol handler
 * @throws ClassNotFoundException Specified protocol was not found
 * @throws InstantiationException Specified protocol could not be instantiated
 * @throws IllegalAccessException Exception occurred
 * @throws IllegalArgumentException Exception occurred
 * @throws InvocationTargetException Exception occurred
 * @throws NoSuchMethodException Exception occurred
 * @throws SecurityException Exception occurred
 */
public static ProtocolHandler create(String protocol) throws ClassNotFoundException, InstantiationException, IllegalAccessException, IllegalArgumentException, InvocationTargetException, NoSuchMethodException, SecurityException {
    if (protocol == null || "HTTP/1.1".equals(protocol) || org.apache.coyote.http11.Http11NioProtocol.class.getName().equals(protocol)) {
        return new org.apache.coyote.http11.Http11NioProtocol();
    } else if ("AJP/1.3".equals(protocol) || org.apache.coyote.ajp.AjpNioProtocol.class.getName().equals(protocol)) {
        return new org.apache.coyote.ajp.AjpNioProtocol();
    } else {
        // Instantiate protocol handler
        Class<?> clazz = Class.forName(protocol);
        return (ProtocolHandler) clazz.getConstructor().newInstance();
    }
}`,"org.apache.catalina.valves.TestRequestFilterValve.oneTest_String_String_boolean_boolean_boolean_boolean_String_String_boolean":
 `private void oneTest(String allow, String deny, boolean denyStatus, boolean addConnectorPort, boolean usePeerAddress, boolean auth, String property, String type, boolean allowed) {
    // PREPARE
    RequestFilterValve valve = null;
    Connector connector = new Connector();
    Context context = new StandardContext();
    Request request = new Request(connector);
    Response response = new MockResponse();
    StringBuilder msg = new StringBuilder();
    int expected = allowed ? OK : FORBIDDEN;
    connector.setPort(PORT);
    request.getMappingData().context = context;
    request.setCoyoteRequest(new org.apache.coyote.Request());
    Assert.assertNotNull("Invalid test with null type", type);
    request.setCoyoteRequest(new org.apache.coyote.Request());
    if (property != null) {
        if (type.equals("Addr")) {
            valve = new RemoteAddrValve();
            if (usePeerAddress) {
                request.setRemoteAddr(ADDR_OTHER);
                request.getCoyoteRequest().peerAddr().setString(property);
                ((RemoteAddrValve) valve).setUsePeerAddress(true);
                msg.append(" peer='" + property + "'");
            } else {
                request.setRemoteAddr(property);
                request.getCoyoteRequest().peerAddr().setString(ADDR_OTHER);
                msg.append(" ip='" + property + "'");
            }
        } else if (type.equals("Host")) {
            valve = new RemoteHostValve();
            request.setRemoteHost(property);
            msg.append(" host='" + property + "'");
        } else if (type.equals("CIDR")) {
            valve = new RemoteCIDRValve();
            if (usePeerAddress) {
                request.setRemoteAddr(ADDR_OTHER);
                request.getCoyoteRequest().peerAddr().setString(property);
                ((RemoteCIDRValve) valve).setUsePeerAddress(true);
                msg.append(" peer='" + property + "'");
            } else {
                request.setRemoteAddr(property);
                request.getCoyoteRequest().peerAddr().setString(ADDR_OTHER);
                msg.append(" ip='" + property + "'");
            }
        }
    }
    Assert.assertNotNull("Invalid test type" + type, valve);
    valve.setNext(new TerminatingValve());
    if (allow != null) {
        valve.setAllow(allow);
        msg.append(" allow='" + allow + "'");
    }
    if (deny != null) {
        valve.setDeny(deny);
        msg.append(" deny='" + deny + "'");
    }
    if (denyStatus) {
        valve.setDenyStatus(CUSTOM);
        msg.append(" denyStatus='" + CUSTOM + "'");
        if (!allowed) {
            expected = CUSTOM;
        }
    }
    if (addConnectorPort) {
        if (valve instanceof RemoteAddrValve) {
            ((RemoteAddrValve) valve).setAddConnectorPort(true);
        } else if (valve instanceof RemoteHostValve) {
            ((RemoteHostValve) valve).setAddConnectorPort(true);
        } else if (valve instanceof RemoteCIDRValve) {
            ((RemoteCIDRValve) valve).setAddConnectorPort(true);
        } else {
            Assert.fail("Can only set 'addConnectorPort' for RemoteAddrValve, RemoteHostValve and RemoteCIDRValve");
        }
        msg.append(" addConnectorPort='true'");
    }
    if (auth) {
        context.setPreemptiveAuthentication(true);
        valve.setInvalidAuthenticationWhenDeny(true);
        msg.append(" auth='true'");
    }
    // TEST
    try {
        valve.invoke(request, response);
    } catch (IOException | ServletException ex) {
        // Ignore
    }
    // VERIFY
    if (!allowed && auth) {
        Assert.assertEquals(msg.toString(), OK, response.getStatus());
        Assert.assertEquals(msg.toString(), "invalid", request.getHeader("authorization"));
    } else {
        Assert.assertEquals(msg.toString(), expected, response.getStatus());
    }
}`,"org.apache.tomcat.util.buf.UDecoder$DecodeException.<init>_String":
 `public DecodeException(String s) {
    super(s);
}`,"org.apache.tomcat.util.buf.EncodedSolidusHandling.<init>_String":
 `EncodedSolidusHandling(String value) {
    this.value = value;
}`,"org.apache.tomcat.util.http.MimeHeaderField.<init>_":
 ``,"org.apache.catalina.valves.TestRequestFilterValve.twoTests_String_String_boolean_boolean_boolean_String_String_boolean":
 `private void twoTests(String allow, String deny, boolean denyStatus, boolean addConnectorPort, boolean auth, String property, String type, boolean allowed) {
    oneTest(allow, deny, denyStatus, addConnectorPort, false, auth, property, type, allowed);
    if (!type.equals("Host")) {
        oneTest(allow, deny, denyStatus, addConnectorPort, true, auth, property, type, allowed);
    }
}`,"org.apache.coyote.Request.peerAddr_":
 `public MessageBytes peerAddr() {
    return peerAddrMB;
}`,"org.apache.tomcat.util.net.SocketProperties.setSoLingerTime_int":
 `public void setSoLingerTime(int soLingerTime) {
    this.soLingerTime = Integer.valueOf(soLingerTime);
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
}`,"org.apache.coyote.http11.AbstractHttp11JsseProtocol.getEndpoint_":
 `@Override
protected AbstractJsseEndpoint<S, ?> getEndpoint() {
    // Over-ridden to add cast
    return (AbstractJsseEndpoint<S, ?>) super.getEndpoint();
}`,"org.apache.catalina.valves.RequestFilterValve.setAddConnectorPort_boolean":
 `/**
 * Set the flag deciding whether we add the server connector port to the
 * property compared in the filtering method. The port will be appended
 * using a ";" as a separator.
 *
 * @param addConnectorPort The new flag
 */
public void setAddConnectorPort(boolean addConnectorPort) {
    this.addConnectorPort = addConnectorPort;
}`,"org.apache.catalina.connector.InputBuffer.setRequest_Request":
 `// ------------------------------------------------------------- Properties
/**
 * Associated Coyote request.
 *
 * @param coyoteRequest Associated Coyote request
 */
public void setRequest(Request coyoteRequest) {
    this.coyoteRequest = coyoteRequest;
}`,"org.apache.catalina.util.ErrorPageSupport.<init>_":
 ``,"org.apache.tomcat.util.compat.Jre9Compat.isSupported_":
 `static boolean isSupported() {
    return inaccessibleObjectExceptionClazz != null;
}`,"org.apache.coyote.CompressionConfig.<init>_":
 ``,"org.apache.tomcat.util.compat.GraalCompat.isSupported_":
 `static boolean isSupported() {
    // This property does not exist for a native image
    return GRAAL;
}`,"org.apache.coyote.AbstractProtocol.setConnectionTimeout_int":
 `public void setConnectionTimeout(int timeout) {
    endpoint.setConnectionTimeout(timeout);
}`,},
};
var treeData = [
{
  "call" : "org.apache.catalina.valves.TestRequestFilterValve#testRemoteAddrValveIPv4",
  "kiekerPattern" : "public void org.apache.catalina.valves.TestRequestFilterValve.testRemoteAddrValveIPv4()",
  "otherKiekerPattern" : null,
  "module" : "",
  "name" : "org.apache.catalina.valves.TestRequestFilterValve#testRemoteAddrValveIPv4",
  "key" : "org.apache.catalina.valves.TestRequestFilterValve.testRemoteAddrValveIPv4_",
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
    "call" : "org.apache.catalina.valves.TestRequestFilterValve#standardTests",
    "kiekerPattern" : "private void org.apache.catalina.valves.TestRequestFilterValve.standardTests(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,boolean,java.lang.String)",
    "otherKiekerPattern" : null,
    "module" : "",
    "name" : "org.apache.catalina.valves.TestRequestFilterValve#standardTests",
    "key" : "org.apache.catalina.valves.TestRequestFilterValve.standardTests_String_String_String_String_String_String_boolean_String",
    "otherKey" : null,
    "parent" : "org.apache.catalina.valves.TestRequestFilterValve#testRemoteAddrValveIPv4",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ {
      "call" : "org.apache.catalina.valves.TestRequestFilterValve#twoTests",
      "kiekerPattern" : "private void org.apache.catalina.valves.TestRequestFilterValve.twoTests(java.lang.String,java.lang.String,boolean,boolean,boolean,java.lang.String,java.lang.String,boolean)",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "org.apache.catalina.valves.TestRequestFilterValve#twoTests",
      "key" : "org.apache.catalina.valves.TestRequestFilterValve.twoTests_String_String_boolean_boolean_boolean_String_String_boolean",
      "otherKey" : null,
      "parent" : "org.apache.catalina.valves.TestRequestFilterValve#standardTests",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
        "kiekerPattern" : "private void org.apache.catalina.valves.TestRequestFilterValve.oneTest(java.lang.String,java.lang.String,boolean,boolean,boolean,boolean,java.lang.String,java.lang.String,boolean)",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
        "key" : "org.apache.catalina.valves.TestRequestFilterValve.oneTest_String_String_boolean_boolean_boolean_boolean_String_String_boolean",
        "otherKey" : null,
        "parent" : "org.apache.catalina.valves.TestRequestFilterValve#twoTests",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.apache.juli.logging.LogFactory#<init>",
          "kiekerPattern" : "private new org.apache.juli.logging.LogFactory.<init>()",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.juli.logging.LogFactory#<init>",
          "key" : "org.apache.juli.logging.LogFactory.<init>_",
          "otherKey" : null,
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.juli.logging.LogFactory#getLog",
          "kiekerPattern" : "public static org.apache.juli.logging.Log org.apache.juli.logging.LogFactory.getLog(java.lang.Class)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.juli.logging.LogFactory#getLog",
          "key" : "org.apache.juli.logging.LogFactory.getLog_Class",
          "otherKey" : null,
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
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
          "kiekerPattern" : "public static final org.apache.tomcat.util.res.StringManager org.apache.tomcat.util.res.StringManager.getManager(java.lang.Class)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.tomcat.util.res.StringManager#getManager",
          "key" : "org.apache.tomcat.util.res.StringManager.getManager_Class",
          "otherKey" : null,
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
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
                "ess" : 7,
                "children" : [ ]
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
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
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
          "call" : "org.apache.catalina.LifecycleState#<init>",
          "kiekerPattern" : "private new org.apache.catalina.LifecycleState.<init>(boolean,java.lang.String)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.catalina.LifecycleState#<init>",
          "key" : "org.apache.catalina.LifecycleState.<init>_boolean_String",
          "otherKey" : null,
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.catalina.util.LifecycleBase#<init>",
          "kiekerPattern" : "public new org.apache.catalina.util.LifecycleBase.<init>()",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.catalina.util.LifecycleBase#<init>",
          "key" : "org.apache.catalina.util.LifecycleBase.<init>_",
          "otherKey" : null,
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.catalina.util.LifecycleMBeanBase#<init>",
          "kiekerPattern" : "public new org.apache.catalina.util.LifecycleMBeanBase.<init>()",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.catalina.util.LifecycleMBeanBase#<init>",
          "key" : "org.apache.catalina.util.LifecycleMBeanBase.<init>_",
          "otherKey" : null,
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.tomcat.util.buf.EncodedSolidusHandling#<init>",
          "kiekerPattern" : "new org.apache.tomcat.util.buf.EncodedSolidusHandling.<init>(java.lang.String)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.tomcat.util.buf.EncodedSolidusHandling#<init>",
          "key" : "org.apache.tomcat.util.buf.EncodedSolidusHandling.<init>_String",
          "otherKey" : null,
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.catalina.connector.Connector#<init>",
          "kiekerPattern" : "public new org.apache.catalina.connector.Connector.<init>(java.lang.String)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.catalina.connector.Connector#<init>",
          "key" : "org.apache.catalina.connector.Connector.<init>_String",
          "otherKey" : null,
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.apache.coyote.ProtocolHandler#create",
            "kiekerPattern" : "public static org.apache.coyote.ProtocolHandler org.apache.coyote.ProtocolHandler.create(java.lang.String)",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.coyote.ProtocolHandler#create",
            "key" : "org.apache.coyote.ProtocolHandler.create_String",
            "otherKey" : null,
            "parent" : "org.apache.catalina.connector.Connector#<init>",
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
              "parent" : "org.apache.coyote.ProtocolHandler#create",
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
                    "ess" : 9,
                    "children" : [ ]
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
              "parent" : "org.apache.coyote.ProtocolHandler#create",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
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
                "ess" : 7,
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
                "ess" : 7,
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
                  "ess" : 8,
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
                    "ess" : 9,
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
                      "ess" : 10,
                      "children" : [ ]
                    } ]
                  } ]
                } ]
              } ]
            }, {
              "call" : "org.apache.tomcat.util.net.SocketProperties#<init>",
              "kiekerPattern" : "public new org.apache.tomcat.util.net.SocketProperties.<init>()",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.tomcat.util.net.SocketProperties#<init>",
              "key" : "org.apache.tomcat.util.net.SocketProperties.<init>_",
              "otherKey" : null,
              "parent" : "org.apache.coyote.ProtocolHandler#create",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            }, {
              "call" : "org.apache.tomcat.util.net.AbstractEndpoint#<init>",
              "kiekerPattern" : "public new org.apache.tomcat.util.net.AbstractEndpoint.<init>()",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.tomcat.util.net.AbstractEndpoint#<init>",
              "key" : "org.apache.tomcat.util.net.AbstractEndpoint.<init>_",
              "otherKey" : null,
              "parent" : "org.apache.coyote.ProtocolHandler#create",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            }, {
              "call" : "org.apache.tomcat.util.net.AbstractJsseEndpoint#<init>",
              "kiekerPattern" : "public new org.apache.tomcat.util.net.AbstractJsseEndpoint.<init>()",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.tomcat.util.net.AbstractJsseEndpoint#<init>",
              "key" : "org.apache.tomcat.util.net.AbstractJsseEndpoint.<init>_",
              "otherKey" : null,
              "parent" : "org.apache.coyote.ProtocolHandler#create",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            }, {
              "call" : "org.apache.tomcat.util.net.NioEndpoint#<init>",
              "kiekerPattern" : "public new org.apache.tomcat.util.net.NioEndpoint.<init>()",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.tomcat.util.net.NioEndpoint#<init>",
              "key" : "org.apache.tomcat.util.net.NioEndpoint.<init>_",
              "otherKey" : null,
              "parent" : "org.apache.coyote.ProtocolHandler#create",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            }, {
              "call" : "org.apache.coyote.AbstractProtocol#<init>",
              "kiekerPattern" : "public new org.apache.coyote.AbstractProtocol.<init>(org.apache.tomcat.util.net.AbstractEndpoint)",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.coyote.AbstractProtocol#<init>",
              "key" : "org.apache.coyote.AbstractProtocol.<init>_AbstractEndpoint",
              "otherKey" : null,
              "parent" : "org.apache.coyote.ProtocolHandler#create",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ {
                "call" : "org.apache.coyote.AbstractProtocol#setConnectionLinger",
                "kiekerPattern" : "public void org.apache.coyote.AbstractProtocol.setConnectionLinger(int)",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "org.apache.coyote.AbstractProtocol#setConnectionLinger",
                "key" : "org.apache.coyote.AbstractProtocol.setConnectionLinger_int",
                "otherKey" : null,
                "parent" : "org.apache.coyote.AbstractProtocol#<init>",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ {
                  "call" : "org.apache.tomcat.util.net.AbstractEndpoint#setConnectionLinger",
                  "kiekerPattern" : "public void org.apache.tomcat.util.net.AbstractEndpoint.setConnectionLinger(int)",
                  "otherKiekerPattern" : null,
                  "module" : "",
                  "name" : "org.apache.tomcat.util.net.AbstractEndpoint#setConnectionLinger",
                  "key" : "org.apache.tomcat.util.net.AbstractEndpoint.setConnectionLinger_int",
                  "otherKey" : null,
                  "parent" : "org.apache.coyote.AbstractProtocol#setConnectionLinger",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ {
                    "call" : "org.apache.tomcat.util.net.SocketProperties#setSoLingerTime",
                    "kiekerPattern" : "public void org.apache.tomcat.util.net.SocketProperties.setSoLingerTime(int)",
                    "otherKiekerPattern" : null,
                    "module" : "",
                    "name" : "org.apache.tomcat.util.net.SocketProperties#setSoLingerTime",
                    "key" : "org.apache.tomcat.util.net.SocketProperties.setSoLingerTime_int",
                    "otherKey" : null,
                    "parent" : "org.apache.tomcat.util.net.AbstractEndpoint#setConnectionLinger",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ ]
                  }, {
                    "call" : "org.apache.tomcat.util.net.SocketProperties#setSoLingerOn",
                    "kiekerPattern" : "public void org.apache.tomcat.util.net.SocketProperties.setSoLingerOn(boolean)",
                    "otherKiekerPattern" : null,
                    "module" : "",
                    "name" : "org.apache.tomcat.util.net.SocketProperties#setSoLingerOn",
                    "key" : "org.apache.tomcat.util.net.SocketProperties.setSoLingerOn_boolean",
                    "otherKey" : null,
                    "parent" : "org.apache.tomcat.util.net.AbstractEndpoint#setConnectionLinger",
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
              }, {
                "call" : "org.apache.coyote.AbstractProtocol#setTcpNoDelay",
                "kiekerPattern" : "public void org.apache.coyote.AbstractProtocol.setTcpNoDelay(boolean)",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "org.apache.coyote.AbstractProtocol#setTcpNoDelay",
                "key" : "org.apache.coyote.AbstractProtocol.setTcpNoDelay_boolean",
                "otherKey" : null,
                "parent" : "org.apache.coyote.AbstractProtocol#<init>",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ {
                  "call" : "org.apache.tomcat.util.net.AbstractEndpoint#setTcpNoDelay",
                  "kiekerPattern" : "public void org.apache.tomcat.util.net.AbstractEndpoint.setTcpNoDelay(boolean)",
                  "otherKiekerPattern" : null,
                  "module" : "",
                  "name" : "org.apache.tomcat.util.net.AbstractEndpoint#setTcpNoDelay",
                  "key" : "org.apache.tomcat.util.net.AbstractEndpoint.setTcpNoDelay_boolean",
                  "otherKey" : null,
                  "parent" : "org.apache.coyote.AbstractProtocol#setTcpNoDelay",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ {
                    "call" : "org.apache.tomcat.util.net.SocketProperties#setTcpNoDelay",
                    "kiekerPattern" : "public void org.apache.tomcat.util.net.SocketProperties.setTcpNoDelay(boolean)",
                    "otherKiekerPattern" : null,
                    "module" : "",
                    "name" : "org.apache.tomcat.util.net.SocketProperties#setTcpNoDelay",
                    "key" : "org.apache.tomcat.util.net.SocketProperties.setTcpNoDelay_boolean",
                    "otherKey" : null,
                    "parent" : "org.apache.tomcat.util.net.AbstractEndpoint#setTcpNoDelay",
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
            }, {
              "call" : "org.apache.coyote.CompressionConfig#<init>",
              "kiekerPattern" : "public new org.apache.coyote.CompressionConfig.<init>()",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.coyote.CompressionConfig#<init>",
              "key" : "org.apache.coyote.CompressionConfig.<init>_",
              "otherKey" : null,
              "parent" : "org.apache.coyote.ProtocolHandler#create",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            }, {
              "call" : "org.apache.coyote.ContinueResponseTiming#<init>",
              "kiekerPattern" : "private new org.apache.coyote.ContinueResponseTiming.<init>(java.lang.String)",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.coyote.ContinueResponseTiming#<init>",
              "key" : "org.apache.coyote.ContinueResponseTiming.<init>_String",
              "otherKey" : null,
              "parent" : "org.apache.coyote.ProtocolHandler#create",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            }, {
              "call" : "org.apache.coyote.http11.AbstractHttp11Protocol#<init>",
              "kiekerPattern" : "public new org.apache.coyote.http11.AbstractHttp11Protocol.<init>(org.apache.tomcat.util.net.AbstractEndpoint)",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.coyote.http11.AbstractHttp11Protocol#<init>",
              "key" : "org.apache.coyote.http11.AbstractHttp11Protocol.<init>_AbstractEndpoint",
              "otherKey" : null,
              "parent" : "org.apache.coyote.ProtocolHandler#create",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ {
                "call" : "org.apache.coyote.AbstractProtocol#setConnectionTimeout",
                "kiekerPattern" : "public void org.apache.coyote.AbstractProtocol.setConnectionTimeout(int)",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "org.apache.coyote.AbstractProtocol#setConnectionTimeout",
                "key" : "org.apache.coyote.AbstractProtocol.setConnectionTimeout_int",
                "otherKey" : null,
                "parent" : "org.apache.coyote.http11.AbstractHttp11Protocol#<init>",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ {
                  "call" : "org.apache.tomcat.util.net.AbstractEndpoint#setConnectionTimeout",
                  "kiekerPattern" : "public void org.apache.tomcat.util.net.AbstractEndpoint.setConnectionTimeout(int)",
                  "otherKiekerPattern" : null,
                  "module" : "",
                  "name" : "org.apache.tomcat.util.net.AbstractEndpoint#setConnectionTimeout",
                  "key" : "org.apache.tomcat.util.net.AbstractEndpoint.setConnectionTimeout_int",
                  "otherKey" : null,
                  "parent" : "org.apache.coyote.AbstractProtocol#setConnectionTimeout",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ {
                    "call" : "org.apache.tomcat.util.net.SocketProperties#setSoTimeout",
                    "kiekerPattern" : "public void org.apache.tomcat.util.net.SocketProperties.setSoTimeout(int)",
                    "otherKiekerPattern" : null,
                    "module" : "",
                    "name" : "org.apache.tomcat.util.net.SocketProperties#setSoTimeout",
                    "key" : "org.apache.tomcat.util.net.SocketProperties.setSoTimeout_int",
                    "otherKey" : null,
                    "parent" : "org.apache.tomcat.util.net.AbstractEndpoint#setConnectionTimeout",
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
              }, {
                "call" : "org.apache.juli.logging.LogFactory#getLog",
                "kiekerPattern" : "public static org.apache.juli.logging.Log org.apache.juli.logging.LogFactory.getLog(java.lang.Class)",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "org.apache.juli.logging.LogFactory#getLog",
                "key" : "org.apache.juli.logging.LogFactory.getLog_Class",
                "otherKey" : null,
                "parent" : "org.apache.coyote.http11.AbstractHttp11Protocol#<init>",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
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
                  "ess" : 8,
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
                  "ess" : 8,
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
                    "ess" : 9,
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
                      "ess" : 10,
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
                        "ess" : 11,
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
                "parent" : "org.apache.coyote.http11.AbstractHttp11Protocol#<init>",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
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
                  "ess" : 8,
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
                    "ess" : 9,
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
                      "ess" : 10,
                      "children" : [ ]
                    } ]
                  } ]
                } ]
              }, {
                "call" : "org.apache.tomcat.util.modeler.BaseModelMBean#<init>",
                "kiekerPattern" : "public new org.apache.tomcat.util.modeler.BaseModelMBean.<init>()",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "org.apache.tomcat.util.modeler.BaseModelMBean#<init>",
                "key" : "org.apache.tomcat.util.modeler.BaseModelMBean.<init>_",
                "otherKey" : null,
                "parent" : "org.apache.coyote.http11.AbstractHttp11Protocol#<init>",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              }, {
                "call" : "org.apache.coyote.RequestGroupInfo#<init>",
                "kiekerPattern" : "public new org.apache.coyote.RequestGroupInfo.<init>()",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "org.apache.coyote.RequestGroupInfo#<init>",
                "key" : "org.apache.coyote.RequestGroupInfo.<init>_",
                "otherKey" : null,
                "parent" : "org.apache.coyote.http11.AbstractHttp11Protocol#<init>",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              }, {
                "call" : "org.apache.tomcat.util.collections.SynchronizedStack#<init>",
                "kiekerPattern" : "public new org.apache.tomcat.util.collections.SynchronizedStack.<init>(int,int)",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "org.apache.tomcat.util.collections.SynchronizedStack#<init>",
                "key" : "org.apache.tomcat.util.collections.SynchronizedStack.<init>_int_int",
                "otherKey" : null,
                "parent" : "org.apache.coyote.http11.AbstractHttp11Protocol#<init>",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              }, {
                "call" : "org.apache.tomcat.util.collections.SynchronizedStack#<init>",
                "kiekerPattern" : "public new org.apache.tomcat.util.collections.SynchronizedStack.<init>()",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "org.apache.tomcat.util.collections.SynchronizedStack#<init>",
                "key" : "org.apache.tomcat.util.collections.SynchronizedStack.<init>_",
                "otherKey" : null,
                "parent" : "org.apache.coyote.http11.AbstractHttp11Protocol#<init>",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              }, {
                "call" : "org.apache.coyote.AbstractProtocol$RecycledProcessors#<init>",
                "kiekerPattern" : "public new org.apache.coyote.AbstractProtocol$RecycledProcessors.<init>(org.apache.coyote.AbstractProtocol$ConnectionHandler)",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "org.apache.coyote.AbstractProtocol$RecycledProcessors#<init>",
                "key" : "org.apache.coyote.AbstractProtocol$RecycledProcessors.<init>_AbstractProtocol$ConnectionHandler",
                "otherKey" : null,
                "parent" : "org.apache.coyote.http11.AbstractHttp11Protocol#<init>",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              }, {
                "call" : "org.apache.coyote.AbstractProtocol$ConnectionHandler#<init>",
                "kiekerPattern" : "public new org.apache.coyote.AbstractProtocol$ConnectionHandler.<init>(org.apache.coyote.AbstractProtocol)",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "org.apache.coyote.AbstractProtocol$ConnectionHandler#<init>",
                "key" : "org.apache.coyote.AbstractProtocol$ConnectionHandler.<init>_AbstractProtocol",
                "otherKey" : null,
                "parent" : "org.apache.coyote.http11.AbstractHttp11Protocol#<init>",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              }, {
                "call" : "org.apache.coyote.AbstractProtocol#setHandler",
                "kiekerPattern" : "protected void org.apache.coyote.AbstractProtocol.setHandler(org.apache.tomcat.util.net.AbstractEndpoint.Handler)",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "org.apache.coyote.AbstractProtocol#setHandler",
                "key" : "org.apache.coyote.AbstractProtocol.setHandler_Handler",
                "otherKey" : null,
                "parent" : "org.apache.coyote.http11.AbstractHttp11Protocol#<init>",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              }, {
                "call" : "org.apache.coyote.http11.AbstractHttp11JsseProtocol#getEndpoint",
                "kiekerPattern" : "protected org.apache.tomcat.util.net.AbstractJsseEndpoint org.apache.coyote.http11.AbstractHttp11JsseProtocol.getEndpoint()",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "org.apache.coyote.http11.AbstractHttp11JsseProtocol#getEndpoint",
                "key" : "org.apache.coyote.http11.AbstractHttp11JsseProtocol.getEndpoint_",
                "otherKey" : null,
                "parent" : "org.apache.coyote.http11.AbstractHttp11Protocol#<init>",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
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
                  "ess" : 8,
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
                    "ess" : 9,
                    "children" : [ ]
                  } ]
                } ]
              }, {
                "call" : "org.apache.tomcat.util.net.AbstractEndpoint#setHandler",
                "kiekerPattern" : "public void org.apache.tomcat.util.net.AbstractEndpoint.setHandler(org.apache.tomcat.util.net.AbstractEndpoint$Handler)",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "org.apache.tomcat.util.net.AbstractEndpoint#setHandler",
                "key" : "org.apache.tomcat.util.net.AbstractEndpoint.setHandler_AbstractEndpoint$Handler",
                "otherKey" : null,
                "parent" : "org.apache.coyote.http11.AbstractHttp11Protocol#<init>",
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
              "call" : "org.apache.coyote.http11.AbstractHttp11JsseProtocol#<init>",
              "kiekerPattern" : "public new org.apache.coyote.http11.AbstractHttp11JsseProtocol.<init>(org.apache.tomcat.util.net.AbstractJsseEndpoint)",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.coyote.http11.AbstractHttp11JsseProtocol#<init>",
              "key" : "org.apache.coyote.http11.AbstractHttp11JsseProtocol.<init>_AbstractJsseEndpoint",
              "otherKey" : null,
              "parent" : "org.apache.coyote.ProtocolHandler#create",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            }, {
              "call" : "org.apache.coyote.http11.Http11NioProtocol#<init>",
              "kiekerPattern" : "public new org.apache.coyote.http11.Http11NioProtocol.<init>()",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.coyote.http11.Http11NioProtocol#<init>",
              "key" : "org.apache.coyote.http11.Http11NioProtocol.<init>_",
              "otherKey" : null,
              "parent" : "org.apache.coyote.ProtocolHandler#create",
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
            "call" : "org.apache.catalina.util.LifecycleBase#setThrowOnFailure",
            "kiekerPattern" : "public void org.apache.catalina.util.LifecycleBase.setThrowOnFailure(boolean)",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.catalina.util.LifecycleBase#setThrowOnFailure",
            "key" : "org.apache.catalina.util.LifecycleBase.setThrowOnFailure_boolean",
            "otherKey" : null,
            "parent" : "org.apache.catalina.connector.Connector#<init>",
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
          "call" : "org.apache.catalina.connector.Connector#<init>",
          "kiekerPattern" : "public new org.apache.catalina.connector.Connector.<init>()",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.catalina.connector.Connector#<init>",
          "key" : "org.apache.catalina.connector.Connector.<init>_",
          "otherKey" : null,
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.catalina.core.StandardPipeline#<init>",
          "kiekerPattern" : "public new org.apache.catalina.core.StandardPipeline.<init>(org.apache.catalina.Container)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.catalina.core.StandardPipeline#<init>",
          "key" : "org.apache.catalina.core.StandardPipeline.<init>_Container",
          "otherKey" : null,
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
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
            "ess" : 5,
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
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.tomcat.util.compat.GraalCompat#isSupported",
          "kiekerPattern" : "static boolean org.apache.tomcat.util.compat.GraalCompat.isSupported()",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.tomcat.util.compat.GraalCompat#isSupported",
          "key" : "org.apache.tomcat.util.compat.GraalCompat.isSupported_",
          "otherKey" : null,
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.tomcat.util.compat.Jre9Compat#isSupported",
          "kiekerPattern" : "static boolean org.apache.tomcat.util.compat.Jre9Compat.isSupported()",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.tomcat.util.compat.Jre9Compat#isSupported",
          "key" : "org.apache.tomcat.util.compat.Jre9Compat.isSupported_",
          "otherKey" : null,
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.tomcat.util.compat.JreCompat#<init>",
          "kiekerPattern" : "public new org.apache.tomcat.util.compat.JreCompat.<init>()",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.tomcat.util.compat.JreCompat#<init>",
          "key" : "org.apache.tomcat.util.compat.JreCompat.<init>_",
          "otherKey" : null,
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.tomcat.util.compat.Jre9Compat#<init>",
          "kiekerPattern" : "new org.apache.tomcat.util.compat.Jre9Compat.<init>()",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.tomcat.util.compat.Jre9Compat#<init>",
          "key" : "org.apache.tomcat.util.compat.Jre9Compat.<init>_",
          "otherKey" : null,
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.tomcat.util.compat.Jre9Compat#jarFileRuntimeMajorVersion",
          "kiekerPattern" : "public int org.apache.tomcat.util.compat.Jre9Compat.jarFileRuntimeMajorVersion()",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.tomcat.util.compat.Jre9Compat#jarFileRuntimeMajorVersion",
          "key" : "org.apache.tomcat.util.compat.Jre9Compat.jarFileRuntimeMajorVersion_",
          "otherKey" : null,
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.tomcat.util.compat.JreCompat#isGraalAvailable",
          "kiekerPattern" : "public static boolean org.apache.tomcat.util.compat.JreCompat.isGraalAvailable()",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.tomcat.util.compat.JreCompat#isGraalAvailable",
          "key" : "org.apache.tomcat.util.compat.JreCompat.isGraalAvailable_",
          "otherKey" : null,
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.catalina.util.ErrorPageSupport#<init>",
          "kiekerPattern" : "public new org.apache.catalina.util.ErrorPageSupport.<init>()",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.catalina.util.ErrorPageSupport#<init>",
          "key" : "org.apache.catalina.util.ErrorPageSupport.<init>_",
          "otherKey" : null,
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.catalina.core.StandardContext$ContextFilterMaps#<init>",
          "kiekerPattern" : "private new org.apache.catalina.core.StandardContext$ContextFilterMaps.<init>()",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.catalina.core.StandardContext$ContextFilterMaps#<init>",
          "key" : "org.apache.catalina.core.StandardContext$ContextFilterMaps.<init>_",
          "otherKey" : null,
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.catalina.core.StandardContext#<init>",
          "kiekerPattern" : "public new org.apache.catalina.core.StandardContext.<init>()",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.catalina.core.StandardContext#<init>",
          "key" : "org.apache.catalina.core.StandardContext.<init>_",
          "otherKey" : null,
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
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
                  "ess" : 8,
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
            "parent" : "org.apache.catalina.core.StandardContext#<init>",
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
            "parent" : "org.apache.catalina.core.StandardContext#<init>",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
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
            "ess" : 5,
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
            "ess" : 5,
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
            "ess" : 5,
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
              "ess" : 6,
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
              "ess" : 6,
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
              "ess" : 6,
              "children" : [ ]
            } ]
          } ]
        }, {
          "call" : "org.apache.catalina.connector.InputBuffer#<init>",
          "kiekerPattern" : "public new org.apache.catalina.connector.InputBuffer.<init>(int)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.catalina.connector.InputBuffer#<init>",
          "key" : "org.apache.catalina.connector.InputBuffer.<init>_int",
          "otherKey" : null,
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.apache.catalina.connector.InputBuffer#clear",
            "kiekerPattern" : "private void org.apache.catalina.connector.InputBuffer.clear(java.nio.Buffer)",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.catalina.connector.InputBuffer#clear",
            "key" : "org.apache.catalina.connector.InputBuffer.clear_Buffer",
            "otherKey" : null,
            "parent" : "org.apache.catalina.connector.InputBuffer#<init>",
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
          "call" : "org.apache.catalina.connector.InputBuffer#<init>",
          "kiekerPattern" : "public new org.apache.catalina.connector.InputBuffer.<init>()",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.catalina.connector.InputBuffer#<init>",
          "key" : "org.apache.catalina.connector.InputBuffer.<init>_",
          "otherKey" : null,
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "jakarta.servlet.ServletInputStream#<init>",
          "kiekerPattern" : "protected new jakarta.servlet.ServletInputStream.<init>()",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "jakarta.servlet.ServletInputStream#<init>",
          "key" : "jakarta.servlet.ServletInputStream.<init>_",
          "otherKey" : null,
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.catalina.connector.CoyoteInputStream#<init>",
          "kiekerPattern" : "protected new org.apache.catalina.connector.CoyoteInputStream.<init>(org.apache.catalina.connector.InputBuffer)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.catalina.connector.CoyoteInputStream#<init>",
          "key" : "org.apache.catalina.connector.CoyoteInputStream.<init>_InputBuffer",
          "otherKey" : null,
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.catalina.connector.CoyoteReader#<init>",
          "kiekerPattern" : "public new org.apache.catalina.connector.CoyoteReader.<init>(org.apache.catalina.connector.InputBuffer)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.catalina.connector.CoyoteReader#<init>",
          "key" : "org.apache.catalina.connector.CoyoteReader.<init>_InputBuffer",
          "otherKey" : null,
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.catalina.util.ParameterMap#<init>",
          "kiekerPattern" : "public new org.apache.catalina.util.ParameterMap.<init>()",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.catalina.util.ParameterMap#<init>",
          "key" : "org.apache.catalina.util.ParameterMap.<init>_",
          "otherKey" : null,
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.tomcat.util.buf.MessageBytes$MessageBytesFactory#<init>",
          "kiekerPattern" : "protected new org.apache.tomcat.util.buf.MessageBytes$MessageBytesFactory.<init>()",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.tomcat.util.buf.MessageBytes$MessageBytesFactory#<init>",
          "key" : "org.apache.tomcat.util.buf.MessageBytes$MessageBytesFactory.<init>_",
          "otherKey" : null,
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.tomcat.util.buf.MessageBytes#newInstance",
          "kiekerPattern" : "public static org.apache.tomcat.util.buf.MessageBytes org.apache.tomcat.util.buf.MessageBytes.newInstance()",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.tomcat.util.buf.MessageBytes#newInstance",
          "key" : "org.apache.tomcat.util.buf.MessageBytes.newInstance_",
          "otherKey" : null,
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.apache.tomcat.util.buf.MessageBytes$MessageBytesFactory#newInstance",
            "kiekerPattern" : "public org.apache.tomcat.util.buf.MessageBytes org.apache.tomcat.util.buf.MessageBytes$MessageBytesFactory.newInstance()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.tomcat.util.buf.MessageBytes$MessageBytesFactory#newInstance",
            "key" : "org.apache.tomcat.util.buf.MessageBytes$MessageBytesFactory.newInstance_",
            "otherKey" : null,
            "parent" : "org.apache.tomcat.util.buf.MessageBytes#newInstance",
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
              "parent" : "org.apache.tomcat.util.buf.MessageBytes$MessageBytesFactory#newInstance",
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
              "call" : "org.apache.tomcat.util.buf.AbstractChunk#<init>",
              "kiekerPattern" : "public new org.apache.tomcat.util.buf.AbstractChunk.<init>()",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.tomcat.util.buf.AbstractChunk#<init>",
              "key" : "org.apache.tomcat.util.buf.AbstractChunk.<init>_",
              "otherKey" : null,
              "parent" : "org.apache.tomcat.util.buf.MessageBytes$MessageBytesFactory#newInstance",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            }, {
              "call" : "org.apache.tomcat.util.buf.ByteChunk#<init>",
              "kiekerPattern" : "public new org.apache.tomcat.util.buf.ByteChunk.<init>()",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.tomcat.util.buf.ByteChunk#<init>",
              "key" : "org.apache.tomcat.util.buf.ByteChunk.<init>_",
              "otherKey" : null,
              "parent" : "org.apache.tomcat.util.buf.MessageBytes$MessageBytesFactory#newInstance",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            }, {
              "call" : "org.apache.tomcat.util.buf.CharChunk#<init>",
              "kiekerPattern" : "public new org.apache.tomcat.util.buf.CharChunk.<init>()",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.tomcat.util.buf.CharChunk#<init>",
              "key" : "org.apache.tomcat.util.buf.CharChunk.<init>_",
              "otherKey" : null,
              "parent" : "org.apache.tomcat.util.buf.MessageBytes$MessageBytesFactory#newInstance",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            }, {
              "call" : "org.apache.tomcat.util.buf.MessageBytes#<init>",
              "kiekerPattern" : "private new org.apache.tomcat.util.buf.MessageBytes.<init>()",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.tomcat.util.buf.MessageBytes#<init>",
              "key" : "org.apache.tomcat.util.buf.MessageBytes.<init>_",
              "otherKey" : null,
              "parent" : "org.apache.tomcat.util.buf.MessageBytes$MessageBytesFactory#newInstance",
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
          "call" : "org.apache.catalina.mapper.MappingData#<init>",
          "kiekerPattern" : "public new org.apache.catalina.mapper.MappingData.<init>()",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.catalina.mapper.MappingData#<init>",
          "key" : "org.apache.catalina.mapper.MappingData.<init>_",
          "otherKey" : null,
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.catalina.core.ApplicationMapping#<init>",
          "kiekerPattern" : "public new org.apache.catalina.core.ApplicationMapping.<init>(org.apache.catalina.mapper.MappingData)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.catalina.core.ApplicationMapping#<init>",
          "key" : "org.apache.catalina.core.ApplicationMapping.<init>_MappingData",
          "otherKey" : null,
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.catalina.connector.Request#<init>",
          "kiekerPattern" : "public new org.apache.catalina.connector.Request.<init>(org.apache.catalina.connector.Connector)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.catalina.connector.Request#<init>",
          "key" : "org.apache.catalina.connector.Request.<init>_Connector",
          "otherKey" : null,
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.tomcat.util.http.parser.MediaTypeCache#<init>",
          "kiekerPattern" : "public new org.apache.tomcat.util.http.parser.MediaTypeCache.<init>(int)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.tomcat.util.http.parser.MediaTypeCache#<init>",
          "key" : "org.apache.tomcat.util.http.parser.MediaTypeCache.<init>_int",
          "otherKey" : null,
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.apache.tomcat.util.collections.ConcurrentCache#<init>",
            "kiekerPattern" : "public new org.apache.tomcat.util.collections.ConcurrentCache.<init>(int)",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.tomcat.util.collections.ConcurrentCache#<init>",
            "key" : "org.apache.tomcat.util.collections.ConcurrentCache.<init>_int",
            "otherKey" : null,
            "parent" : "org.apache.tomcat.util.http.parser.MediaTypeCache#<init>",
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
          "call" : "org.apache.tomcat.util.buf.UEncoder#initialSafeChars",
          "kiekerPattern" : "private static java.util.BitSet org.apache.tomcat.util.buf.UEncoder.initialSafeChars()",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.tomcat.util.buf.UEncoder#initialSafeChars",
          "key" : "org.apache.tomcat.util.buf.UEncoder.initialSafeChars_",
          "otherKey" : null,
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.tomcat.util.buf.UEncoder#<init>",
          "kiekerPattern" : "public new org.apache.tomcat.util.buf.UEncoder.<init>(org.apache.tomcat.util.buf.SafeCharsSet)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.tomcat.util.buf.UEncoder#<init>",
          "key" : "org.apache.tomcat.util.buf.UEncoder.<init>_SafeCharsSet",
          "otherKey" : null,
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.tomcat.util.buf.AbstractChunk#<init>",
          "kiekerPattern" : "public new org.apache.tomcat.util.buf.AbstractChunk.<init>()",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.tomcat.util.buf.AbstractChunk#<init>",
          "key" : "org.apache.tomcat.util.buf.AbstractChunk.<init>_",
          "otherKey" : null,
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.tomcat.util.buf.CharChunk#<init>",
          "kiekerPattern" : "public new org.apache.tomcat.util.buf.CharChunk.<init>()",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.tomcat.util.buf.CharChunk#<init>",
          "key" : "org.apache.tomcat.util.buf.CharChunk.<init>_",
          "otherKey" : null,
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.catalina.connector.Response#<init>",
          "kiekerPattern" : "public new org.apache.catalina.connector.Response.<init>(int)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.catalina.connector.Response#<init>",
          "key" : "org.apache.catalina.connector.Response.<init>_int",
          "otherKey" : null,
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.apache.tomcat.util.res.StringManager#getManager",
            "kiekerPattern" : "public static final org.apache.tomcat.util.res.StringManager org.apache.tomcat.util.res.StringManager.getManager(java.lang.Class)",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.tomcat.util.res.StringManager#getManager",
            "key" : "org.apache.tomcat.util.res.StringManager.getManager_Class",
            "otherKey" : null,
            "parent" : "org.apache.catalina.connector.Response#<init>",
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
            "call" : "org.apache.catalina.connector.OutputBuffer#<init>",
            "kiekerPattern" : "public new org.apache.catalina.connector.OutputBuffer.<init>(int)",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.catalina.connector.OutputBuffer#<init>",
            "key" : "org.apache.catalina.connector.OutputBuffer.<init>_int",
            "otherKey" : null,
            "parent" : "org.apache.catalina.connector.Response#<init>",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ {
              "call" : "org.apache.catalina.connector.OutputBuffer#clear",
              "kiekerPattern" : "private void org.apache.catalina.connector.OutputBuffer.clear(java.nio.Buffer)",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.catalina.connector.OutputBuffer#clear",
              "key" : "org.apache.catalina.connector.OutputBuffer.clear_Buffer",
              "otherKey" : null,
              "parent" : "org.apache.catalina.connector.OutputBuffer#<init>",
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
          "call" : "org.apache.catalina.connector.Response#<init>",
          "kiekerPattern" : "public new org.apache.catalina.connector.Response.<init>()",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.catalina.connector.Response#<init>",
          "key" : "org.apache.catalina.connector.Response.<init>_",
          "otherKey" : null,
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.catalina.valves.TestRequestFilterValve$MockResponse#<init>",
          "kiekerPattern" : "public new org.apache.catalina.valves.TestRequestFilterValve$MockResponse.<init>()",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.catalina.valves.TestRequestFilterValve$MockResponse#<init>",
          "key" : "org.apache.catalina.valves.TestRequestFilterValve$MockResponse.<init>_",
          "otherKey" : null,
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.catalina.connector.Connector#setPort",
          "kiekerPattern" : "public void org.apache.catalina.connector.Connector.setPort(int)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.catalina.connector.Connector#setPort",
          "key" : "org.apache.catalina.connector.Connector.setPort_int",
          "otherKey" : null,
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.apache.catalina.connector.Connector#setProperty",
            "kiekerPattern" : "public boolean org.apache.catalina.connector.Connector.setProperty(java.lang.String,java.lang.String)",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.catalina.connector.Connector#setProperty",
            "key" : "org.apache.catalina.connector.Connector.setProperty_String_String",
            "otherKey" : null,
            "parent" : "org.apache.catalina.connector.Connector#setPort",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ {
              "call" : "org.apache.juli.logging.LogFactory#getLog",
              "kiekerPattern" : "public static org.apache.juli.logging.Log org.apache.juli.logging.LogFactory.getLog(java.lang.Class)",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.juli.logging.LogFactory#getLog",
              "key" : "org.apache.juli.logging.LogFactory.getLog_Class",
              "otherKey" : null,
              "parent" : "org.apache.catalina.connector.Connector#setProperty",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
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
                "ess" : 7,
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
                "ess" : 7,
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
                  "ess" : 8,
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
                    "ess" : 9,
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
                      "ess" : 10,
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
              "parent" : "org.apache.catalina.connector.Connector#setProperty",
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
                    "ess" : 9,
                    "children" : [ ]
                  } ]
                } ]
              } ]
            }, {
              "call" : "org.apache.tomcat.util.IntrospectionUtils#setProperty",
              "kiekerPattern" : "public static boolean org.apache.tomcat.util.IntrospectionUtils.setProperty(java.lang.Object,java.lang.String,java.lang.String)",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.tomcat.util.IntrospectionUtils#setProperty",
              "key" : "org.apache.tomcat.util.IntrospectionUtils.setProperty_Object_String_String",
              "otherKey" : null,
              "parent" : "org.apache.catalina.connector.Connector#setProperty",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ {
                "call" : "org.apache.tomcat.util.IntrospectionUtils#setProperty",
                "kiekerPattern" : "public static boolean org.apache.tomcat.util.IntrospectionUtils.setProperty(java.lang.Object,java.lang.String,java.lang.String,boolean,java.lang.StringBuilder)",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "org.apache.tomcat.util.IntrospectionUtils#setProperty",
                "key" : "org.apache.tomcat.util.IntrospectionUtils.setProperty_Object_String_String_boolean_StringBuilder",
                "otherKey" : null,
                "parent" : "org.apache.tomcat.util.IntrospectionUtils#setProperty",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
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
                  "ess" : 8,
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
                  "parent" : "org.apache.tomcat.util.IntrospectionUtils#setProperty",
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
                  "parent" : "org.apache.tomcat.util.IntrospectionUtils#setProperty",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ ]
                }, {
                  "call" : "org.apache.coyote.AbstractProtocol#setPort",
                  "kiekerPattern" : "public void org.apache.coyote.AbstractProtocol.setPort(int)",
                  "otherKiekerPattern" : null,
                  "module" : "",
                  "name" : "org.apache.coyote.AbstractProtocol#setPort",
                  "key" : "org.apache.coyote.AbstractProtocol.setPort_int",
                  "otherKey" : null,
                  "parent" : "org.apache.tomcat.util.IntrospectionUtils#setProperty",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ {
                    "call" : "org.apache.tomcat.util.net.AbstractEndpoint#setPort",
                    "kiekerPattern" : "public void org.apache.tomcat.util.net.AbstractEndpoint.setPort(int)",
                    "otherKiekerPattern" : null,
                    "module" : "",
                    "name" : "org.apache.tomcat.util.net.AbstractEndpoint#setPort",
                    "key" : "org.apache.tomcat.util.net.AbstractEndpoint.setPort_int",
                    "otherKey" : null,
                    "parent" : "org.apache.coyote.AbstractProtocol#setPort",
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
          "call" : "org.apache.catalina.connector.Request#getMappingData",
          "kiekerPattern" : "public org.apache.catalina.mapper.MappingData org.apache.catalina.connector.Request.getMappingData()",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.catalina.connector.Request#getMappingData",
          "key" : "org.apache.catalina.connector.Request.getMappingData_",
          "otherKey" : null,
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.tomcat.util.http.MimeHeaders#<init>",
          "kiekerPattern" : "public new org.apache.tomcat.util.http.MimeHeaders.<init>()",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.tomcat.util.http.MimeHeaders#<init>",
          "key" : "org.apache.tomcat.util.http.MimeHeaders.<init>_",
          "otherKey" : null,
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.tomcat.util.res.StringManager#getString",
          "kiekerPattern" : "public java.lang.String org.apache.tomcat.util.res.StringManager.getString(java.lang.String)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.tomcat.util.res.StringManager#getString",
          "key" : "org.apache.tomcat.util.res.StringManager.getString_String",
          "otherKey" : null,
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.tomcat.util.buf.UDecoder$DecodeException#fillInStackTrace",
          "kiekerPattern" : "public synchronized java.lang.Throwable org.apache.tomcat.util.buf.UDecoder$DecodeException.fillInStackTrace()",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.tomcat.util.buf.UDecoder$DecodeException#fillInStackTrace",
          "key" : "org.apache.tomcat.util.buf.UDecoder$DecodeException.fillInStackTrace_",
          "otherKey" : null,
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.tomcat.util.buf.UDecoder$DecodeException#<init>",
          "kiekerPattern" : "public new org.apache.tomcat.util.buf.UDecoder$DecodeException.<init>(java.lang.String)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.tomcat.util.buf.UDecoder$DecodeException#<init>",
          "key" : "org.apache.tomcat.util.buf.UDecoder$DecodeException.<init>_String",
          "otherKey" : null,
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.tomcat.util.buf.UDecoder#<init>",
          "kiekerPattern" : "public new org.apache.tomcat.util.buf.UDecoder.<init>()",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.tomcat.util.buf.UDecoder#<init>",
          "key" : "org.apache.tomcat.util.buf.UDecoder.<init>_",
          "otherKey" : null,
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.tomcat.util.http.ServerCookies#<init>",
          "kiekerPattern" : "public new org.apache.tomcat.util.http.ServerCookies.<init>(int)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.tomcat.util.http.ServerCookies#<init>",
          "key" : "org.apache.tomcat.util.http.ServerCookies.<init>_int",
          "otherKey" : null,
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.tomcat.util.log.UserDataHelper#<init>",
          "kiekerPattern" : "public new org.apache.tomcat.util.log.UserDataHelper.<init>(org.apache.juli.logging.Log)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.tomcat.util.log.UserDataHelper#<init>",
          "key" : "org.apache.tomcat.util.log.UserDataHelper.<init>_Log",
          "otherKey" : null,
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.tomcat.util.buf.ByteChunk#<init>",
          "kiekerPattern" : "public new org.apache.tomcat.util.buf.ByteChunk.<init>()",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.tomcat.util.buf.ByteChunk#<init>",
          "key" : "org.apache.tomcat.util.buf.ByteChunk.<init>_",
          "otherKey" : null,
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.tomcat.util.http.Parameters#<init>",
          "kiekerPattern" : "public new org.apache.tomcat.util.http.Parameters.<init>()",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.tomcat.util.http.Parameters#<init>",
          "key" : "org.apache.tomcat.util.http.Parameters.<init>_",
          "otherKey" : null,
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.coyote.RequestInfo#<init>",
          "kiekerPattern" : "public new org.apache.coyote.RequestInfo.<init>(org.apache.coyote.Request)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.coyote.RequestInfo#<init>",
          "key" : "org.apache.coyote.RequestInfo.<init>_Request",
          "otherKey" : null,
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.coyote.Request#<init>",
          "kiekerPattern" : "public new org.apache.coyote.Request.<init>()",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.coyote.Request#<init>",
          "key" : "org.apache.coyote.Request.<init>_",
          "otherKey" : null,
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.apache.tomcat.util.http.Parameters#setQuery",
            "kiekerPattern" : "public void org.apache.tomcat.util.http.Parameters.setQuery(org.apache.tomcat.util.buf.MessageBytes)",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.tomcat.util.http.Parameters#setQuery",
            "key" : "org.apache.tomcat.util.http.Parameters.setQuery_MessageBytes",
            "otherKey" : null,
            "parent" : "org.apache.coyote.Request#<init>",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.apache.tomcat.util.http.Parameters#setURLDecoder",
            "kiekerPattern" : "public void org.apache.tomcat.util.http.Parameters.setURLDecoder(org.apache.tomcat.util.buf.UDecoder)",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.tomcat.util.http.Parameters#setURLDecoder",
            "key" : "org.apache.tomcat.util.http.Parameters.setURLDecoder_UDecoder",
            "otherKey" : null,
            "parent" : "org.apache.coyote.Request#<init>",
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
          "call" : "org.apache.catalina.connector.Request#setCoyoteRequest",
          "kiekerPattern" : "public void org.apache.catalina.connector.Request.setCoyoteRequest(org.apache.catalina.connector.org.apache.coyote.Request)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.catalina.connector.Request#setCoyoteRequest",
          "key" : "org.apache.catalina.connector.Request.setCoyoteRequest_Request",
          "otherKey" : null,
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.apache.catalina.connector.InputBuffer#setRequest",
            "kiekerPattern" : "public void org.apache.catalina.connector.InputBuffer.setRequest(org.apache.coyote.Request)",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.catalina.connector.InputBuffer#setRequest",
            "key" : "org.apache.catalina.connector.InputBuffer.setRequest_Request",
            "otherKey" : null,
            "parent" : "org.apache.catalina.connector.Request#setCoyoteRequest",
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
          "call" : "org.apache.catalina.valves.ValveBase#<init>",
          "kiekerPattern" : "public new org.apache.catalina.valves.ValveBase.<init>(boolean)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.catalina.valves.ValveBase#<init>",
          "key" : "org.apache.catalina.valves.ValveBase.<init>_boolean",
          "otherKey" : null,
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.catalina.valves.RequestFilterValve#<init>",
          "kiekerPattern" : "public new org.apache.catalina.valves.RequestFilterValve.<init>()",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.catalina.valves.RequestFilterValve#<init>",
          "key" : "org.apache.catalina.valves.RequestFilterValve.<init>_",
          "otherKey" : null,
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.catalina.valves.RemoteAddrValve#<init>",
          "kiekerPattern" : "public new org.apache.catalina.valves.RemoteAddrValve.<init>()",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.catalina.valves.RemoteAddrValve#<init>",
          "key" : "org.apache.catalina.valves.RemoteAddrValve.<init>_",
          "otherKey" : null,
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.catalina.connector.Request#setRemoteAddr",
          "kiekerPattern" : "public void org.apache.catalina.connector.Request.setRemoteAddr(java.lang.String)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.catalina.connector.Request#setRemoteAddr",
          "key" : "org.apache.catalina.connector.Request.setRemoteAddr_String",
          "otherKey" : null,
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.catalina.connector.Request#getCoyoteRequest",
          "kiekerPattern" : "public org.apache.catalina.connector.org.apache.coyote.Request org.apache.catalina.connector.Request.getCoyoteRequest()",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.catalina.connector.Request#getCoyoteRequest",
          "key" : "org.apache.catalina.connector.Request.getCoyoteRequest_",
          "otherKey" : null,
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.coyote.Request#peerAddr",
          "kiekerPattern" : "public org.apache.tomcat.util.buf.MessageBytes org.apache.coyote.Request.peerAddr()",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.coyote.Request#peerAddr",
          "key" : "org.apache.coyote.Request.peerAddr_",
          "otherKey" : null,
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.tomcat.util.buf.MessageBytes#setString",
          "kiekerPattern" : "public void org.apache.tomcat.util.buf.MessageBytes.setString(java.lang.String)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.tomcat.util.buf.MessageBytes#setString",
          "key" : "org.apache.tomcat.util.buf.MessageBytes.setString_String",
          "otherKey" : null,
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.catalina.valves.ValveBase#<init>",
          "kiekerPattern" : "public new org.apache.catalina.valves.ValveBase.<init>()",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.catalina.valves.ValveBase#<init>",
          "key" : "org.apache.catalina.valves.ValveBase.<init>_",
          "otherKey" : null,
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.catalina.valves.TestRequestFilterValve$TerminatingValve#<init>",
          "kiekerPattern" : "new org.apache.catalina.valves.TestRequestFilterValve$TerminatingValve.<init>()",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.catalina.valves.TestRequestFilterValve$TerminatingValve#<init>",
          "key" : "org.apache.catalina.valves.TestRequestFilterValve$TerminatingValve.<init>_",
          "otherKey" : null,
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.catalina.valves.ValveBase#setNext",
          "kiekerPattern" : "public void org.apache.catalina.valves.ValveBase.setNext(org.apache.catalina.Valve)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.catalina.valves.ValveBase#setNext",
          "key" : "org.apache.catalina.valves.ValveBase.setNext_Valve",
          "otherKey" : null,
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.catalina.valves.RemoteAddrValve#invoke",
          "kiekerPattern" : "public void org.apache.catalina.valves.RemoteAddrValve.invoke(org.apache.catalina.connector.Request,org.apache.catalina.connector.Response)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.catalina.valves.RemoteAddrValve#invoke",
          "key" : "org.apache.catalina.valves.RemoteAddrValve.invoke_Request_Response",
          "otherKey" : null,
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.apache.catalina.valves.RequestFilterValve#getUsePeerAddress",
            "kiekerPattern" : "public boolean org.apache.catalina.valves.RequestFilterValve.getUsePeerAddress()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.catalina.valves.RequestFilterValve#getUsePeerAddress",
            "key" : "org.apache.catalina.valves.RequestFilterValve.getUsePeerAddress_",
            "otherKey" : null,
            "parent" : "org.apache.catalina.valves.RemoteAddrValve#invoke",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.apache.catalina.connector.Request#getRequest",
            "kiekerPattern" : "public jakarta.servlet.http.HttpServletRequest org.apache.catalina.connector.Request.getRequest()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.catalina.connector.Request#getRequest",
            "key" : "org.apache.catalina.connector.Request.getRequest_",
            "otherKey" : null,
            "parent" : "org.apache.catalina.valves.RemoteAddrValve#invoke",
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
              "parent" : "org.apache.catalina.connector.Request#getRequest",
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
              "call" : "org.apache.catalina.connector.RequestFacade#<init>",
              "kiekerPattern" : "public new org.apache.catalina.connector.RequestFacade.<init>(org.apache.catalina.connector.Request)",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.catalina.connector.RequestFacade#<init>",
              "key" : "org.apache.catalina.connector.RequestFacade.<init>_Request",
              "otherKey" : null,
              "parent" : "org.apache.catalina.connector.Request#getRequest",
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
            "call" : "org.apache.catalina.connector.RequestFacade#getRemoteAddr",
            "kiekerPattern" : "public java.lang.String org.apache.catalina.connector.RequestFacade.getRemoteAddr()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.catalina.connector.RequestFacade#getRemoteAddr",
            "key" : "org.apache.catalina.connector.RequestFacade.getRemoteAddr_",
            "otherKey" : null,
            "parent" : "org.apache.catalina.valves.RemoteAddrValve#invoke",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ {
              "call" : "org.apache.catalina.connector.Request#getRemoteAddr",
              "kiekerPattern" : "public java.lang.String org.apache.catalina.connector.Request.getRemoteAddr()",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.catalina.connector.Request#getRemoteAddr",
              "key" : "org.apache.catalina.connector.Request.getRemoteAddr_",
              "otherKey" : null,
              "parent" : "org.apache.catalina.connector.RequestFacade#getRemoteAddr",
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
            "call" : "org.apache.catalina.valves.RequestFilterValve#getAddConnectorPort",
            "kiekerPattern" : "public boolean org.apache.catalina.valves.RequestFilterValve.getAddConnectorPort()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.catalina.valves.RequestFilterValve#getAddConnectorPort",
            "key" : "org.apache.catalina.valves.RequestFilterValve.getAddConnectorPort_",
            "otherKey" : null,
            "parent" : "org.apache.catalina.valves.RemoteAddrValve#invoke",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.apache.catalina.valves.RequestFilterValve#process",
            "kiekerPattern" : "protected void org.apache.catalina.valves.RequestFilterValve.process(java.lang.String,org.apache.catalina.connector.Request,org.apache.catalina.connector.Response)",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.catalina.valves.RequestFilterValve#process",
            "key" : "org.apache.catalina.valves.RequestFilterValve.process_String_Request_Response",
            "otherKey" : null,
            "parent" : "org.apache.catalina.valves.RemoteAddrValve#invoke",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ {
              "call" : "org.apache.catalina.valves.RequestFilterValve#isAllowed",
              "kiekerPattern" : "public boolean org.apache.catalina.valves.RequestFilterValve.isAllowed(java.lang.String)",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.catalina.valves.RequestFilterValve#isAllowed",
              "key" : "org.apache.catalina.valves.RequestFilterValve.isAllowed_String",
              "otherKey" : null,
              "parent" : "org.apache.catalina.valves.RequestFilterValve#process",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            }, {
              "call" : "org.apache.catalina.valves.RemoteAddrValve#getLog",
              "kiekerPattern" : "protected org.apache.juli.logging.Log org.apache.catalina.valves.RemoteAddrValve.getLog()",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.catalina.valves.RemoteAddrValve#getLog",
              "key" : "org.apache.catalina.valves.RemoteAddrValve.getLog_",
              "otherKey" : null,
              "parent" : "org.apache.catalina.valves.RequestFilterValve#process",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            }, {
              "call" : "org.apache.juli.logging.DirectJDKLog#isDebugEnabled",
              "kiekerPattern" : "public final boolean org.apache.juli.logging.DirectJDKLog.isDebugEnabled()",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.juli.logging.DirectJDKLog#isDebugEnabled",
              "key" : "org.apache.juli.logging.DirectJDKLog.isDebugEnabled_",
              "otherKey" : null,
              "parent" : "org.apache.catalina.valves.RequestFilterValve#process",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            }, {
              "call" : "org.apache.catalina.valves.RequestFilterValve#denyRequest",
              "kiekerPattern" : "protected void org.apache.catalina.valves.RequestFilterValve.denyRequest(org.apache.catalina.connector.Request,org.apache.catalina.connector.Response)",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.catalina.valves.RequestFilterValve#denyRequest",
              "key" : "org.apache.catalina.valves.RequestFilterValve.denyRequest_Request_Response",
              "otherKey" : null,
              "parent" : "org.apache.catalina.valves.RequestFilterValve#process",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ {
                "call" : "org.apache.catalina.valves.TestRequestFilterValve$MockResponse#sendError",
                "kiekerPattern" : "public void org.apache.catalina.valves.TestRequestFilterValve$MockResponse.sendError(int)",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "org.apache.catalina.valves.TestRequestFilterValve$MockResponse#sendError",
                "key" : "org.apache.catalina.valves.TestRequestFilterValve$MockResponse.sendError_int",
                "otherKey" : null,
                "parent" : "org.apache.catalina.valves.RequestFilterValve#denyRequest",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              }, {
                "call" : "org.apache.catalina.connector.Request#getContext",
                "kiekerPattern" : "public org.apache.catalina.Context org.apache.catalina.connector.Request.getContext()",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "org.apache.catalina.connector.Request#getContext",
                "key" : "org.apache.catalina.connector.Request.getContext_",
                "otherKey" : null,
                "parent" : "org.apache.catalina.valves.RequestFilterValve#denyRequest",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              }, {
                "call" : "org.apache.catalina.core.StandardContext#getPreemptiveAuthentication",
                "kiekerPattern" : "public boolean org.apache.catalina.core.StandardContext.getPreemptiveAuthentication()",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "org.apache.catalina.core.StandardContext#getPreemptiveAuthentication",
                "key" : "org.apache.catalina.core.StandardContext.getPreemptiveAuthentication_",
                "otherKey" : null,
                "parent" : "org.apache.catalina.valves.RequestFilterValve#denyRequest",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              }, {
                "call" : "org.apache.catalina.connector.Request#getCoyoteRequest",
                "kiekerPattern" : "public org.apache.catalina.connector.org.apache.coyote.Request org.apache.catalina.connector.Request.getCoyoteRequest()",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "org.apache.catalina.connector.Request#getCoyoteRequest",
                "key" : "org.apache.catalina.connector.Request.getCoyoteRequest_",
                "otherKey" : null,
                "parent" : "org.apache.catalina.valves.RequestFilterValve#denyRequest",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              }, {
                "call" : "org.apache.coyote.Request#getMimeHeaders",
                "kiekerPattern" : "public org.apache.tomcat.util.http.MimeHeaders org.apache.coyote.Request.getMimeHeaders()",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "org.apache.coyote.Request#getMimeHeaders",
                "key" : "org.apache.coyote.Request.getMimeHeaders_",
                "otherKey" : null,
                "parent" : "org.apache.catalina.valves.RequestFilterValve#denyRequest",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              }, {
                "call" : "org.apache.tomcat.util.http.MimeHeaders#getValue",
                "kiekerPattern" : "public org.apache.tomcat.util.buf.MessageBytes org.apache.tomcat.util.http.MimeHeaders.getValue(java.lang.String)",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "org.apache.tomcat.util.http.MimeHeaders#getValue",
                "key" : "org.apache.tomcat.util.http.MimeHeaders.getValue_String",
                "otherKey" : null,
                "parent" : "org.apache.catalina.valves.RequestFilterValve#denyRequest",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              }, {
                "call" : "org.apache.tomcat.util.http.MimeHeaders#addValue",
                "kiekerPattern" : "public org.apache.tomcat.util.buf.MessageBytes org.apache.tomcat.util.http.MimeHeaders.addValue(java.lang.String)",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "org.apache.tomcat.util.http.MimeHeaders#addValue",
                "key" : "org.apache.tomcat.util.http.MimeHeaders.addValue_String",
                "otherKey" : null,
                "parent" : "org.apache.catalina.valves.RequestFilterValve#denyRequest",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ {
                  "call" : "org.apache.tomcat.util.http.MimeHeaders#createHeader",
                  "kiekerPattern" : "private org.apache.tomcat.util.http.MimeHeaderField org.apache.tomcat.util.http.MimeHeaders.createHeader()",
                  "otherKiekerPattern" : null,
                  "module" : "",
                  "name" : "org.apache.tomcat.util.http.MimeHeaders#createHeader",
                  "key" : "org.apache.tomcat.util.http.MimeHeaders.createHeader_",
                  "otherKey" : null,
                  "parent" : "org.apache.tomcat.util.http.MimeHeaders#addValue",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ {
                    "call" : "org.apache.tomcat.util.buf.MessageBytes#newInstance",
                    "kiekerPattern" : "public static org.apache.tomcat.util.buf.MessageBytes org.apache.tomcat.util.buf.MessageBytes.newInstance()",
                    "otherKiekerPattern" : null,
                    "module" : "",
                    "name" : "org.apache.tomcat.util.buf.MessageBytes#newInstance",
                    "key" : "org.apache.tomcat.util.buf.MessageBytes.newInstance_",
                    "otherKey" : null,
                    "parent" : "org.apache.tomcat.util.http.MimeHeaders#createHeader",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ {
                      "call" : "org.apache.tomcat.util.buf.MessageBytes$MessageBytesFactory#newInstance",
                      "kiekerPattern" : "public org.apache.tomcat.util.buf.MessageBytes org.apache.tomcat.util.buf.MessageBytes$MessageBytesFactory.newInstance()",
                      "otherKiekerPattern" : null,
                      "module" : "",
                      "name" : "org.apache.tomcat.util.buf.MessageBytes$MessageBytesFactory#newInstance",
                      "key" : "org.apache.tomcat.util.buf.MessageBytes$MessageBytesFactory.newInstance_",
                      "otherKey" : null,
                      "parent" : "org.apache.tomcat.util.buf.MessageBytes#newInstance",
                      "color" : "#FFF",
                      "statistic" : null,
                      "hasSourceChange" : false,
                      "state" : null,
                      "inVMDeviationPredecessor" : 0.0,
                      "inVMDeviation" : 0.0,
                      "ess" : 10,
                      "children" : [ {
                        "call" : "org.apache.tomcat.util.buf.AbstractChunk#<init>",
                        "kiekerPattern" : "public new org.apache.tomcat.util.buf.AbstractChunk.<init>()",
                        "otherKiekerPattern" : null,
                        "module" : "",
                        "name" : "org.apache.tomcat.util.buf.AbstractChunk#<init>",
                        "key" : "org.apache.tomcat.util.buf.AbstractChunk.<init>_",
                        "otherKey" : null,
                        "parent" : "org.apache.tomcat.util.buf.MessageBytes$MessageBytesFactory#newInstance",
                        "color" : "#FFF",
                        "statistic" : null,
                        "hasSourceChange" : false,
                        "state" : null,
                        "inVMDeviationPredecessor" : 0.0,
                        "inVMDeviation" : 0.0,
                        "ess" : 11,
                        "children" : [ ]
                      }, {
                        "call" : "org.apache.tomcat.util.buf.ByteChunk#<init>",
                        "kiekerPattern" : "public new org.apache.tomcat.util.buf.ByteChunk.<init>()",
                        "otherKiekerPattern" : null,
                        "module" : "",
                        "name" : "org.apache.tomcat.util.buf.ByteChunk#<init>",
                        "key" : "org.apache.tomcat.util.buf.ByteChunk.<init>_",
                        "otherKey" : null,
                        "parent" : "org.apache.tomcat.util.buf.MessageBytes$MessageBytesFactory#newInstance",
                        "color" : "#FFF",
                        "statistic" : null,
                        "hasSourceChange" : false,
                        "state" : null,
                        "inVMDeviationPredecessor" : 0.0,
                        "inVMDeviation" : 0.0,
                        "ess" : 11,
                        "children" : [ ]
                      }, {
                        "call" : "org.apache.tomcat.util.buf.CharChunk#<init>",
                        "kiekerPattern" : "public new org.apache.tomcat.util.buf.CharChunk.<init>()",
                        "otherKiekerPattern" : null,
                        "module" : "",
                        "name" : "org.apache.tomcat.util.buf.CharChunk#<init>",
                        "key" : "org.apache.tomcat.util.buf.CharChunk.<init>_",
                        "otherKey" : null,
                        "parent" : "org.apache.tomcat.util.buf.MessageBytes$MessageBytesFactory#newInstance",
                        "color" : "#FFF",
                        "statistic" : null,
                        "hasSourceChange" : false,
                        "state" : null,
                        "inVMDeviationPredecessor" : 0.0,
                        "inVMDeviation" : 0.0,
                        "ess" : 11,
                        "children" : [ ]
                      }, {
                        "call" : "org.apache.tomcat.util.buf.MessageBytes#<init>",
                        "kiekerPattern" : "private new org.apache.tomcat.util.buf.MessageBytes.<init>()",
                        "otherKiekerPattern" : null,
                        "module" : "",
                        "name" : "org.apache.tomcat.util.buf.MessageBytes#<init>",
                        "key" : "org.apache.tomcat.util.buf.MessageBytes.<init>_",
                        "otherKey" : null,
                        "parent" : "org.apache.tomcat.util.buf.MessageBytes$MessageBytesFactory#newInstance",
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
                    "call" : "org.apache.tomcat.util.http.MimeHeaderField#<init>",
                    "kiekerPattern" : "public new org.apache.tomcat.util.http.MimeHeaderField.<init>()",
                    "otherKiekerPattern" : null,
                    "module" : "",
                    "name" : "org.apache.tomcat.util.http.MimeHeaderField#<init>",
                    "key" : "org.apache.tomcat.util.http.MimeHeaderField.<init>_",
                    "otherKey" : null,
                    "parent" : "org.apache.tomcat.util.http.MimeHeaders#createHeader",
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
                  "call" : "org.apache.tomcat.util.http.MimeHeaderField#getName",
                  "kiekerPattern" : "public org.apache.tomcat.util.buf.MessageBytes org.apache.tomcat.util.http.MimeHeaderField.getName()",
                  "otherKiekerPattern" : null,
                  "module" : "",
                  "name" : "org.apache.tomcat.util.http.MimeHeaderField#getName",
                  "key" : "org.apache.tomcat.util.http.MimeHeaderField.getName_",
                  "otherKey" : null,
                  "parent" : "org.apache.tomcat.util.http.MimeHeaders#addValue",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ ]
                }, {
                  "call" : "org.apache.tomcat.util.buf.MessageBytes#setString",
                  "kiekerPattern" : "public void org.apache.tomcat.util.buf.MessageBytes.setString(java.lang.String)",
                  "otherKiekerPattern" : null,
                  "module" : "",
                  "name" : "org.apache.tomcat.util.buf.MessageBytes#setString",
                  "key" : "org.apache.tomcat.util.buf.MessageBytes.setString_String",
                  "otherKey" : null,
                  "parent" : "org.apache.tomcat.util.http.MimeHeaders#addValue",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ ]
                }, {
                  "call" : "org.apache.tomcat.util.http.MimeHeaderField#getValue",
                  "kiekerPattern" : "public org.apache.tomcat.util.buf.MessageBytes org.apache.tomcat.util.http.MimeHeaderField.getValue()",
                  "otherKiekerPattern" : null,
                  "module" : "",
                  "name" : "org.apache.tomcat.util.http.MimeHeaderField#getValue",
                  "key" : "org.apache.tomcat.util.http.MimeHeaderField.getValue_",
                  "otherKey" : null,
                  "parent" : "org.apache.tomcat.util.http.MimeHeaders#addValue",
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
                "call" : "org.apache.tomcat.util.buf.MessageBytes#setString",
                "kiekerPattern" : "public void org.apache.tomcat.util.buf.MessageBytes.setString(java.lang.String)",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "org.apache.tomcat.util.buf.MessageBytes#setString",
                "key" : "org.apache.tomcat.util.buf.MessageBytes.setString_String",
                "otherKey" : null,
                "parent" : "org.apache.catalina.valves.RequestFilterValve#denyRequest",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              }, {
                "call" : "org.apache.catalina.valves.ValveBase#getNext",
                "kiekerPattern" : "public org.apache.catalina.Valve org.apache.catalina.valves.ValveBase.getNext()",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "org.apache.catalina.valves.ValveBase#getNext",
                "key" : "org.apache.catalina.valves.ValveBase.getNext_",
                "otherKey" : null,
                "parent" : "org.apache.catalina.valves.RequestFilterValve#denyRequest",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              }, {
                "call" : "org.apache.catalina.valves.TestRequestFilterValve$TerminatingValve#invoke",
                "kiekerPattern" : "public void org.apache.catalina.valves.TestRequestFilterValve$TerminatingValve.invoke(org.apache.catalina.connector.Request,org.apache.catalina.connector.Response)",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "org.apache.catalina.valves.TestRequestFilterValve$TerminatingValve#invoke",
                "key" : "org.apache.catalina.valves.TestRequestFilterValve$TerminatingValve.invoke_Request_Response",
                "otherKey" : null,
                "parent" : "org.apache.catalina.valves.RequestFilterValve#denyRequest",
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
              "call" : "org.apache.catalina.valves.ValveBase#getNext",
              "kiekerPattern" : "public org.apache.catalina.Valve org.apache.catalina.valves.ValveBase.getNext()",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.catalina.valves.ValveBase#getNext",
              "key" : "org.apache.catalina.valves.ValveBase.getNext_",
              "otherKey" : null,
              "parent" : "org.apache.catalina.valves.RequestFilterValve#process",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            }, {
              "call" : "org.apache.catalina.valves.TestRequestFilterValve$TerminatingValve#invoke",
              "kiekerPattern" : "public void org.apache.catalina.valves.TestRequestFilterValve$TerminatingValve.invoke(org.apache.catalina.connector.Request,org.apache.catalina.connector.Response)",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.catalina.valves.TestRequestFilterValve$TerminatingValve#invoke",
              "key" : "org.apache.catalina.valves.TestRequestFilterValve$TerminatingValve.invoke_Request_Response",
              "otherKey" : null,
              "parent" : "org.apache.catalina.valves.RequestFilterValve#process",
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
            "call" : "org.apache.catalina.connector.Request#getPeerAddr",
            "kiekerPattern" : "public java.lang.String org.apache.catalina.connector.Request.getPeerAddr()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.catalina.connector.Request#getPeerAddr",
            "key" : "org.apache.catalina.connector.Request.getPeerAddr_",
            "otherKey" : null,
            "parent" : "org.apache.catalina.valves.RemoteAddrValve#invoke",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ {
              "call" : "org.apache.coyote.ActionCode#<init>",
              "kiekerPattern" : "public new org.apache.coyote.ActionCode.<init>()",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.coyote.ActionCode#<init>",
              "key" : "org.apache.coyote.ActionCode.<init>_",
              "otherKey" : null,
              "parent" : "org.apache.catalina.connector.Request#getPeerAddr",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            }, {
              "call" : "org.apache.coyote.Request#action",
              "kiekerPattern" : "public void org.apache.coyote.Request.action(org.apache.coyote.ActionCode,java.lang.Object)",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.coyote.Request#action",
              "key" : "org.apache.coyote.Request.action_ActionCode_Object",
              "otherKey" : null,
              "parent" : "org.apache.catalina.connector.Request#getPeerAddr",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            }, {
              "call" : "org.apache.coyote.Request#peerAddr",
              "kiekerPattern" : "public org.apache.tomcat.util.buf.MessageBytes org.apache.coyote.Request.peerAddr()",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.coyote.Request#peerAddr",
              "key" : "org.apache.coyote.Request.peerAddr_",
              "otherKey" : null,
              "parent" : "org.apache.catalina.connector.Request#getPeerAddr",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            }, {
              "call" : "org.apache.tomcat.util.buf.MessageBytes#toString",
              "kiekerPattern" : "public java.lang.String org.apache.tomcat.util.buf.MessageBytes.toString()",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.tomcat.util.buf.MessageBytes#toString",
              "key" : "org.apache.tomcat.util.buf.MessageBytes.toString_",
              "otherKey" : null,
              "parent" : "org.apache.catalina.connector.Request#getPeerAddr",
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
            "call" : "org.apache.catalina.connector.Request#getConnector",
            "kiekerPattern" : "public org.apache.catalina.connector.Connector org.apache.catalina.connector.Request.getConnector()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.catalina.connector.Request#getConnector",
            "key" : "org.apache.catalina.connector.Request.getConnector_",
            "otherKey" : null,
            "parent" : "org.apache.catalina.valves.RemoteAddrValve#invoke",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.apache.catalina.connector.Connector#getPortWithOffset",
            "kiekerPattern" : "public int org.apache.catalina.connector.Connector.getPortWithOffset()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.catalina.connector.Connector#getPortWithOffset",
            "key" : "org.apache.catalina.connector.Connector.getPortWithOffset_",
            "otherKey" : null,
            "parent" : "org.apache.catalina.valves.RemoteAddrValve#invoke",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ {
              "call" : "org.apache.catalina.connector.Connector#getPort",
              "kiekerPattern" : "public int org.apache.catalina.connector.Connector.getPort()",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.catalina.connector.Connector#getPort",
              "key" : "org.apache.catalina.connector.Connector.getPort_",
              "otherKey" : null,
              "parent" : "org.apache.catalina.connector.Connector#getPortWithOffset",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ {
                "call" : "org.apache.coyote.AbstractProtocol#getPort",
                "kiekerPattern" : "public int org.apache.coyote.AbstractProtocol.getPort()",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "org.apache.coyote.AbstractProtocol#getPort",
                "key" : "org.apache.coyote.AbstractProtocol.getPort_",
                "otherKey" : null,
                "parent" : "org.apache.catalina.connector.Connector#getPort",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ {
                  "call" : "org.apache.tomcat.util.net.AbstractEndpoint#getPort",
                  "kiekerPattern" : "public int org.apache.tomcat.util.net.AbstractEndpoint.getPort()",
                  "otherKiekerPattern" : null,
                  "module" : "",
                  "name" : "org.apache.tomcat.util.net.AbstractEndpoint#getPort",
                  "key" : "org.apache.tomcat.util.net.AbstractEndpoint.getPort_",
                  "otherKey" : null,
                  "parent" : "org.apache.coyote.AbstractProtocol#getPort",
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
              "call" : "org.apache.catalina.connector.Connector#getPortOffset",
              "kiekerPattern" : "public int org.apache.catalina.connector.Connector.getPortOffset()",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.catalina.connector.Connector#getPortOffset",
              "key" : "org.apache.catalina.connector.Connector.getPortOffset_",
              "otherKey" : null,
              "parent" : "org.apache.catalina.connector.Connector#getPortWithOffset",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ {
                "call" : "org.apache.coyote.AbstractProtocol#getPortOffset",
                "kiekerPattern" : "public int org.apache.coyote.AbstractProtocol.getPortOffset()",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "org.apache.coyote.AbstractProtocol#getPortOffset",
                "key" : "org.apache.coyote.AbstractProtocol.getPortOffset_",
                "otherKey" : null,
                "parent" : "org.apache.catalina.connector.Connector#getPortOffset",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ {
                  "call" : "org.apache.tomcat.util.net.AbstractEndpoint#getPortOffset",
                  "kiekerPattern" : "public int org.apache.tomcat.util.net.AbstractEndpoint.getPortOffset()",
                  "otherKiekerPattern" : null,
                  "module" : "",
                  "name" : "org.apache.tomcat.util.net.AbstractEndpoint#getPortOffset",
                  "key" : "org.apache.tomcat.util.net.AbstractEndpoint.getPortOffset_",
                  "otherKey" : null,
                  "parent" : "org.apache.coyote.AbstractProtocol#getPortOffset",
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
          "call" : "org.apache.catalina.valves.TestRequestFilterValve$MockResponse#getStatus",
          "kiekerPattern" : "public int org.apache.catalina.valves.TestRequestFilterValve$MockResponse.getStatus()",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.catalina.valves.TestRequestFilterValve$MockResponse#getStatus",
          "key" : "org.apache.catalina.valves.TestRequestFilterValve$MockResponse.getStatus_",
          "otherKey" : null,
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.catalina.valves.RequestFilterValve#setUsePeerAddress",
          "kiekerPattern" : "public void org.apache.catalina.valves.RequestFilterValve.setUsePeerAddress(boolean)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.catalina.valves.RequestFilterValve#setUsePeerAddress",
          "key" : "org.apache.catalina.valves.RequestFilterValve.setUsePeerAddress_boolean",
          "otherKey" : null,
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.catalina.valves.RequestFilterValve#setDenyStatus",
          "kiekerPattern" : "public void org.apache.catalina.valves.RequestFilterValve.setDenyStatus(int)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.catalina.valves.RequestFilterValve#setDenyStatus",
          "key" : "org.apache.catalina.valves.RequestFilterValve.setDenyStatus_int",
          "otherKey" : null,
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.catalina.valves.RequestFilterValve#setAllow",
          "kiekerPattern" : "public void org.apache.catalina.valves.RequestFilterValve.setAllow(java.lang.String)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.catalina.valves.RequestFilterValve#setAllow",
          "key" : "org.apache.catalina.valves.RequestFilterValve.setAllow_String",
          "otherKey" : null,
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.catalina.valves.RequestFilterValve#setDeny",
          "kiekerPattern" : "public void org.apache.catalina.valves.RequestFilterValve.setDeny(java.lang.String)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.catalina.valves.RequestFilterValve#setDeny",
          "key" : "org.apache.catalina.valves.RequestFilterValve.setDeny_String",
          "otherKey" : null,
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.catalina.valves.RequestFilterValve#setAddConnectorPort",
          "kiekerPattern" : "public void org.apache.catalina.valves.RequestFilterValve.setAddConnectorPort(boolean)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.catalina.valves.RequestFilterValve#setAddConnectorPort",
          "key" : "org.apache.catalina.valves.RequestFilterValve.setAddConnectorPort_boolean",
          "otherKey" : null,
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.catalina.core.StandardContext#setPreemptiveAuthentication",
          "kiekerPattern" : "public void org.apache.catalina.core.StandardContext.setPreemptiveAuthentication(boolean)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.catalina.core.StandardContext#setPreemptiveAuthentication",
          "key" : "org.apache.catalina.core.StandardContext.setPreemptiveAuthentication_boolean",
          "otherKey" : null,
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.catalina.valves.RequestFilterValve#setInvalidAuthenticationWhenDeny",
          "kiekerPattern" : "public void org.apache.catalina.valves.RequestFilterValve.setInvalidAuthenticationWhenDeny(boolean)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.catalina.valves.RequestFilterValve#setInvalidAuthenticationWhenDeny",
          "key" : "org.apache.catalina.valves.RequestFilterValve.setInvalidAuthenticationWhenDeny_boolean",
          "otherKey" : null,
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.catalina.connector.Request#getHeader",
          "kiekerPattern" : "public java.lang.String org.apache.catalina.connector.Request.getHeader(java.lang.String)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "org.apache.catalina.connector.Request#getHeader",
          "key" : "org.apache.catalina.connector.Request.getHeader_String",
          "otherKey" : null,
          "parent" : "org.apache.catalina.valves.TestRequestFilterValve#oneTest",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.apache.coyote.Request#getHeader",
            "kiekerPattern" : "public java.lang.String org.apache.coyote.Request.getHeader(java.lang.String)",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.coyote.Request#getHeader",
            "key" : "org.apache.coyote.Request.getHeader_String",
            "otherKey" : null,
            "parent" : "org.apache.catalina.connector.Request#getHeader",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ {
              "call" : "org.apache.tomcat.util.http.MimeHeaders#getHeader",
              "kiekerPattern" : "public java.lang.String org.apache.tomcat.util.http.MimeHeaders.getHeader(java.lang.String)",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.tomcat.util.http.MimeHeaders#getHeader",
              "key" : "org.apache.tomcat.util.http.MimeHeaders.getHeader_String",
              "otherKey" : null,
              "parent" : "org.apache.coyote.Request#getHeader",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ {
                "call" : "org.apache.tomcat.util.http.MimeHeaders#getValue",
                "kiekerPattern" : "public org.apache.tomcat.util.buf.MessageBytes org.apache.tomcat.util.http.MimeHeaders.getValue(java.lang.String)",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "org.apache.tomcat.util.http.MimeHeaders#getValue",
                "key" : "org.apache.tomcat.util.http.MimeHeaders.getValue_String",
                "otherKey" : null,
                "parent" : "org.apache.tomcat.util.http.MimeHeaders#getHeader",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ {
                  "call" : "org.apache.tomcat.util.http.MimeHeaderField#getName",
                  "kiekerPattern" : "public org.apache.tomcat.util.buf.MessageBytes org.apache.tomcat.util.http.MimeHeaderField.getName()",
                  "otherKiekerPattern" : null,
                  "module" : "",
                  "name" : "org.apache.tomcat.util.http.MimeHeaderField#getName",
                  "key" : "org.apache.tomcat.util.http.MimeHeaderField.getName_",
                  "otherKey" : null,
                  "parent" : "org.apache.tomcat.util.http.MimeHeaders#getValue",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ ]
                }, {
                  "call" : "org.apache.tomcat.util.buf.MessageBytes#equalsIgnoreCase",
                  "kiekerPattern" : "public boolean org.apache.tomcat.util.buf.MessageBytes.equalsIgnoreCase(java.lang.String)",
                  "otherKiekerPattern" : null,
                  "module" : "",
                  "name" : "org.apache.tomcat.util.buf.MessageBytes#equalsIgnoreCase",
                  "key" : "org.apache.tomcat.util.buf.MessageBytes.equalsIgnoreCase_String",
                  "otherKey" : null,
                  "parent" : "org.apache.tomcat.util.http.MimeHeaders#getValue",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ ]
                }, {
                  "call" : "org.apache.tomcat.util.http.MimeHeaderField#getValue",
                  "kiekerPattern" : "public org.apache.tomcat.util.buf.MessageBytes org.apache.tomcat.util.http.MimeHeaderField.getValue()",
                  "otherKiekerPattern" : null,
                  "module" : "",
                  "name" : "org.apache.tomcat.util.http.MimeHeaderField#getValue",
                  "key" : "org.apache.tomcat.util.http.MimeHeaderField.getValue_",
                  "otherKey" : null,
                  "parent" : "org.apache.tomcat.util.http.MimeHeaders#getValue",
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
                "call" : "org.apache.tomcat.util.buf.MessageBytes#toString",
                "kiekerPattern" : "public java.lang.String org.apache.tomcat.util.buf.MessageBytes.toString()",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "org.apache.tomcat.util.buf.MessageBytes#toString",
                "key" : "org.apache.tomcat.util.buf.MessageBytes.toString_",
                "otherKey" : null,
                "parent" : "org.apache.tomcat.util.http.MimeHeaders#getHeader",
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
  } ]
}];
// ************** Generate the tree diagram   *****************
var margin = {top: 20, right: 120, bottom: 20, left: 511},
   width = 5473- margin.right - margin.left,
   height = 5320 - margin.top - margin.bottom;
