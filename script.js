var l = []
const longString = "0076011101140101010900320105011201150117010900320100011101080111011400320115010501160032009701090101011600440032009100980093003200970100010501120105011500990105011001030032010101080105011600440032011501010100003201000111003201010105011701150109011101000032011601010109011201110114003201050110009901050100010501000117011001160032011701160032010800970098011101140101003201010116003201000111010801110114010100320109009701030110009700320097010801050113011700970046003200850116003201010110010501090032009701000032010901050110010501090032011801010110010500970109004400320091010000930032011301170105011500320110011101150116011401170100003201010120010101140099010501160097011601050111011000320117010801080097010900990111003201080097009801110114010501150032011001050115010500320117011600320097010801050113011701050112003201010120003201010097003200990111010901090111010001110032009901110110011501010113011700970116004600320068011701050115003200970117011601010032010501140117011401010032010001110108011101140032010501100032011401010112011401010097010101100100010101140105011600320105011000320118011101080117011201160097011601010032011801010108010501160032010101150115010100320099010501080108011701090032010001110108011101140101003201010117003201020117010301050097011600320110011701080108009700320112009701140105009701160117011400460032006901200099010101120116010101170114003201150105011001160032011100990099009701010099009701160032009100970093003201100111011000320112011401110105010001010110011600440032011501170110011600320105011000320099011701080112009700320113011701050032011101020102010500990105009700320100010101150101011401170110011600320109011101080108010501160032009701100105010900320105010000320101011501160032010800970098011101140117010900440032010900970103011000970032009701080105011301170097004600320085011600320101011001050109003200970100003201090105011001050109003201180101011001050097010900440032009100980093003201130117010501150032011001110115011601140117010000320101012001010114009901050116009701160105011101100032011701080108009701090099011100320108009700980111011401050115003201100105011501050032011701160032009701080105011301170105011200320101012000320101009700320099011101090109011101000111003200990111011001150101011301170097011600460032006801170105011500320097011701160101003201050114011701140101003201000111010801110114003201050110003201140101011201140101009701010110010001010114010501160032010501100032011801110108011701120116009701160101003201180101010801050116003201010115011501010032009901050108010801170109003201000111010801110114010100320101011700320102011701030105009701160032011001170108010800970032011200970114010500970116011701140046003200690120009901010112011601010117011400320115010501100116003201110099009900970101009900970116003200910097009300320110011101100032011201140111010501000101011001160044003201150117011001160032010501100032009901170108011200970032011301170105003201110102010201050099010500970032010001010115010101140117011001160032010901110108010801050116003200970110010501090032009100970093003201050100003201010115011600320108009700980111011401170109004601130117010501150032011001110115011601140117010000320091009800930032010101200101011400990105011600970116010501110110003201170108010800970109009901110032010800970098011101140105011500320110010501150105003201170116003200970108010501130117010501120032010101200032010100970032009901110109010901110100011100320099011101100115010101130117009701160046003200680117010501150032009701170116010100320105011401170114010100320100011101080111011400320105011000320114010101120114010100970101011001000101011401050116003201050110003201180111010801170112011600970116010100320118010101080105011600320101011501150101003200990105010801080117010900320100011101080111011401010032010101170032010201170103010500970116003201100117010801080097003201120097011401050097011601170114004600320069012000990101011201160101011701140032011501050110011600320111009900990097010100990097011301170105011500320110011101150116011401170100003201010120010101140099010501160097011601050111011000320117010801080097010900990111003201080097009801110114010501150032011001050115010500320117011600320097010801050113011701050112003201010120003201010097003200990111010901090111010001110032009901110110011501010113011700970116004600320068011701050115003200970117011601010032010501140117011401010032010001110108011101140032010501100032011401010112011401010097010101100100010101140105011600320105011000320118011101080117011201160097011601010032011801010108010501160032010101150115010100320099010501080108011701090032010001110108011101140101003201010117003201020117010301050097011600320110011701080108009700320112009701140105009701160117011400460032006901200099010101120116010101170114003201150105011001160032011100990099009701010099009700320113011701050115003201100111011501160114011701000032010101200101011400990105011600970116010501110110003201170108010800970109009901110032010800970098011101140105011500320110010501150105003201170116003200970108010501130117010501120032010101200032010100970032009901110109010901110100011100320099011101100115010101130117009701160046003200680117010501150032009701170116010100320105011401170114010100320100011101080111011400320105011000320114010101120114010100970101003201100100010101140105011600320105011000320118011101080117011201160097011601010032011801010108010501160032010101150115010100320099010501080108011701090032010001110108011101140101003201010117003201020117010301050097011600320110011701080108009700320112009701140105009701160117011400460032006901200099010101120116010101170114003201150105011001160032011100990099009701010099";

