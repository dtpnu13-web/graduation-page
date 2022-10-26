  $(document).ready(function(){
    $(".team_name").click(function() {
      $(".team_name").removeClass("selected");
      $(this).addClass("selected");
      let name = $(this).attr('name');

      $(".team-cont").removeClass("showing");
      $(`#${name}`).addClass("showing");
    })
	});

