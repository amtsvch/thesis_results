if (document.getElementById('testcaseDiv') != null) { 
   document.getElementById('testcaseDiv').innerHTML="Commit: <a href='javascript:fallbackCopyTextToClipboard(\"-commit a915ed99eca67cab13d3ed0d1269bf1594a0f605 -test jakarta.el.TestBeanELResolver#testInvokeVarargsCoerce13\")'>a915ed99eca67cab13d3ed0d1269bf1594a0f605</a><br>Test Case: jakarta.el.TestBeanELResolver#testInvokeVarargsCoerce13<br>";
}

var source = {"current":
{
 "jakarta.el.StandardELContext.<init>_ExpressionFactory":
 `public StandardELContext(ExpressionFactory factory) {
    wrappedContext = null;
    variableMapper = new StandardVariableMapper();
    functionMapper = new StandardFunctionMapper(factory.getInitFunctionMap());
    standardResolver = new CompositeELResolver();
    customResolvers = new CompositeELResolver();
    ELResolver streamResolver = factory.getStreamELResolver();
    // Add resolvers in order
    standardResolver.add(new BeanNameELResolver(new StandardBeanNameResolver(localBeans)));
    standardResolver.add(customResolvers);
    if (streamResolver != null) {
        standardResolver.add(streamResolver);
    }
    standardResolver.add(new StaticFieldELResolver());
    standardResolver.add(new MapELResolver());
    standardResolver.add(new ResourceBundleELResolver());
    standardResolver.add(new ListELResolver());
    standardResolver.add(new ArrayELResolver());
    standardResolver.add(new BeanELResolver());
}`,"jakarta.el.Util.findMethod_Class_Object_String_Class[]_Object[]":
 ``,"jakarta.el.MethodNotFoundException.<init>_String":
 `public MethodNotFoundException(String message) {
    super(message);
}`,"org.apache.el.lang.ELSupport.coerceToBoolean_ELContext_Object_boolean":
 `/**
 * Convert an object to Boolean.
 * Null and empty string are false.
 * @param ctx the context in which this conversion is taking place
 * @param obj the object to convert
 * @param primitive is the target a primitive in which case coercion to null
 *                  is not permitted
 * @return the Boolean value of the object
 * @throws ELException if object is not Boolean or String
 */
public static final Boolean coerceToBoolean(final ELContext ctx, final Object obj, boolean primitive) throws ELException {
    if (ctx != null) {
        boolean originalIsPropertyResolved = ctx.isPropertyResolved();
        try {
            Object result = ctx.getELResolver().convertToType(ctx, obj, Boolean.class);
            if (ctx.isPropertyResolved()) {
                return (Boolean) result;
            }
        } finally {
            ctx.setPropertyResolved(originalIsPropertyResolved);
        }
    }
    if (!COERCE_TO_ZERO && !primitive) {
        if (obj == null) {
            return null;
        }
    }
    if (obj == null || "".equals(obj)) {
        return Boolean.FALSE;
    }
    if (obj instanceof Boolean) {
        return (Boolean) obj;
    }
    if (obj instanceof String) {
        return Boolean.valueOf((String) obj);
    }
    throw new ELException(MessageFactory.get("error.convert", obj, obj.getClass(), Boolean.class));
}`,"jakarta.el.BeanELResolver.<init>_":
 `public BeanELResolver() {
    this.readOnly = false;
}`,"jakarta.el.ExpressionFactory.newInstance_Properties":
 `/**
 * Create a new {@link ExpressionFactory} passing in the provided
 * {@link Properties}. Search order is the same as {@link #newInstance()}.
 *
 * @param properties the properties to be passed to the new instance (may be null)
 * @return the new ExpressionFactory
 */
public static ExpressionFactory newInstance(Properties properties) {
    ExpressionFactory result = null;
    ClassLoader tccl = Util.getContextClassLoader();
    CacheValue cacheValue;
    Class<?> clazz;
    if (tccl == null) {
        cacheValue = nullTcclFactory;
    } else {
        CacheKey key = new CacheKey(tccl);
        cacheValue = factoryCache.get(key);
        if (cacheValue == null) {
            CacheValue newCacheValue = new CacheValue();
            cacheValue = factoryCache.putIfAbsent(key, newCacheValue);
            if (cacheValue == null) {
                cacheValue = newCacheValue;
            }
        }
    }
    final Lock readLock = cacheValue.getLock().readLock();
    readLock.lock();
    try {
        clazz = cacheValue.getFactoryClass();
    } finally {
        readLock.unlock();
    }
    if (clazz == null) {
        String className = null;
        try {
            final Lock writeLock = cacheValue.getLock().writeLock();
            writeLock.lock();
            try {
                className = cacheValue.getFactoryClassName();
                if (className == null) {
                    className = discoverClassName(tccl);
                    cacheValue.setFactoryClassName(className);
                }
                if (tccl == null) {
                    clazz = Class.forName(className);
                } else {
                    clazz = tccl.loadClass(className);
                }
                cacheValue.setFactoryClass(clazz);
            } finally {
                writeLock.unlock();
            }
        } catch (ClassNotFoundException e) {
            throw new ELException(Util.message(null, "expressionFactory.cannotFind", className), e);
        }
    }
    try {
        Constructor<?> constructor = null;
        // Do we need to look for a constructor that will take properties?
        if (properties != null) {
            try {
                constructor = clazz.getConstructor(Properties.class);
            } catch (SecurityException se) {
                throw new ELException(se);
            } catch (NoSuchMethodException nsme) {
                // This can be ignored
                // This is OK for this constructor not to exist
            }
        }
        if (constructor == null) {
            result = (ExpressionFactory) clazz.getConstructor().newInstance();
        } else {
            result = (ExpressionFactory) constructor.newInstance(properties);
        }
    } catch (InvocationTargetException e) {
        Throwable cause = e.getCause();
        Util.handleThrowable(cause);
        throw new ELException(Util.message(null, "expressionFactory.cannotCreate", clazz.getName()), e);
    } catch (ReflectiveOperationException | IllegalArgumentException e) {
        throw new ELException(Util.message(null, "expressionFactory.cannotCreate", clazz.getName()), e);
    }
    return result;
}`,"jakarta.el.Util$MatchResult.getCoercible_":
 `public int getCoercible() {
    return coercible;
}`,"jakarta.el.ListELResolver.<init>_":
 `public ListELResolver() {
    this.readOnly = false;
}`,"jakarta.el.ExpressionFactory$CacheKey.hashCode_":
 `@Override
public int hashCode() {
    return hash;
}`,"org.apache.el.ExpressionFactoryImpl.<init>_":
 ``,"org.apache.el.lang.ELArithmetic.isNumberType_Class":
 `public static final boolean isNumberType(final Class<?> type) {
    return type == Long.TYPE || type == Double.TYPE || type == Byte.TYPE || type == Short.TYPE || type == Integer.TYPE || type == Float.TYPE || Number.class.isAssignableFrom(type);
}`,"jakarta.el.ELManager.getExpressionFactory_":
 `public static ExpressionFactory getExpressionFactory() {
    return Util.getExpressionFactory();
}`,"jakarta.el.Util$MethodWrapper.getParameterTypes_":
 `@Override
public Class<?>[] getParameterTypes() {
    return m.getParameterTypes();
}`,"jakarta.el.ExpressionFactory.newInstance_":
 `/**
 * Create a new {@link ExpressionFactory}. The class to use is determined by
 * the following search order:
 * <ol>
 * <li>services API (META-INF/services/jakarta.el.ExpressionFactory)</li>
 * <li>$JRE_HOME/lib/el.properties - key jakarta.el.ExpressionFactory</li>
 * <li>jakarta.el.ExpressionFactory</li>
 * <li>Platform default implementation -
 *     org.apache.el.ExpressionFactoryImpl</li>
 * </ol>
 * @return the new ExpressionFactory
 */
public static ExpressionFactory newInstance() {
    return newInstance(null);
}`,"org.apache.el.ExpressionFactoryImpl.getStreamELResolver_":
 `@Override
public ELResolver getStreamELResolver() {
    return new StreamELResolverImpl();
}`,"jakarta.el.ResourceBundleELResolver.<init>_":
 `public ResourceBundleELResolver() {
    super();
}`,"jakarta.el.CompositeELResolver.<init>_":
 `public CompositeELResolver() {
    this.size = 0;
    this.resolvers = new ELResolver[8];
}`,"jakarta.el.ELContext.<init>_":
 `public ELContext() {
    this.resolved = false;
}`,"jakarta.el.StandardELContext$StandardVariableMapper.<init>_":
 ``,"jakarta.el.Util$MethodWrapper.isVarArgs_":
 `@Override
public boolean isVarArgs() {
    return m.isVarArgs();
}`,"jakarta.el.ExpressionFactory.getClassNameServices_ClassLoader":
 `private static String getClassNameServices(ClassLoader tccl) {
    ExpressionFactory result = null;
    ServiceLoader<ExpressionFactory> serviceLoader = ServiceLoader.load(ExpressionFactory.class, tccl);
    Iterator<ExpressionFactory> iter = serviceLoader.iterator();
    while (result == null && iter.hasNext()) {
        result = iter.next();
    }
    if (result == null) {
        return null;
    }
    return result.getClass().getName();
}`,"jakarta.el.Util$Wrapper.<init>_":
 ``,"jakarta.el.TestBeanELResolver.testInvokeVarargsCoerce13_":
 `// Ambiguous because the Strings coerce to both Boolean and Integer hence
// both varargs methods match.
@Test(expected = MethodNotFoundException.class)
public void testInvokeVarargsCoerce13() {
    BeanELResolver resolver = new BeanELResolver();
    ELContext context = new StandardELContext(ELManager.getExpressionFactory());
    Object result = resolver.invoke(context, new TesterBean(BEAN_NAME), "getNameVarargs", new Class<?>[] { String.class, String.class }, new String[] { "10", "11" });
    Assert.assertEquals(BEAN_NAME, result);
}`,"org.apache.el.lang.ELArithmetic$BigDecimalDelegate.<init>_":
 ``,"org.apache.el.lang.ELArithmetic$BigIntegerDelegate.<init>_":
 ``,"jakarta.el.ExpressionFactory$CacheValue.getFactoryClassName_":
 `public String getFactoryClassName() {
    return className;
}`,"jakarta.el.ExpressionFactory.getInitFunctionMap_":
 `/**
 * @return This default implementation returns null
 *
 * @since EL 3.0
 */
public Map<String, Method> getInitFunctionMap() {
    return null;
}`,"jakarta.el.Util$CacheValue.setExpressionFactory_ExpressionFactory":
 `public void setExpressionFactory(ExpressionFactory factory) {
    ref = new WeakReference<>(factory);
}`,"jakarta.el.Util$MatchResult.compareTo_Util$MatchResult":
 `@Override
public int compareTo(MatchResult o) {
    int cmp = Integer.compare(this.getExact(), o.getExact());
    if (cmp == 0) {
        cmp = Integer.compare(this.getAssignable(), o.getAssignable());
        if (cmp == 0) {
            cmp = Integer.compare(this.getCoercible(), o.getCoercible());
            if (cmp == 0) {
                // The nature of bridge methods is such that it actually
                // doesn't matter which one we pick as long as we pick
                // one. That said, pick the 'right' one (the non-bridge
                // one) anyway.
                cmp = Boolean.compare(o.isBridge(), this.isBridge());
            }
        }
    }
    return cmp;
}`,"jakarta.el.Util$CacheKey.<init>_ClassLoader":
 `public CacheKey(ClassLoader key) {
    hash = key.hashCode();
    ref = new WeakReference<>(key);
}`,"jakarta.el.Util$MatchResult.getAssignable_":
 `public int getAssignable() {
    return assignable;
}`,"jakarta.el.ExpressionFactory.<init>_":
 ``,"jakarta.el.BeanNameELResolver.<init>_BeanNameResolver":
 `public BeanNameELResolver(BeanNameResolver beanNameResolver) {
    this.beanNameResolver = beanNameResolver;
}`,"org.apache.el.lang.ELSupport.coerceToNumber_String_Class":
 `protected static final Number coerceToNumber(final String val, final Class<?> type) throws ELException {
    if (Long.TYPE == type || Long.class.equals(type)) {
        try {
            return Long.valueOf(val);
        } catch (NumberFormatException nfe) {
            throw new ELException(MessageFactory.get("error.convert", val, String.class, type));
        }
    }
    if (Integer.TYPE == type || Integer.class.equals(type)) {
        try {
            return Integer.valueOf(val);
        } catch (NumberFormatException nfe) {
            throw new ELException(MessageFactory.get("error.convert", val, String.class, type));
        }
    }
    if (Double.TYPE == type || Double.class.equals(type)) {
        try {
            return Double.valueOf(val);
        } catch (NumberFormatException nfe) {
            throw new ELException(MessageFactory.get("error.convert", val, String.class, type));
        }
    }
    if (BigInteger.class.equals(type)) {
        try {
            return new BigInteger(val);
        } catch (NumberFormatException nfe) {
            throw new ELException(MessageFactory.get("error.convert", val, String.class, type));
        }
    }
    if (BigDecimal.class.equals(type)) {
        try {
            return new BigDecimal(val);
        } catch (NumberFormatException nfe) {
            throw new ELException(MessageFactory.get("error.convert", val, String.class, type));
        }
    }
    if (Byte.TYPE == type || Byte.class.equals(type)) {
        try {
            return Byte.valueOf(val);
        } catch (NumberFormatException nfe) {
            throw new ELException(MessageFactory.get("error.convert", val, String.class, type));
        }
    }
    if (Short.TYPE == type || Short.class.equals(type)) {
        try {
            return Short.valueOf(val);
        } catch (NumberFormatException nfe) {
            throw new ELException(MessageFactory.get("error.convert", val, String.class, type));
        }
    }
    if (Float.TYPE == type || Float.class.equals(type)) {
        try {
            return Float.valueOf(val);
        } catch (NumberFormatException nfe) {
            throw new ELException(MessageFactory.get("error.convert", val, String.class, type));
        }
    }
    throw new ELException(MessageFactory.get("error.convert", val, String.class, type));
}`,"jakarta.el.ExpressionFactory$CacheValue.setFactoryClassName_String":
 `public void setFactoryClassName(String className) {
    this.className = className;
}`,"jakarta.el.MapELResolver.<init>_":
 `public MapELResolver() {
    this.readOnly = false;
}`,"jakarta.el.CompositeELResolver.add_CompositeELResolver":
 ``,"jakarta.el.Util$CacheValue.<init>_":
 `public CacheValue() {
}`,"jakarta.el.Util$MethodWrapper.<init>_Method":
 `public MethodWrapper(Method m) {
    this.m = m;
}`,"jakarta.el.ExpressionFactory$CacheKey.<init>_ClassLoader":
 `public CacheKey(ClassLoader cl) {
    hash = cl.hashCode();
    ref = new WeakReference<>(cl);
}`,"jakarta.el.Util$MethodWrapper.isBridge_":
 `@Override
public boolean isBridge() {
    return m.isBridge();
}`,"jakarta.el.TesterBean.<init>_String":
 `public TesterBean(String name) {
    this.name = name;
}`,"jakarta.el.Util.isAssignableFrom_Class_Class":
 `/*
     * This method duplicates code in org.apache.el.util.ReflectionUtil. When
     * making changes keep the code in sync.
     */
static boolean isAssignableFrom(Class<?> src, Class<?> target) {
    // src will always be an object
    // Short-cut. null is always assignable to an object and in EL null
    // can always be coerced to a valid value for a primitive
    if (src == null) {
        return true;
    }
    Class<?> targetClass;
    if (target.isPrimitive()) {
        if (target == Boolean.TYPE) {
            targetClass = Boolean.class;
        } else if (target == Character.TYPE) {
            targetClass = Character.class;
        } else if (target == Byte.TYPE) {
            targetClass = Byte.class;
        } else if (target == Short.TYPE) {
            targetClass = Short.class;
        } else if (target == Integer.TYPE) {
            targetClass = Integer.class;
        } else if (target == Long.TYPE) {
            targetClass = Long.class;
        } else if (target == Float.TYPE) {
            targetClass = Float.class;
        } else {
            targetClass = Double.class;
        }
    } else {
        targetClass = target;
    }
    return targetClass.isAssignableFrom(src);
}`,"jakarta.el.Util$MatchResult.getExact_":
 `public int getExact() {
    return exact;
}`,"jakarta.el.ELException.<init>_String":
 `/**
 * Creates an ELException with the provided detail message.
 *
 * @param message
 *            the detail message
 */
public ELException(String message) {
    super(message);
}`,"jakarta.el.Util$MatchResult.<init>_int_int_int_boolean":
 `public MatchResult(int exact, int assignable, int coercible, boolean bridge) {
    this.exact = exact;
    this.assignable = assignable;
    this.coercible = coercible;
    this.bridge = bridge;
}`,"jakarta.el.ExpressionFactory$CacheValue.<init>_":
 `public CacheValue() {
}`,"jakarta.el.ExpressionFactory.getClassNameSysProp_":
 `private static final String getClassNameSysProp() {
    String value = System.getProperty(PROPERTY_NAME);
    if (value != null && value.trim().length() > 0) {
        return value.trim();
    }
    return null;
}`,"org.apache.el.lang.ELArithmetic$LongDelegate.<init>_":
 ``,"jakarta.el.Util.paramString_Class[]":
 ``,"jakarta.el.VariableMapper.<init>_":
 ``,"jakarta.el.StaticFieldELResolver.<init>_":
 ``,"jakarta.el.ExpressionFactory.discoverClassName_ClassLoader":
 `/**
 * Discover the name of class that implements ExpressionFactory.
 *
 * @param tccl
 *            {@code ClassLoader}
 * @return Class name. There is default, so it is never {@code null}.
 */
private static String discoverClassName(ClassLoader tccl) {
    String className = null;
    // First services API
    className = getClassNameServices(tccl);
    if (className == null) {
        if (IS_SECURITY_ENABLED) {
            className = AccessController.doPrivileged((PrivilegedAction<String>) ExpressionFactory::getClassNameJreDir);
        } else {
            // Second el.properties file
            className = getClassNameJreDir();
        }
    }
    if (className == null) {
        if (IS_SECURITY_ENABLED) {
            className = AccessController.doPrivileged((PrivilegedAction<String>) ExpressionFactory::getClassNameSysProp);
        } else {
            // Third system property
            className = getClassNameSysProp();
        }
    }
    if (className == null) {
        // Fourth - default
        className = "org.apache.el.ExpressionFactoryImpl";
    }
    return className;
}`,"jakarta.el.BeanELResolver$ConcurrentCache.<init>_int":
 `public ConcurrentCache(int size) {
    this.size = size;
    this.eden = new ConcurrentHashMap<>(size);
    this.longterm = new WeakHashMap<>(size);
}`,"jakarta.el.Util$MatchResult.isBridge_":
 `public boolean isBridge() {
    return bridge;
}`,"jakarta.el.Util.message_ELContext_String_Object":
 `static String message(ELContext context, String name, Object... props) {
    Locale locale = null;
    if (context != null) {
        locale = context.getLocale();
    }
    if (locale == null) {
        locale = Locale.getDefault();
        if (locale == null) {
            return "";
        }
    }
    ResourceBundle bundle = ResourceBundle.getBundle("jakarta.el.LocalStrings", locale);
    try {
        String template = bundle.getString(name);
        if (props != null) {
            template = MessageFormat.format(template, props);
        }
        return template;
    } catch (MissingResourceException e) {
        return "Missing Resource: '" + name + "' for Locale " + locale.getDisplayName();
    }
}`,"jakarta.el.Util$CacheKey.equals_Object":
 `@Override
public boolean equals(Object obj) {
    if (obj == this) {
        return true;
    }
    if (!(obj instanceof CacheKey)) {
        return false;
    }
    ClassLoader thisKey = ref.get();
    if (thisKey == null) {
        return false;
    }
    return thisKey == ((CacheKey) obj).ref.get();
}`,"jakarta.el.Util$CacheKey.hashCode_":
 `@Override
public int hashCode() {
    return hash;
}`,"jakarta.el.Util$Wrapper.wrap_Method[]_String":
 `public static List<Wrapper<Method>> wrap(Method[] methods, String name) {
    List<Wrapper<Method>> result = new ArrayList<>();
    for (Method method : methods) {
        if (method.getName().equals(name)) {
            result.add(new MethodWrapper(method));
        }
    }
    return result;
}`,"jakarta.el.BeanNameResolver.<init>_":
 ``,"jakarta.el.Util.findWrapper_Class_List_String_Class[]_Object[]":
 ``,"jakarta.el.ELResolver.<init>_":
 ``,"jakarta.el.Util$CacheValue.getLock_":
 `public ReadWriteLock getLock() {
    return lock;
}`,"org.apache.el.stream.StreamELResolverImpl.<init>_":
 ``,"org.apache.el.lang.ELArithmetic$DoubleDelegate.<init>_":
 ``,"jakarta.el.Util.getExpressionFactory_":
 `/**
 * Provides a per class loader cache of ExpressionFactory instances without
 * pinning any in memory as that could trigger a memory leak.
 */
static ExpressionFactory getExpressionFactory() {
    ClassLoader tccl = getContextClassLoader();
    CacheValue cacheValue = null;
    ExpressionFactory factory = null;
    if (tccl == null) {
        cacheValue = nullTcclFactory;
    } else {
        CacheKey key = new CacheKey(tccl);
        cacheValue = factoryCache.get(key);
        if (cacheValue == null) {
            CacheValue newCacheValue = new CacheValue();
            cacheValue = factoryCache.putIfAbsent(key, newCacheValue);
            if (cacheValue == null) {
                cacheValue = newCacheValue;
            }
        }
    }
    final Lock readLock = cacheValue.getLock().readLock();
    readLock.lock();
    try {
        factory = cacheValue.getExpressionFactory();
    } finally {
        readLock.unlock();
    }
    if (factory == null) {
        final Lock writeLock = cacheValue.getLock().writeLock();
        writeLock.lock();
        try {
            factory = cacheValue.getExpressionFactory();
            if (factory == null) {
                factory = ExpressionFactory.newInstance();
                cacheValue.setExpressionFactory(factory);
            }
        } finally {
            writeLock.unlock();
        }
    }
    return factory;
}`,"jakarta.el.Util$CacheValue.getExpressionFactory_":
 `public ExpressionFactory getExpressionFactory() {
    return ref != null ? ref.get() : null;
}`,"jakarta.el.FunctionMapper.<init>_":
 ``,"jakarta.el.ExpressionFactory$CacheValue.setFactoryClass_Class":
 `public void setFactoryClass(Class<?> clazz) {
    ref = new WeakReference<>(clazz);
}`,"org.apache.el.lang.ELSupport.coerceToNumber_ELContext_Object_Class":
 `public static final Number coerceToNumber(final ELContext ctx, final Object obj, final Class<?> type) throws ELException {
    if (ctx != null) {
        boolean originalIsPropertyResolved = ctx.isPropertyResolved();
        try {
            Object result = ctx.getELResolver().convertToType(ctx, obj, type);
            if (ctx.isPropertyResolved()) {
                return (Number) result;
            }
        } finally {
            ctx.setPropertyResolved(originalIsPropertyResolved);
        }
    }
    if (!COERCE_TO_ZERO) {
        if (obj == null && !type.isPrimitive()) {
            return null;
        }
    }
    if (obj == null || "".equals(obj)) {
        return coerceToNumber(ZERO, type);
    }
    if (obj instanceof String) {
        return coerceToNumber((String) obj, type);
    }
    if (ELArithmetic.isNumber(obj)) {
        return coerceToNumber((Number) obj, type);
    }
    if (obj instanceof Character) {
        return coerceToNumber(Short.valueOf((short) ((Character) obj).charValue()), type);
    }
    throw new ELException(MessageFactory.get("error.convert", obj, obj.getClass(), type));
}`,"jakarta.el.Util.isCoercibleFrom_Object_Class":
 `/*
     * This method duplicates code in org.apache.el.util.ReflectionUtil. When
     * making changes keep the code in sync.
     */
private static boolean isCoercibleFrom(Object src, Class<?> target) {
    // TODO: This isn't pretty but it works. Significant refactoring would
    // be required to avoid the exception.
    try {
        getExpressionFactory().coerceToType(src, target);
    } catch (ELException e) {
        return false;
    }
    return true;
}`,"jakarta.el.ExpressionFactory$CacheValue.getFactoryClass_":
 `public Class<?> getFactoryClass() {
    return ref != null ? ref.get() : null;
}`,"org.apache.el.lang.ELSupport.coerceToType_ELContext_Object_Class":
 `public static final <T> T coerceToType(final ELContext ctx, final Object obj, final Class<T> type) throws ELException {
    if (ctx != null) {
        boolean originalIsPropertyResolved = ctx.isPropertyResolved();
        try {
            T result = ctx.getELResolver().convertToType(ctx, obj, type);
            if (ctx.isPropertyResolved()) {
                return result;
            }
        } finally {
            ctx.setPropertyResolved(originalIsPropertyResolved);
        }
    }
    if (type == null || Object.class.equals(type) || (obj != null && type.isAssignableFrom(obj.getClass()))) {
        @SuppressWarnings("unchecked")
        T result = (T) obj;
        return result;
    }
    if (!COERCE_TO_ZERO) {
        if (obj == null && !type.isPrimitive() && !String.class.isAssignableFrom(type)) {
            return null;
        }
    }
    if (String.class.equals(type)) {
        @SuppressWarnings("unchecked")
        T result = (T) coerceToString(ctx, obj);
        return result;
    }
    if (ELArithmetic.isNumberType(type)) {
        @SuppressWarnings("unchecked")
        T result = (T) coerceToNumber(ctx, obj, type);
        return result;
    }
    if (Character.class.equals(type) || Character.TYPE == type) {
        @SuppressWarnings("unchecked")
        T result = (T) coerceToCharacter(ctx, obj);
        return result;
    }
    if (Boolean.class.equals(type) || Boolean.TYPE == type) {
        @SuppressWarnings("unchecked")
        T result = (T) coerceToBoolean(ctx, obj, Boolean.TYPE == type);
        return result;
    }
    if (type.isEnum()) {
        @SuppressWarnings("unchecked")
        T result = (T) coerceToEnum(ctx, obj, type);
        return result;
    }
    // new to spec
    if (obj == null) {
        return null;
    }
    if (obj instanceof String) {
        String str = (String) obj;
        PropertyEditor editor = PropertyEditorManager.findEditor(type);
        if (editor == null) {
            if (str.isEmpty()) {
                return null;
            }
            throw new ELException(MessageFactory.get("error.convert", obj, obj.getClass(), type));
        } else {
            try {
                editor.setAsText(str);
                @SuppressWarnings("unchecked")
                T result = (T) editor.getValue();
                return result;
            } catch (RuntimeException e) {
                if (str.isEmpty()) {
                    return null;
                }
                throw new ELException(MessageFactory.get("error.convert", obj, obj.getClass(), type), e);
            }
        }
    }
    // Handle special case because the syntax for the empty set is the same
    // for an empty map. The parser will always parse {} as an empty set.
    if (obj instanceof Set && type == Map.class && ((Set<?>) obj).isEmpty()) {
        @SuppressWarnings("unchecked")
        T result = (T) Collections.EMPTY_MAP;
        return result;
    }
    // Handle arrays
    if (type.isArray() && obj.getClass().isArray()) {
        @SuppressWarnings("unchecked")
        T result = (T) coerceToArray(ctx, obj, type);
        return result;
    }
    throw new ELException(MessageFactory.get("error.convert", obj, obj.getClass(), type));
}`,"jakarta.el.BeanELResolver.invoke_ELContext_Object_Object_Class[]_Object[]":
 ``,"jakarta.el.ExpressionFactory$CacheValue.getLock_":
 `public ReadWriteLock getLock() {
    return lock;
}`,"org.apache.el.ExpressionFactoryImpl.coerceToType_Object_Class":
 `@Override
public <T> T coerceToType(Object obj, Class<T> type) {
    return ELSupport.coerceToType(null, obj, type);
}`,"org.apache.el.lang.ELArithmetic.<init>_":
 `/**
 */
protected ELArithmetic() {
    super();
}`,"jakarta.el.StandardELContext$StandardBeanNameResolver.<init>_Map":
 `public StandardBeanNameResolver(Map<String, Object> beans) {
    this.beans = beans;
}`,"jakarta.el.StandardELContext$StandardFunctionMapper.<init>_Map":
 `public StandardFunctionMapper(Map<String, Method> initFunctionMap) {
    if (initFunctionMap != null) {
        methods.putAll(initFunctionMap);
    }
}`,"jakarta.el.ArrayELResolver.<init>_":
 `public ArrayELResolver() {
    this.readOnly = false;
}`,"jakarta.el.ExpressionFactory.getClassNameJreDir_":
 `private static String getClassNameJreDir() {
    File file = new File(PROPERTY_FILE);
    if (file.canRead()) {
        try (InputStream is = new FileInputStream(file)) {
            Properties props = new Properties();
            props.load(is);
            String value = props.getProperty(PROPERTY_NAME);
            if (value != null && value.trim().length() > 0) {
                return value.trim();
            }
        } catch (FileNotFoundException e) {
            // Should not happen - ignore it if it does
        } catch (IOException e) {
            throw new ELException(Util.message(null, "expressionFactory.readFailed", PROPERTY_FILE), e);
        }
    }
    return null;
}`,"jakarta.el.Util.getContextClassLoader_":
 `static ClassLoader getContextClassLoader() {
    ClassLoader tccl;
    if (System.getSecurityManager() != null) {
        PrivilegedAction<ClassLoader> pa = new PrivilegedGetTccl();
        tccl = AccessController.doPrivileged(pa);
    } else {
        tccl = Thread.currentThread().getContextClassLoader();
    }
    return tccl;
}`,},
};
var treeData = [
{
  "call" : "jakarta.el.TestBeanELResolver#testInvokeVarargsCoerce13",
  "kiekerPattern" : "public void jakarta.el.TestBeanELResolver.testInvokeVarargsCoerce13()",
  "otherKiekerPattern" : null,
  "module" : "",
  "name" : "jakarta.el.TestBeanELResolver#testInvokeVarargsCoerce13",
  "key" : "jakarta.el.TestBeanELResolver.testInvokeVarargsCoerce13_",
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
    "call" : "jakarta.el.ELResolver#<init>",
    "kiekerPattern" : "public new jakarta.el.ELResolver.<init>()",
    "otherKiekerPattern" : null,
    "module" : "",
    "name" : "jakarta.el.ELResolver#<init>",
    "key" : "jakarta.el.ELResolver.<init>_",
    "otherKey" : null,
    "parent" : "jakarta.el.TestBeanELResolver#testInvokeVarargsCoerce13",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "jakarta.el.BeanELResolver$ConcurrentCache#<init>",
    "kiekerPattern" : "public new jakarta.el.BeanELResolver$ConcurrentCache.<init>(int)",
    "otherKiekerPattern" : null,
    "module" : "",
    "name" : "jakarta.el.BeanELResolver$ConcurrentCache#<init>",
    "key" : "jakarta.el.BeanELResolver$ConcurrentCache.<init>_int",
    "otherKey" : null,
    "parent" : "jakarta.el.TestBeanELResolver#testInvokeVarargsCoerce13",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "jakarta.el.BeanELResolver#<init>",
    "kiekerPattern" : "public new jakarta.el.BeanELResolver.<init>()",
    "otherKiekerPattern" : null,
    "module" : "",
    "name" : "jakarta.el.BeanELResolver#<init>",
    "key" : "jakarta.el.BeanELResolver.<init>_",
    "otherKey" : null,
    "parent" : "jakarta.el.TestBeanELResolver#testInvokeVarargsCoerce13",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "jakarta.el.ELManager#getExpressionFactory",
    "kiekerPattern" : "public static jakarta.el.ExpressionFactory jakarta.el.ELManager.getExpressionFactory()",
    "otherKiekerPattern" : null,
    "module" : "",
    "name" : "jakarta.el.ELManager#getExpressionFactory",
    "key" : "jakarta.el.ELManager.getExpressionFactory_",
    "otherKey" : null,
    "parent" : "jakarta.el.TestBeanELResolver#testInvokeVarargsCoerce13",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ {
      "call" : "jakarta.el.Util$CacheValue#<init>",
      "kiekerPattern" : "public new jakarta.el.Util$CacheValue.<init>()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "jakarta.el.Util$CacheValue#<init>",
      "key" : "jakarta.el.Util$CacheValue.<init>_",
      "otherKey" : null,
      "parent" : "jakarta.el.ELManager#getExpressionFactory",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "jakarta.el.Util#getExpressionFactory",
      "kiekerPattern" : "static jakarta.el.ExpressionFactory jakarta.el.Util.getExpressionFactory()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "jakarta.el.Util#getExpressionFactory",
      "key" : "jakarta.el.Util.getExpressionFactory_",
      "otherKey" : null,
      "parent" : "jakarta.el.ELManager#getExpressionFactory",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "jakarta.el.Util#getContextClassLoader",
        "kiekerPattern" : "static java.lang.ClassLoader jakarta.el.Util.getContextClassLoader()",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "jakarta.el.Util#getContextClassLoader",
        "key" : "jakarta.el.Util.getContextClassLoader_",
        "otherKey" : null,
        "parent" : "jakarta.el.Util#getExpressionFactory",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "jakarta.el.Util$CacheKey#<init>",
        "kiekerPattern" : "public new jakarta.el.Util$CacheKey.<init>(java.lang.ClassLoader)",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "jakarta.el.Util$CacheKey#<init>",
        "key" : "jakarta.el.Util$CacheKey.<init>_ClassLoader",
        "otherKey" : null,
        "parent" : "jakarta.el.Util#getExpressionFactory",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "jakarta.el.Util$CacheKey#hashCode",
        "kiekerPattern" : "public int jakarta.el.Util$CacheKey.hashCode()",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "jakarta.el.Util$CacheKey#hashCode",
        "key" : "jakarta.el.Util$CacheKey.hashCode_",
        "otherKey" : null,
        "parent" : "jakarta.el.Util#getExpressionFactory",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "jakarta.el.Util$CacheValue#<init>",
        "kiekerPattern" : "public new jakarta.el.Util$CacheValue.<init>()",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "jakarta.el.Util$CacheValue#<init>",
        "key" : "jakarta.el.Util$CacheValue.<init>_",
        "otherKey" : null,
        "parent" : "jakarta.el.Util#getExpressionFactory",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "jakarta.el.Util$CacheValue#getLock",
        "kiekerPattern" : "public java.util.concurrent.locks.ReadWriteLock jakarta.el.Util$CacheValue.getLock()",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "jakarta.el.Util$CacheValue#getLock",
        "key" : "jakarta.el.Util$CacheValue.getLock_",
        "otherKey" : null,
        "parent" : "jakarta.el.Util#getExpressionFactory",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "jakarta.el.Util$CacheValue#getExpressionFactory",
        "kiekerPattern" : "public jakarta.el.ExpressionFactory jakarta.el.Util$CacheValue.getExpressionFactory()",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "jakarta.el.Util$CacheValue#getExpressionFactory",
        "key" : "jakarta.el.Util$CacheValue.getExpressionFactory_",
        "otherKey" : null,
        "parent" : "jakarta.el.Util#getExpressionFactory",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "jakarta.el.ExpressionFactory$CacheValue#<init>",
        "kiekerPattern" : "public new jakarta.el.ExpressionFactory$CacheValue.<init>()",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "jakarta.el.ExpressionFactory$CacheValue#<init>",
        "key" : "jakarta.el.ExpressionFactory$CacheValue.<init>_",
        "otherKey" : null,
        "parent" : "jakarta.el.Util#getExpressionFactory",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "jakarta.el.ExpressionFactory#newInstance",
        "kiekerPattern" : "public static jakarta.el.ExpressionFactory jakarta.el.ExpressionFactory.newInstance()",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "jakarta.el.ExpressionFactory#newInstance",
        "key" : "jakarta.el.ExpressionFactory.newInstance_",
        "otherKey" : null,
        "parent" : "jakarta.el.Util#getExpressionFactory",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "jakarta.el.ExpressionFactory#newInstance",
          "kiekerPattern" : "public static jakarta.el.ExpressionFactory jakarta.el.ExpressionFactory.newInstance(java.util.Properties)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "jakarta.el.ExpressionFactory#newInstance",
          "key" : "jakarta.el.ExpressionFactory.newInstance_Properties",
          "otherKey" : null,
          "parent" : "jakarta.el.ExpressionFactory#newInstance",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "jakarta.el.Util#getContextClassLoader",
            "kiekerPattern" : "static java.lang.ClassLoader jakarta.el.Util.getContextClassLoader()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "jakarta.el.Util#getContextClassLoader",
            "key" : "jakarta.el.Util.getContextClassLoader_",
            "otherKey" : null,
            "parent" : "jakarta.el.ExpressionFactory#newInstance",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "jakarta.el.ExpressionFactory$CacheKey#<init>",
            "kiekerPattern" : "public new jakarta.el.ExpressionFactory$CacheKey.<init>(java.lang.ClassLoader)",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "jakarta.el.ExpressionFactory$CacheKey#<init>",
            "key" : "jakarta.el.ExpressionFactory$CacheKey.<init>_ClassLoader",
            "otherKey" : null,
            "parent" : "jakarta.el.ExpressionFactory#newInstance",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "jakarta.el.ExpressionFactory$CacheKey#hashCode",
            "kiekerPattern" : "public int jakarta.el.ExpressionFactory$CacheKey.hashCode()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "jakarta.el.ExpressionFactory$CacheKey#hashCode",
            "key" : "jakarta.el.ExpressionFactory$CacheKey.hashCode_",
            "otherKey" : null,
            "parent" : "jakarta.el.ExpressionFactory#newInstance",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "jakarta.el.ExpressionFactory$CacheValue#<init>",
            "kiekerPattern" : "public new jakarta.el.ExpressionFactory$CacheValue.<init>()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "jakarta.el.ExpressionFactory$CacheValue#<init>",
            "key" : "jakarta.el.ExpressionFactory$CacheValue.<init>_",
            "otherKey" : null,
            "parent" : "jakarta.el.ExpressionFactory#newInstance",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "jakarta.el.ExpressionFactory$CacheValue#getLock",
            "kiekerPattern" : "public java.util.concurrent.locks.ReadWriteLock jakarta.el.ExpressionFactory$CacheValue.getLock()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "jakarta.el.ExpressionFactory$CacheValue#getLock",
            "key" : "jakarta.el.ExpressionFactory$CacheValue.getLock_",
            "otherKey" : null,
            "parent" : "jakarta.el.ExpressionFactory#newInstance",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "jakarta.el.ExpressionFactory$CacheValue#getFactoryClass",
            "kiekerPattern" : "public java.lang.Class jakarta.el.ExpressionFactory$CacheValue.getFactoryClass()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "jakarta.el.ExpressionFactory$CacheValue#getFactoryClass",
            "key" : "jakarta.el.ExpressionFactory$CacheValue.getFactoryClass_",
            "otherKey" : null,
            "parent" : "jakarta.el.ExpressionFactory#newInstance",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "jakarta.el.ExpressionFactory$CacheValue#getFactoryClassName",
            "kiekerPattern" : "public java.lang.String jakarta.el.ExpressionFactory$CacheValue.getFactoryClassName()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "jakarta.el.ExpressionFactory$CacheValue#getFactoryClassName",
            "key" : "jakarta.el.ExpressionFactory$CacheValue.getFactoryClassName_",
            "otherKey" : null,
            "parent" : "jakarta.el.ExpressionFactory#newInstance",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "jakarta.el.ExpressionFactory#discoverClassName",
            "kiekerPattern" : "private static java.lang.String jakarta.el.ExpressionFactory.discoverClassName(java.lang.ClassLoader)",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "jakarta.el.ExpressionFactory#discoverClassName",
            "key" : "jakarta.el.ExpressionFactory.discoverClassName_ClassLoader",
            "otherKey" : null,
            "parent" : "jakarta.el.ExpressionFactory#newInstance",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ {
              "call" : "jakarta.el.ExpressionFactory#getClassNameServices",
              "kiekerPattern" : "private static java.lang.String jakarta.el.ExpressionFactory.getClassNameServices(java.lang.ClassLoader)",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "jakarta.el.ExpressionFactory#getClassNameServices",
              "key" : "jakarta.el.ExpressionFactory.getClassNameServices_ClassLoader",
              "otherKey" : null,
              "parent" : "jakarta.el.ExpressionFactory#discoverClassName",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            }, {
              "call" : "jakarta.el.ExpressionFactory#getClassNameJreDir",
              "kiekerPattern" : "private static java.lang.String jakarta.el.ExpressionFactory.getClassNameJreDir()",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "jakarta.el.ExpressionFactory#getClassNameJreDir",
              "key" : "jakarta.el.ExpressionFactory.getClassNameJreDir_",
              "otherKey" : null,
              "parent" : "jakarta.el.ExpressionFactory#discoverClassName",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            }, {
              "call" : "jakarta.el.ExpressionFactory#getClassNameSysProp",
              "kiekerPattern" : "private static final java.lang.String jakarta.el.ExpressionFactory.getClassNameSysProp()",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "jakarta.el.ExpressionFactory#getClassNameSysProp",
              "key" : "jakarta.el.ExpressionFactory.getClassNameSysProp_",
              "otherKey" : null,
              "parent" : "jakarta.el.ExpressionFactory#discoverClassName",
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
            "call" : "jakarta.el.ExpressionFactory$CacheValue#setFactoryClassName",
            "kiekerPattern" : "public void jakarta.el.ExpressionFactory$CacheValue.setFactoryClassName(java.lang.String)",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "jakarta.el.ExpressionFactory$CacheValue#setFactoryClassName",
            "key" : "jakarta.el.ExpressionFactory$CacheValue.setFactoryClassName_String",
            "otherKey" : null,
            "parent" : "jakarta.el.ExpressionFactory#newInstance",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "jakarta.el.ExpressionFactory$CacheValue#setFactoryClass",
            "kiekerPattern" : "public void jakarta.el.ExpressionFactory$CacheValue.setFactoryClass(java.lang.Class)",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "jakarta.el.ExpressionFactory$CacheValue#setFactoryClass",
            "key" : "jakarta.el.ExpressionFactory$CacheValue.setFactoryClass_Class",
            "otherKey" : null,
            "parent" : "jakarta.el.ExpressionFactory#newInstance",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "jakarta.el.ExpressionFactory#<init>",
            "kiekerPattern" : "public new jakarta.el.ExpressionFactory.<init>()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "jakarta.el.ExpressionFactory#<init>",
            "key" : "jakarta.el.ExpressionFactory.<init>_",
            "otherKey" : null,
            "parent" : "jakarta.el.ExpressionFactory#newInstance",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.apache.el.ExpressionFactoryImpl#<init>",
            "kiekerPattern" : "public new org.apache.el.ExpressionFactoryImpl.<init>()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.el.ExpressionFactoryImpl#<init>",
            "key" : "org.apache.el.ExpressionFactoryImpl.<init>_",
            "otherKey" : null,
            "parent" : "jakarta.el.ExpressionFactory#newInstance",
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
        "call" : "jakarta.el.Util$CacheValue#setExpressionFactory",
        "kiekerPattern" : "public void jakarta.el.Util$CacheValue.setExpressionFactory(jakarta.el.ExpressionFactory)",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "jakarta.el.Util$CacheValue#setExpressionFactory",
        "key" : "jakarta.el.Util$CacheValue.setExpressionFactory_ExpressionFactory",
        "otherKey" : null,
        "parent" : "jakarta.el.Util#getExpressionFactory",
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
    "call" : "jakarta.el.ELContext#<init>",
    "kiekerPattern" : "public new jakarta.el.ELContext.<init>()",
    "otherKiekerPattern" : null,
    "module" : "",
    "name" : "jakarta.el.ELContext#<init>",
    "key" : "jakarta.el.ELContext.<init>_",
    "otherKey" : null,
    "parent" : "jakarta.el.TestBeanELResolver#testInvokeVarargsCoerce13",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "jakarta.el.StandardELContext#<init>",
    "kiekerPattern" : "public new jakarta.el.StandardELContext.<init>(jakarta.el.ExpressionFactory)",
    "otherKiekerPattern" : null,
    "module" : "",
    "name" : "jakarta.el.StandardELContext#<init>",
    "key" : "jakarta.el.StandardELContext.<init>_ExpressionFactory",
    "otherKey" : null,
    "parent" : "jakarta.el.TestBeanELResolver#testInvokeVarargsCoerce13",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ {
      "call" : "jakarta.el.VariableMapper#<init>",
      "kiekerPattern" : "public new jakarta.el.VariableMapper.<init>()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "jakarta.el.VariableMapper#<init>",
      "key" : "jakarta.el.VariableMapper.<init>_",
      "otherKey" : null,
      "parent" : "jakarta.el.StandardELContext#<init>",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "jakarta.el.StandardELContext$StandardVariableMapper#<init>",
      "kiekerPattern" : "private new jakarta.el.StandardELContext$StandardVariableMapper.<init>()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "jakarta.el.StandardELContext$StandardVariableMapper#<init>",
      "key" : "jakarta.el.StandardELContext$StandardVariableMapper.<init>_",
      "otherKey" : null,
      "parent" : "jakarta.el.StandardELContext#<init>",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "jakarta.el.ExpressionFactory#getInitFunctionMap",
      "kiekerPattern" : "public java.util.Map jakarta.el.ExpressionFactory.getInitFunctionMap()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "jakarta.el.ExpressionFactory#getInitFunctionMap",
      "key" : "jakarta.el.ExpressionFactory.getInitFunctionMap_",
      "otherKey" : null,
      "parent" : "jakarta.el.StandardELContext#<init>",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "jakarta.el.FunctionMapper#<init>",
      "kiekerPattern" : "public new jakarta.el.FunctionMapper.<init>()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "jakarta.el.FunctionMapper#<init>",
      "key" : "jakarta.el.FunctionMapper.<init>_",
      "otherKey" : null,
      "parent" : "jakarta.el.StandardELContext#<init>",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "jakarta.el.StandardELContext$StandardFunctionMapper#<init>",
      "kiekerPattern" : "public new jakarta.el.StandardELContext$StandardFunctionMapper.<init>(java.util.Map)",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "jakarta.el.StandardELContext$StandardFunctionMapper#<init>",
      "key" : "jakarta.el.StandardELContext$StandardFunctionMapper.<init>_Map",
      "otherKey" : null,
      "parent" : "jakarta.el.StandardELContext#<init>",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "jakarta.el.ELResolver#<init>",
      "kiekerPattern" : "public new jakarta.el.ELResolver.<init>()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "jakarta.el.ELResolver#<init>",
      "key" : "jakarta.el.ELResolver.<init>_",
      "otherKey" : null,
      "parent" : "jakarta.el.StandardELContext#<init>",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "jakarta.el.CompositeELResolver#<init>",
      "kiekerPattern" : "public new jakarta.el.CompositeELResolver.<init>()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "jakarta.el.CompositeELResolver#<init>",
      "key" : "jakarta.el.CompositeELResolver.<init>_",
      "otherKey" : null,
      "parent" : "jakarta.el.StandardELContext#<init>",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.apache.el.ExpressionFactoryImpl#getStreamELResolver",
      "kiekerPattern" : "public jakarta.el.ELResolver org.apache.el.ExpressionFactoryImpl.getStreamELResolver()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "org.apache.el.ExpressionFactoryImpl#getStreamELResolver",
      "key" : "org.apache.el.ExpressionFactoryImpl.getStreamELResolver_",
      "otherKey" : null,
      "parent" : "jakarta.el.StandardELContext#<init>",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "jakarta.el.ELResolver#<init>",
        "kiekerPattern" : "public new jakarta.el.ELResolver.<init>()",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "jakarta.el.ELResolver#<init>",
        "key" : "jakarta.el.ELResolver.<init>_",
        "otherKey" : null,
        "parent" : "org.apache.el.ExpressionFactoryImpl#getStreamELResolver",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.apache.el.stream.StreamELResolverImpl#<init>",
        "kiekerPattern" : "public new org.apache.el.stream.StreamELResolverImpl.<init>()",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "org.apache.el.stream.StreamELResolverImpl#<init>",
        "key" : "org.apache.el.stream.StreamELResolverImpl.<init>_",
        "otherKey" : null,
        "parent" : "org.apache.el.ExpressionFactoryImpl#getStreamELResolver",
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
      "call" : "jakarta.el.BeanNameResolver#<init>",
      "kiekerPattern" : "public new jakarta.el.BeanNameResolver.<init>()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "jakarta.el.BeanNameResolver#<init>",
      "key" : "jakarta.el.BeanNameResolver.<init>_",
      "otherKey" : null,
      "parent" : "jakarta.el.StandardELContext#<init>",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "jakarta.el.StandardELContext$StandardBeanNameResolver#<init>",
      "kiekerPattern" : "public new jakarta.el.StandardELContext$StandardBeanNameResolver.<init>(java.util.Map)",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "jakarta.el.StandardELContext$StandardBeanNameResolver#<init>",
      "key" : "jakarta.el.StandardELContext$StandardBeanNameResolver.<init>_Map",
      "otherKey" : null,
      "parent" : "jakarta.el.StandardELContext#<init>",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "jakarta.el.BeanNameELResolver#<init>",
      "kiekerPattern" : "public new jakarta.el.BeanNameELResolver.<init>(jakarta.el.BeanNameResolver)",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "jakarta.el.BeanNameELResolver#<init>",
      "key" : "jakarta.el.BeanNameELResolver.<init>_BeanNameResolver",
      "otherKey" : null,
      "parent" : "jakarta.el.StandardELContext#<init>",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "jakarta.el.CompositeELResolver#add",
      "kiekerPattern" : "public void jakarta.el.CompositeELResolver.add(jakarta.el.CompositeELResolver)",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "jakarta.el.CompositeELResolver#add",
      "key" : "jakarta.el.CompositeELResolver.add_CompositeELResolver",
      "otherKey" : null,
      "parent" : "jakarta.el.StandardELContext#<init>",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "jakarta.el.StaticFieldELResolver#<init>",
      "kiekerPattern" : "public new jakarta.el.StaticFieldELResolver.<init>()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "jakarta.el.StaticFieldELResolver#<init>",
      "key" : "jakarta.el.StaticFieldELResolver.<init>_",
      "otherKey" : null,
      "parent" : "jakarta.el.StandardELContext#<init>",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "jakarta.el.MapELResolver#<init>",
      "kiekerPattern" : "public new jakarta.el.MapELResolver.<init>()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "jakarta.el.MapELResolver#<init>",
      "key" : "jakarta.el.MapELResolver.<init>_",
      "otherKey" : null,
      "parent" : "jakarta.el.StandardELContext#<init>",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "jakarta.el.ResourceBundleELResolver#<init>",
      "kiekerPattern" : "public new jakarta.el.ResourceBundleELResolver.<init>()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "jakarta.el.ResourceBundleELResolver#<init>",
      "key" : "jakarta.el.ResourceBundleELResolver.<init>_",
      "otherKey" : null,
      "parent" : "jakarta.el.StandardELContext#<init>",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "jakarta.el.ListELResolver#<init>",
      "kiekerPattern" : "public new jakarta.el.ListELResolver.<init>()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "jakarta.el.ListELResolver#<init>",
      "key" : "jakarta.el.ListELResolver.<init>_",
      "otherKey" : null,
      "parent" : "jakarta.el.StandardELContext#<init>",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "jakarta.el.ArrayELResolver#<init>",
      "kiekerPattern" : "public new jakarta.el.ArrayELResolver.<init>()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "jakarta.el.ArrayELResolver#<init>",
      "key" : "jakarta.el.ArrayELResolver.<init>_",
      "otherKey" : null,
      "parent" : "jakarta.el.StandardELContext#<init>",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "jakarta.el.BeanELResolver$ConcurrentCache#<init>",
      "kiekerPattern" : "public new jakarta.el.BeanELResolver$ConcurrentCache.<init>(int)",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "jakarta.el.BeanELResolver$ConcurrentCache#<init>",
      "key" : "jakarta.el.BeanELResolver$ConcurrentCache.<init>_int",
      "otherKey" : null,
      "parent" : "jakarta.el.StandardELContext#<init>",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "jakarta.el.BeanELResolver#<init>",
      "kiekerPattern" : "public new jakarta.el.BeanELResolver.<init>()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "jakarta.el.BeanELResolver#<init>",
      "key" : "jakarta.el.BeanELResolver.<init>_",
      "otherKey" : null,
      "parent" : "jakarta.el.StandardELContext#<init>",
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
    "call" : "jakarta.el.TesterBean#<init>",
    "kiekerPattern" : "public new jakarta.el.TesterBean.<init>(java.lang.String)",
    "otherKiekerPattern" : null,
    "module" : "",
    "name" : "jakarta.el.TesterBean#<init>",
    "key" : "jakarta.el.TesterBean.<init>_String",
    "otherKey" : null,
    "parent" : "jakarta.el.TestBeanELResolver#testInvokeVarargsCoerce13",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "jakarta.el.BeanELResolver#invoke",
    "kiekerPattern" : "public java.lang.Object jakarta.el.BeanELResolver.invoke(jakarta.el.ELContext,java.lang.Object,java.lang.Object,java.lang.Class[],java.lang.Object[])",
    "otherKiekerPattern" : null,
    "module" : "",
    "name" : "jakarta.el.BeanELResolver#invoke",
    "key" : "jakarta.el.BeanELResolver.invoke_ELContext_Object_Object_Class[]_Object[]",
    "otherKey" : null,
    "parent" : "jakarta.el.TestBeanELResolver#testInvokeVarargsCoerce13",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ {
      "call" : "jakarta.el.ELManager#getExpressionFactory",
      "kiekerPattern" : "public static jakarta.el.ExpressionFactory jakarta.el.ELManager.getExpressionFactory()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "jakarta.el.ELManager#getExpressionFactory",
      "key" : "jakarta.el.ELManager.getExpressionFactory_",
      "otherKey" : null,
      "parent" : "jakarta.el.BeanELResolver#invoke",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "jakarta.el.Util#getExpressionFactory",
        "kiekerPattern" : "static jakarta.el.ExpressionFactory jakarta.el.Util.getExpressionFactory()",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "jakarta.el.Util#getExpressionFactory",
        "key" : "jakarta.el.Util.getExpressionFactory_",
        "otherKey" : null,
        "parent" : "jakarta.el.ELManager#getExpressionFactory",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "jakarta.el.Util#getContextClassLoader",
          "kiekerPattern" : "static java.lang.ClassLoader jakarta.el.Util.getContextClassLoader()",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "jakarta.el.Util#getContextClassLoader",
          "key" : "jakarta.el.Util.getContextClassLoader_",
          "otherKey" : null,
          "parent" : "jakarta.el.Util#getExpressionFactory",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "jakarta.el.Util$CacheKey#<init>",
          "kiekerPattern" : "public new jakarta.el.Util$CacheKey.<init>(java.lang.ClassLoader)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "jakarta.el.Util$CacheKey#<init>",
          "key" : "jakarta.el.Util$CacheKey.<init>_ClassLoader",
          "otherKey" : null,
          "parent" : "jakarta.el.Util#getExpressionFactory",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "jakarta.el.Util$CacheKey#hashCode",
          "kiekerPattern" : "public int jakarta.el.Util$CacheKey.hashCode()",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "jakarta.el.Util$CacheKey#hashCode",
          "key" : "jakarta.el.Util$CacheKey.hashCode_",
          "otherKey" : null,
          "parent" : "jakarta.el.Util#getExpressionFactory",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "jakarta.el.Util$CacheKey#equals",
          "kiekerPattern" : "public boolean jakarta.el.Util$CacheKey.equals(java.lang.Object)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "jakarta.el.Util$CacheKey#equals",
          "key" : "jakarta.el.Util$CacheKey.equals_Object",
          "otherKey" : null,
          "parent" : "jakarta.el.Util#getExpressionFactory",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "jakarta.el.Util$CacheValue#getLock",
          "kiekerPattern" : "public java.util.concurrent.locks.ReadWriteLock jakarta.el.Util$CacheValue.getLock()",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "jakarta.el.Util$CacheValue#getLock",
          "key" : "jakarta.el.Util$CacheValue.getLock_",
          "otherKey" : null,
          "parent" : "jakarta.el.Util#getExpressionFactory",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "jakarta.el.Util$CacheValue#getExpressionFactory",
          "kiekerPattern" : "public jakarta.el.ExpressionFactory jakarta.el.Util$CacheValue.getExpressionFactory()",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "jakarta.el.Util$CacheValue#getExpressionFactory",
          "key" : "jakarta.el.Util$CacheValue.getExpressionFactory_",
          "otherKey" : null,
          "parent" : "jakarta.el.Util#getExpressionFactory",
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
      "call" : "org.apache.el.ExpressionFactoryImpl#coerceToType",
      "kiekerPattern" : "public org.apache.el.T org.apache.el.ExpressionFactoryImpl.coerceToType(java.lang.Object,java.lang.Class)",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "org.apache.el.ExpressionFactoryImpl#coerceToType",
      "key" : "org.apache.el.ExpressionFactoryImpl.coerceToType_Object_Class",
      "otherKey" : null,
      "parent" : "jakarta.el.BeanELResolver#invoke",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.apache.el.lang.ELSupport#coerceToType",
        "kiekerPattern" : "public static final org.apache.el.lang.T org.apache.el.lang.ELSupport.coerceToType(jakarta.el.ELContext,java.lang.Object,java.lang.Class)",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "org.apache.el.lang.ELSupport#coerceToType",
        "key" : "org.apache.el.lang.ELSupport.coerceToType_ELContext_Object_Class",
        "otherKey" : null,
        "parent" : "org.apache.el.ExpressionFactoryImpl#coerceToType",
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
      "call" : "jakarta.el.Util#findMethod",
      "kiekerPattern" : "static java.lang.reflect.Method jakarta.el.Util.findMethod(java.lang.Class,java.lang.Object,java.lang.String,java.lang.Class[],java.lang.Object[])",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "jakarta.el.Util#findMethod",
      "key" : "jakarta.el.Util.findMethod_Class_Object_String_Class[]_Object[]",
      "otherKey" : null,
      "parent" : "jakarta.el.BeanELResolver#invoke",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "jakarta.el.Util$Wrapper#wrap",
        "kiekerPattern" : "public static java.util.List jakarta.el.Util$Wrapper.wrap(java.lang.reflect.Method[],java.lang.String)",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "jakarta.el.Util$Wrapper#wrap",
        "key" : "jakarta.el.Util$Wrapper.wrap_Method[]_String",
        "otherKey" : null,
        "parent" : "jakarta.el.Util#findMethod",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "jakarta.el.Util$Wrapper#<init>",
          "kiekerPattern" : "private new jakarta.el.Util$Wrapper.<init>()",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "jakarta.el.Util$Wrapper#<init>",
          "key" : "jakarta.el.Util$Wrapper.<init>_",
          "otherKey" : null,
          "parent" : "jakarta.el.Util$Wrapper#wrap",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "jakarta.el.Util$MethodWrapper#<init>",
          "kiekerPattern" : "public new jakarta.el.Util$MethodWrapper.<init>(java.lang.reflect.Method)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "jakarta.el.Util$MethodWrapper#<init>",
          "key" : "jakarta.el.Util$MethodWrapper.<init>_Method",
          "otherKey" : null,
          "parent" : "jakarta.el.Util$Wrapper#wrap",
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
        "call" : "jakarta.el.Util#findWrapper",
        "kiekerPattern" : "private static jakarta.el.Util$ConstructorWrapper jakarta.el.Util.findWrapper(java.lang.Class,java.util.List,java.lang.String,java.lang.Class[],java.lang.Object[])",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "jakarta.el.Util#findWrapper",
        "key" : "jakarta.el.Util.findWrapper_Class_List_String_Class[]_Object[]",
        "otherKey" : null,
        "parent" : "jakarta.el.Util#findMethod",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "jakarta.el.Util$MethodWrapper#getParameterTypes",
          "kiekerPattern" : "public java.lang.Class[] jakarta.el.Util$MethodWrapper.getParameterTypes()",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "jakarta.el.Util$MethodWrapper#getParameterTypes",
          "key" : "jakarta.el.Util$MethodWrapper.getParameterTypes_",
          "otherKey" : null,
          "parent" : "jakarta.el.Util#findWrapper",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "jakarta.el.Util$MethodWrapper#isVarArgs",
          "kiekerPattern" : "public boolean jakarta.el.Util$MethodWrapper.isVarArgs()",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "jakarta.el.Util$MethodWrapper#isVarArgs",
          "key" : "jakarta.el.Util$MethodWrapper.isVarArgs_",
          "otherKey" : null,
          "parent" : "jakarta.el.Util#findWrapper",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "jakarta.el.Util#isAssignableFrom",
          "kiekerPattern" : "static boolean jakarta.el.Util.isAssignableFrom(java.lang.Class,java.lang.Class)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "jakarta.el.Util#isAssignableFrom",
          "key" : "jakarta.el.Util.isAssignableFrom_Class_Class",
          "otherKey" : null,
          "parent" : "jakarta.el.Util#findWrapper",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "jakarta.el.Util#isCoercibleFrom",
          "kiekerPattern" : "private static boolean jakarta.el.Util.isCoercibleFrom(java.lang.Object,java.lang.Class)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "jakarta.el.Util#isCoercibleFrom",
          "key" : "jakarta.el.Util.isCoercibleFrom_Object_Class",
          "otherKey" : null,
          "parent" : "jakarta.el.Util#findWrapper",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "jakarta.el.Util#getExpressionFactory",
            "kiekerPattern" : "static jakarta.el.ExpressionFactory jakarta.el.Util.getExpressionFactory()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "jakarta.el.Util#getExpressionFactory",
            "key" : "jakarta.el.Util.getExpressionFactory_",
            "otherKey" : null,
            "parent" : "jakarta.el.Util#isCoercibleFrom",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ {
              "call" : "jakarta.el.Util#getContextClassLoader",
              "kiekerPattern" : "static java.lang.ClassLoader jakarta.el.Util.getContextClassLoader()",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "jakarta.el.Util#getContextClassLoader",
              "key" : "jakarta.el.Util.getContextClassLoader_",
              "otherKey" : null,
              "parent" : "jakarta.el.Util#getExpressionFactory",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            }, {
              "call" : "jakarta.el.Util$CacheKey#<init>",
              "kiekerPattern" : "public new jakarta.el.Util$CacheKey.<init>(java.lang.ClassLoader)",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "jakarta.el.Util$CacheKey#<init>",
              "key" : "jakarta.el.Util$CacheKey.<init>_ClassLoader",
              "otherKey" : null,
              "parent" : "jakarta.el.Util#getExpressionFactory",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            }, {
              "call" : "jakarta.el.Util$CacheKey#hashCode",
              "kiekerPattern" : "public int jakarta.el.Util$CacheKey.hashCode()",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "jakarta.el.Util$CacheKey#hashCode",
              "key" : "jakarta.el.Util$CacheKey.hashCode_",
              "otherKey" : null,
              "parent" : "jakarta.el.Util#getExpressionFactory",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            }, {
              "call" : "jakarta.el.Util$CacheKey#equals",
              "kiekerPattern" : "public boolean jakarta.el.Util$CacheKey.equals(java.lang.Object)",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "jakarta.el.Util$CacheKey#equals",
              "key" : "jakarta.el.Util$CacheKey.equals_Object",
              "otherKey" : null,
              "parent" : "jakarta.el.Util#getExpressionFactory",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            }, {
              "call" : "jakarta.el.Util$CacheValue#getLock",
              "kiekerPattern" : "public java.util.concurrent.locks.ReadWriteLock jakarta.el.Util$CacheValue.getLock()",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "jakarta.el.Util$CacheValue#getLock",
              "key" : "jakarta.el.Util$CacheValue.getLock_",
              "otherKey" : null,
              "parent" : "jakarta.el.Util#getExpressionFactory",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            }, {
              "call" : "jakarta.el.Util$CacheValue#getExpressionFactory",
              "kiekerPattern" : "public jakarta.el.ExpressionFactory jakarta.el.Util$CacheValue.getExpressionFactory()",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "jakarta.el.Util$CacheValue#getExpressionFactory",
              "key" : "jakarta.el.Util$CacheValue.getExpressionFactory_",
              "otherKey" : null,
              "parent" : "jakarta.el.Util#getExpressionFactory",
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
            "call" : "org.apache.el.ExpressionFactoryImpl#coerceToType",
            "kiekerPattern" : "public org.apache.el.T org.apache.el.ExpressionFactoryImpl.coerceToType(java.lang.Object,java.lang.Class)",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "org.apache.el.ExpressionFactoryImpl#coerceToType",
            "key" : "org.apache.el.ExpressionFactoryImpl.coerceToType_Object_Class",
            "otherKey" : null,
            "parent" : "jakarta.el.Util#isCoercibleFrom",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ {
              "call" : "org.apache.el.lang.ELSupport#coerceToType",
              "kiekerPattern" : "public static final org.apache.el.lang.T org.apache.el.lang.ELSupport.coerceToType(jakarta.el.ELContext,java.lang.Object,java.lang.Class)",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "org.apache.el.lang.ELSupport#coerceToType",
              "key" : "org.apache.el.lang.ELSupport.coerceToType_ELContext_Object_Class",
              "otherKey" : null,
              "parent" : "org.apache.el.ExpressionFactoryImpl#coerceToType",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ {
                "call" : "org.apache.el.lang.ELArithmetic#<init>",
                "kiekerPattern" : "protected new org.apache.el.lang.ELArithmetic.<init>()",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "org.apache.el.lang.ELArithmetic#<init>",
                "key" : "org.apache.el.lang.ELArithmetic.<init>_",
                "otherKey" : null,
                "parent" : "org.apache.el.lang.ELSupport#coerceToType",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              }, {
                "call" : "org.apache.el.lang.ELArithmetic$BigDecimalDelegate#<init>",
                "kiekerPattern" : "public new org.apache.el.lang.ELArithmetic$BigDecimalDelegate.<init>()",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "org.apache.el.lang.ELArithmetic$BigDecimalDelegate#<init>",
                "key" : "org.apache.el.lang.ELArithmetic$BigDecimalDelegate.<init>_",
                "otherKey" : null,
                "parent" : "org.apache.el.lang.ELSupport#coerceToType",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              }, {
                "call" : "org.apache.el.lang.ELArithmetic$BigIntegerDelegate#<init>",
                "kiekerPattern" : "public new org.apache.el.lang.ELArithmetic$BigIntegerDelegate.<init>()",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "org.apache.el.lang.ELArithmetic$BigIntegerDelegate#<init>",
                "key" : "org.apache.el.lang.ELArithmetic$BigIntegerDelegate.<init>_",
                "otherKey" : null,
                "parent" : "org.apache.el.lang.ELSupport#coerceToType",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              }, {
                "call" : "org.apache.el.lang.ELArithmetic$DoubleDelegate#<init>",
                "kiekerPattern" : "public new org.apache.el.lang.ELArithmetic$DoubleDelegate.<init>()",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "org.apache.el.lang.ELArithmetic$DoubleDelegate#<init>",
                "key" : "org.apache.el.lang.ELArithmetic$DoubleDelegate.<init>_",
                "otherKey" : null,
                "parent" : "org.apache.el.lang.ELSupport#coerceToType",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              }, {
                "call" : "org.apache.el.lang.ELArithmetic$LongDelegate#<init>",
                "kiekerPattern" : "public new org.apache.el.lang.ELArithmetic$LongDelegate.<init>()",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "org.apache.el.lang.ELArithmetic$LongDelegate#<init>",
                "key" : "org.apache.el.lang.ELArithmetic$LongDelegate.<init>_",
                "otherKey" : null,
                "parent" : "org.apache.el.lang.ELSupport#coerceToType",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              }, {
                "call" : "org.apache.el.lang.ELArithmetic#isNumberType",
                "kiekerPattern" : "public static final boolean org.apache.el.lang.ELArithmetic.isNumberType(java.lang.Class)",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "org.apache.el.lang.ELArithmetic#isNumberType",
                "key" : "org.apache.el.lang.ELArithmetic.isNumberType_Class",
                "otherKey" : null,
                "parent" : "org.apache.el.lang.ELSupport#coerceToType",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              }, {
                "call" : "org.apache.el.lang.ELSupport#coerceToNumber",
                "kiekerPattern" : "public static final java.lang.Number org.apache.el.lang.ELSupport.coerceToNumber(jakarta.el.ELContext,java.lang.Object,java.lang.Class)",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "org.apache.el.lang.ELSupport#coerceToNumber",
                "key" : "org.apache.el.lang.ELSupport.coerceToNumber_ELContext_Object_Class",
                "otherKey" : null,
                "parent" : "org.apache.el.lang.ELSupport#coerceToType",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ {
                  "call" : "org.apache.el.lang.ELSupport#coerceToNumber",
                  "kiekerPattern" : "protected static final java.lang.Number org.apache.el.lang.ELSupport.coerceToNumber(java.lang.String,java.lang.Class)",
                  "otherKiekerPattern" : null,
                  "module" : "",
                  "name" : "org.apache.el.lang.ELSupport#coerceToNumber",
                  "key" : "org.apache.el.lang.ELSupport.coerceToNumber_String_Class",
                  "otherKey" : null,
                  "parent" : "org.apache.el.lang.ELSupport#coerceToNumber",
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
                "call" : "org.apache.el.lang.ELSupport#coerceToBoolean",
                "kiekerPattern" : "public static final java.lang.Boolean org.apache.el.lang.ELSupport.coerceToBoolean(jakarta.el.ELContext,java.lang.Object,boolean)",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "org.apache.el.lang.ELSupport#coerceToBoolean",
                "key" : "org.apache.el.lang.ELSupport.coerceToBoolean_ELContext_Object_boolean",
                "otherKey" : null,
                "parent" : "org.apache.el.lang.ELSupport#coerceToType",
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
          "call" : "jakarta.el.Util$MethodWrapper#isBridge",
          "kiekerPattern" : "public boolean jakarta.el.Util$MethodWrapper.isBridge()",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "jakarta.el.Util$MethodWrapper#isBridge",
          "key" : "jakarta.el.Util$MethodWrapper.isBridge_",
          "otherKey" : null,
          "parent" : "jakarta.el.Util#findWrapper",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "jakarta.el.Util$MatchResult#<init>",
          "kiekerPattern" : "public new jakarta.el.Util$MatchResult.<init>(int,int,int,boolean)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "jakarta.el.Util$MatchResult#<init>",
          "key" : "jakarta.el.Util$MatchResult.<init>_int_int_int_boolean",
          "otherKey" : null,
          "parent" : "jakarta.el.Util#findWrapper",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "jakarta.el.Util$MatchResult#compareTo",
          "kiekerPattern" : "public int jakarta.el.Util$MatchResult.compareTo(jakarta.el.Util$MatchResult)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "jakarta.el.Util$MatchResult#compareTo",
          "key" : "jakarta.el.Util$MatchResult.compareTo_Util$MatchResult",
          "otherKey" : null,
          "parent" : "jakarta.el.Util#findWrapper",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "jakarta.el.Util$MatchResult#getExact",
            "kiekerPattern" : "public int jakarta.el.Util$MatchResult.getExact()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "jakarta.el.Util$MatchResult#getExact",
            "key" : "jakarta.el.Util$MatchResult.getExact_",
            "otherKey" : null,
            "parent" : "jakarta.el.Util$MatchResult#compareTo",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "jakarta.el.Util$MatchResult#getAssignable",
            "kiekerPattern" : "public int jakarta.el.Util$MatchResult.getAssignable()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "jakarta.el.Util$MatchResult#getAssignable",
            "key" : "jakarta.el.Util$MatchResult.getAssignable_",
            "otherKey" : null,
            "parent" : "jakarta.el.Util$MatchResult#compareTo",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "jakarta.el.Util$MatchResult#getCoercible",
            "kiekerPattern" : "public int jakarta.el.Util$MatchResult.getCoercible()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "jakarta.el.Util$MatchResult#getCoercible",
            "key" : "jakarta.el.Util$MatchResult.getCoercible_",
            "otherKey" : null,
            "parent" : "jakarta.el.Util$MatchResult#compareTo",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "jakarta.el.Util$MatchResult#isBridge",
            "kiekerPattern" : "public boolean jakarta.el.Util$MatchResult.isBridge()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "jakarta.el.Util$MatchResult#isBridge",
            "key" : "jakarta.el.Util$MatchResult.isBridge_",
            "otherKey" : null,
            "parent" : "jakarta.el.Util$MatchResult#compareTo",
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
          "call" : "jakarta.el.Util$MatchResult#getExact",
          "kiekerPattern" : "public int jakarta.el.Util$MatchResult.getExact()",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "jakarta.el.Util$MatchResult#getExact",
          "key" : "jakarta.el.Util$MatchResult.getExact_",
          "otherKey" : null,
          "parent" : "jakarta.el.Util#findWrapper",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "jakarta.el.Util#paramString",
          "kiekerPattern" : "private static final java.lang.String jakarta.el.Util.paramString(java.lang.Class[])",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "jakarta.el.Util#paramString",
          "key" : "jakarta.el.Util.paramString_Class[]",
          "otherKey" : null,
          "parent" : "jakarta.el.Util#findWrapper",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "jakarta.el.Util#message",
          "kiekerPattern" : "static java.lang.String jakarta.el.Util.message(jakarta.el.ELContext,java.lang.String,java.lang.Object)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "jakarta.el.Util#message",
          "key" : "jakarta.el.Util.message_ELContext_String_Object",
          "otherKey" : null,
          "parent" : "jakarta.el.Util#findWrapper",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "jakarta.el.ELException#<init>",
          "kiekerPattern" : "public new jakarta.el.ELException.<init>(java.lang.String)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "jakarta.el.ELException#<init>",
          "key" : "jakarta.el.ELException.<init>_String",
          "otherKey" : null,
          "parent" : "jakarta.el.Util#findWrapper",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "jakarta.el.MethodNotFoundException#<init>",
          "kiekerPattern" : "public new jakarta.el.MethodNotFoundException.<init>(java.lang.String)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "jakarta.el.MethodNotFoundException#<init>",
          "key" : "jakarta.el.MethodNotFoundException.<init>_String",
          "otherKey" : null,
          "parent" : "jakarta.el.Util#findWrapper",
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
var margin = {top: 20, right: 120, bottom: 20, left: 385},
   width = 2962- margin.right - margin.left,
   height = 1470 - margin.top - margin.bottom;
