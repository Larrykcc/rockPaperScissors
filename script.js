//get computer choice. randomly log 'rock' , 'paper', 'scissors'

function getComputerChoice () {
    //Math.floor(Math.random()*10) this will create integer and round it.
        const int = Math.floor(Math.random()*10)
        if(int >= 1 && int <=3) {
            console.log('rock')
        } else if (int >=4 &&  int <=6) {
            console.log('paper')
        } else {
            console.log('scissors')
        }

}