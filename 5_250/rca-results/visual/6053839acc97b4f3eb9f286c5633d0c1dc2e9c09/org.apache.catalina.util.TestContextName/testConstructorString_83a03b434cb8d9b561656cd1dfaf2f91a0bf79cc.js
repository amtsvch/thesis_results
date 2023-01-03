if (document.getElementById('testcaseDiv') != null) { 
   document.getElementById('testcaseDiv').innerHTML="Commit: <a href='javascript:fallbackCopyTextToClipboard(\"-commit 6053839acc97b4f3eb9f286c5633d0c1dc2e9c09 -test org.apache.catalina.util.TestContextName#testConstructorString\")'>6053839acc97b4f3eb9f286c5633d0c1dc2e9c09</a><br>Test Case: org.apache.catalina.util.TestContextName#testConstructorString<br>";
}

var source = {"current":
{
 "org.apache.catalina.util.ContextName.getVersion_":
 `public String getVersion() {
    return version;
}`,"org.apache.catalina.util.TestContextName.testConstructorString_":
 `@Test
public void testConstructorString() {
    doTestConstructorString(cn1);
    doTestConstructorString(cn2);
    doTestConstructorString(cn3);
    doTestConstructorString(cn4);
    doTestConstructorString(cn5);
    doTestConstructorString(cn6);
    doTestConstructorString(cn7);
    doTestConstructorString(cn8);
    doTestConstructorString(cn9);
    doTestConstructorString(cn10);
    doTestConstructorString(cn11);
    doTestConstructorString(cn12);
    doTestConstructorString(cn13);
    doTestConstructorString(cn14);
    doTestConstructorString(cn15);
    doTestConstructorString(cn16);
    doTestConstructorString(cn17);
    doTestConstructorString(cn18);
    doTestConstructorString(cn19);
    doTestConstructorString(cn20);
    doTestConstructorString(cn21);
    doTestConstructorString(cn22);
}`,"org.apache.catalina.util.ContextName.getDisplayName_":
 `public String getDisplayName() {
    StringBuilder tmp = new StringBuilder();
    if ("".equals(path)) {
        tmp.append('/');
    } else {
        tmp.append(path);
    }
    if (!"".equals(version)) {
        tmp.append(VERSION_MARKER);
        tmp.append(version);
    }
    return tmp.toString();
}`,"org.apache.catalina.util.ContextName.getBaseName_":
 `public String getBaseName() {
    return baseName;
}`,"org.apache.catalina.util.ContextName.<init>_String_boolean":
 `/**
 * Creates an instance from a context name, display name, base name,
 * directory name, WAR name or context.xml name.
 *
 * @param name  The name to use as the basis for this object
 * @param stripFileExtension    If a .war or .xml file extension is present
 *                              at the end of the provided name should it be
 *                              removed?
 */
public ContextName(String name, boolean stripFileExtension) {
    String tmp1 = name;
    // Convert Context names and display names to base names
    // Strip off any leading "/"
    if (tmp1.startsWith("/")) {
        tmp1 = tmp1.substring(1);
    }
    // Replace any remaining /
    tmp1 = tmp1.replaceAll("/", FWD_SLASH_REPLACEMENT);
    // Insert the ROOT name if required
    if (tmp1.startsWith(VERSION_MARKER) || "".equals(tmp1)) {
        tmp1 = ROOT_NAME + tmp1;
    }
    // Remove any file extensions
    if (stripFileExtension && (tmp1.toLowerCase(Locale.ENGLISH).endsWith(".war") || tmp1.toLowerCase(Locale.ENGLISH).endsWith(".xml"))) {
        tmp1 = tmp1.substring(0, tmp1.length() - 4);
    }
    baseName = tmp1;
    String tmp2;
    // Extract version number
    int versionIndex = baseName.indexOf(VERSION_MARKER);
    if (versionIndex > -1) {
        version = baseName.substring(versionIndex + 2);
        tmp2 = baseName.substring(0, versionIndex);
    } else {
        version = "";
        tmp2 = baseName;
    }
    if (ROOT_NAME.equals(tmp2)) {
        path = "";
    } else {
        path = "/" + tmp2.replaceAll(FWD_SLASH_REPLACEMENT, "/");
    }
    if (versionIndex > -1) {
        this.name = path + VERSION_MARKER + version;
    } else {
        this.name = path;
    }
}`,"org.apache.catalina.util.TestContextName.doCompare_TestContextName_TestContextName":
 ``,"org.apache.catalina.util.ContextName.getPath_":
 `public String getPath() {
    return path;
}`,"org.apache.catalina.util.TestContextName.doTestConstructorString_TestContextName":
 ``,"org.apache.catalina.util.ContextName.getName_":
 `public String getName() {
    return name;
}`,},
};
var treeData = [
{
  "call" : "org.apache.catalina.util.TestContextName#testConstructorString",
  "kiekerPattern" : "public void org.apache.catalina.util.TestContextName.testConstructorString()",
  "otherKiekerPattern" : null,
  "module" : "",
  "name" : "TestContextName#testConstructorString",
  "key" : "org.apache.catalina.util.TestContextName.testConstructorString_",
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
    "call" : "org.apache.catalina.util.TestContextName#doTestConstructorString",
    "kiekerPattern" : "private void org.apache.catalina.util.TestContextName.doTestConstructorString(org.apache.catalina.util.TestContextName)",
    "otherKiekerPattern" : null,
    "module" : "",
    "name" : "TestContextName#doTestConstructorString",
    "key" : "org.apache.catalina.util.TestContextName.doTestConstructorString_TestContextName",
    "otherKey" : null,
    "parent" : "org.apache.catalina.util.TestContextName#testConstructorString",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ {
      "call" : "org.apache.catalina.util.ContextName#getBaseName",
      "kiekerPattern" : "public java.lang.String org.apache.catalina.util.ContextName.getBaseName()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "ContextName#getBaseName",
      "key" : "org.apache.catalina.util.ContextName.getBaseName_",
      "otherKey" : null,
      "parent" : "org.apache.catalina.util.TestContextName#doTestConstructorString",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.apache.catalina.util.ContextName#<init>",
      "kiekerPattern" : "public new org.apache.catalina.util.ContextName.<init>(java.lang.String,boolean)",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "ContextName#<init>",
      "key" : "org.apache.catalina.util.ContextName.<init>_String_boolean",
      "otherKey" : null,
      "parent" : "org.apache.catalina.util.TestContextName#doTestConstructorString",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.apache.catalina.util.TestContextName#doCompare",
      "kiekerPattern" : "private void org.apache.catalina.util.TestContextName.doCompare(org.apache.catalina.util.TestContextName,org.apache.catalina.util.TestContextName)",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "TestContextName#doCompare",
      "key" : "org.apache.catalina.util.TestContextName.doCompare_TestContextName_TestContextName",
      "otherKey" : null,
      "parent" : "org.apache.catalina.util.TestContextName#doTestConstructorString",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.apache.catalina.util.ContextName#getBaseName",
        "kiekerPattern" : "public java.lang.String org.apache.catalina.util.ContextName.getBaseName()",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "ContextName#getBaseName",
        "key" : "org.apache.catalina.util.ContextName.getBaseName_",
        "otherKey" : null,
        "parent" : "org.apache.catalina.util.TestContextName#doCompare",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.apache.catalina.util.ContextName#getDisplayName",
        "kiekerPattern" : "public java.lang.String org.apache.catalina.util.ContextName.getDisplayName()",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "ContextName#getDisplayName",
        "key" : "org.apache.catalina.util.ContextName.getDisplayName_",
        "otherKey" : null,
        "parent" : "org.apache.catalina.util.TestContextName#doCompare",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.apache.catalina.util.ContextName#getName",
        "kiekerPattern" : "public java.lang.String org.apache.catalina.util.ContextName.getName()",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "ContextName#getName",
        "key" : "org.apache.catalina.util.ContextName.getName_",
        "otherKey" : null,
        "parent" : "org.apache.catalina.util.TestContextName#doCompare",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.apache.catalina.util.ContextName#getPath",
        "kiekerPattern" : "public java.lang.String org.apache.catalina.util.ContextName.getPath()",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "ContextName#getPath",
        "key" : "org.apache.catalina.util.ContextName.getPath_",
        "otherKey" : null,
        "parent" : "org.apache.catalina.util.TestContextName#doCompare",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.apache.catalina.util.ContextName#getVersion",
        "kiekerPattern" : "public java.lang.String org.apache.catalina.util.ContextName.getVersion()",
        "otherKiekerPattern" : null,
        "module" : "",
        "name" : "ContextName#getVersion",
        "key" : "org.apache.catalina.util.ContextName.getVersion_",
        "otherKey" : null,
        "parent" : "org.apache.catalina.util.TestContextName#doCompare",
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
      "call" : "org.apache.catalina.util.ContextName#getDisplayName",
      "kiekerPattern" : "public java.lang.String org.apache.catalina.util.ContextName.getDisplayName()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "ContextName#getDisplayName",
      "key" : "org.apache.catalina.util.ContextName.getDisplayName_",
      "otherKey" : null,
      "parent" : "org.apache.catalina.util.TestContextName#doTestConstructorString",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.apache.catalina.util.ContextName#getName",
      "kiekerPattern" : "public java.lang.String org.apache.catalina.util.ContextName.getName()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "ContextName#getName",
      "key" : "org.apache.catalina.util.ContextName.getName_",
      "otherKey" : null,
      "parent" : "org.apache.catalina.util.TestContextName#doTestConstructorString",
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
var margin = {top: 20, right: 120, bottom: 20, left: 259},
   width = 1829- margin.right - margin.left,
   height = 525 - margin.top - margin.bottom;
