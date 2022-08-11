let dataObj = undefined;

function ajax_get(url) {
  let xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      try {
        var data = JSON.parse(xmlhttp.responseText);
        dataObj = data;
        console.log(dataObj);
        document.getElementById("cardrow").innerHTML = dataObj
          .map(
            (item) => `
            <div style="padding: 10px" class="card max-w-md-5 mx-lg-3">
                <div class="row m-l-0 m-r-0">
                    <div class="col-sm-4 bg-c-lite-green user-profile">
                        <div class="card-block text-center text-white">
                            <div class="m-b-25">
                                <img src="https://res.cloudinary.com/tempxstore/image/upload/v1660216262/usericon_ca169n.png" class="img-radius" alt="User-Profile-Image">
                            </div>
                            <h6 class="f-w-600">${item.name}</h6>
                            <p>${item.username}</p>
                            <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                        </div>
                    </div>
                    <div class="col-sm-8">
                        <div class="card-block">
                            <h6 class="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                            <div class="row">
                                <div class="col-sm-6 mb-2">
                                    <p class="mb-1 f-w-600">Email</p>
                                    <h6 class="text-muted f-w-400">${item.email}</h6>
                                </div>
                                <div class="col-sm-6 mb-2">
                                    <p class="mb-1 f-w-600">Phone</p>
                                    <h6 class="text-muted f-w-400">${item.phone}</h6>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6 mb-2">
                                    <p class="mb-1 f-w-600">Address</p>
                                    <h6 class="text-muted f-w-400">${item.address.street}, ${item.address.suite}, ${item.address.city}, ${item.address.zipcode}</h6>
                                    <p><a target="_blank" href="https://www.google.com/maps/place/${item.address.geo.lat},${item.address.geo.lng}/">Open on Google Maps</a></p>
                                </div>
                                <div class="col-sm-6 mb-2">
                                    <p class="mb-1 f-w-600">Website</p>
                                    <h6 class="text-muted f-w-400"><a href="https://${item.website}">${item.website}</a></h6>
                                </div>
                            </div>
                            <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Company Info</h6>
                            <div class="row">
                                <div class="col-sm-6 mb-2">
                                    <p class="mb-1 f-w-600">Name</p>
                                    <h6 class="text-muted f-w-400">${item.company.name}</h6>
                                </div>
                                <div class="col-sm-6 mb-2">
                                    <p class="mb-1 f-w-600">What it Do ?</p>
                                    <h6 class="text-muted f-w-400">${item.company.catchPhrase}</h6>
                                </div>
                                <div class="col-sm-6 mb-2">
                                    <p class="mb-1 f-w-600">Based on</p>
                                    <h6 class="text-muted f-w-400">${item.company.bs}</h6>
                                </div>
                            </div>
                            <ul class="social-link list-unstyled m-t-40 m-b-10">
                                <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="facebook" data-abc="true"><i class="mdi mdi-facebook feather icon-facebook facebook" aria-hidden="true"></i></a></li>
                                <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="twitter" data-abc="true"><i class="mdi mdi-twitter feather icon-twitter twitter" aria-hidden="true"></i></a></li>
                                <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="instagram" data-abc="true"><i class="mdi mdi-instagram feather icon-instagram instagram" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
          </div>
            </div>
        </div>

            `
          )
          .join("");
      } catch (err) {
        console.log(err.message + " in " + xmlhttp.responseText);
        return;
      }
    }
  };

  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

ajax_get(
  "https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09"
);
