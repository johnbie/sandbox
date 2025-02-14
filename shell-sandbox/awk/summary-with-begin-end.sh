awk '
	BEGIN{temp_sum=0; total_records=0; print "Begin calculating average temperature."}
	$2=="F"{temp_sum += ($1-32) / 1.8; total_records += 1;}
	$2=="C"{temp_sum += $1; total_records += 1;}
	END{print "Average temperature: "(temp_sum/total_records) C" = "(temp_sum)" / "(total_records)}
' ../datasets/temperatures.csv
# command from https://blog.robertelder.org/intro-to-awk-command/?utm_source=yt&utm_medium=desc&utm_campaign=ytchannel&utm_content=FbSpuZVb164
