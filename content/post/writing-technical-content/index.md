---
date: "2019-07-12"
diagram: true
image:
  caption: 'Image credit: [**Safar Safarov**](https://unsplash.com/photos/MSN8TFhJ0is)'
  placement: 3
math: true
title: Sample Lab Session
--- 

 

On this page, you'll find an example of the labs from Quantitative Methods I class, taught at University of Houston, Fall 2019. Feel free to use the R codes and practice on your own.  

### Lab 01 - Quantitative Methods I - Fall 2019

+ **I. Objectives:** 
To familiarize students with R and R Studio. Students will use the calculator functions of R, create a data frame, load a dataset, and create some plots.

+ **Datasets:**
“palmbeach.csv” contains votes for every presidential candidate in the 2000 election, for every county in Florida.

+ **Packages:**
None
 
#### Instructions: ####

1. The commands that you want to execute are typed on "R Console". Here are some examples:

```{R}
2*3
2^3
```


R can be used as a simple calculator for addition, subtraction, multiplication, and division using the standard operators +, -, *, and /, respectively. You can use parentheses to group operations, and use the ^ symbol to raise a number to a higher power. R also calculates for natural exponent (e.g., > exp(1)) and the natural logarithm (e.g., > log(2.718)). 

```r
log(2.718)
exp(1)
log(50, base = 10)
``` 

2. Using the R console effectively will require storing data by associating values with names, which can then be used in place of numbers to complete calculations. Values can be assigned to variables using one of three operators: `<-, =, and ->`. 

```{r}
x <- 2
y = 4
x
y
x^3
y^3
sqrt(x)
``` 

3. R stores data in vectors, which are simply ordered lists of numbers stored under a single name. A vector is created by using the `c() command`; in between the parentheses you will list the values of the variable. For instance, we can create a vector of the first six unique terms of the fibonnacci sequence and another with first six odd prime numbers.

```{r}
fib <- c(1, 2, 3, 5, 8, 13)
pri <- c(1, 3, 5, 7, 11, 13)
fib
pri
fib[3] #to extract just the third element of either variable
pri[6] #to extract just the sixth element of either variable
sum(fib) #sum of the list of values
sum(pri) #sum of the list of values
``` 

4. R has a more complex data structure, which you will use often, called a data frame. A data frame can be thought of as a spreadsheet: different columns represent the different variables in the data frame, and each row represents the values for a particular unit. We can combine our two variables (fib and pri) into a data frame by `binding` the vectors together by typing:

```{r}
data <- cbind(fib, pri)
data
```

5. Now we’re going to work with a dataset. But, first we should clean the global environment. Let's remove the data we created, typing `remove(data)`. 

6. The data that we are going to work on is called `palmbeach.csv`. You can import it from my Github page. See the code to import below. 

```{r, warning=FALSE, message=FALSE}
library(readr)
palmbeach <- read_csv("https://raw.githubusercontent.com/burakgiray/data/master/PalmBeach.csv")
```

7. The dataset should open directly. If it does not, type `view(palmbeach)`. We can also examine the variable names, typing `names(palmbeach)`.

8. R allows us to have multiple data frames open simultaneously, which is an advantage compared to Stata. However, we have to tell R which data frame to which we are referring. We can make a data frame active by typing `attach(palmbeach)`. Alternatively, one can also type `[dataframe]$[variable]` to select a particular variable from a particular data frame. 

9. If you remember your history, in 2000 there were concerns that the `Butterfly Ballot` led to voter confusion in Palm Beach county, and many residents of that county incorrectly cast votes for Pat Buchanan rather than Al Gore. To create the percentage of votes cast for Pat Buchanan in each county, go to the Console window and type the following:

```{r}
palmbeach$bs <- 100*palmbeach$BUCHANAN/palmbeach$VOTES
```

We have created a new variable, named bs, inside the palmbeach dataframe. If you look at the Environment tab, it should now tell you that there are 67 obs. for 28 variables. Suppose you wanted to examine the new variable. If you simply type the name of the variable (bs), RStudio might give you an error message. You need to either attach the data frame or type the full name of the variable `palmbeach$bs`.

```{r}
summary(palmbeach$bs) #To see the summary statistics of bs
boxplot(palmbeach$bs,horizontal=T) #To see a box-and-whisker plot
stem(palmbeach$bs,scale=2) #To see a stem-and-leaf plot
hist(palmbeach$bs,prob=T) #To see a histogram
``` 
You can see the solutions for the R codes [here](https://www.burakgiray.com/post/lab/sample/).
