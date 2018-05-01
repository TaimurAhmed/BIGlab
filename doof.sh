#!/bin/bash
#script for not having to tediously type out ask simulate bla bla

if ["$1" == ""]; then
   ask simulate -t "launch quiz rhino"
   exit 0
fi

# Loop until all parameters are used up
foo="tell quiz rhino "
while [ "$1" != "" ]; do
    foo="$foo $1"
    # Shift all the parameters down by one
    shift

done

ask simulate -t \""$foo"\"
echo foo: "$foo"

