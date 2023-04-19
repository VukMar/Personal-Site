function loadCSS() 
{
	const userAgent = navigator.userAgent;
  
	if(/Mobile|Tablet/i.test(userAgent)) 
	{
		const link = document.createElement('link');
		link.rel = 'stylesheet';
		link.href = 'Style/Mobile.css';
		document.head.appendChild(link);	
	} 
	else 
	{
	  	const link = document.createElement('link');
	  	link.rel = 'stylesheet';
	  	link.href = 'Style/Desktop.css';
	  	document.head.appendChild(link);
	}
}
  
loadCSS();


function toggleContent(pageId)
{
	const links = document.getElementById("content").querySelectorAll('div .child');
    links.forEach((link) => 
	{
		if (link.id === pageId) {
			link.classList.add('active');
			link.classList.remove('inactive');
		} else {
			link.classList.add('inactive');
			link.classList.remove('active');
		}
    });
}


function toggleActive(linkId ,linkId2) 
{
	let pageNav = document.getElementById("pageList");
    const links = pageNav.querySelectorAll('a');
	const links2 = pageNav.querySelectorAll('.psudoBox');
    links.forEach((link) => 
	{
    	if (link.id === linkId) {
			link.classList.add('active');
			link.classList.remove('inactive');
		} else {
			link.classList.add('inactive');
			link.classList.remove('active');
		}
		switch(linkId)
		{
			case 'a1':
				document.getElementById('content').style.height = 'auto';
				toggleContent("home");
				break;
			case 'a2':
				document.getElementById('content').style.height = 'auto';
				toggleContent("aboutMe");
				break;
			case 'a3':
				document.getElementById("content").style.height = 'auto';
				toggleContent("contactMe");
				break;
				case 'a4':
				document.getElementById("content").style.height = 'auto';
				toggleContent("projects");
				break;
			}
		});
		links2.forEach((link2) => 
		{
			if (link2.id === linkId2) {
				link2.classList.add('active');
				link2.classList.remove('inactive');
			} else {
				link2.classList.add('inactive');
				link2.classList.remove('active');
			}
		});
}

function sendEmail(element)
{
	window.location.href="mailto:vuk.s.maric@gmail.com?subject=I would like to say hi!&body=Hello!%0AI%20would%20like%20to%20get%20in%20touch!";
}

const svgElements = document.querySelectorAll('svg');

svgElements.forEach((element) => {
  element.addEventListener('mouseover', showDescription);
  element.addEventListener('mouseout', hideDescription);
});

function showDescription(event) {
  const item = event.target.getAttribute('data-item');
  const description = document.querySelector(`[data-item="${item}"]`);
  description.style.display = 'block';
}

function hideDescription(event) {
  const item = event.target.getAttribute('data-item');
  const description = document.querySelector(`[data-item="${item}"]`);
  description.style.display = 'none';
}

function selectImage(id) {
	// Get all the images in the row
	const images = document.getElementById('certificates').querySelectorAll('img');
	images.forEach((image) =>
	{
		if (image.id === id) {
			image.classList.add('selected');
			image.classList.remove('notSelected');
		} else {
			image.classList.add('notSelected');
			image.classList.remove('selected');
		}
	});
}