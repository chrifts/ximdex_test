# Ximdex Test
**Clone the project** 

    git clone https://github.com/chrifts/ximdex_test.git
# Back end test:
**Steps to execute this program**

*Require PHP version > 5.6
Require a CSV previously well formated (Column order may change), example:*

    PRODUCT;CATEGORY;COST;QUANTITY
    0001002;mobile;643,50€;10
    0011002;car;21.000.643€;1
    0001002;mobile;643,5€;5
    0001002;stickers;0,05€;1.000

*Require a JSON previously well formated with the formulas, example:*
  

    {
    	"categories": {
    		"car" : "+12%",
    		"outlet": "-1%",
    		"bargain": "+5%+1€",
    		"home": "+3€-1%",
    		"music": "+3.1%",
    		"mobile": "+12€",
    		"*": "+20%"
    	}
    }

**to run, execute in terminal:** 

    cd <this_project_folder>/back-end/
    php init.php <path/to/data.csv> <path/to/formulas.json>

Example:
	

    cd ~/Downloads/ximdex_test/back-end
    php init.php ~/Documents/data.csv ~/Documents/formulas.json

# Front end test:
Open the file `index.html` in `./front/build`with any explorer
## or, 
run with npm (require Node installed)

    cd ./front
    npm install
    npm start
