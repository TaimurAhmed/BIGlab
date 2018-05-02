RED=`tput setaf 1`
NC=`tput sgr0` # No Color
ask simulate -t 'launch quiz rhino'
echo "${RED}launch test done${NC}"
ask simulate -t 'tell quiz rhino help'
echo "${RED}help test done${NC}"
ask simulate -t 'tell quiz rhino question'
echo "${RED}question test done${NC}"
ask simulate -t 'tell quiz rhino true'
echo "${RED}answer test done${NC}"