if (document.getElementById('testcaseDiv') != null) { 
   document.getElementById('testcaseDiv').innerHTML="Commit: <a href='javascript:fallbackCopyTextToClipboard(\"-commit a9aa71ec61aca7b5e750bde1042c1bbd5d10c7ac -test org.apache.tomcat.util.http.TestResponseUtil#testMimeHeadersAddAllWithNone\")'>a9aa71ec61aca7b5e750bde1042c1bbd5d10c7ac</a><br>Test Case: org.apache.tomcat.util.http.TestResponseUtil#testMimeHeadersAddAllWithNone<br>";
}

var source = {"current":
{
 "org.apache.tomcat.util.http.MimeHeaders.values_String":
 `public Enumeration<String> values(String name) {
    return new ValuesEnumerator(this, name);
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
}`,"org.apache.tomcat.util.http.MimeHeaders.getHeader_String":
 `// bad shortcut - it'll convert to string ( too early probably,
// encoding is guessed very late )
public String getHeader(String name) {
    MessageBytes mh = getValue(name);
    return mh != null ? mh.toString() : null;
}`,"org.apache.tomcat.util.http.MimeHeaderField.getName_":
 ``,"org.apache.tomcat.util.http.MimeHeaders.size_":
 `// -------------------- Idx access to headers ----------
/**
 * @return the current number of header fields.
 */
public int size() {
    return count;
}`,"org.apache.tomcat.util.http.ResponseUtil.addVaryFieldName_MimeHeaders_String":
 `public static void addVaryFieldName(MimeHeaders headers, String name) {
    addVaryFieldName(new HeaderAdapter(headers), name);
}`,"org.apache.tomcat.util.http.ResponseUtil$HeaderAdapter.<init>_MimeHeaders":
 `public HeaderAdapter(MimeHeaders headers) {
    this.headers = headers;
}`,"org.apache.tomcat.util.http.ResponseUtil$HeaderAdapter.addHeader_String_String":
 `@Override
public void addHeader(String name, String value) {
    headers.addValue(name).setString(value);
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
}`,"org.apache.tomcat.util.http.ValuesEnumerator.<init>_MimeHeaders_String":
 ``,"org.apache.tomcat.util.buf.MessageBytes.newInstance_":
 `/**
 * Construct a new MessageBytes instance.
 * @return the instance
 */
public static MessageBytes newInstance() {
    return factory.newInstance();
}`,"org.apache.tomcat.util.http.TestResponseUtil.testMimeHeadersAddAllWithNone_":
 `@Test
public void testMimeHeadersAddAllWithNone() {
    MimeHeaders mh = new MimeHeaders();
    List<String> expected = new ArrayList<>();
    expected.add("*");
    doTestAddVaryFieldName(mh, "*", expected);
}`,"org.apache.tomcat.util.buf.MessageBytes$MessageBytesFactory.<init>_":
 `protected MessageBytesFactory() {
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
}`,"org.apache.tomcat.util.buf.MessageBytes.<init>_":
 `/**
 * Creates a new, uninitialized MessageBytes object.
 * Use static newInstance() in order to allow
 *   future hooks.
 */
private MessageBytes() {
}`,"org.apache.tomcat.util.http.MimeHeaderField.getValue_":
 ``,"org.apache.tomcat.util.buf.ByteChunk.<init>_":
 `/**
 * Creates a new, uninitialized ByteChunk object.
 */
public ByteChunk() {
}`,"org.apache.tomcat.util.buf.CharChunk.<init>_":
 `/**
 * Creates a new, uninitialized CharChunk object.
 */
public CharChunk() {
}`,"org.apache.tomcat.util.buf.AbstractChunk.<init>_":
 ``,"org.apache.tomcat.util.buf.MessageBytes$MessageBytesFactory.newInstance_":
 `public MessageBytes newInstance() {
    return new MessageBytes();
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
}`,"org.apache.tomcat.util.http.TestResponseUtil.doTestAddVaryFieldName_MimeHeaders_String_List":
 `private void doTestAddVaryFieldName(MimeHeaders mh, String fieldName, List<String> expected) {
    ResponseUtil.addVaryFieldName(mh, fieldName);
    // There will now only be one Vary header
    String resultHeader = mh.getHeader("vary");
    List<String> result = new ArrayList<>();
    // Deliberately do not use Vary.parseVary as it will skip invalid values.
    for (String value : resultHeader.split(",")) {
        result.add(value.trim());
    }
    Assert.assertEquals(expected, result);
}`,"org.apache.tomcat.util.http.MimeHeaderField.<init>_":
 ``,"org.apache.tomcat.util.res.StringManager.getManager_String_Locale":
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
}`,"org.apache.tomcat.util.http.ResponseUtil$HeaderAdapter.getHeaders_String":
 `@Override
public Collection<String> getHeaders(String name) {
    Enumeration<String> values = headers.values(name);
    List<String> result = new ArrayList<>();
    while (values.hasMoreElements()) {
        result.add(values.nextElement());
    }
    return result;
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
}`,"org.apache.tomcat.util.http.ValuesEnumerator.hasMoreElements_":
 ``,"org.apache.tomcat.util.http.ValuesEnumerator.findNext_":
 ``,"org.apache.tomcat.util.http.ResponseUtil.addVaryFieldName_ResponseUtil$ResponseAdapter_String":
 ``,"org.apache.tomcat.util.http.MimeHeaders.<init>_":
 `/**
 * Creates a new MimeHeaders object using a default buffer size.
 */
public MimeHeaders() {
    // NO-OP
}`,},
};
var treeData = [
{
  "call" : "org.apache.tomcat.util.http.TestResponseUtil#testMimeHeadersAddAllWithNone",
  "kiekerPattern" : "public void org.apache.tomcat.util.http.TestResponseUtil.testMimeHeadersAddAllWithNone()",
  "otherKiekerPattern" : null,
  "module" : "",
  "name" : "http.TestResponseUtil#testMimeHeadersAddAllWithNone",
  "key" : "org.apache.tomcat.util.http.TestResponseUtil.testMimeHeadersAddAllWithNone_",
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
    "name" : "res.StringManager#getManager",
    "key" : "org.apache.tomcat.util.res.StringManager.getManager_String",
    "otherKey" : null,
    "parent" : "org.apache.tomcat.util.http.TestResponseUtil#testMimeHeadersAddAllWithNone",
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
      "name" : "res.StringManager#getManager",
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
        "name" : "res.StringManager#<init>",
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
    "call" : "org.apache.tomcat.util.http.MimeHeaders#<init>",
    "kiekerPattern" : "public new org.apache.tomcat.util.http.MimeHeaders.<init>()",
    "otherKiekerPattern" : null,
    "module" : "",
    "name" : "http.MimeHeaders#<init>",
    "key" : "org.apache.tomcat.util.http.MimeHeaders.<init>_",
    "otherKey" : null,
    "parent" : "org.apache.tomcat.util.http.TestResponseUtil#testMimeHeadersAddAllWithNone",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.apache.tomcat.util.http.TestResponseUtil#doTestAddVaryFieldName",
    "kiekerPattern" : "private void org.apache.tomcat.util.http.TestResponseUtil.doTestAddVaryFieldName(org.apache.tomcat.util.http.MimeHeaders,java.lang.String,java.util.List)",
    "otherKiekerPattern" : null,
    "module" : "",
    "name" : "http.TestResponseUtil#doTestAddVaryFieldName",
    "key" : "org.apache.tomcat.util.http.TestResponseUtil.doTestAddVaryFieldName_MimeHeaders_String_List",
    "otherKey" : null,
    "parent" : "org.apache.tomcat.util.http.TestResponseUtil#testMimeHeadersAddAllWithNone",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ {
      "call" : "org.apache.tomcat.util.http.ResponseUtil#addVaryFieldName",
      "kiekerPattern" : "public static void org.apache.tomcat.util.http.ResponseUtil.addVaryFieldName(org.apache.tomcat.util.http.MimeHeaders,java.lang.String)",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "http.ResponseUtil#addVaryFieldName",
      "key" : "org.apache.tomcat.util.http.ResponseUtil.addVaryFieldName_MimeHeaders_String",
      "otherKey" : null,
      "parent" : "org.apache.tomcat.util.http.TestResponseUtil#doTestAddVaryFieldName",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.apache.tomcat.util.http.ResponseUtil$HeaderAdapter#<init>",
        "kiekerPattern" : "public new org.apache.tomcat.util.http.ResponseUtil$HeaderAdapter.<init>(org.apache.tomcat.util.http.MimeHeaders)",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "http.ResponseUtil$HeaderAdapter#<init>",
        "key" : "org.apache.tomcat.util.http.ResponseUtil$HeaderAdapter.<init>_MimeHeaders",
        "otherKey" : null,
        "parent" : "org.apache.tomcat.util.http.ResponseUtil#addVaryFieldName",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.apache.tomcat.util.http.ResponseUtil#addVaryFieldName",
        "kiekerPattern" : "private static void org.apache.tomcat.util.http.ResponseUtil.addVaryFieldName(org.apache.tomcat.util.http.ResponseUtil$ResponseAdapter,java.lang.String)",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "http.ResponseUtil#addVaryFieldName",
        "key" : "org.apache.tomcat.util.http.ResponseUtil.addVaryFieldName_ResponseUtil$ResponseAdapter_String",
        "otherKey" : null,
        "parent" : "org.apache.tomcat.util.http.ResponseUtil#addVaryFieldName",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.apache.tomcat.util.http.ResponseUtil$HeaderAdapter#getHeaders",
          "kiekerPattern" : "public java.util.Collection org.apache.tomcat.util.http.ResponseUtil$HeaderAdapter.getHeaders(java.lang.String)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "http.ResponseUtil$HeaderAdapter#getHeaders",
          "key" : "org.apache.tomcat.util.http.ResponseUtil$HeaderAdapter.getHeaders_String",
          "otherKey" : null,
          "parent" : "org.apache.tomcat.util.http.ResponseUtil#addVaryFieldName",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.apache.tomcat.util.http.MimeHeaders#values",
            "kiekerPattern" : "public java.util.Enumeration org.apache.tomcat.util.http.MimeHeaders.values(java.lang.String)",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "http.MimeHeaders#values",
            "key" : "org.apache.tomcat.util.http.MimeHeaders.values_String",
            "otherKey" : null,
            "parent" : "org.apache.tomcat.util.http.ResponseUtil$HeaderAdapter#getHeaders",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ {
              "call" : "org.apache.tomcat.util.http.ValuesEnumerator#<init>",
              "kiekerPattern" : "new org.apache.tomcat.util.http.ValuesEnumerator.<init>(org.apache.tomcat.util.http.MimeHeaders,java.lang.String)",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "http.ValuesEnumerator#<init>",
              "key" : "org.apache.tomcat.util.http.ValuesEnumerator.<init>_MimeHeaders_String",
              "otherKey" : null,
              "parent" : "org.apache.tomcat.util.http.MimeHeaders#values",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ {
                "call" : "org.apache.tomcat.util.http.MimeHeaders#size",
                "kiekerPattern" : "public int org.apache.tomcat.util.http.MimeHeaders.size()",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "http.MimeHeaders#size",
                "key" : "org.apache.tomcat.util.http.MimeHeaders.size_",
                "otherKey" : null,
                "parent" : "org.apache.tomcat.util.http.ValuesEnumerator#<init>",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              }, {
                "call" : "org.apache.tomcat.util.http.ValuesEnumerator#findNext",
                "kiekerPattern" : "private void org.apache.tomcat.util.http.ValuesEnumerator.findNext()",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "http.ValuesEnumerator#findNext",
                "key" : "org.apache.tomcat.util.http.ValuesEnumerator.findNext_",
                "otherKey" : null,
                "parent" : "org.apache.tomcat.util.http.ValuesEnumerator#<init>",
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
            "call" : "org.apache.tomcat.util.http.ValuesEnumerator#hasMoreElements",
            "kiekerPattern" : "public boolean org.apache.tomcat.util.http.ValuesEnumerator.hasMoreElements()",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "http.ValuesEnumerator#hasMoreElements",
            "key" : "org.apache.tomcat.util.http.ValuesEnumerator.hasMoreElements_",
            "otherKey" : null,
            "parent" : "org.apache.tomcat.util.http.ResponseUtil$HeaderAdapter#getHeaders",
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
          "call" : "org.apache.tomcat.util.http.ResponseUtil$HeaderAdapter#addHeader",
          "kiekerPattern" : "public void org.apache.tomcat.util.http.ResponseUtil$HeaderAdapter.addHeader(java.lang.String,java.lang.String)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "http.ResponseUtil$HeaderAdapter#addHeader",
          "key" : "org.apache.tomcat.util.http.ResponseUtil$HeaderAdapter.addHeader_String_String",
          "otherKey" : null,
          "parent" : "org.apache.tomcat.util.http.ResponseUtil#addVaryFieldName",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.apache.tomcat.util.http.MimeHeaders#addValue",
            "kiekerPattern" : "public org.apache.tomcat.util.buf.MessageBytes org.apache.tomcat.util.http.MimeHeaders.addValue(java.lang.String)",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "http.MimeHeaders#addValue",
            "key" : "org.apache.tomcat.util.http.MimeHeaders.addValue_String",
            "otherKey" : null,
            "parent" : "org.apache.tomcat.util.http.ResponseUtil$HeaderAdapter#addHeader",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ {
              "call" : "org.apache.tomcat.util.http.MimeHeaders#createHeader",
              "kiekerPattern" : "private org.apache.tomcat.util.http.MimeHeaderField org.apache.tomcat.util.http.MimeHeaders.createHeader()",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "http.MimeHeaders#createHeader",
              "key" : "org.apache.tomcat.util.http.MimeHeaders.createHeader_",
              "otherKey" : null,
              "parent" : "org.apache.tomcat.util.http.MimeHeaders#addValue",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ {
                "call" : "org.apache.tomcat.util.buf.MessageBytes$MessageBytesFactory#<init>",
                "kiekerPattern" : "protected new org.apache.tomcat.util.buf.MessageBytes$MessageBytesFactory.<init>()",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "buf.MessageBytes$MessageBytesFactory#<init>",
                "key" : "org.apache.tomcat.util.buf.MessageBytes$MessageBytesFactory.<init>_",
                "otherKey" : null,
                "parent" : "org.apache.tomcat.util.http.MimeHeaders#createHeader",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              }, {
                "call" : "org.apache.tomcat.util.buf.MessageBytes#newInstance",
                "kiekerPattern" : "public static org.apache.tomcat.util.buf.MessageBytes org.apache.tomcat.util.buf.MessageBytes.newInstance()",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "buf.MessageBytes#newInstance",
                "key" : "org.apache.tomcat.util.buf.MessageBytes.newInstance_",
                "otherKey" : null,
                "parent" : "org.apache.tomcat.util.http.MimeHeaders#createHeader",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ {
                  "call" : "org.apache.tomcat.util.buf.MessageBytes$MessageBytesFactory#newInstance",
                  "kiekerPattern" : "public org.apache.tomcat.util.buf.MessageBytes org.apache.tomcat.util.buf.MessageBytes$MessageBytesFactory.newInstance()",
                  "otherKiekerPattern" : null,
                  "module" : "",
                  "name" : "buf.MessageBytes$MessageBytesFactory#newInstance",
                  "key" : "org.apache.tomcat.util.buf.MessageBytes$MessageBytesFactory.newInstance_",
                  "otherKey" : null,
                  "parent" : "org.apache.tomcat.util.buf.MessageBytes#newInstance",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ {
                    "call" : "org.apache.tomcat.util.res.StringManager#getManager",
                    "kiekerPattern" : "public static final org.apache.tomcat.util.res.StringManager org.apache.tomcat.util.res.StringManager.getManager(java.lang.Class)",
                    "otherKiekerPattern" : null,
                    "module" : "",
                    "name" : "res.StringManager#getManager",
                    "key" : "org.apache.tomcat.util.res.StringManager.getManager_Class",
                    "otherKey" : null,
                    "parent" : "org.apache.tomcat.util.buf.MessageBytes$MessageBytesFactory#newInstance",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ {
                      "call" : "org.apache.tomcat.util.res.StringManager#getManager",
                      "kiekerPattern" : "public static final org.apache.tomcat.util.res.StringManager org.apache.tomcat.util.res.StringManager.getManager(java.lang.String)",
                      "otherKiekerPattern" : null,
                      "module" : "",
                      "name" : "res.StringManager#getManager",
                      "key" : "org.apache.tomcat.util.res.StringManager.getManager_String",
                      "otherKey" : null,
                      "parent" : "org.apache.tomcat.util.res.StringManager#getManager",
                      "color" : "#FFF",
                      "statistic" : null,
                      "hasSourceChange" : false,
                      "state" : null,
                      "inVMDeviationPredecessor" : 0.0,
                      "inVMDeviation" : 0.0,
                      "ess" : 10,
                      "children" : [ {
                        "call" : "org.apache.tomcat.util.res.StringManager#getManager",
                        "kiekerPattern" : "public static final synchronized org.apache.tomcat.util.res.StringManager org.apache.tomcat.util.res.StringManager.getManager(java.lang.String,java.util.Locale)",
                        "otherKiekerPattern" : null,
                        "module" : "",
                        "name" : "res.StringManager#getManager",
                        "key" : "org.apache.tomcat.util.res.StringManager.getManager_String_Locale",
                        "otherKey" : null,
                        "parent" : "org.apache.tomcat.util.res.StringManager#getManager",
                        "color" : "#FFF",
                        "statistic" : null,
                        "hasSourceChange" : false,
                        "state" : null,
                        "inVMDeviationPredecessor" : 0.0,
                        "inVMDeviation" : 0.0,
                        "ess" : 11,
                        "children" : [ {
                          "call" : "org.apache.tomcat.util.res.StringManager#<init>",
                          "kiekerPattern" : "private new org.apache.tomcat.util.res.StringManager.<init>(java.lang.String,java.util.Locale)",
                          "otherKiekerPattern" : null,
                          "module" : "",
                          "name" : "res.StringManager#<init>",
                          "key" : "org.apache.tomcat.util.res.StringManager.<init>_String_Locale",
                          "otherKey" : null,
                          "parent" : "org.apache.tomcat.util.res.StringManager#getManager",
                          "color" : "#FFF",
                          "statistic" : null,
                          "hasSourceChange" : false,
                          "state" : null,
                          "inVMDeviationPredecessor" : 0.0,
                          "inVMDeviation" : 0.0,
                          "ess" : 12,
                          "children" : [ ]
                        } ]
                      } ]
                    } ]
                  }, {
                    "call" : "org.apache.tomcat.util.buf.AbstractChunk#<init>",
                    "kiekerPattern" : "public new org.apache.tomcat.util.buf.AbstractChunk.<init>()",
                    "otherKiekerPattern" : null,
                    "module" : "",
                    "name" : "buf.AbstractChunk#<init>",
                    "key" : "org.apache.tomcat.util.buf.AbstractChunk.<init>_",
                    "otherKey" : null,
                    "parent" : "org.apache.tomcat.util.buf.MessageBytes$MessageBytesFactory#newInstance",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ ]
                  }, {
                    "call" : "org.apache.tomcat.util.buf.ByteChunk#<init>",
                    "kiekerPattern" : "public new org.apache.tomcat.util.buf.ByteChunk.<init>()",
                    "otherKiekerPattern" : null,
                    "module" : "",
                    "name" : "buf.ByteChunk#<init>",
                    "key" : "org.apache.tomcat.util.buf.ByteChunk.<init>_",
                    "otherKey" : null,
                    "parent" : "org.apache.tomcat.util.buf.MessageBytes$MessageBytesFactory#newInstance",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ ]
                  }, {
                    "call" : "org.apache.tomcat.util.buf.CharChunk#<init>",
                    "kiekerPattern" : "public new org.apache.tomcat.util.buf.CharChunk.<init>()",
                    "otherKiekerPattern" : null,
                    "module" : "",
                    "name" : "buf.CharChunk#<init>",
                    "key" : "org.apache.tomcat.util.buf.CharChunk.<init>_",
                    "otherKey" : null,
                    "parent" : "org.apache.tomcat.util.buf.MessageBytes$MessageBytesFactory#newInstance",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ ]
                  }, {
                    "call" : "org.apache.tomcat.util.buf.MessageBytes#<init>",
                    "kiekerPattern" : "private new org.apache.tomcat.util.buf.MessageBytes.<init>()",
                    "otherKiekerPattern" : null,
                    "module" : "",
                    "name" : "buf.MessageBytes#<init>",
                    "key" : "org.apache.tomcat.util.buf.MessageBytes.<init>_",
                    "otherKey" : null,
                    "parent" : "org.apache.tomcat.util.buf.MessageBytes$MessageBytesFactory#newInstance",
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
                "call" : "org.apache.tomcat.util.http.MimeHeaderField#<init>",
                "kiekerPattern" : "public new org.apache.tomcat.util.http.MimeHeaderField.<init>()",
                "otherKiekerPattern" : null,
                "module" : "",
                "name" : "http.MimeHeaderField#<init>",
                "key" : "org.apache.tomcat.util.http.MimeHeaderField.<init>_",
                "otherKey" : null,
                "parent" : "org.apache.tomcat.util.http.MimeHeaders#createHeader",
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
              "call" : "org.apache.tomcat.util.http.MimeHeaderField#getName",
              "kiekerPattern" : "public org.apache.tomcat.util.buf.MessageBytes org.apache.tomcat.util.http.MimeHeaderField.getName()",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "http.MimeHeaderField#getName",
              "key" : "org.apache.tomcat.util.http.MimeHeaderField.getName_",
              "otherKey" : null,
              "parent" : "org.apache.tomcat.util.http.MimeHeaders#addValue",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            }, {
              "call" : "org.apache.tomcat.util.buf.MessageBytes#setString",
              "kiekerPattern" : "public void org.apache.tomcat.util.buf.MessageBytes.setString(java.lang.String)",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "buf.MessageBytes#setString",
              "key" : "org.apache.tomcat.util.buf.MessageBytes.setString_String",
              "otherKey" : null,
              "parent" : "org.apache.tomcat.util.http.MimeHeaders#addValue",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            }, {
              "call" : "org.apache.tomcat.util.http.MimeHeaderField#getValue",
              "kiekerPattern" : "public org.apache.tomcat.util.buf.MessageBytes org.apache.tomcat.util.http.MimeHeaderField.getValue()",
              "otherKiekerPattern" : null,
              "module" : "",
              "name" : "http.MimeHeaderField#getValue",
              "key" : "org.apache.tomcat.util.http.MimeHeaderField.getValue_",
              "otherKey" : null,
              "parent" : "org.apache.tomcat.util.http.MimeHeaders#addValue",
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
            "call" : "org.apache.tomcat.util.buf.MessageBytes#setString",
            "kiekerPattern" : "public void org.apache.tomcat.util.buf.MessageBytes.setString(java.lang.String)",
            "otherKiekerPattern" : null,
            "module" : "",
            "name" : "buf.MessageBytes#setString",
            "key" : "org.apache.tomcat.util.buf.MessageBytes.setString_String",
            "otherKey" : null,
            "parent" : "org.apache.tomcat.util.http.ResponseUtil$HeaderAdapter#addHeader",
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
      "call" : "org.apache.tomcat.util.http.MimeHeaders#getHeader",
      "kiekerPattern" : "public java.lang.String org.apache.tomcat.util.http.MimeHeaders.getHeader(java.lang.String)",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "http.MimeHeaders#getHeader",
      "key" : "org.apache.tomcat.util.http.MimeHeaders.getHeader_String",
      "otherKey" : null,
      "parent" : "org.apache.tomcat.util.http.TestResponseUtil#doTestAddVaryFieldName",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.apache.tomcat.util.http.MimeHeaders#getValue",
        "kiekerPattern" : "public org.apache.tomcat.util.buf.MessageBytes org.apache.tomcat.util.http.MimeHeaders.getValue(java.lang.String)",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "http.MimeHeaders#getValue",
        "key" : "org.apache.tomcat.util.http.MimeHeaders.getValue_String",
        "otherKey" : null,
        "parent" : "org.apache.tomcat.util.http.MimeHeaders#getHeader",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.apache.tomcat.util.http.MimeHeaderField#getName",
          "kiekerPattern" : "public org.apache.tomcat.util.buf.MessageBytes org.apache.tomcat.util.http.MimeHeaderField.getName()",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "http.MimeHeaderField#getName",
          "key" : "org.apache.tomcat.util.http.MimeHeaderField.getName_",
          "otherKey" : null,
          "parent" : "org.apache.tomcat.util.http.MimeHeaders#getValue",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.tomcat.util.buf.MessageBytes#equalsIgnoreCase",
          "kiekerPattern" : "public boolean org.apache.tomcat.util.buf.MessageBytes.equalsIgnoreCase(java.lang.String)",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "buf.MessageBytes#equalsIgnoreCase",
          "key" : "org.apache.tomcat.util.buf.MessageBytes.equalsIgnoreCase_String",
          "otherKey" : null,
          "parent" : "org.apache.tomcat.util.http.MimeHeaders#getValue",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.apache.tomcat.util.http.MimeHeaderField#getValue",
          "kiekerPattern" : "public org.apache.tomcat.util.buf.MessageBytes org.apache.tomcat.util.http.MimeHeaderField.getValue()",
          "otherKiekerPattern" : null,
          "module" : "",
          "name" : "http.MimeHeaderField#getValue",
          "key" : "org.apache.tomcat.util.http.MimeHeaderField.getValue_",
          "otherKey" : null,
          "parent" : "org.apache.tomcat.util.http.MimeHeaders#getValue",
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
        "call" : "org.apache.tomcat.util.buf.MessageBytes#toString",
        "kiekerPattern" : "public java.lang.String org.apache.tomcat.util.buf.MessageBytes.toString()",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "buf.MessageBytes#toString",
        "key" : "org.apache.tomcat.util.buf.MessageBytes.toString_",
        "otherKey" : null,
        "parent" : "org.apache.tomcat.util.http.MimeHeaders#getHeader",
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
var margin = {top: 20, right: 120, bottom: 20, left: 357},
   width = 5967- margin.right - margin.left,
   height = 875 - margin.top - margin.bottom;
