function btnLucas()
{
	var first=document.getElementById("sheetWelcome1")
	var second = document.getElementById("sheetWelcome2");
	second.style.top = "100px";
	first.style.opacity = "0";
	second.style.opacity = "1";
	second.style.pointerEvents = "auto";

}
//Fades in welcome page
$(document).ready(function () {
	$("#bigWelcome").delay(250).fadeTo(500, 1);
	$("#textBox").delay(250).fadeTo(500, 1);
	$("#btnContinue").delay(250).fadeTo(500, 1);
});
//Make things white
$(document).ready(function () {
	$(".topBox").hover(function () {
		$(this).addClass("highlightTop");
	},
	function () {
		$(this).removeClass("highlightTop");
	}
	);
});
//Work buttons
$(document).ready(function()
{
	$("#lowesDiv").click(function () {
		$(this).addClass("shaded");
		$("#margaritaDiv").removeClass("shaded");
		$(".margarita").css("opacity",0);
		$(".lowes").css("opacity",1);
	});
})
$(document).ready(function()
{
	$("#margaritaDiv").click(function () {
		$(this).addClass("shaded");
		$("#lowesDiv").removeClass("shaded");
		$(".margarita").css("opacity", 1);
		$(".lowes").css("opacity", 0);
	})
})
$(document).ready(function()
{
	$("#summaryDiv").click(function()
	{
		$(this).addClass("shaded");
		$("#languagesDiv").removeClass("shaded");
		$("#programmingDiv").removeClass("shaded");
		$("#keyRight").css("opacity", 1);
		$("#keyLeft").css("opacity", 1);
		$("#languagesInfo").css("opacity", 0);
		$(".programming").css("opacity", 0);

	})
})
$(document).ready(function () {
	$("#languagesDiv").click(function () {
		$(this).addClass("shaded");
		$("#summaryDiv").removeClass("shaded");
		$("#programmingDiv").removeClass("shaded")
		$("#keyRight").css("opacity", 0);
		$("#keyLeft").css("opacity", 0);
		$("#languagesInfo").css("opacity", 1);
		$(".programming").css("opacity", 0);

	})
})
$(document).ready(function () {
	$("#programmingDiv").click(function () {
		$(this).addClass("shaded");
		$("#languagesDiv").removeClass("shaded");
		$("#summaryDiv").removeClass("shaded");
		$("#keyRight").css("opacity", 0);
		$("#keyLeft").css("opacity", 0);
		$("#languagesInfo").css("opacity", 0);
		$(".programming").css("opacity", 1);

	})
})
$(document).ready(function()
{
	$("#profile").hover(function () {
		$(this).addClass("bordered");
		$("#keySkills").removeClass("bordered");
		$("#work").removeClass("bordered");
		$("#education").removeClass("bordered");
		$("#contact").removeClass("bordered");
	});
})
$(document).ready(function () {
	$("#keySkills").hover(function () {
		$(this).addClass("bordered");
		$("#profile").removeClass("bordered");
		$("#work").removeClass("bordered");
		$("#education").removeClass("bordered");
		$("#contact").removeClass("bordered");
	});
});
$(document).ready(function () {
	$("#work").hover(function () {
		$(this).addClass("bordered");
		$("#profile").removeClass("bordered");
		$("#keySkills").removeClass("bordered");
		$("#education").removeClass("bordered");
		$("#contact").removeClass("bordered");
	});
});
$(document).ready(function () {
	$("#education").hover(function () {
		$(this).addClass("bordered");
		$("#profile").removeClass("bordered");
		$("#work").removeClass("bordered");
		$("#keySkills").removeClass("bordered");
		$("#contact").removeClass("bordered");
	});
});
$(document).ready(function () {
	$("#contact").hover(function () {
		$(this).addClass("bordered");
		$("#profile").removeClass("bordered");
		$("#work").removeClass("bordered");
		$("#keySkills").removeClass("bordered");
		$("#education").removeClass("bordered");
	});
});
$(document).ready(function () {
	$("#profile").click(function () {
		$(".class1").removeClass("full");
		$(this).addClass("full");
		$(".box").hide();
		$(".block").hide();
		$("#block1").fadeTo(500,1);
		$("#profileBox").fadeTo(1000, 1);
	});
});
$(document).ready(function () {
	$("#keySkills").click(function () {
		$(".class1").removeClass("full");
		$(this).addClass("full");
		$(".box").hide();
		$(".block").hide();
		$("#block2").fadeTo(500,1);
		$("#keyBox").fadeTo(1000, 1);
	});
});
$(document).ready(function () {
	$("#work").click(function () {
		$(".class1").removeClass("full");
		$(this).addClass("full");
		$(".box").hide();
		$(".block").hide();
		$("#block3").fadeTo(500,1);
		$("#workBox").fadeTo(1000, 1);
	});
});
$(document).ready(function () {
	$("#education").click(function () {
		$(".class1").removeClass("full");
		$(this).addClass("full");
		$(".box").hide();
		$(".block").hide();
		$("#block4").fadeTo(500,1);
		$("#educationBox").fadeTo(1000, 1);
	});
});
$(document).ready(function () {
	$("#contact").click(function () {
		$(".class1").removeClass("full");
		$(this).addClass("full");
		$(".box").hide();
		$(".block").hide();
		$("#block5").fadeTo(500, 1);
		$("#contactBox").fadeTo(1000, 1);
	});
});
