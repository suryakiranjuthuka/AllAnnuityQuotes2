// JavaScript Document


//d3.select("body")
//.on("click",function(){
//	

$( document ).ready( function(){ counter() } );

var i = 0;

setInterval(function() { counter() }, 12200);


function counter()
{
	
	d3.select("#hex1")
	.transition()
	.duration(700)
	.style("left","210px")
	.style("top","250px")
	
	d3.select("#hex2")
	.transition()
	.duration(700)
	.style("left","390px")
	.style("top","250px")
	
	d3.select("#hex3")
	.transition()
	.duration(700)
	.style("left","300px")
	.style("top","100px")
	
	d3.select("#hex4")
	.transition()
	.duration(300)
	.delay(1000)
	.each("start",function(){
		d3.select(this)
		.style("display","block")
		.classed({'hex5': false, 'hex6': false, 'hex4': true})
	})
	.style("-webkit-transform","scale(1.15)")
	.style("transform","scale(1.15)")
	
	d3.select("#tickIcon")
	.transition()
	.duration(300)
	.delay(1500)
	.style("opacity",1)
	.style("top",115+"px")
	
	d3.select("#tickIcon")
	.transition()
	.duration(300)
	.delay(3000)
	.style("opacity",0)
	.style("top",61+"px")
	
	d3.select("#hex4")
	.transition()
	.duration(500)
	.delay(3000)
	.style("-webkit-transform","scale(1)")
	.style("transform","scale(1)")
	
	d3.select("#hex4")
	.transition()
	.duration(0)
	.delay(3500)
	.style("display","none")
	
/*	d3.selectAll("#hex1, #hex2, #hex3")
	.transition()
	.duration(500)
	.delay(700)
	.style("left","210px")
	.style("top","0px")*/
	
	d3.select("#hex1")
	.transition()
	.duration(700)
	.delay(4000)
	.style("left","390px")
	.style("top","250px")
	
	d3.select("#hex2")
	.transition()
	.duration(700)
	.delay(4000)
	.style("left","300px")
	.style("top","100px")

	
	d3.select("#hex3")
	.transition()
	.duration(700)
	.delay(4000)
	.style("left","210px")
	.style("top","250px")	
	
	d3.select("#hex4")
	.transition()
	.duration(300)
	.delay(5000)
	.each("start",function(){
		d3.select(this)
		.style("display","block")
		.classed({'hex5': true, 'hex6': false, 'hex4': false})	
	})
	.style("-webkit-transform","scale(1.15)")
	.style("transform","scale(1.15)")
	
	
	
	d3.select("#tickIcon")
	.transition()
	.duration(300)
	.delay(5500)
	.style("opacity",1)
	.style("top",115+"px")
	
	d3.select("#tickIcon")
	.transition()
	.duration(300)
	.delay(7000)
	.style("opacity",0)
	.style("top",61+"px")
	
	
	d3.select("#hex4")
	.transition()
	.duration(500)
	.delay(7000)
	.style("-webkit-transform","scale(1)")
	.style("transform","scale(1)")
	
	d3.select("#hex4")
	.transition()
	.duration(0)
	.delay(7500)
	.style("display","none")
	
	
	
	
	
	
	
	d3.select("#hex1")
	.transition()
	.duration(700)
	.delay(8000)
	.style("left","300px")
	.style("top","100px")
	
	d3.select("#hex2")
	.transition()
	.duration(700)
	.delay(8000)
	.style("left","210px")
	.style("top","250px")


	d3.select("#hex3")
	.transition()
	.duration(700)
	.delay(8000)
	.style("left","390px")
	.style("top","250px")
	
	
	
	d3.select("#hex4")
	.transition()
	.duration(300)
	.delay(9000)
	.each("start",function(){
		d3.select(this)
		.style("display","block")
		.classed({'hex5': false, 'hex6': true, 'hex4': false})	
	})
	.style("-webkit-transform","scale(1.15)")
	.style("transform","scale(1.15)")
	
	
	
	d3.select("#tickIcon")
	.transition()
	.duration(300)
	.delay(9500)
	.style("opacity",1)
	.style("top",115+"px")
	
	d3.select("#tickIcon")
	.transition()
	.duration(300)
	.delay(11000)
	.style("opacity",0)
	.style("top",61+"px")
	
	d3.select("#hex4")
	.transition()
	.duration(500)
	.delay(11000)
	.style("-webkit-transform","scale(1)")
	.style("transform","scale(1)")
	
	d3.select("#hex4")
	.transition()
	.duration(0)
	.delay(11500)
	.style("display","none")
	




}
	
	
	
