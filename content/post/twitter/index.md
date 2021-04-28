---
date: "2020-09-06"
diagram: true
image:
  caption: 'Image credit: [**Joshua Hoehne**](https://unsplash.com/photos/6vw_O9R4zf4)'
  placement: 3
math: true
title: Archived Tweets using R
---  
<hr />

### Interested in using archived Twitter data in R?

On this page, you'll find a tutorial on how to access archived tweets in R. To be able to access archived tweets, first we need to connect to Twitter's APIs and have a Twitter developer account. The Twitter API lets you read and write Twitter data. You can apply for a [Developer Account](https://developer.twitter.com/en/docs/twitter-api/getting-started/getting-access-to-the-twitter-api) here.

Once your application is approved, you will have three essential elements to generate a token in R:

1. app name 
2. consumer key 
3. consumer secret

To be able to access archived Twitter data, there is one more step to complete on Twitter Developer Portal. When signed in the Developer Portal, on the left hand side, you can find the `Products` segment. Under products, you will see the option `Dev Environments`, which will open up to three different subscription API packages. `Search Tweets: Full ArchiveSandbox` is the one that you need to select. You can go ahead and click on set up dev environment for this particular API package. Please keep a record of the Dev environment label that you created for this API package as it will be useful when using R codes. 

Below I am going to provide an instruction on how to access tweets from Democratic Republic of Congo in 2018 for the UN Mission called MONUSCO and the peacekeepers. 

#### R Instructions: ####

1. After loading `rtweet` package in R, you can run below codes to generate a token for the Twitter Data.

```{R}
app_name <- "APPnameHere"
consumer_key <- "XXXXXXXXXXXXXXXX"
consumer_secret <- "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"

token <- create_token(app_name, consumer_key, consumer_secret)
```

2. `search_fullarchive` is the primary command that we need to run to be able to access to historical tweets. 

+ The example below shows that I attempt to capture all tweets from Jan 1st 2018 at 00.00 to Jan 31st at 23.59 that include words or hashtags: MONUSCO, peacekeeper, peacekeeping, forces de l'ordre, casque bleu and soldats de la paix.

+ We can change the countries where the tweets are sent from by writing the two digit country codes after `place_country`. You can find the complete list of country codes in this link: https://datahub.io/core/country-list


```{R}
monusco012018 <- search_fullarchive(q = "(MONUSCO OR peacekeeper OR peacekeeping OR forces de l'ordre OR casque bleu OR soldats de la paix ) place_country:CD",
                                    n = 100, 
                                    fromDate = "201801010000", toDate = "201801312359", 
                                    env_name = "peacekeeper", safedir = NULL, parse = TRUE, token = token)


```

Please note that standard (free) APIs allow users to access up to 100 tweets at a time. That's why the n is set to 100 in the r code above. 

This tutorial has showed how to sign up for the Twitter Developer Portal, and the main r package and command to access archival tweets. Once you access the tweets, you will be able to apply text analysis freely. I hope you will find this short tutorial useful. 







