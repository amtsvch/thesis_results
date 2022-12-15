if (document.getElementById('testcaseDiv') != null) { 
   document.getElementById('testcaseDiv').innerHTML="Commit: <a href='javascript:fallbackCopyTextToClipboard(\"-commit 6b8aeaf80860dd48d5ddd44e866fea5d6072ded3 -test org.apache.tomcat.util.descriptor.web.TestWebXml#testLifecycleMethodsWebFragmentsWithConflicts\")'>6b8aeaf80860dd48d5ddd44e866fea5d6072ded3</a><br>Test Case: org.apache.tomcat.util.descriptor.web.TestWebXml#testLifecycleMethodsWebFragmentsWithConflicts<br>";
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
}`,"org.apache.tomcat.util.descriptor.web.WebXml.getURL_":
 `public URL getURL() {
    return uRL;
}`,"org.apache.tomcat.util.descriptor.web.WebXml.getContextParams_":
 `public Map<String, String> getContextParams() {
    return contextParams;
}`,"org.apache.juli.logging.DirectJDKLog.error_Object":
 `@Override
public final void error(Object message) {
    log(Level.SEVERE, String.valueOf(message), null);
}`,"org.apache.tomcat.util.descriptor.web.WebXml.getJspPropertyGroups_":
 `public Set<JspPropertyGroup> getJspPropertyGroups() {
    return jspPropertyGroups;
}`,"org.apache.tomcat.util.descriptor.web.WebXml.getDisplayName_":
 `public String getDisplayName() {
    return displayName;
}`,"org.apache.tomcat.util.descriptor.web.WebXml.getServiceRefs_":
 `public Map<String, ContextService> getServiceRefs() {
    return serviceRefs;
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
}`,"org.apache.tomcat.util.descriptor.web.WebXml.getDenyUncoveredHttpMethods_":
 `public boolean getDenyUncoveredHttpMethods() {
    return denyUncoveredHttpMethods;
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
}`,"org.apache.tomcat.util.descriptor.web.WebXml.mergeLifecycleCallback_Map_Map_WebXml_String":
 `private boolean mergeLifecycleCallback(Map<String, String> fragmentMap, Map<String, String> tempMap, WebXml fragment, String mapName) {
    for (Entry<String, String> entry : fragmentMap.entrySet()) {
        final String key = entry.getKey();
        final String value = entry.getValue();
        if (tempMap.containsKey(key)) {
            if (value != null && !value.equals(tempMap.get(key))) {
                log.error(sm.getString("webXml.mergeConflictString", mapName, key, fragment.getName(), fragment.getURL()));
                return false;
            }
        } else {
            tempMap.put(key, value);
        }
    }
    return true;
}`,"org.apache.tomcat.util.descriptor.web.WebXml.getEjbLocalRefs_":
 `public Map<String, ContextLocalEjb> getEjbLocalRefs() {
    return ejbLocalRefs;
}`,"org.apache.tomcat.util.descriptor.web.WebXml.addPreDestroyMethods_String_String":
 `public void addPreDestroyMethods(String clazz, String method) {
    if (!preDestroyMethods.containsKey(clazz)) {
        preDestroyMethods.put(clazz, method);
    }
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
}`,"org.apache.tomcat.util.descriptor.web.WebXml.getMessageDestinations_":
 `public Map<String, MessageDestination> getMessageDestinations() {
    return messageDestinations;
}`,"org.apache.tomcat.util.descriptor.web.WebXml.getSecurityRoles_":
 `public Set<String> getSecurityRoles() {
    return securityRoles;
}`,"org.apache.tomcat.util.descriptor.web.SessionConfig.getSessionTimeout_":
 `public Integer getSessionTimeout() {
    return sessionTimeout;
}`,"org.apache.juli.logging.DirectJDKLog.getInstance_String":
 `static Log getInstance(String name) {
    return new DirectJDKLog(name);
}`,"org.apache.tomcat.util.descriptor.web.WebXml.getLoginConfig_":
 `public LoginConfig getLoginConfig() {
    return loginConfig;
}`,"org.apache.tomcat.util.descriptor.web.XmlEncodingBase.<init>_":
 ``,"org.apache.juli.logging.DirectJDKLog.<init>_String":
 `public DirectJDKLog(String name) {
    logger = Logger.getLogger(name);
}`,"org.apache.tomcat.util.descriptor.web.WebXml.getEjbRefs_":
 `public Map<String, ContextEjb> getEjbRefs() {
    return ejbRefs;
}`,"org.apache.tomcat.util.descriptor.web.WebXml.getResourceRefs_":
 `public Map<String, ContextResource> getResourceRefs() {
    return resourceRefs;
}`,"org.apache.tomcat.util.descriptor.web.WebXml.getServlets_":
 `public Map<String, ServletDef> getServlets() {
    return servlets;
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
}`,"org.apache.tomcat.util.descriptor.web.WebXml.getWelcomeFiles_":
 `public Set<String> getWelcomeFiles() {
    return welcomeFiles;
}`,"org.apache.tomcat.util.descriptor.web.SessionConfig.setCookieName_String":
 `public void setCookieName(String cookieName) {
    this.cookieName = cookieName;
}`,"org.apache.tomcat.util.descriptor.web.WebXml.getLocaleEncodingMappings_":
 `public Map<String, String> getLocaleEncodingMappings() {
    return localeEncodingMappings;
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
}`,"org.apache.tomcat.util.descriptor.web.WebXml.merge_Set":
 `/**
 * Merge the supplied web fragments into this main web.xml.
 *
 * @param fragments     The fragments to merge in
 * @return <code>true</code> if merge is successful, else
 *         <code>false</code>
 */
