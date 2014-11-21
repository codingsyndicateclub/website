/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function showVideo()
{
    var shown = false;
    
    if (shown) 
    {
        document.getElementById("video").style.display="none";
        shown = true;
    }
    else
    {
        document.getElementById("video").style.display="block";
        shown = false;
    }
}

function showImage()
{
    var shown = false;
    
    if (shown) 
    {
        document.getElementById("image").style.display="none";
        shown = true;
    }
    else
    {
        document.getElementById("image").style.display="inline";
        shown = false;
    }
}
