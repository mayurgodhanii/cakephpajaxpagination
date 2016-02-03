# cakephpajaxpagination
Cakephp Ajax Pagination with paginator

Set up your HTML markup.

```
<table class="ajax-pagination">
    <thead>
        <tr>
            <th><a href="#">Sr. <i class="icon-sort"></i></a></th>            
            <th><a href="#" class="desc">Inquiry Date <i class="icon-sort-up"></i></a></th>
            <th><a href="#">Name <i class="icon-sort"></i></a></th>
            <th><a href="#">Email <i class="icon-sort"></i></a></th>
            <th><a href="#">Budget <i class="icon-sort"></i></a></th>
            <th><a href="#">Contact No <i class="icon-sort"></i></a></th>
            <th><a href="#">Location <i class="icon-sort"></i></a></th>
        </tr>
    </thead>
    <tbody>                            
        <tr>
            <td>2390</td>                                    
            <td>01-Jul-2015 06:53:00</td>
            <td>Loren</td>
            <td>info@ipsome.company</td>
            <td>$5,001 to $10,000</td>
            <td>0061390188150</td>
            <td>Loren</td>              
        </tr>
        <tr>
            <td>2390</td>                                    
            <td>01-Jul-2015 06:53:00</td>
            <td>Loren</td>
            <td>info@ipsome.company</td>
            <td>$5,001 to $10,000</td>
            <td>0061390188150</td>
            <td>Loren</td>              
        </tr><tr>
            <td>2390</td>                                    
            <td>01-Jul-2015 06:53:00</td>
            <td>Loren</td>
            <td>info@ipsome.company</td>
            <td>$5,001 to $10,000</td>
            <td>0061390188150</td>
            <td>Loren</td>              
        </tr>
        <tr>
            <td>2390</td>                                    
            <td>01-Jul-2015 06:53:00</td>
            <td>Loren</td>
            <td>info@ipsome.company</td>
            <td>$5,001 to $10,000</td>
            <td>0061390188150</td>
            <td>Loren</td>              
        </tr>
    </tbody>
</table>
<div id="pagination-div">
    <div id="pagination-div">
        <div class="m-pagination">
            <div class="paging">
                <li class="first">
                    <a href="#">First</a>
                </li>
                <li class="prev">
                    <a href="#" rel="prev">Previous</a>
                </li>
                <li>
                    <a href="#">231</a>
                </li>
                <li>
                    <a href="#">232</a>
                </li>
                <li>
                    <a href="#">233</a>
                </li>
                <li>
                    <a href="#">234</a>
                </li>
                <li>
                    <a href="#">235</a>
                </li>
                <li class="next disabled">
                    <a href="">Next</a>
                </li>
            </div>
        </div>                    
    </div>
</div>
```

Move the /cakephpAjaxPagination js into your project

Initialize your cakephpAjaxPagination in your script file or an inline script tag

    $(function () {
        $('.ajax-pagination').cakephpPagination({
            paginateDivId: "pagination-div"
        });
    });
    
When complete, your HTML should look something like:

```
<html>
    <head>
        <script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
        <script type="text/javascript" src="ajaxpaginate.min.js"></script>
    </head>
    <body>
        <table class="ajax-pagination">
            <thead>
                <tr>
                    <th><a href="#">Sr. <i class="icon-sort"></i></a></th>
                    <th><a href="#">Inquiry Id <i class="icon-sort"></i></a></th>
                    <th><a href="#" class="desc">Inquiry Date <i class="icon-sort-up"></i></a></th>
                    <th><a href="#">Name <i class="icon-sort"></i></a></th>
                    <th><a href="#">Email <i class="icon-sort"></i></a></th>
                    <th><a href="#">Budget <i class="icon-sort"></i></a></th>
                    <th><a href="#">Contact No <i class="icon-sort"></i></a></th>
                </tr>
            </thead>
            <tbody>                            
                <tr>
                    <td>2390</td>                                    
                    <td>01-Jul-2015 06:53:00</td>
                    <td>Loren</td>
                    <td>info@ipsome.company</td>
                    <td>$5,001 to $10,000</td>
                    <td>0061390188150</td>
                    <td>Loren</td>              
                </tr>
                <tr>
                    <td>2390</td>                                    
                    <td>01-Jul-2015 06:53:00</td>
                    <td>Loren</td>
                    <td>info@ipsome.company</td>
                    <td>$5,001 to $10,000</td>
                    <td>0061390188150</td>
                    <td>Loren</td>              
                </tr><tr>
                    <td>2390</td>                                    
                    <td>01-Jul-2015 06:53:00</td>
                    <td>Loren</td>
                    <td>info@ipsome.company</td>
                    <td>$5,001 to $10,000</td>
                    <td>0061390188150</td>
                    <td>Loren</td>              
                </tr>
                <tr>
                    <td>2390</td>                                    
                    <td>01-Jul-2015 06:53:00</td>
                    <td>Loren</td>
                    <td>info@ipsome.company</td>
                    <td>$5,001 to $10,000</td>
                    <td>0061390188150</td>
                    <td>Loren</td>              
                </tr>
            </tbody>
        </table>
        <div id="pagination-div">
            <div id="pagination-div">
                <div class="m-pagination">
                    <div class="paging">
                        <li class="first">
                            <a href="#">First</a>
                        </li>
                        <li class="prev">
                            <a href="#" rel="prev">Previous</a>
                        </li>
                        <li>
                            <a href="#">231</a>
                        </li>
                        <li>
                            <a href="#">232</a>
                        </li>
                        <li>
                            <a href="#">233</a>
                        </li>
                        <li>
                            <a href="#">234</a>
                        </li>
                        <li>
                            <a href="#">235</a>
                        </li>
                        <li class="next disabled">
                            <a href="">Next</a>
                        </li>
                    </div>
                </div>                    
            </div>
        </div>
        <script>
            $(function () {
                $('.ajax-pagination').cakephpPagination({
                    paginateDivId: "pagination-div"
                });
            });
        </script>
    </body>
</html>
```

NOTE: I highly recommend putting your initialization script in an external JS file.

###Settings

<strong>paginateDivId</strong><br />
<strong>Type:</strong>String<br />
Pass id of pagination div<br />

###Events

```
// afterSuccess event

afterSuccess: function () {
    //Your code
}
```