public boolean merge(Set<WebXml> fragments) {
    // As far as possible, process in alphabetical order so it is easy to
    // check everything is present
    // Merge rules vary from element to element. See SRV.8.2.3
    WebXml temp = new WebXml();
    for (WebXml fragment : fragments) {
        if (!mergeMap(fragment.getContextParams(), contextParams, temp.getContextParams(), fragment, "Context Parameter")) {
            return false;
        }
    }
    contextParams.putAll(temp.getContextParams());
    if (displayName == null) {
        for (WebXml fragment : fragments) {
            String value = fragment.getDisplayName();
            if (value != null) {
                if (temp.getDisplayName() == null) {
                    temp.setDisplayName(value);
                } else {
                    log.error(sm.getString("webXml.mergeConflictDisplayName", fragment.getName(), fragment.getURL()));
                    return false;
                }
            }
        }
        displayName = temp.getDisplayName();
    }
    // Note: Not permitted in fragments but we also use fragments for
    // per-Host and global defaults so they may appear there
    if (!denyUncoveredHttpMethods) {
        for (WebXml fragment : fragments) {
            if (fragment.getDenyUncoveredHttpMethods()) {
                denyUncoveredHttpMethods = true;
                break;
            }
        }
    }
    if (requestCharacterEncoding == null) {
        for (WebXml fragment : fragments) {
            if (fragment.getRequestCharacterEncoding() != null) {
                requestCharacterEncoding = fragment.getRequestCharacterEncoding();
            }
        }
    }
    if (responseCharacterEncoding == null) {
        for (WebXml fragment : fragments) {
            if (fragment.getResponseCharacterEncoding() != null) {
                responseCharacterEncoding = fragment.getResponseCharacterEncoding();
            }
        }
    }
    if (distributable) {
        for (WebXml fragment : fragments) {
            if (!fragment.isDistributable()) {
                distributable = false;
                break;
            }
        }
    }
    for (WebXml fragment : fragments) {
        if (!mergeResourceMap(fragment.getEjbLocalRefs(), ejbLocalRefs, temp.getEjbLocalRefs(), fragment)) {
            return false;
        }
    }
    ejbLocalRefs.putAll(temp.getEjbLocalRefs());
    for (WebXml fragment : fragments) {
        if (!mergeResourceMap(fragment.getEjbRefs(), ejbRefs, temp.getEjbRefs(), fragment)) {
            return false;
        }
    }
    ejbRefs.putAll(temp.getEjbRefs());
    for (WebXml fragment : fragments) {
        if (!mergeResourceMap(fragment.getEnvEntries(), envEntries, temp.getEnvEntries(), fragment)) {
            return false;
        }
    }
    envEntries.putAll(temp.getEnvEntries());
    for (WebXml fragment : fragments) {
        if (!mergeMap(fragment.getErrorPages(), errorPages, temp.getErrorPages(), fragment, "Error Page")) {
            return false;
        }
    }
    errorPages.putAll(temp.getErrorPages());
    // As per 'clarification' from the Servlet EG, filter definitions in the
    // main web.xml override those in fragments and those in fragments
    // override those in annotations
    List<FilterMap> filterMapsToAdd = new ArrayList<>();
    for (WebXml fragment : fragments) {
        for (FilterMap filterMap : fragment.getFilterMappings()) {
            if (!filterMappingNames.contains(filterMap.getFilterName())) {
                filterMapsToAdd.add(filterMap);
            }
        }
    }
    for (FilterMap filterMap : filterMapsToAdd) {
        // Additive
        addFilterMapping(filterMap);
    }
    for (WebXml fragment : fragments) {
        for (Map.Entry<String, FilterDef> entry : fragment.getFilters().entrySet()) {
            if (filters.containsKey(entry.getKey())) {
                mergeFilter(entry.getValue(), filters.get(entry.getKey()), false);
            } else {
                if (temp.getFilters().containsKey(entry.getKey())) {
                    if (!(mergeFilter(entry.getValue(), temp.getFilters().get(entry.getKey()), true))) {
                        log.error(sm.getString("webXml.mergeConflictFilter", entry.getKey(), fragment.getName(), fragment.getURL()));
                        return false;
                    }
                } else {
                    temp.getFilters().put(entry.getKey(), entry.getValue());
                }
            }
        }
    }
    filters.putAll(temp.getFilters());
    for (WebXml fragment : fragments) {
        for (JspPropertyGroup jspPropertyGroup : fragment.getJspPropertyGroups()) {
            // Always additive
            addJspPropertyGroup(jspPropertyGroup);
        }
    }
    for (WebXml fragment : fragments) {
        for (String listener : fragment.getListeners()) {
            // Always additive
            addListener(listener);
        }
    }
    for (WebXml fragment : fragments) {
        if (!mergeMap(fragment.getLocaleEncodingMappings(), localeEncodingMappings, temp.getLocaleEncodingMappings(), fragment, "Locale Encoding Mapping")) {
            return false;
        }
    }
    localeEncodingMappings.putAll(temp.getLocaleEncodingMappings());
    if (getLoginConfig() == null) {
        LoginConfig tempLoginConfig = null;
        for (WebXml fragment : fragments) {
            LoginConfig fragmentLoginConfig = fragment.loginConfig;
            if (fragmentLoginConfig != null) {
                if (tempLoginConfig == null || fragmentLoginConfig.equals(tempLoginConfig)) {
                    tempLoginConfig = fragmentLoginConfig;
                } else {
                    log.error(sm.getString("webXml.mergeConflictLoginConfig", fragment.getName(), fragment.getURL()));
                }
            }
        }
        loginConfig = tempLoginConfig;
    }
    for (WebXml fragment : fragments) {
        if (!mergeResourceMap(fragment.getMessageDestinationRefs(), messageDestinationRefs, temp.getMessageDestinationRefs(), fragment)) {
            return false;
        }
    }
    messageDestinationRefs.putAll(temp.getMessageDestinationRefs());
    for (WebXml fragment : fragments) {
        if (!mergeResourceMap(fragment.getMessageDestinations(), messageDestinations, temp.getMessageDestinations(), fragment)) {
            return false;
        }
    }
    messageDestinations.putAll(temp.getMessageDestinations());
    for (WebXml fragment : fragments) {
        if (!mergeMap(fragment.getMimeMappings(), mimeMappings, temp.getMimeMappings(), fragment, "Mime Mapping")) {
            return false;
        }
    }
    mimeMappings.putAll(temp.getMimeMappings());
    for (WebXml fragment : fragments) {
        if (!mergeResourceMap(fragment.getResourceEnvRefs(), resourceEnvRefs, temp.getResourceEnvRefs(), fragment)) {
            return false;
        }
    }
    resourceEnvRefs.putAll(temp.getResourceEnvRefs());
    for (WebXml fragment : fragments) {
        if (!mergeResourceMap(fragment.getResourceRefs(), resourceRefs, temp.getResourceRefs(), fragment)) {
            return false;
        }
    }
    resourceRefs.putAll(temp.getResourceRefs());
    for (WebXml fragment : fragments) {
        for (SecurityConstraint constraint : fragment.getSecurityConstraints()) {
            // Always additive
            addSecurityConstraint(constraint);
        }
    }
    for (WebXml fragment : fragments) {
        for (String role : fragment.getSecurityRoles()) {
            // Always additive
            addSecurityRole(role);
        }
    }
    for (WebXml fragment : fragments) {
        if (!mergeResourceMap(fragment.getServiceRefs(), serviceRefs, temp.getServiceRefs(), fragment)) {
            return false;
        }
    }
    serviceRefs.putAll(temp.getServiceRefs());
    // As per 'clarification' from the Servlet EG, servlet definitions and
    // mappings in the main web.xml override those in fragments and those in
    // fragments override those in annotations
    // Skip servlet definitions and mappings from fragments that are
    // defined in web.xml
    List<Map.Entry<String, String>> servletMappingsToAdd = new ArrayList<>();
    for (WebXml fragment : fragments) {
        for (Map.Entry<String, String> servletMap : fragment.getServletMappings().entrySet()) {
            if (!servletMappingNames.contains(servletMap.getValue()) && !servletMappings.containsKey(servletMap.getKey())) {
                servletMappingsToAdd.add(servletMap);
            }
        }
    }
    // Add fragment mappings
    for (Map.Entry<String, String> mapping : servletMappingsToAdd) {
        addServletMappingDecoded(mapping.getKey(), mapping.getValue());
    }
    for (WebXml fragment : fragments) {
        for (Map.Entry<String, ServletDef> entry : fragment.getServlets().entrySet()) {
            if (servlets.containsKey(entry.getKey())) {
                mergeServlet(entry.getValue(), servlets.get(entry.getKey()), false);
            } else {
                if (temp.getServlets().containsKey(entry.getKey())) {
                    if (!(mergeServlet(entry.getValue(), temp.getServlets().get(entry.getKey()), true))) {
                        log.error(sm.getString("webXml.mergeConflictServlet", entry.getKey(), fragment.getName(), fragment.getURL()));
                        return false;
                    }
                } else {
                    temp.getServlets().put(entry.getKey(), entry.getValue());
                }
            }
        }
    }
    servlets.putAll(temp.getServlets());
    if (sessionConfig.getSessionTimeout() == null) {
        for (WebXml fragment : fragments) {
            Integer value = fragment.getSessionConfig().getSessionTimeout();
            if (value != null) {
                if (temp.getSessionConfig().getSessionTimeout() == null) {
                    temp.getSessionConfig().setSessionTimeout(value.toString());
                } else if (value.equals(temp.getSessionConfig().getSessionTimeout())) {
                    // Fragments use same value - no conflict
                } else {
                    log.error(sm.getString("webXml.mergeConflictSessionTimeout", fragment.getName(), fragment.getURL()));
                    return false;
                }
            }
        }
        if (temp.getSessionConfig().getSessionTimeout() != null) {
            sessionConfig.setSessionTimeout(temp.getSessionConfig().getSessionTimeout().toString());
        }
    }
    if (sessionConfig.getCookieName() == null) {
        for (WebXml fragment : fragments) {
            String value = fragment.getSessionConfig().getCookieName();
            if (value != null) {
                if (temp.getSessionConfig().getCookieName() == null) {
                    temp.getSessionConfig().setCookieName(value);
                } else if (value.equals(temp.getSessionConfig().getCookieName())) {
                    // Fragments use same value - no conflict
                } else {
                    log.error(sm.getString("webXml.mergeConflictSessionCookieName", fragment.getName(), fragment.getURL()));
                    return false;
                }
            }
        }
        sessionConfig.setCookieName(temp.getSessionConfig().getCookieName());
    }
    Map<String, String> mainAttributes = getSessionConfig().getCookieAttributes();
    Map<String, String> mergedFragmentAttributes = new TreeMap<>(String.CASE_INSENSITIVE_ORDER);
    for (WebXml fragment : fragments) {
        for (Map.Entry<String, String> attribute : fragment.getSessionConfig().getCookieAttributes().entrySet()) {
            // Skip any attribute in a fragment that is defined in the main web.xml
            if (!mainAttributes.containsKey(attribute.getKey())) {
                if (mergedFragmentAttributes.containsKey(attribute.getKey())) {
                    // Attribute has already been seen.
                    // If values are the same, NO-OP. If they are different
                    // trigger a merge error
                    if (!mergedFragmentAttributes.get(attribute.getKey()).equals(attribute.getValue())) {
                        log.error(sm.getString("webXml.mergeConflictSessionCookieAttributes", fragment.getName(), fragment.getURL()));
                        return false;
                    }
                } else {
                    // First time this attribute has been seen. Add it.
                    mergedFragmentAttributes.put(attribute.getKey(), attribute.getValue());
                }
            }
        }
    }
    mainAttributes.putAll(mergedFragmentAttributes);
    if (sessionConfig.getSessionTrackingModes().size() == 0) {
        for (WebXml fragment : fragments) {
            EnumSet<SessionTrackingMode> value = fragment.getSessionConfig().getSessionTrackingModes();
            if (value.size() > 0) {
                if (temp.getSessionConfig().getSessionTrackingModes().size() == 0) {
                    temp.getSessionConfig().getSessionTrackingModes().addAll(value);
                } else if (value.equals(temp.getSessionConfig().getSessionTrackingModes())) {
                    // Fragments use same value - no conflict
                } else {
                    log.error(sm.getString("webXml.mergeConflictSessionTrackingMode", fragment.getName(), fragment.getURL()));
                    return false;
                }
            }
        }
        sessionConfig.getSessionTrackingModes().addAll(temp.getSessionConfig().getSessionTrackingModes());
    }
    for (WebXml fragment : fragments) {
        if (!mergeMap(fragment.getTaglibs(), taglibs, temp.getTaglibs(), fragment, "Taglibs")) {
            return false;
        }
    }
    taglibs.putAll(temp.getTaglibs());
    for (WebXml fragment : fragments) {
        if (fragment.alwaysAddWelcomeFiles || welcomeFiles.size() == 0) {
            for (String welcomeFile : fragment.getWelcomeFiles()) {
                addWelcomeFile(welcomeFile);
            }
        }
    }
    if (postConstructMethods.isEmpty()) {
        for (WebXml fragment : fragments) {
            if (!mergeLifecycleCallback(fragment.getPostConstructMethods(), temp.getPostConstructMethods(), fragment, "Post Construct Methods")) {
                return false;
            }
        }
        postConstructMethods.putAll(temp.getPostConstructMethods());
    }
    if (preDestroyMethods.isEmpty()) {
        for (WebXml fragment : fragments) {
            if (!mergeLifecycleCallback(fragment.getPreDestroyMethods(), temp.getPreDestroyMethods(), fragment, "Pre Destroy Methods")) {
                return false;
            }
        }
        preDestroyMethods.putAll(temp.getPreDestroyMethods());
    }
    return true;
}`,"org.apache.tomcat.util.descriptor.web.WebXml.mergeMap_Map_Map_Map_WebXml_String":
 `private <T> boolean mergeMap(Map<String, T> fragmentMap, Map<String, T> mainMap, Map<String, T> tempMap, WebXml fragment, String mapName) {
    for (Entry<String, T> entry : fragmentMap.entrySet()) {
        final String key = entry.getKey();
        if (!mainMap.containsKey(key)) {
            // Not defined in main web.xml
            T value = entry.getValue();
            if (tempMap.containsKey(key)) {
                if (value != null && !value.equals(tempMap.get(key))) {
                    log.error(sm.getString("webXml.mergeConflictString", mapName, key, fragment.getName(), fragment.getURL()));
                    return false;
                }
            } else {
                tempMap.put(key, value);
            }
        }
    }
    return true;
}`,"org.apache.tomcat.util.descriptor.web.WebXml.getEnvEntries_":
 `public Map<String, ContextEnvironment> getEnvEntries() {
    return envEntries;
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
        map = new LinkedHashMap<>(LOCALE_CACHE_SIZE, 1, true) {

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
}`,"org.apache.tomcat.util.descriptor.web.WebXml.<init>_":
 ``,"org.apache.tomcat.util.descriptor.web.WebXml.getMessageDestinationRefs_":
 `public Map<String, MessageDestinationRef> getMessageDestinationRefs() {
    return messageDestinationRefs;
}`,"org.apache.tomcat.util.descriptor.web.WebXml.getResponseCharacterEncoding_":
 `public String getResponseCharacterEncoding() {
    return responseCharacterEncoding;
}`,"org.apache.tomcat.util.descriptor.web.WebXml.getTaglibs_":
 `public Map<String, String> getTaglibs() {
    return taglibs;
}`,"org.apache.tomcat.util.descriptor.web.WebXml.getName_":
 `public String getName() {
    return name;
}`,"org.apache.tomcat.util.descriptor.web.SessionConfig.<init>_":
 ``,"org.apache.tomcat.util.descriptor.web.WebXml.getFilters_":
 `public Map<String, FilterDef> getFilters() {
    return filters;
}`,"org.apache.tomcat.util.descriptor.web.TestWebXml.testLifecycleMethodsWebFragmentsWithConflicts_":
 `@Test
public void testLifecycleMethodsWebFragmentsWithConflicts() {
    WebXml webxml = new WebXml();
    WebXml fragment1 = new WebXml();
    fragment1.addPostConstructMethods("a", "a");
    fragment1.addPreDestroyMethods("b", "a");
    WebXml fragment2 = new WebXml();
    fragment2.addPostConstructMethods("a", "b");
    Set<WebXml> fragments = new HashSet<>();
    fragments.add(fragment1);
    fragments.add(fragment2);
    Assert.assertFalse(webxml.merge(fragments));
    Assert.assertEquals(0, webxml.getPostConstructMethods().size());
    WebXml fragment3 = new WebXml();
    fragment3.addPreDestroyMethods("b", "b");
    fragments.remove(fragment2);
    fragments.add(fragment3);
    Assert.assertFalse(webxml.merge(fragments));
    Assert.assertEquals(0, webxml.getPreDestroyMethods().size());
}`,"org.apache.tomcat.util.descriptor.web.WebXml.getSessionConfig_":
 `public SessionConfig getSessionConfig() {
    return sessionConfig;
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
}`,"org.apache.tomcat.util.descriptor.web.SessionConfig.getCookieName_":
 `public String getCookieName() {
    return cookieName;
}`,"org.apache.tomcat.util.descriptor.web.WebXml.getRequestCharacterEncoding_":
 `public String getRequestCharacterEncoding() {
    return requestCharacterEncoding;
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
}`,"org.apache.tomcat.util.descriptor.web.WebXml.getServletMappings_":
 `public Map<String, String> getServletMappings() {
    return servletMappings;
}`,"org.apache.tomcat.util.descriptor.web.SessionConfig.getCookieAttributes_":
 `public Map<String, String> getCookieAttributes() {
    return cookieAttributes;
}`,"org.apache.tomcat.util.descriptor.web.WebXml.getErrorPages_":
 `public Map<String, ErrorPage> getErrorPages() {
    return errorPages;
}`,"org.apache.tomcat.util.descriptor.web.SessionConfig.getSessionTrackingModes_":
 `public EnumSet<SessionTrackingMode> getSessionTrackingModes() {
    return sessionTrackingModes;
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
}`,"org.apache.tomcat.util.descriptor.web.WebXml.getMimeMappings_":
 `public Map<String, String> getMimeMappings() {
    return mimeMappings;
}`,"org.apache.tomcat.util.descriptor.web.WebXml.mergeResourceMap_Map_Map_Map_WebXml":
 `private <T extends ResourceBase> boolean mergeResourceMap(Map<String, T> fragmentResources, Map<String, T> mainResources, Map<String, T> tempResources, WebXml fragment) {
    for (T resource : fragmentResources.values()) {
        String resourceName = resource.getName();
        if (mainResources.containsKey(resourceName)) {
            mainResources.get(resourceName).getInjectionTargets().addAll(resource.getInjectionTargets());
        } else {
            // Not defined in main web.xml
            T existingResource = tempResources.get(resourceName);
            if (existingResource != null) {
                if (!existingResource.equals(resource)) {
                    log.error(sm.getString("webXml.mergeConflictResource", resourceName, fragment.getName(), fragment.getURL()));
                    return false;
                }
            } else {
                tempResources.put(resourceName, resource);
            }
        }
    }
    return true;
}`,"org.apache.tomcat.util.descriptor.web.WebXml.getPostConstructMethods_":
 `public Map<String, String> getPostConstructMethods() {
    return postConstructMethods;
}`,"org.apache.tomcat.util.descriptor.web.WebXml.addPostConstructMethods_String_String":
 `public void addPostConstructMethods(String clazz, String method) {
    if (!postConstructMethods.containsKey(clazz)) {
        postConstructMethods.put(clazz, method);
    }
}`,"org.apache.tomcat.util.descriptor.web.WebXml.getPreDestroyMethods_":
 `public Map<String, String> getPreDestroyMethods() {
    return preDestroyMethods;
}`,"org.apache.tomcat.util.descriptor.web.WebXml.getFilterMappings_":
 `public Set<FilterMap> getFilterMappings() {
    return filterMaps;
}`,"jakarta.servlet.SessionTrackingMode.<init>_":
 ``,"org.apache.tomcat.util.res.StringManager.<init>_String_Locale":
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
}`,"org.apache.tomcat.util.descriptor.web.WebXml.getListeners_":
 `public Set<String> getListeners() {
    return listeners;
}`,"org.apache.tomcat.util.descriptor.web.WebXml.getResourceEnvRefs_":
 `public Map<String, ContextResourceEnvRef> getResourceEnvRefs() {
    return resourceEnvRefs;
}`,"org.apache.tomcat.util.descriptor.web.WebXml.getSecurityConstraints_":
 `public Set<SecurityConstraint> getSecurityConstraints() {
    return securityConstraints;
}`,},
};
var treeData = [
{
  "call" : "org.apache.tomcat.util.descriptor.web.TestWebXml#testLifecycleMethodsWebFragmentsWithConflicts",
  "kiekerPattern" : "public void org.apache.tomcat.util.descriptor.web.TestWebXml.testLifecycleMethodsWebFragmentsWithConflicts()",
  "otherKiekerPattern" : null,
  "module" : "",
  "name" : "org.apache.tomcat.util.descriptor.web.TestWebXml#testLifecycleMethodsWebFragmentsWithConflicts",
  "key" : "org.apache.tomcat.util.descriptor.web.TestWebXml.testLifecycleMethodsWebFragmentsWithConflicts_",
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
    "call" : "org.apache.tomcat.util.res.StringManager#getManager",
    "kiekerPattern" : "public static final org.apache.tomcat.util.res.StringManager org.apache.tomcat.util.res.StringManager.getManager(java.lang.String)",
    "otherKiekerPattern" : null,
    "module" : "",
    "name" : "org.apache.tomcat.util.res.StringManager#getManager",
    "key" : "org.apache.tomcat.util.res.StringManager.getManager_String",
    "otherKey" : null,
    "parent" : "org.apache.tomcat.util.descriptor.web.TestWebXml#testLifecycleMethodsWebFragmentsWithConflicts",
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
      "ess" : 2,
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
        "ess" : 3,
        "children" : [ ]
      } ]
    } ]
  }, {
    "call" : "org.apache.tomcat.util.descriptor.web.XmlEncodingBase#<init>",
    "kiekerPattern" : "public new org.apache.tomcat.util.descriptor.web.XmlEncodingBase.<init>()",
    "otherKiekerPattern" : null,
    "module" : "",
    "name" : "org.apache.tomcat.util.descriptor.web.XmlEncodingBase#<init>",
    "key" : "org.apache.tomcat.util.descriptor.web.XmlEncodingBase.<init>_",
    "otherKey" : null,
    "parent" : "org.apache.tomcat.util.descriptor.web.TestWebXml#testLifecycleMethodsWebFragmentsWithConflicts",
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
    "name" : "org.apache.juli.logging.LogFactory#<init>",
    "key" : "org.apache.juli.logging.LogFactory.<init>_",
    "otherKey" : null,
    "parent" : "org.apache.tomcat.util.descriptor.web.TestWebXml#testLifecycleMethodsWebFragmentsWithConflicts",
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
    "name" : "org.apache.juli.logging.LogFactory#getLog",
    "key" : "org.apache.juli.logging.LogFactory.getLog_Class",
    "otherKey" : null,
    "parent" : "org.apache.tomcat.util.descriptor.web.TestWebXml#testLifecycleMethodsWebFragmentsWithConflicts",
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
    "call" : "jakarta.servlet.SessionTrackingMode#<init>",
    "kiekerPattern" : "public new jakarta.servlet.SessionTrackingMode.<init>()",
    "otherKiekerPattern" : null,
    "module" : "",
    "name" : "jakarta.servlet.SessionTrackingMode#<init>",
    "key" : "jakarta.servlet.SessionTrackingMode.<init>_",
    "otherKey" : null,
    "parent" : "org.apache.tomcat.util.descriptor.web.TestWebXml#testLifecycleMethodsWebFragmentsWithConflicts",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.apache.tomcat.util.descriptor.web.SessionConfig#<init>",
    "kiekerPattern" : "public new org.apache.tomcat.util.descriptor.web.SessionConfig.<init>()",
    "otherKiekerPattern" : null,
    "module" : "",
    "name" : "org.apache.tomcat.util.descriptor.web.SessionConfig#<init>",
    "key" : "org.apache.tomcat.util.descriptor.web.SessionConfig.<init>_",
    "otherKey" : null,
    "parent" : "org.apache.tomcat.util.descriptor.web.TestWebXml#testLifecycleMethodsWebFragmentsWithConflicts",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.apache.tomcat.util.descriptor.web.WebXml#<init>",
    "kiekerPattern" : "public new org.apache.tomcat.util.descriptor.web.WebXml.<init>()",
    "otherKiekerPattern" : null,
    "module" : "",
    "name" : "org.apache.tomcat.util.descriptor.web.WebXml#<init>",
    "key" : "org.apache.tomcat.util.descriptor.web.WebXml.<init>_",
    "otherKey" : null,
    "parent" : "org.apache.tomcat.util.descriptor.web.TestWebXml#testLifecycleMethodsWebFragmentsWithConflicts",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.apache.tomcat.util.descriptor.web.WebXml#addPostConstructMethods",
    "kiekerPattern" : "public void org.apache.tomcat.util.descriptor.web.WebXml.addPostConstructMethods(java.lang.String,java.lang.String)",
    "otherKiekerPattern" : null,
    "module" : "",
    "name" : "org.apache.tomcat.util.descriptor.web.WebXml#addPostConstructMethods",
    "key" : "org.apache.tomcat.util.descriptor.web.WebXml.addPostConstructMethods_String_String",
    "otherKey" : null,
    "parent" : "org.apache.tomcat.util.descriptor.web.TestWebXml#testLifecycleMethodsWebFragmentsWithConflicts",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.apache.tomcat.util.descriptor.web.WebXml#addPreDestroyMethods",
    "kiekerPattern" : "public void org.apache.tomcat.util.descriptor.web.WebXml.addPreDestroyMethods(java.lang.String,java.lang.String)",
    "otherKiekerPattern" : null,
    "module" : "",
    "name" : "org.apache.tomcat.util.descriptor.web.WebXml#addPreDestroyMethods",
    "key" : "org.apache.tomcat.util.descriptor.web.WebXml.addPreDestroyMethods_String_String",
    "otherKey" : null,
    "parent" : "org.apache.tomcat.util.descriptor.web.TestWebXml#testLifecycleMethodsWebFragmentsWithConflicts",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.apache.tomcat.util.descriptor.web.WebXml#merge",
    "kiekerPattern" : "public boolean org.apache.tomcat.util.descriptor.web.WebXml.merge(java.util.Set)",
    "otherKiekerPattern" : null,
    "module" : "",
    "name" : "org.apache.tomcat.util.descriptor.web.WebXml#merge",
    "key" : "org.apache.tomcat.util.descriptor.web.WebXml.merge_Set",
    "otherKey" : null,
    "parent" : "org.apache.tomcat.util.descriptor.web.TestWebXml#testLifecycleMethodsWebFragmentsWithConflicts",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ {
      "call" : "org.apache.tomcat.util.descriptor.web.XmlEncodingBase#<init>",
      "kiekerPattern" : "public new org.apache.tomcat.util.descriptor.web.XmlEncodingBase.<init>()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "org.apache.tomcat.util.descriptor.web.XmlEncodingBase#<init>",
      "key" : "org.apache.tomcat.util.descriptor.web.XmlEncodingBase.<init>_",
      "otherKey" : null,
      "parent" : "org.apache.tomcat.util.descriptor.web.WebXml#merge",
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
      "parent" : "org.apache.tomcat.util.descriptor.web.WebXml#merge",
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
      "call" : "org.apache.tomcat.util.descriptor.web.SessionConfig#<init>",
      "kiekerPattern" : "public new org.apache.tomcat.util.descriptor.web.SessionConfig.<init>()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "org.apache.tomcat.util.descriptor.web.SessionConfig#<init>",
      "key" : "org.apache.tomcat.util.descriptor.web.SessionConfig.<init>_",
      "otherKey" : null,
      "parent" : "org.apache.tomcat.util.descriptor.web.WebXml#merge",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.apache.tomcat.util.descriptor.web.WebXml#<init>",
      "kiekerPattern" : "public new org.apache.tomcat.util.descriptor.web.WebXml.<init>()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "org.apache.tomcat.util.descriptor.web.WebXml#<init>",
      "key" : "org.apache.tomcat.util.descriptor.web.WebXml.<init>_",
      "otherKey" : null,
      "parent" : "org.apache.tomcat.util.descriptor.web.WebXml#merge",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.apache.tomcat.util.descriptor.web.WebXml#getContextParams",
      "kiekerPattern" : "public java.util.Map org.apache.tomcat.util.descriptor.web.WebXml.getContextParams()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "org.apache.tomcat.util.descriptor.web.WebXml#getContextParams",
      "key" : "org.apache.tomcat.util.descriptor.web.WebXml.getContextParams_",
      "otherKey" : null,
      "parent" : "org.apache.tomcat.util.descriptor.web.WebXml#merge",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.apache.tomcat.util.descriptor.web.WebXml#mergeMap",
      "kiekerPattern" : "private boolean org.apache.tomcat.util.descriptor.web.WebXml.mergeMap(java.util.Map,java.util.Map,java.util.Map,org.apache.tomcat.util.descriptor.web.WebXml,java.lang.String)",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "org.apache.tomcat.util.descriptor.web.WebXml#mergeMap",
      "key" : "org.apache.tomcat.util.descriptor.web.WebXml.mergeMap_Map_Map_Map_WebXml_String",
      "otherKey" : null,
      "parent" : "org.apache.tomcat.util.descriptor.web.WebXml#merge",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.apache.tomcat.util.descriptor.web.WebXml#getDisplayName",
      "kiekerPattern" : "public java.lang.String org.apache.tomcat.util.descriptor.web.WebXml.getDisplayName()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "org.apache.tomcat.util.descriptor.web.WebXml#getDisplayName",
      "key" : "org.apache.tomcat.util.descriptor.web.WebXml.getDisplayName_",
      "otherKey" : null,
      "parent" : "org.apache.tomcat.util.descriptor.web.WebXml#merge",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.apache.tomcat.util.descriptor.web.WebXml#getDenyUncoveredHttpMethods",
      "kiekerPattern" : "public boolean org.apache.tomcat.util.descriptor.web.WebXml.getDenyUncoveredHttpMethods()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "org.apache.tomcat.util.descriptor.web.WebXml#getDenyUncoveredHttpMethods",
      "key" : "org.apache.tomcat.util.descriptor.web.WebXml.getDenyUncoveredHttpMethods_",
      "otherKey" : null,
      "parent" : "org.apache.tomcat.util.descriptor.web.WebXml#merge",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.apache.tomcat.util.descriptor.web.WebXml#getRequestCharacterEncoding",
      "kiekerPattern" : "public java.lang.String org.apache.tomcat.util.descriptor.web.WebXml.getRequestCharacterEncoding()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "org.apache.tomcat.util.descriptor.web.WebXml#getRequestCharacterEncoding",
      "key" : "org.apache.tomcat.util.descriptor.web.WebXml.getRequestCharacterEncoding_",
      "otherKey" : null,
      "parent" : "org.apache.tomcat.util.descriptor.web.WebXml#merge",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.apache.tomcat.util.descriptor.web.WebXml#getResponseCharacterEncoding",
      "kiekerPattern" : "public java.lang.String org.apache.tomcat.util.descriptor.web.WebXml.getResponseCharacterEncoding()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "org.apache.tomcat.util.descriptor.web.WebXml#getResponseCharacterEncoding",
      "key" : "org.apache.tomcat.util.descriptor.web.WebXml.getResponseCharacterEncoding_",
      "otherKey" : null,
      "parent" : "org.apache.tomcat.util.descriptor.web.WebXml#merge",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.apache.tomcat.util.descriptor.web.WebXml#getEjbLocalRefs",
      "kiekerPattern" : "public java.util.Map org.apache.tomcat.util.descriptor.web.WebXml.getEjbLocalRefs()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "org.apache.tomcat.util.descriptor.web.WebXml#getEjbLocalRefs",
      "key" : "org.apache.tomcat.util.descriptor.web.WebXml.getEjbLocalRefs_",
      "otherKey" : null,
      "parent" : "org.apache.tomcat.util.descriptor.web.WebXml#merge",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.apache.tomcat.util.descriptor.web.WebXml#mergeResourceMap",
      "kiekerPattern" : "private boolean org.apache.tomcat.util.descriptor.web.WebXml.mergeResourceMap(java.util.Map,java.util.Map,java.util.Map,org.apache.tomcat.util.descriptor.web.WebXml)",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "org.apache.tomcat.util.descriptor.web.WebXml#mergeResourceMap",
      "key" : "org.apache.tomcat.util.descriptor.web.WebXml.mergeResourceMap_Map_Map_Map_WebXml",
      "otherKey" : null,
      "parent" : "org.apache.tomcat.util.descriptor.web.WebXml#merge",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.apache.tomcat.util.descriptor.web.WebXml#getEjbRefs",
      "kiekerPattern" : "public java.util.Map org.apache.tomcat.util.descriptor.web.WebXml.getEjbRefs()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "org.apache.tomcat.util.descriptor.web.WebXml#getEjbRefs",
      "key" : "org.apache.tomcat.util.descriptor.web.WebXml.getEjbRefs_",
      "otherKey" : null,
      "parent" : "org.apache.tomcat.util.descriptor.web.WebXml#merge",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.apache.tomcat.util.descriptor.web.WebXml#getEnvEntries",
      "kiekerPattern" : "public java.util.Map org.apache.tomcat.util.descriptor.web.WebXml.getEnvEntries()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "org.apache.tomcat.util.descriptor.web.WebXml#getEnvEntries",
      "key" : "org.apache.tomcat.util.descriptor.web.WebXml.getEnvEntries_",
      "otherKey" : null,
      "parent" : "org.apache.tomcat.util.descriptor.web.WebXml#merge",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.apache.tomcat.util.descriptor.web.WebXml#getErrorPages",
      "kiekerPattern" : "public java.util.Map org.apache.tomcat.util.descriptor.web.WebXml.getErrorPages()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "org.apache.tomcat.util.descriptor.web.WebXml#getErrorPages",
      "key" : "org.apache.tomcat.util.descriptor.web.WebXml.getErrorPages_",
      "otherKey" : null,
      "parent" : "org.apache.tomcat.util.descriptor.web.WebXml#merge",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.apache.tomcat.util.descriptor.web.WebXml#getFilterMappings",
      "kiekerPattern" : "public java.util.Set org.apache.tomcat.util.descriptor.web.WebXml.getFilterMappings()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "org.apache.tomcat.util.descriptor.web.WebXml#getFilterMappings",
      "key" : "org.apache.tomcat.util.descriptor.web.WebXml.getFilterMappings_",
      "otherKey" : null,
      "parent" : "org.apache.tomcat.util.descriptor.web.WebXml#merge",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.apache.tomcat.util.descriptor.web.WebXml#getFilters",
      "kiekerPattern" : "public java.util.Map org.apache.tomcat.util.descriptor.web.WebXml.getFilters()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "org.apache.tomcat.util.descriptor.web.WebXml#getFilters",
      "key" : "org.apache.tomcat.util.descriptor.web.WebXml.getFilters_",
      "otherKey" : null,
      "parent" : "org.apache.tomcat.util.descriptor.web.WebXml#merge",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.apache.tomcat.util.descriptor.web.WebXml#getJspPropertyGroups",
      "kiekerPattern" : "public java.util.Set org.apache.tomcat.util.descriptor.web.WebXml.getJspPropertyGroups()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "org.apache.tomcat.util.descriptor.web.WebXml#getJspPropertyGroups",
      "key" : "org.apache.tomcat.util.descriptor.web.WebXml.getJspPropertyGroups_",
      "otherKey" : null,
      "parent" : "org.apache.tomcat.util.descriptor.web.WebXml#merge",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.apache.tomcat.util.descriptor.web.WebXml#getListeners",
      "kiekerPattern" : "public java.util.Set org.apache.tomcat.util.descriptor.web.WebXml.getListeners()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "org.apache.tomcat.util.descriptor.web.WebXml#getListeners",
      "key" : "org.apache.tomcat.util.descriptor.web.WebXml.getListeners_",
      "otherKey" : null,
      "parent" : "org.apache.tomcat.util.descriptor.web.WebXml#merge",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.apache.tomcat.util.descriptor.web.WebXml#getLocaleEncodingMappings",
      "kiekerPattern" : "public java.util.Map org.apache.tomcat.util.descriptor.web.WebXml.getLocaleEncodingMappings()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "org.apache.tomcat.util.descriptor.web.WebXml#getLocaleEncodingMappings",
      "key" : "org.apache.tomcat.util.descriptor.web.WebXml.getLocaleEncodingMappings_",
      "otherKey" : null,
      "parent" : "org.apache.tomcat.util.descriptor.web.WebXml#merge",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.apache.tomcat.util.descriptor.web.WebXml#getLoginConfig",
      "kiekerPattern" : "public org.apache.tomcat.util.descriptor.web.LoginConfig org.apache.tomcat.util.descriptor.web.WebXml.getLoginConfig()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "org.apache.tomcat.util.descriptor.web.WebXml#getLoginConfig",
      "key" : "org.apache.tomcat.util.descriptor.web.WebXml.getLoginConfig_",
      "otherKey" : null,
      "parent" : "org.apache.tomcat.util.descriptor.web.WebXml#merge",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.apache.tomcat.util.descriptor.web.WebXml#getMessageDestinationRefs",
      "kiekerPattern" : "public java.util.Map org.apache.tomcat.util.descriptor.web.WebXml.getMessageDestinationRefs()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "org.apache.tomcat.util.descriptor.web.WebXml#getMessageDestinationRefs",
      "key" : "org.apache.tomcat.util.descriptor.web.WebXml.getMessageDestinationRefs_",
      "otherKey" : null,
      "parent" : "org.apache.tomcat.util.descriptor.web.WebXml#merge",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.apache.tomcat.util.descriptor.web.WebXml#getMessageDestinations",
      "kiekerPattern" : "public java.util.Map org.apache.tomcat.util.descriptor.web.WebXml.getMessageDestinations()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "org.apache.tomcat.util.descriptor.web.WebXml#getMessageDestinations",
      "key" : "org.apache.tomcat.util.descriptor.web.WebXml.getMessageDestinations_",
      "otherKey" : null,
      "parent" : "org.apache.tomcat.util.descriptor.web.WebXml#merge",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.apache.tomcat.util.descriptor.web.WebXml#getMimeMappings",
      "kiekerPattern" : "public java.util.Map org.apache.tomcat.util.descriptor.web.WebXml.getMimeMappings()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "org.apache.tomcat.util.descriptor.web.WebXml#getMimeMappings",
      "key" : "org.apache.tomcat.util.descriptor.web.WebXml.getMimeMappings_",
      "otherKey" : null,
      "parent" : "org.apache.tomcat.util.descriptor.web.WebXml#merge",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.apache.tomcat.util.descriptor.web.WebXml#getResourceEnvRefs",
      "kiekerPattern" : "public java.util.Map org.apache.tomcat.util.descriptor.web.WebXml.getResourceEnvRefs()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "org.apache.tomcat.util.descriptor.web.WebXml#getResourceEnvRefs",
      "key" : "org.apache.tomcat.util.descriptor.web.WebXml.getResourceEnvRefs_",
      "otherKey" : null,
      "parent" : "org.apache.tomcat.util.descriptor.web.WebXml#merge",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.apache.tomcat.util.descriptor.web.WebXml#getResourceRefs",
      "kiekerPattern" : "public java.util.Map org.apache.tomcat.util.descriptor.web.WebXml.getResourceRefs()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "org.apache.tomcat.util.descriptor.web.WebXml#getResourceRefs",
      "key" : "org.apache.tomcat.util.descriptor.web.WebXml.getResourceRefs_",
      "otherKey" : null,
      "parent" : "org.apache.tomcat.util.descriptor.web.WebXml#merge",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.apache.tomcat.util.descriptor.web.WebXml#getSecurityConstraints",
      "kiekerPattern" : "public java.util.Set org.apache.tomcat.util.descriptor.web.WebXml.getSecurityConstraints()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "org.apache.tomcat.util.descriptor.web.WebXml#getSecurityConstraints",
      "key" : "org.apache.tomcat.util.descriptor.web.WebXml.getSecurityConstraints_",
      "otherKey" : null,
      "parent" : "org.apache.tomcat.util.descriptor.web.WebXml#merge",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.apache.tomcat.util.descriptor.web.WebXml#getSecurityRoles",
      "kiekerPattern" : "public java.util.Set org.apache.tomcat.util.descriptor.web.WebXml.getSecurityRoles()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "org.apache.tomcat.util.descriptor.web.WebXml#getSecurityRoles",
      "key" : "org.apache.tomcat.util.descriptor.web.WebXml.getSecurityRoles_",
      "otherKey" : null,
      "parent" : "org.apache.tomcat.util.descriptor.web.WebXml#merge",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.apache.tomcat.util.descriptor.web.WebXml#getServiceRefs",
      "kiekerPattern" : "public java.util.Map org.apache.tomcat.util.descriptor.web.WebXml.getServiceRefs()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "org.apache.tomcat.util.descriptor.web.WebXml#getServiceRefs",
      "key" : "org.apache.tomcat.util.descriptor.web.WebXml.getServiceRefs_",
      "otherKey" : null,
      "parent" : "org.apache.tomcat.util.descriptor.web.WebXml#merge",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.apache.tomcat.util.descriptor.web.WebXml#getServletMappings",
      "kiekerPattern" : "public java.util.Map org.apache.tomcat.util.descriptor.web.WebXml.getServletMappings()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "org.apache.tomcat.util.descriptor.web.WebXml#getServletMappings",
      "key" : "org.apache.tomcat.util.descriptor.web.WebXml.getServletMappings_",
      "otherKey" : null,
      "parent" : "org.apache.tomcat.util.descriptor.web.WebXml#merge",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.apache.tomcat.util.descriptor.web.WebXml#getServlets",
      "kiekerPattern" : "public java.util.Map org.apache.tomcat.util.descriptor.web.WebXml.getServlets()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "org.apache.tomcat.util.descriptor.web.WebXml#getServlets",
      "key" : "org.apache.tomcat.util.descriptor.web.WebXml.getServlets_",
      "otherKey" : null,
      "parent" : "org.apache.tomcat.util.descriptor.web.WebXml#merge",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.apache.tomcat.util.descriptor.web.SessionConfig#getSessionTimeout",
      "kiekerPattern" : "public java.lang.Integer org.apache.tomcat.util.descriptor.web.SessionConfig.getSessionTimeout()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "org.apache.tomcat.util.descriptor.web.SessionConfig#getSessionTimeout",
      "key" : "org.apache.tomcat.util.descriptor.web.SessionConfig.getSessionTimeout_",
      "otherKey" : null,
      "parent" : "org.apache.tomcat.util.descriptor.web.WebXml#merge",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.apache.tomcat.util.descriptor.web.WebXml#getSessionConfig",
      "kiekerPattern" : "public org.apache.tomcat.util.descriptor.web.SessionConfig org.apache.tomcat.util.descriptor.web.WebXml.getSessionConfig()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "org.apache.tomcat.util.descriptor.web.WebXml#getSessionConfig",
      "key" : "org.apache.tomcat.util.descriptor.web.WebXml.getSessionConfig_",
      "otherKey" : null,
      "parent" : "org.apache.tomcat.util.descriptor.web.WebXml#merge",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.apache.tomcat.util.descriptor.web.SessionConfig#getCookieName",
      "kiekerPattern" : "public java.lang.String org.apache.tomcat.util.descriptor.web.SessionConfig.getCookieName()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "org.apache.tomcat.util.descriptor.web.SessionConfig#getCookieName",
      "key" : "org.apache.tomcat.util.descriptor.web.SessionConfig.getCookieName_",
      "otherKey" : null,
      "parent" : "org.apache.tomcat.util.descriptor.web.WebXml#merge",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.apache.tomcat.util.descriptor.web.SessionConfig#setCookieName",
      "kiekerPattern" : "public void org.apache.tomcat.util.descriptor.web.SessionConfig.setCookieName(java.lang.String)",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "org.apache.tomcat.util.descriptor.web.SessionConfig#setCookieName",
      "key" : "org.apache.tomcat.util.descriptor.web.SessionConfig.setCookieName_String",
      "otherKey" : null,
      "parent" : "org.apache.tomcat.util.descriptor.web.WebXml#merge",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.apache.tomcat.util.descriptor.web.SessionConfig#getCookieAttributes",
      "kiekerPattern" : "public java.util.Map org.apache.tomcat.util.descriptor.web.SessionConfig.getCookieAttributes()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "org.apache.tomcat.util.descriptor.web.SessionConfig#getCookieAttributes",
      "key" : "org.apache.tomcat.util.descriptor.web.SessionConfig.getCookieAttributes_",
      "otherKey" : null,
      "parent" : "org.apache.tomcat.util.descriptor.web.WebXml#merge",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.apache.tomcat.util.descriptor.web.SessionConfig#getSessionTrackingModes",
      "kiekerPattern" : "public java.util.EnumSet org.apache.tomcat.util.descriptor.web.SessionConfig.getSessionTrackingModes()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "org.apache.tomcat.util.descriptor.web.SessionConfig#getSessionTrackingModes",
      "key" : "org.apache.tomcat.util.descriptor.web.SessionConfig.getSessionTrackingModes_",
      "otherKey" : null,
      "parent" : "org.apache.tomcat.util.descriptor.web.WebXml#merge",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.apache.tomcat.util.descriptor.web.WebXml#getTaglibs",
      "kiekerPattern" : "public java.util.Map org.apache.tomcat.util.descriptor.web.WebXml.getTaglibs()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "org.apache.tomcat.util.descriptor.web.WebXml#getTaglibs",
      "key" : "org.apache.tomcat.util.descriptor.web.WebXml.getTaglibs_",
      "otherKey" : null,
      "parent" : "org.apache.tomcat.util.descriptor.web.WebXml#merge",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.apache.tomcat.util.descriptor.web.WebXml#getWelcomeFiles",
      "kiekerPattern" : "public java.util.Set org.apache.tomcat.util.descriptor.web.WebXml.getWelcomeFiles()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "org.apache.tomcat.util.descriptor.web.WebXml#getWelcomeFiles",
      "key" : "org.apache.tomcat.util.descriptor.web.WebXml.getWelcomeFiles_",
      "otherKey" : null,
      "parent" : "org.apache.tomcat.util.descriptor.web.WebXml#merge",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.apache.tomcat.util.descriptor.web.WebXml#getPostConstructMethods",
      "kiekerPattern" : "public java.util.Map org.apache.tomcat.util.descriptor.web.WebXml.getPostConstructMethods()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "org.apache.tomcat.util.descriptor.web.WebXml#getPostConstructMethods",
      "key" : "org.apache.tomcat.util.descriptor.web.WebXml.getPostConstructMethods_",
      "otherKey" : null,
      "parent" : "org.apache.tomcat.util.descriptor.web.WebXml#merge",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.apache.tomcat.util.descriptor.web.WebXml#mergeLifecycleCallback",
      "kiekerPattern" : "private boolean org.apache.tomcat.util.descriptor.web.WebXml.mergeLifecycleCallback(java.util.Map,java.util.Map,org.apache.tomcat.util.descriptor.web.WebXml,java.lang.String)",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "org.apache.tomcat.util.descriptor.web.WebXml#mergeLifecycleCallback",
      "key" : "org.apache.tomcat.util.descriptor.web.WebXml.mergeLifecycleCallback_Map_Map_WebXml_String",
      "otherKey" : null,
      "parent" : "org.apache.tomcat.util.descriptor.web.WebXml#merge",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.apache.tomcat.util.descriptor.web.WebXml#getName",
        "kiekerPattern" : "public java.lang.String org.apache.tomcat.util.descriptor.web.WebXml.getName()",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "org.apache.tomcat.util.descriptor.web.WebXml#getName",
        "key" : "org.apache.tomcat.util.descriptor.web.WebXml.getName_",
        "otherKey" : null,
        "parent" : "org.apache.tomcat.util.descriptor.web.WebXml#mergeLifecycleCallback",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.apache.tomcat.util.descriptor.web.WebXml#getURL",
        "kiekerPattern" : "public java.net.URL org.apache.tomcat.util.descriptor.web.WebXml.getURL()",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "org.apache.tomcat.util.descriptor.web.WebXml#getURL",
        "key" : "org.apache.tomcat.util.descriptor.web.WebXml.getURL_",
        "otherKey" : null,
        "parent" : "org.apache.tomcat.util.descriptor.web.WebXml#mergeLifecycleCallback",
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
        "parent" : "org.apache.tomcat.util.descriptor.web.WebXml#mergeLifecycleCallback",
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
        } ]
      }, {
        "call" : "org.apache.juli.logging.DirectJDKLog#error",
        "kiekerPattern" : "public final void org.apache.juli.logging.DirectJDKLog.error(java.lang.Object)",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "org.apache.juli.logging.DirectJDKLog#error",
        "key" : "org.apache.juli.logging.DirectJDKLog.error_Object",
        "otherKey" : null,
        "parent" : "org.apache.tomcat.util.descriptor.web.WebXml#mergeLifecycleCallback",
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
          "parent" : "org.apache.juli.logging.DirectJDKLog#error",
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
      "call" : "org.apache.tomcat.util.descriptor.web.WebXml#getPreDestroyMethods",
      "kiekerPattern" : "public java.util.Map org.apache.tomcat.util.descriptor.web.WebXml.getPreDestroyMethods()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "org.apache.tomcat.util.descriptor.web.WebXml#getPreDestroyMethods",
      "key" : "org.apache.tomcat.util.descriptor.web.WebXml.getPreDestroyMethods_",
      "otherKey" : null,
      "parent" : "org.apache.tomcat.util.descriptor.web.WebXml#merge",
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
    "call" : "org.apache.tomcat.util.descriptor.web.WebXml#getPostConstructMethods",
    "kiekerPattern" : "public java.util.Map org.apache.tomcat.util.descriptor.web.WebXml.getPostConstructMethods()",
    "otherKiekerPattern" : null,
    "module" : "",
    "name" : "org.apache.tomcat.util.descriptor.web.WebXml#getPostConstructMethods",
    "key" : "org.apache.tomcat.util.descriptor.web.WebXml.getPostConstructMethods_",
    "otherKey" : null,
    "parent" : "org.apache.tomcat.util.descriptor.web.TestWebXml#testLifecycleMethodsWebFragmentsWithConflicts",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.apache.tomcat.util.descriptor.web.WebXml#getPreDestroyMethods",
    "kiekerPattern" : "public java.util.Map org.apache.tomcat.util.descriptor.web.WebXml.getPreDestroyMethods()",
    "otherKiekerPattern" : null,
    "module" : "",
    "name" : "org.apache.tomcat.util.descriptor.web.WebXml#getPreDestroyMethods",
    "key" : "org.apache.tomcat.util.descriptor.web.WebXml.getPreDestroyMethods_",
    "otherKey" : null,
    "parent" : "org.apache.tomcat.util.descriptor.web.TestWebXml#testLifecycleMethodsWebFragmentsWithConflicts",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  } ]
}];
// ************** Generate the tree diagram   *****************
var margin = {top: 20, right: 120, bottom: 20, left: 658},
   width = 2996- margin.right - margin.left,
   height = 3080 - margin.top - margin.bottom;