//})

/*d3.select("#circleTypesContainer")
.selectAll("div")
.on("mouseover", function(){
	d3.select(this)
	.transition()
	.duration(75)
	.delay(10)
	.style("-webkit-transform","scale(1.08)")
	.style("transform","scale(1.08)")
	
	d3.select(this)
	.transition()
	.duration(75)
	.delay(170)
	.style("-webkit-transform","scale(1)")
	.style("transform","scale(1)")
})

d3.select("#fixedType")
.on("click", function(){
	d3.select(".InfoPara")
	.transition()
	.duration(400)
	.style("left","-2000px")
	.style("opacity",0)
	
	d3.select(".InfoPara")
	.transition()
	.duration(600)
	.delay(250)
	.text("A fixed annuity features a fixed interest rate, and guarantees you will be returned your principal investment plus additional earnings. Your savings and interest will grow tax-deferred until withdrawal, whenever you are ready to receive income. However, your fixed annuity rate will not adjust for inflation over time.")
	.style("left","0px")
	.style("opacity",1)
	.style("margin-top",20+"px")
	
	d3.select("#circleTypesInfoContainerTriangle")
	.transition()
	.duration(500)
	.style("left","90px")
	
})



d3.select("#variableType")
.on("click", function(){
	d3.select(".InfoPara")
	.transition()
	.duration(400)
	.style("left","-2000px")
	.style("opacity",0)
	
	d3.select(".InfoPara")
	.transition()
	.duration(600)
	.delay(250)
	.text("A variable annuity offers a greater potential for additional earnings with a rate that benefits from the potential growth of the financial markets. There are a wide variety of investment options to choose from such as mutual funds, stocks and bonds. A variable annuity also offers a death benefit to protect your savings for your beneficiaries. Your interest will grow tax-deferred until you decide to receive income.")
	.style("left","0px")
	.style("opacity",1)
	.style("margin-top",0+"px")
	
	d3.select("#circleTypesInfoContainerTriangle")
	.transition()
	.duration(500)
	.style("left","284px")
})

d3.select("#immediateType")
.on("click", function(){
	d3.select(".InfoPara")
	.transition()
	.duration(400)
	.style("left","-2000px")
	.style("opacity",0)
	
	d3.select(".InfoPara")
	.transition()
	.duration(600)
	.delay(250)
	.text("Immediate annuities are purchased with a single lump-sum and begin paying out soon after, generally within a year. This type of investment is particularly suitable for people who have already retired and are afraid of outliving their savings. Payments are terminated upon the holder's death, therefore immediate annuities are not recommended for retirees in poor health. ")
	.style("left","0px")
	.style("opacity",1)
	.style("margin-top",0+"px")
	
	d3.select("#circleTypesInfoContainerTriangle")
	.transition()
	.duration(500)
	.style("left","478px")
})

d3.select("#indexedType")
.on("click", function(){
	d3.select(".InfoPara")
	.transition()
	.duration(400)
	.style("left","-2000px")
	.style("opacity",0)
	
	d3.select(".InfoPara")
	.transition()
	.duration(600)
	.delay(250)
	.text("Indexed annuities credit your savings using a rate calculated from the performance of a specific index, such as the S&P 500. This type of investment guarantees a minimum return as well as your principal investment. Earnings on an indexed annuity are tax deferred until withdrawal. You are also able to withdraw up to 10% of your original investment from your annuity per year without penalty if needed. ")
	.style("left","0px")
	.style("opacity",1)
	.style("margin-top",0+"px")
	
	d3.select("#circleTypesInfoContainerTriangle")
	.transition()
	.duration(500)
	.style("left","676px")
})

d3.select("#deferredType")
.on("click", function(){
	d3.select(".InfoPara")
	.transition()
	.duration(400)
	.style("left","-2000px")
	.style("opacity",0)
	
	d3.select(".InfoPara")
	.transition()
	.duration(600)
	.delay(250)
	.text("Deferred annuities build up money on a tax-deferred basis for your withdrawal later. The payments are delayed until they are needed, and only at that point are your savings taxed. A deferred annuity also provides a death benefit, so your beneficiaries are guaranteed to take over your payments in the event of your death. This type of investment is beneficial to people who are not yet ready to retire, but want a reliable stream of income when they do.")
	.style("left","0px")
	.style("opacity",1)
	.style("margin-top",0+"px")
	
	d3.select("#circleTypesInfoContainerTriangle")
	.transition()
	.duration(500)
	.style("left","870px")
})*/