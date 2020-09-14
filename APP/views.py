from django.shortcuts import render
import products_df ## columns of products is ##brand,title,url,rating,totalReviews,price,image


def home(request,page=1):
    p = products_df.products.sort_values(by='rating',ascending=False)  ##sorting by rate
    p = p[['title','price','image','url']]
    p = p.iloc[(page-1)*8:(page)*8] ##select 8 products acording to the page selected

    
    my_list = p.values.tolist()  ##transfrom dataFrame into python list

    return render(request,'index/index.html',{'products':my_list,
                                                'page':page,
                                                'total_page':(int(products_df.num_of_products/8)+1),
                                                'brand_list':products_df.brand_list,
                                                'query':"",
                                                'filters':""})



def query_function(query): ##will be used by the DataFrame to query, returns a function based on the query sent
    return lambda x: True if(query.lower() in x['title'].lower())or(query.lower() in x['brand'].lower()) else False
        #to make a bool list, True if the query match(sub string is cotained in the list string)

def filter(request,page=1):
    p = products_df.products

    p = p[['title','price','image','rating','brand','url']]

    #Query filter
    query = request.GET['query']
    
    if query!="":
        cond = p.apply(query_function(query),axis=1)
        p = p[cond]
        del cond
 
    query_only = request.GET['query_only']  #check if the others filters will be applied
    query_only = bool(query_only)
    if(query_only):
        p = p.sort_values(by='rating',ascending=False)  ##sorting by rate
    else:
        ####brand filtering
        brand = request.GET['brand']
        if(brand!="all"):
            cond = p['brand']==brand
            p = p[cond]
            del cond

        ####price filters
        max = request.GET['maximum_price']
        min = request.GET['minimum_price']
        ##to float
        if(min==''):min = 0
        min = float(min)
        if(max==''):max = 1e9
        max = float(max)
        ##filtering for price
        cond = (p['price']<=max)&(p['price']>=min)
        p = p[cond]
        del cond

        ##Final_filter
        filter_for = request.GET['filter_for']
        if(filter_for=="better ratings"):
            p = p.sort_values(by='rating',ascending=False)  ##sorting by rate

        if(filter_for=="lower price"):
            p = p.sort_values(by='price',ascending=True)  ##sorting by lower price

        if(filter_for=="higher price"):
            p = p.sort_values(by='price',ascending=False)  ##sorting by higher price

    ##last processing
    p = p[['title','price','image','url']] #deleting rating, cause the page doesn't show it
    total_page = (int(p.shape[0]/8)+1)
    p = p.iloc[(page-1)*8:(page)*8] ##select 8 products acording to the page selected
    my_list = p.values.tolist()  ##transfrom dataFrame into python list
    return render(request,'filter.html',{'products':my_list,
                                        'page':page,
                                        'total_page':total_page,
                                        'brand_list':products_df.brand_list,
                                        'query':query,
                                        'filters':filter_for})

    
