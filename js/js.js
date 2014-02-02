function filterUse() {
	if(document.getElementById('filter-sub-menu-nav').style.display == 'block'){
		document.getElementById('user-sub-menu-nav').style.display = 'block';
		document.getElementById('filter-sub-menu-nav').style.display = 'none';
		document.getElementById('search-sub-menu-nav').style.display = 'none';
		document.getElementById('filter-icon-image').style.backgroundImage = "url('img/icon-filter.png')";
		document.getElementById('search-icon-image').style.backgroundImage = "url('img/icon-search.png')";
	}
	else{
		document.getElementById('filter-sub-menu-nav').style.display = 'block';
		document.getElementById('user-sub-menu-nav').style.display = 'none';
		document.getElementById('search-sub-menu-nav').style.display = 'none';
		document.getElementById('filter-icon-image').style.backgroundImage = "url('img/icon-filter-red.png')";
		document.getElementById('search-icon-image').style.backgroundImage = "url('img/icon-search.png')";
	}
}

function searchUse() {
	if(document.getElementById('search-sub-menu-nav').style.display == 'block'){
		document.getElementById('user-sub-menu-nav').style.display = 'block';
		document.getElementById('search-sub-menu-nav').style.display = 'none';
		document.getElementById('filter-sub-menu-nav').style.display = 'none';
		document.getElementById('filter-icon-image').style.backgroundImage = "url('img/icon-filter.png')";
		document.getElementById('search-icon-image').style.backgroundImage = "url('img/icon-search.png')";
	}
	else{
		document.getElementById('search-sub-menu-nav').style.display = 'block';
		document.getElementById('user-sub-menu-nav').style.display = 'none';
		document.getElementById('filter-sub-menu-nav').style.display = 'none';
		document.getElementById('filter-icon-image').style.backgroundImage = "url('img/icon-filter.png')";
		document.getElementById('search-icon-image').style.backgroundImage = "url('img/icon-search-red.png')";
	}
}