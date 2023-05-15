const userAgent = navigator.userAgent;

function loadCSS() 
{
  
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
				setupCertificatesList();
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

function selectImageDESKTOP(id) {
	// Get all the images in the row
	const container = document.getElementById('certificates');
	const images = container.querySelectorAll('img');
	const selectedImageWidth = `${container.offsetWidth * 0.6}px`;
	const unselectedImageWidth = `${(container.offsetWidth * 0.4)/(images.length)}px`;
	images.forEach((image) =>
	{
		if (image.id === id) {
			image.style.width = selectedImageWidth;
			image.style.opacity = 1;
		} else {
			image.style.width = unselectedImageWidth;
			image.style.opacity = 0.2;
		}
	});
}

function selectImageMOBILE(id) {
	// Get all the images in the row
	const container = document.getElementById('certificates');
	const images = container.querySelectorAll('img');
	const selectedImageHeight = `${container.clientHeight * 0.6}px`;
	const unselectedImageHeight = `${(container.clientHeight * 0.4)/(images.length-1)}px`;
	images.forEach((image) =>
	{
		if (image.id === id) {
			image.style.height = selectedImageHeight;
			image.style.opacity = 1;
		} else {
			image.style.height = unselectedImageHeight;
			image.style.opacity = 0.2;
		}
	});
}

function setupCertificatesList()
{
	const imagesDiv = document.getElementById('certificates');
	const containerWidth = imagesDiv.offsetWidth;
	const containerHeight = imagesDiv.offsetHeight;
	const images = imagesDiv.querySelectorAll('img');
	images.forEach( img => {
		if(/Mobile|Tablet/i.test(userAgent)) 
		{
			let height = containerHeight / (images.length + 1);
			img.style.height = height+'px';
		} 
		else 
		{
			let width = containerWidth / (images.length) + 0.0;
			img.style.width = width+'px';
		}	
		img.style.opacity = 0.2;
	});
}

window.addEventListener("resize", function(){
	console.log('resized!');
	setupCertificatesList();
});

document.addEventListener('DOMContentLoaded', () => {
	const imagesDiv = document.getElementById('certificates');
	const folderUrl = '/resources/certificates';
	fetch(folderUrl)
	.then(response => response.json())
	.then(data => {
		let num = 1;
		data.forEach(img =>{
			let image = document.createElement('img');
			image.src = `${folderUrl}/${img}`;
			image.id = `img${num}`;
			if(/Mobile|Tablet/i.test(userAgent)) {
				image.onclick = () => selectImageMOBILE(image.id);
			}else {
				image.onclick = () => selectImageDESKTOP(image.id);
			}
			imagesDiv.appendChild(image);
			num++
		})
		setupCertificatesList();
	})
	.catch(error => console.error(error));
});


