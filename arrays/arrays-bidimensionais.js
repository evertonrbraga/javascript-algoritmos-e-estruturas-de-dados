var avgTempWeek = []

var avgTempWeek1 = [33, 25.2, 19, 27, 23.4, 41.6, 25]
var avgTempWeek2 = [41, 29, 33, 21.2, 19.5, 17, 33.8]

avgTempWeek[0] = avgTempWeek1
avgTempWeek[1] = avgTempWeek2

for(var i = 0; i < avgTempWeek.length; i++) {
    for(var j = 0; j < avgTempWeek[i].length; j++) {
        console.log(avgTempWeek[i][j])
    }
}