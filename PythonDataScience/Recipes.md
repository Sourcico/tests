# Instructions
This coding exercise should be performed in python (which is the programming language used by the team). You are free to use the internet and any other libraries. Please save your work in git repository that allows public access and email the link to us for review.

Data file: menu_info.csv (this file should be emailed to you)

# Task
Build a regressor that recommends the “Personnel_needed” size for given Dish. Please do the following steps (hint: use numpy, scipy, pandas, sklearn and matplotlib)

1. Read the file and display columns.
2. Calculate basic statistics of the data (count, mean, std, etc) and examine data and state your observations.
3. Select columns that will probably be important to predict “Personnel_needed” size.
4. If you removed columns, explain why you removed those.
5. Use one-hot encoding for categorical features.
6. Create training and testing sets (use 60% of the data for the training and reminder for testing).
7. Build a machine learning model to predict the ‘Personnel_needed’ size.
8. Calculate the Pearson correlation coefficient for the training set and testing datasets.
9. Describe hyper-parameters in your model and how you would change them to improve the performance of the model.
10. Print answer to: What is regularization and what is the regularization parameter in your model?
11. Plot regularization parameter value vs Pearson correlation for the test and training sets, and see whether your model has a bias problem or variance problem.

This is an example of a very straightforward problem. The dataset is clean and small (160 rows and 9 columns), and the instructions are very clear. So, all that is needed is to follow the instructions and generate your code. Notice also that the instruction clearly specifies that python must be used as the programming language for model building. The time allowed for completing this coding assignment was three days.