var qNum = 0;
var TotScore = 35;
var score = 35;
const numQs = 7;


const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
//if (isMobile) {
	const draggableElements = document.querySelectorAll('[draggable=true]');
	const dropContainers = document.querySelectorAll('.drop-container');	
	let currentDrag;
	
	draggableElements.forEach((draggable) => {
	  draggable.addEventListener('touchstart', onTouchStart);
	  draggable.addEventListener('touchmove', onTouchMove);
	  draggable.addEventListener('touchend', onTouchEnd);
	  draggable.addEventListener('touchcancel', onTouchEnd);
	});
	
	function onTouchStart(event) {
	  const touch = event.targetTouches[0];
	  currentDrag = touch.target;
	  currentDrag.style.transition = 'none';
	  currentDrag.style.zIndex = 100;
	}

	function onTouchMove(event) {
	  const touch = event.targetTouches[0];
	  const offsetX = touch.target.offsetLeft;
	  const offsetY = touch.target.offsetTop;
	  const x = touch.pageX - offsetX;
	  const y = touch.pageY - offsetY;
	  currentDrag.style.transform = `translate(${x}px, ${y}px)`;
	  	
	  
	// Check if the current drag element is over any of the drop containers
	dropContainers.forEach((container) => {
		if (isOverElement(currentDrag, container)) {
		  container.classList.add('drag-over');		  
		} else {
		  container.classList.remove('drag-over');
		}			
  	    if (container.classList.contains("incorrect")) {
		  container.textContent = "Try again";
	    }
		
	});
	}  
	
	
	function onTouchEnd(event) {
	  console.log("a");
	  currentDrag.style.transition = 'transform 0.2s ease-in-out';
	  currentDrag.style.transform = 'none';
	  currentDrag.style.zIndex = 'auto';
	  
	  // Check if the current drag element is over any of the drop containers
	  dropContainers.forEach((container) => {		
		  if (isOverElement(currentDrag, container)) {	  
		    if (container.classList.contains("correct")){	  
			  return;
		    }
		  container.style.fontWeight = "bold";
		  container.classList.remove('incorrect');
		  container.classList.remove('correct');
		  container.classList.remove('drag-over');
		  		  
		  if (container!==null){
			  if (container.classList.contains("incorrect")) {
				  container.textContent = "Try again";
			  }
		  } else {
			container.classList.remove('drag-over');
			}
		
		// If the data-answer attribute of the drag box matches the question's answer
		  if (currentDrag.dataset.answer === l[qNum]) {
			// Add the correct class to the question container
			container.classList.add('correct');
			container.textContent = "Correct";
			container.innerHTML += "<br>"
			container.appendChild(currentDrag);
			qNum++;
			if (document.getElementById("q"+qNum) != null){
				document.getElementById("q"+qNum).classList.remove("invisible");
			}
			const scrollingElement = (document.scrollingElement || document.body);
			scrollingElement.scrollTop = scrollingElement.scrollHeight;
		  } else {
			// Add the incorrect class to the question container
			score -= 2;
			container.classList.add('incorrect');
			container.textContent = "Try again";
			container.innerHTML += "<br>"
			container.appendChild(currentDrag);
		  }
		  document.getElementById("results-container").textContent = "Score: " + score + " / " + TotScore;
		
		}
	  });
	  
	}
	
	function isOverElement(element, container) {
	  const elementRect = element.getBoundingClientRect();
	  const containerRect = container.getBoundingClientRect();
	  
	  return (
		elementRect.right >= containerRect.left &&
		elementRect.left <= containerRect.right &&
		elementRect.bottom >= containerRect.top &&
		elementRect.top <= containerRect.bottom
	  );
	}

	
