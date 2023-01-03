if (document.getElementById('testcaseDiv') != null) { 
   document.getElementById('testcaseDiv').innerHTML="Commit: <a href='javascript:fallbackCopyTextToClipboard(\"-commit 43581c6908745c7d4cfa232ac45e22c37009e0d2 -test org.apache.tomcat.util.file.TestConfigFileLoader#test01\")'>43581c6908745c7d4cfa232ac45e22c37009e0d2</a><br>Test Case: org.apache.tomcat.util.file.TestConfigFileLoader#test01<br>";
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
}`,"org.apache.tomcat.util.file.TestConfigFileLoader.doTest_String":
 `private void doTest(String path) throws IOException {
    try (InputStream is = ConfigFileLoader.getSource().getResource(path).getInputStream()) {
        Assert.assertNotNull(is);
    }
}`,"org.apache.catalina.webresources.TomcatURLStreamHandlerFactory.createURLStreamHandler_String":
 `@Override
public URLStreamHandler createURLStreamHandler(String protocol) {
    // Tomcat's handler always takes priority so applications can't override
    // it.
    if (WAR_PROTOCOL.equals(protocol)) {
        return new Handler();
    } else if (CLASSPATH_PROTOCOL.equals(protocol)) {
        return new ClasspathURLStreamHandler();
    }
    // Application handlers
    for (URLStreamHandlerFactory factory : userFactories) {
        URLStreamHandler handler = factory.createURLStreamHandler(protocol);
        if (handler != null) {
            return handler;
        }
    }
    // Unknown protocol
    return null;
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
}`,"org.apache.catalina.startup.CatalinaBaseConfigurationSource.getURIInternal_String":
 `private URI getURIInternal(String name) {
    // Then try URI.
    // Using resolve() enables the code to handle relative paths that did
    // not point to a file
    URI uri;
    if (catalinaBaseUri != null) {
        uri = catalinaBaseUri.resolve(name);
    } else {
        uri = URI.create(name);
    }
    return uri;
}`,"org.apache.catalina.webresources.ClasspathURLStreamHandler.<init>_":
 ``,"org.apache.tomcat.util.file.ConfigurationSource$Resource.<init>_ConfigurationSource_InputStream_URI":
 `public Resource(InputStream inputStream, URI uri) {
    this.inputStream = inputStream;
    this.uri = uri;
}`,"org.apache.tomcat.util.file.ConfigFileLoader.getSource_":
 `/**
 * Get the configured configuration source. If none has been configured,
 * a default source based on the calling directory will be used.
 * @return the configuration source in use
 */
public static final ConfigurationSource getSource() {
    if (ConfigFileLoader.source == null) {
        return ConfigurationSource.DEFAULT;
    }
    return source;
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
}`,"org.apache.catalina.webresources.ClasspathURLStreamHandler.openConnection_URL":
 `@Override
protected URLConnection openConnection(URL u) throws IOException {
    String path = u.getPath();
    // Thread context class loader first
    URL classpathUrl = Thread.currentThread().getContextClassLoader().getResource(path);
    if (classpathUrl == null) {
        // This class's class loader if no joy with the tccl
        classpathUrl = ClasspathURLStreamHandler.class.getResource(path);
    }
    if (classpathUrl == null) {
        throw new FileNotFoundException(sm.getString("classpathUrlStreamHandler.notFound", u));
    }
    return classpathUrl.openConnection();
}`,"org.apache.catalina.startup.CatalinaBaseConfigurationSource.getResource_String":
 `@Override
public Resource getResource(String name) throws IOException {
    // Location was originally always a file before URI support was added so
    // try file first.
    File f = new File(name);
    if (!f.isAbsolute()) {
        f = new File(catalinaBaseFile, name);
    }
    if (f.isFile()) {
        FileInputStream fis = new FileInputStream(f);
        return new Resource(fis, f.toURI());
    }
    // Try classloader
    InputStream stream = null;
    try {
        stream = getClass().getClassLoader().getResourceAsStream(name);
        if (stream != null) {
            return new Resource(stream, getClass().getClassLoader().getResource(name).toURI());
        }
    } catch (InvalidPathException e) {
        // Ignore. Some valid file URIs can trigger this.
        // Stream should be null here but check to be on the safe side.
        if (stream != null) {
            stream.close();
        }
    } catch (URISyntaxException e) {
        stream.close();
        throw new IOException(sm.getString("catalinaConfigurationSource.cannotObtainURL", name), e);
    }
    // Then try URI.
    URI uri = null;
    try {
        uri = getURIInternal(name);
    } catch (IllegalArgumentException e) {
        throw new IOException(sm.getString("catalinaConfigurationSource.cannotObtainURL", name), e);
    }
    // Obtain the input stream we need
    try {
        URL url = uri.toURL();
        return new Resource(url.openConnection().getInputStream(), uri);
    } catch (MalformedURLException e) {
        throw new IOException(sm.getString("catalinaConfigurationSource.cannotObtainURL", name), e);
    }
}`,"org.apache.tomcat.util.file.TestConfigFileLoader.test01_":
 `@Test
