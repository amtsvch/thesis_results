if (document.getElementById('testcaseDiv') != null) { 
   document.getElementById('testcaseDiv').innerHTML="Commit: <a href='javascript:fallbackCopyTextToClipboard(\"-commit 6b8aeaf80860dd48d5ddd44e866fea5d6072ded3 -test org.apache.catalina.core.TestApplicationSessionCookieConfig#testSetCommentInitPhase\")'>6b8aeaf80860dd48d5ddd44e866fea5d6072ded3</a><br>Test Case: org.apache.catalina.core.TestApplicationSessionCookieConfig#testSetCommentInitPhase<br>";
}

var source = {"current":
{
 "org.apache.catalina.core.TestApplicationSessionCookieConfig$CustomContext.setState_LifecycleState":
 `@Override
public synchronized void setState(LifecycleState state) {
    this.state = state;
}`,"org.apache.catalina.core.ApplicationSessionCookieConfig.getComment_":
 `@Override
public String getComment() {
    return comment;
}`,"org.apache.catalina.core.TestApplicationSessionCookieConfig.testSetCommentInitPhase_":
 `@Test
public void testSetCommentInitPhase() {
    context.setState(LifecycleState.STARTING_PREP);
    applicationSessionCookieConfig.setComment("test");
    Assert.assertTrue(applicationSessionCookieConfig.getComment().equals("test"));
}`,"org.apache.catalina.core.ApplicationSessionCookieConfig.setComment_String":
 `@Override
public void setComment(String comment) {
    if (!context.getState().equals(LifecycleState.STARTING_PREP)) {
        throw new IllegalStateException(sm.getString("applicationSessionCookieConfig.ise", "comment", context.getPath()));
    }
    this.comment = comment;
}`,"org.apache.catalina.core.TestApplicationSessionCookieConfig$CustomContext.getState_":
 `@Override
public LifecycleState getState() {
    return state;
}`,},
};
var treeData = [
{
  "call" : "org.apache.catalina.core.TestApplicationSessionCookieConfig#testSetCommentInitPhase",
  "kiekerPattern" : "public void org.apache.catalina.core.TestApplicationSessionCookieConfig.testSetCommentInitPhase()",
  "otherKiekerPattern" : null,
  "module" : "",
  "name" : "TestApplicationSessionCookieConfig#testSetCommentInitPhase",
  "key" : "org.apache.catalina.core.TestApplicationSessionCookieConfig.testSetCommentInitPhase_",
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
    "call" : "org.apache.catalina.core.TestApplicationSessionCookieConfig$CustomContext#setState",
    "kiekerPattern" : "public synchronized void org.apache.catalina.core.TestApplicationSessionCookieConfig$CustomContext.setState(org.apache.catalina.LifecycleState)",
    "otherKiekerPattern" : null,
    "module" : "",
    "name" : "TestApplicationSessionCookieConfig$CustomContext#setState",
    "key" : "org.apache.catalina.core.TestApplicationSessionCookieConfig$CustomContext.setState_LifecycleState",
    "otherKey" : null,
    "parent" : "org.apache.catalina.core.TestApplicationSessionCookieConfig#testSetCommentInitPhase",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.apache.catalina.core.ApplicationSessionCookieConfig#setComment",
    "kiekerPattern" : "public void org.apache.catalina.core.ApplicationSessionCookieConfig.setComment(java.lang.String)",
    "otherKiekerPattern" : null,
    "module" : "",
    "name" : "ApplicationSessionCookieConfig#setComment",
    "key" : "org.apache.catalina.core.ApplicationSessionCookieConfig.setComment_String",
    "otherKey" : null,
    "parent" : "org.apache.catalina.core.TestApplicationSessionCookieConfig#testSetCommentInitPhase",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ {
      "call" : "org.apache.catalina.core.TestApplicationSessionCookieConfig$CustomContext#getState",
      "kiekerPattern" : "public org.apache.catalina.LifecycleState org.apache.catalina.core.TestApplicationSessionCookieConfig$CustomContext.getState()",
      "otherKiekerPattern" : null,
      "module" : "",
      "name" : "TestApplicationSessionCookieConfig$CustomContext#getState",
      "key" : "org.apache.catalina.core.TestApplicationSessionCookieConfig$CustomContext.getState_",
      "otherKey" : null,
      "parent" : "org.apache.catalina.core.ApplicationSessionCookieConfig#setComment",
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
    "call" : "org.apache.catalina.core.ApplicationSessionCookieConfig#getComment",
    "kiekerPattern" : "public java.lang.String org.apache.catalina.core.ApplicationSessionCookieConfig.getComment()",
    "otherKiekerPattern" : null,
    "module" : "",
    "name" : "ApplicationSessionCookieConfig#getComment",
    "key" : "org.apache.catalina.core.ApplicationSessionCookieConfig.getComment_",
    "otherKey" : null,
    "parent" : "org.apache.catalina.core.TestApplicationSessionCookieConfig#testSetCommentInitPhase",
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
var margin = {top: 20, right: 120, bottom: 20, left: 406},
   width = 1797- margin.right - margin.left,
   height = 245 - margin.top - margin.bottom;
