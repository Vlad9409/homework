year = prompt('Enter any year', 0);
    if (year%4 == 0 && year %100 !== 0)
    {
        alert('Leap year');
    }
    else
        alert('Not Leap Year')