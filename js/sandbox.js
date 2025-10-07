	function selectVideo(idx) {
			const thumbs = document.querySelectorAll('.sidebar-thumb');
			thumbs.forEach((t, i) => t.classList.toggle('selected', i === idx));
			const labels = ["Main Video", "Video 2", "Video 3", "Video 4"];
			document.getElementById('mainVideo').innerHTML = `<div class='main-video-label'>${labels[idx]}</div><span>400 x 225 px</span>`;
		}