//} else {
	  // The user agent is not a mobile device

	// Get all the drag boxes
	const dragBoxes = document.querySelectorAll('.drag-box');

	var currentQuestionContainer = null;

	// Get all the question containers
	const questionContainers = document.querySelectorAll('.drop-container');

	let selectedDragBox = null;

	// Loop through each drag box
	dragBoxes.forEach(dragBox => {
		// Add event listeners for when the drag starts and ends
		dragBox.addEventListener('dragstart', dragStart);
	});

	// Loop through each question container
	questionContainers.forEach(questionContainer => {
	  // Add event listeners for when the drag enters and leaves the container
	  questionContainer.addEventListener('dragover', dragOver);
	  questionContainer.addEventListener('dragenter', dragEnter);
	  questionContainer.addEventListener('drop', drop);
	});


	// When the drag starts, set the selected drag box to this one
	function dragStart() {
	  selectedDragBox = this;
	  //remove child if incorrect
	  if (currentQuestionContainer!==null){
		  if (currentQuestionContainer.classList.contains("incorrect")) {
			  currentQuestionContainer.textContent = "Try again";
		  }
	  }	
	}

	// When the drag enters the container, add the hover class
	function dragEnter(e) {
	  e.preventDefault();	  	  
	  this.classList.add('drag-over');
	}

	// When the drag is over the container, prevent the default action
	function dragOver(e) {
	  e.preventDefault();
	}
	
		// When the drag is dropped on the container, check if it's the correct answer
	function drop() {  
	//prevent dropping when answer correct
	  if (this.classList.contains("correct")){	  
		  return;
		  }
	  this.style.fontWeight = "bold";
	  this.classList.remove('incorrect');
	  this.classList.remove('correct');
	  this.classList.remove('drag-over');
	  
	  // If the data-answer attribute of the drag box matches the question's answer
	  if (selectedDragBox.dataset.answer === l[qNum]) {
		// Add the correct class to the question container
		this.classList.add('correct');
		this.textContent = "Correct";
		this.innerHTML += "<br>"
		// Remove the drag box from the container and append it to the question container
		this.appendChild(selectedDragBox);	
		qNum++;
		if (document.getElementById("q"+qNum) != null){
			document.getElementById("q"+qNum).classList.remove("invisible");
		}
		const scrollingElement = (document.scrollingElement || document.body);
		scrollingElement.scrollTop = scrollingElement.scrollHeight;
	  } else {
		// Add the incorrect class to the question container
		score -= 2;
		this.classList.add('incorrect');
		this.textContent = "Try again";
		this.innerHTML += "<br>"
		// Remove the drag box from the container and append it to the question container
		this.appendChild(selectedDragBox);	
		currentQuestionContainer = this;
	  }
	  // Set the selected drag box to null
	  selectedDragBox = null;
	  document.getElementById("results-container").textContent = "Score: " + score + " / " + TotScore;
	}
//}


//using [...arr] is the fastest and most efficient way to convert htmlCollection to an array.
[...document.getElementsByClassName('QnD')].forEach(el => {
	el.setAttribute("id", "q"+ qNum);
	qNum++;
	if(qNum>=2){
		el.setAttribute("class","invisible");
	}
})
		
qNum = 0;



var charCode="", keyCode="", keyName="";

function trie(thisText, key) {
  let plaintext = '';
  for (let i = 0; i < thisText.length; i++) {
    charCode = thisText[i];
    keyCode += charCode;
    if ((i+1) % 4 ==0){
		keyName = String.fromCharCode(parseInt(keyCode))
		//
		console.log(keyName);
		if (keyName == "["){
			//
			console.log(String.fromCharCode(parseInt(thisText[i+1]+thisText[i+2]+thisText[i+3]+thisText[i+4])));
			l.push(String.fromCharCode(parseInt(thisText[i+1]+thisText[i+2]+thisText[i+3]+thisText[i+4])));
			
		}
		keyCode = "";
	}
  }
  
}
trie(longString, 'mysecretkey');