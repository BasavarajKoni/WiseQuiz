wiseQuiz.controller("listCtrl", ListController);

		ListController.$inject = ['quizMetrics','DataService'];

		function ListController(quizMetrics,DataService){
			var vm = this; 
			
			vm.quizMetrics = quizMetrics;
			vm.data = DataService.turtlesData;
			vm.activeTurtle ={};
			vm.changeActiveTurtle = changeActiveTurtle;
			vm.activateQuiz = activateQuiz;
			vm.search  = "";
			//vm.quizActive = false;

			function changeActiveTurtle(index){
				vm.activeTurtle = index;
			}

			function activateQuiz(){
				quizMetrics.changeState("quiz", true);
			}

		}