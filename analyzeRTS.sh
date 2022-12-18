function analyzeStatistics {
	selectionFile="$project/results/staticTestSelection_*.json"
	
	commits=$(cat $selectionFile | jq ".commits | keys | length")
	tests=$(cat $selectionFile | jq ".initialcommit.initialDependencies | keys | length")
	notRunning=$(cat $selectionFile | jq ".commits" | grep "\"running\": false" | wc -l)
	commitsWithChange=$(cat $selectionFile | jq ".commits[].changedClazzes | select(length > 0) | length" | wc -l)
	coveredChanges=$(cat $project/results/traceTestSelection_*.json  | jq ".commits[].testcases | select(length>0) | length" | wc -l)
	
	runsCoverage=$(cat ${project}runCoverage-* | wc -l)
	runsTrace=$(cat ${project}runTrace-* | wc -l)
	runsTwice=$(cat ${project}runTwice-* | wc -l)
		
	echo "Tests: $tests Commits: $commits notRunning commits: $notRunning"
	echo "Commits containing a Java change: $commitsWithChange Commits containing a measurable test case: $coveredChanges"
	echo "Trace Runs: $runsTrace TwiceExecutable Runs: $runsTwice Coverage Runs: $runsCoverage"
	echo
}

for project in ../thesis_results/*/
do
	echo "=============="
	echo "$project"
	analyzeStatistics	
done

