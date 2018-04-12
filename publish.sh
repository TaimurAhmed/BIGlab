rm index.zip 
cd lambda
cd custom 
zip -r -X index.zip *
mv index.zip ../../index.zip
cd ..
cd .. 
aws lambda update-function-code --function-name historyMonkey --zip-file fileb://index.zip