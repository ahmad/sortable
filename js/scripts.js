
const $sortable = $("#sortable")
$sortable.sortable();

$("#build").on("click", ()=>{
	const $players = $("#playersInput");
	const playerList = $players.val().split('\n');

	$sortable.html("");
	playerList.forEach((item) => {
		const x = $(`<li class='ui-state-default' data-value='${item}'><span class="ui-icon ui-icon-arrowthick-2-n-s"></span> ${item}</li>`);
		$sortable.append(x);
	});
});