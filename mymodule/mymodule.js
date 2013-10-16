//절대값을 구하는 메서드
exports.abs = function(number){
	if( number > 0 ){
		return number;
	}else{
		return number*-1;
	}
};

exports.circleArea = function(radius){
	return radius * radius * Math.PI;
}