function analyzeStatistics {
	folder=$1
	
	echo -n "Tests: "
	cat $1/staticTestSelection_*.json | jq ".initialcommit.initialDependencies | keys | length"

	echo -n "Commits (excluding initial): "
	cat $1/staticTestSelection_*.json | jq ".commits | keys | length"

	echo -n "Not running commits: "
	cat $1/staticTestSelection_*.json | jq ".commits" | grep "\"running\": false" | wc -l

	echo -n "Commits containing a Java change: "
	cat $1/staticTestSelection_*.json | jq ".commits[].changedClazzes | select(length > 0) | length" | wc -l

	echo -n "Commits containing a measurable test case: "
	cat $1/traceTestSelection_*.json  | jq ".commits[].testcases | select(length>0) | length" | wc -l
}

function getOverallCommits {
	selectionFile="$project/results/staticTestSelection_*.json"
	commits=$(cat $selectionFile | jq ".commits | keys | length")
	tests=$(cat $selectionFile | jq ".initialcommit.initialDependencies | keys | length")
	notRunning=$(cat $selectionFile | jq ".commits" | grep "\"running\": false" | wc -l)
	commitsWithChange=$(cat $selectionFile | jq ".commits[].changedClazzes | select(length > 0) | length" | wc -l)
	coveredChanges=$(cat $project/results/traceTestSelection_*.json  | jq ".commits[].testcases | select(length>0) | length" | wc -l)
	runsCoverage=$(cat ${project}runCoverage-* | wc -l)
	runsTrace=$(cat ${project}runTrace-* | wc -l)
		
	echo "Tests: $tests Commits: $commits Unausführbar: $notRunning Commits mit Änderung: $commitsWithChange Abgedeckte Änderungen: $coveredChanges Trace Runs: $runsTrace Coverage Runs: $runsCoverage"
	echo
}

for project in ../thesis_results/*/
do
	echo "=============="
	echo "$project"
	analyzeStatistics $project/results
	getOverallCommits	
done

