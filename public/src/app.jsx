
/** @jsx React.DOM */
$(function(){
	$("#connect-btn").click(function(){
		initChat($("#container")[0]),
			$("#username-input").val();
	});

	function initChat(container, username){
		React.renderComponent(<ChatBox chatProxy={new ChatProxy()}
			username={username}></ChatBox>, container
		);
	}

	window.onbeforeunload = function() {
		return "Are you sure you want to leave this page?";
	}

});