public void test01() throws IOException {
    doTest("classpath:org/apache/catalina/mbeans-descriptors.xml");
}`,"org.apache.tomcat.util.file.ConfigurationSource$Resource.getInputStream_":
 `public InputStream getInputStream() {
    return inputStream;
}`,},
};
var treeData = [
{
  "call" : "org.apache.tomcat.util.file.TestConfigFileLoader#test01",
  "kiekerPattern" : "public void org.apache.tomcat.util.file.TestConfigFileLoader.test01()",
  "otherKiekerPattern" : null,
  "module" : "",
  "name" : "tomcat.util.file.TestConfigFileLoader#test01",
  "key" : "org.apache.tomcat.util.file.TestConfigFileLoader.test01_",
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
    "call" : "org.apache.tomcat.util.file.TestConfigFileLoader#doTest",
    "kiekerPattern" : "private void org.apache.tomcat.util.file.TestConfigFileLoader.doTest(java.lang.String)",
    "otherKiekerPattern" : null,
    "module" : "",
    "name" : "tomcat.util.file.TestConfigFileLoader#doTest",
    "key" : "org.apache.tomcat.util.file.TestConfigFileLoader.doTest_String",
    "otherKey" : null,
    "parent" : "org.apache.tomcat.util.file.TestConfigFileLoader#test01",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ {
      "call" : "org.apache.tomcat.util.file.ConfigFileLoader#getSource",
      "kiekerPattern" : "public static final org.apache.tomcat.util.file.ConfigurationSource org.apache.tomcat.util.file.ConfigFileLoader.getSource()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "tomcat.util.file.ConfigFileLoader#getSource",
      "key" : "org.apache.tomcat.util.file.ConfigFileLoader.getSource_",
      "otherKey" : null,
      "parent" : "org.apache.tomcat.util.file.TestConfigFileLoader#doTest",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.apache.catalina.startup.CatalinaBaseConfigurationSource#getResource",
      "kiekerPattern" : "public org.apache.catalina.startup.Resource org.apache.catalina.startup.CatalinaBaseConfigurationSource.getResource(java.lang.String)",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "catalina.startup.CatalinaBaseConfigurationSource#getResource",
      "key" : "org.apache.catalina.startup.CatalinaBaseConfigurationSource.getResource_String",
      "otherKey" : null,
      "parent" : "org.apache.tomcat.util.file.TestConfigFileLoader#doTest",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.apache.catalina.webresources.TomcatURLStreamHandlerFactory#createURLStreamHandler",
        "kiekerPattern" : "public java.net.URLStreamHandler org.apache.catalina.webresources.TomcatURLStreamHandlerFactory.createURLStreamHandler(java.lang.String)",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "catalina.webresources.TomcatURLStreamHandlerFactory#createURLStreamHandler",
        "key" : "org.apache.catalina.webresources.TomcatURLStreamHandlerFactory.createURLStreamHandler_String",
        "otherKey" : null,
        "parent" : "org.apache.catalina.startup.CatalinaBaseConfigurationSource#getResource",
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
          "parent" : "org.apache.catalina.webresources.TomcatURLStreamHandlerFactory#createURLStreamHandler",
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
          "call" : "org.apache.catalina.webresources.ClasspathURLStreamHandler#<init>",
          "kiekerPattern" : "public new org.apache.catalina.webresources.ClasspathURLStreamHandler.<init>()",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "catalina.webresources.ClasspathURLStreamHandler#<init>",
          "key" : "org.apache.catalina.webresources.ClasspathURLStreamHandler.<init>_",
          "otherKey" : null,
          "parent" : "org.apache.catalina.webresources.TomcatURLStreamHandlerFactory#createURLStreamHandler",
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
        "call" : "org.apache.catalina.startup.CatalinaBaseConfigurationSource#getURIInternal",
        "kiekerPattern" : "private java.net.URI org.apache.catalina.startup.CatalinaBaseConfigurationSource.getURIInternal(java.lang.String)",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "catalina.startup.CatalinaBaseConfigurationSource#getURIInternal",
        "key" : "org.apache.catalina.startup.CatalinaBaseConfigurationSource.getURIInternal_String",
        "otherKey" : null,
        "parent" : "org.apache.catalina.startup.CatalinaBaseConfigurationSource#getResource",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.apache.catalina.webresources.ClasspathURLStreamHandler#openConnection",
        "kiekerPattern" : "protected java.net.URLConnection org.apache.catalina.webresources.ClasspathURLStreamHandler.openConnection(java.net.URL)",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "catalina.webresources.ClasspathURLStreamHandler#openConnection",
        "key" : "org.apache.catalina.webresources.ClasspathURLStreamHandler.openConnection_URL",
        "otherKey" : null,
        "parent" : "org.apache.catalina.startup.CatalinaBaseConfigurationSource#getResource",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.apache.tomcat.util.file.ConfigurationSource$Resource#<init>",
        "kiekerPattern" : "public new org.apache.tomcat.util.file.ConfigurationSource$Resource.<init>(org.apache.tomcat.util.file.ConfigurationSource,java.io.InputStream,java.net.URI)",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "tomcat.util.file.ConfigurationSource$Resource#<init>",
        "key" : "org.apache.tomcat.util.file.ConfigurationSource$Resource.<init>_ConfigurationSource_InputStream_URI",
        "otherKey" : null,
        "parent" : "org.apache.catalina.startup.CatalinaBaseConfigurationSource#getResource",
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
      "call" : "org.apache.tomcat.util.file.ConfigurationSource$Resource#getInputStream",
      "kiekerPattern" : "public java.io.InputStream org.apache.tomcat.util.file.ConfigurationSource$Resource.getInputStream()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "tomcat.util.file.ConfigurationSource$Resource#getInputStream",
      "key" : "org.apache.tomcat.util.file.ConfigurationSource$Resource.getInputStream_",
      "otherKey" : null,
      "parent" : "org.apache.tomcat.util.file.TestConfigFileLoader#doTest",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    } ]
  } ]
}];
// ************** Generate the tree diagram   *****************
var margin = {top: 20, right: 120, bottom: 20, left: 308},
   width = 3742- margin.right - margin.left,
   height = 490 - margin.top - margin.bottom;
