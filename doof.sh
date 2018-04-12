#!/bin/bash
#script for not having to tediously type out ask simulate bla bla

# Loop until all parameters are used up
while [ "$1" != "" ]; do
    foo="$foo $1"
    # Shift all the parameters down by one
    shift

done

ask simulate -t \""$foo"\"


