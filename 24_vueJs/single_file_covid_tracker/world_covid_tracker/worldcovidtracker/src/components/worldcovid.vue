<template>
    
        <div class="container">
            <h1 class="display-4"> World Covid Tracker </h1>
            <hr>
         <table class="table table-hover">
            <thead >
                <tr >
                        <th scope="col">id</th>
                        <th scope="col">Country</th>
                        <th scope="col">Country Code</th>
                        <th scope="col">Date</th>
                        <th scope="col">Lat</th>
                        <th scope="col">Lon</th>
                        <th scope="col">Death</th>
                        <th scope="col">Confirmed</th>
                        <th scope="col">Recovered</th>
                
                </tr>
            
            </thead>
            
            <tbody v-cloak>
                <tr v-for="(item,index) in covid_data" :key="item.key" :style="myfunc(item)" >
                        <th scope="row">{{index}}</th>
                        <td>{{item.Country}}</td>
                        <td>{{item.CountryCode}}</td>
                        <td>{{item.Date}}</td>
                        <td>{{item.Lat}}</td>
                        <td>{{item.Lon}}</td>
                        <td>{{item.Deaths}}</td>
                        <td>{{item.Confirmed}}</td>
                        <td>{{item.Recovered}}</td>
                    
                
                </tr>
                
            
            
            </tbody>
        </table>
        </div>

    
    
</template>


<script>
export default {
  name: 'worldcovid',
  data:function(){
                // in here you will just declare empty variable
                // that will be filled afterward
                return{
                  covid_data: []  
                }
                


            },
            created: function() {
                // this is hooks in here you wil call he method
                this.fetchdata();

            },

            computed: {
                // it will be called after everything done
            },
            methods: {

                // adding new method 
                fetchdata: function() {
                    //var apikey = "lS8TtJ6SBG2m3Hkczri4jEdquKMRKCsESV7xdrOr";
                    var url1 = "https://api.covid19api.com/live/country/china";

                    // now you fetch the data
                    this.$http.get(url1)
                        .then((res) => {

                            this.covid_data = res.data;                        
                        })




                },

                myfunc: function(item) {
                    if (item.Deaths > 1000) {
                        return {
                            border: "solid 2px red",
                            color: 'red'
                        }
                    }else{
                        return {
                            border: "solid 2px green",
                            color: 'green'
                        }
                    }
                }
            }
  }

</script>
