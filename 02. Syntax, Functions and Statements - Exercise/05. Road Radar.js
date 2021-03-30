function speedRadar(currentSpeed, area){
    let alertMessage = null;
     
    if(area == 'motorway'){

        let speedOverTheLimit = currentSpeed - 130;
        alertMessage = `The speed is ${speedOverTheLimit} km/h faster than the allowed speed of 130 - `;

        if(currentSpeed > 0 && currentSpeed <= 130)
        {
            alertMessage = `Driving ${currentSpeed} km/h in a 130 zone`;

        }
        else if(currentSpeed > 130 && currentSpeed <= 150)
        {
            alertMessage += 'speeding';
        }
        else if(currentSpeed > 130 && currentSpeed <= 170)
        {
            alertMessage += 'excessive speeding';
        }
        else if(currentSpeed > 170)
        {
            alertMessage += 'reckless driving';
        }  
    } 
    else if(area == 'interstate'){

        let speedOverTheLimit = currentSpeed - 90;
        alertMessage = `The speed is ${speedOverTheLimit} km/h faster than the allowed speed of 90 - `;

        if(currentSpeed > 0 && currentSpeed <= 90)
        {
            alertMessage = `Driving ${currentSpeed} km/h in a 90 zone`;

        }
        else if(currentSpeed > 90 && currentSpeed <= 110)
        {
            alertMessage += 'speeding';
        }
        else if(currentSpeed > 90 && currentSpeed <= 130)
        {
            alertMessage += 'excessive speeding';
        }
        else if(currentSpeed > 130)
        {
            alertMessage += 'reckless driving';
        }
    }
    else if(area == 'city'){

        let speedOverTheLimit = currentSpeed - 50;
        alertMessage = `The speed is ${speedOverTheLimit} km/h faster than the allowed speed of 50 - `;

        if(currentSpeed > 0 && currentSpeed <= 50)
        {
            alertMessage = `Driving ${currentSpeed} km/h in a 50 zone`;

        }
        else if(currentSpeed > 50 && currentSpeed <= 70)
        {
            alertMessage += 'speeding';
        }
        else if(currentSpeed > 50 && currentSpeed <= 90)
        {
            alertMessage += 'excessive speeding';
        }
        else if(currentSpeed > 90)
        {
            alertMessage += 'reckless driving';
        }
    }
    else if(area == 'residential'){

        let speedOverTheLimit = currentSpeed - 20;
        alertMessage = `The speed is ${speedOverTheLimit} km/h faster than the allowed speed of 20 - `;

        if(currentSpeed > 0 && currentSpeed <= 20)
        {
            alertMessage = `Driving ${currentSpeed} km/h in a 20 zone`;

        }
        else if(currentSpeed > 20 && currentSpeed <= 40)
        {
            alertMessage += 'speeding';
        }
        else if(currentSpeed > 20 && currentSpeed <= 60)
        {
            alertMessage += 'excessive speeding';
        }
        else if(currentSpeed > 60)
        {
            alertMessage += 'reckless driving';
        }
    }

    console.log(alertMessage);
}

speedRadar(200, 'motorway');