<!--

How long did you spend working on the problem? How much time did you spend thinking about the design before writing the code?
I spent about 4 - 5  hours working on the actual problem.
The time spent thinking about implementing the actual task combined with iterations took much longer. I underestimated the assignment at first thinking it was a simple form that could use any layout with tweaking.

My first iteration [Stripe folder]  actual used the a stripe form because it had many for the validations already imbedded. I wanted to tweak the form to fit the requirements with the idea that it is better to use something that is working and build upon that.

After making adjustments to fit the stripe form into my design idea I attempted to grab elements that were instances of the stripe ‘element’. I was unsuccessful at grabbing that element realizing that manipulating the stripe form and grabbing the value from the credit card would be a bit more difficult than I thought and I would be better off making the form from scratch.

By this time I was pressed for time and was only able to come up with partial completion of the MVP form [MVP folder].

I attempted to iterate over that and add the bootstrap validation plugin to take advantage of the alert features but there was trouble making it compatible with the customized alert features.

2. What are the UI/UX usability features you implemented, or thought about implementing? How do they help validate the user input?

I used bootstrap to account for responsiveness.
Used the proper type attribute so that user would not enter text where there should only be numbers
Created select option field allowing user to be limited to only dates after 2017
Associated the label id with the input name so that users can focus in on the field.
Created alerts that would let the user know :
they hadn’t click the radio button
on submit hadn’t entered the proper credit for visa or american express
Form fields are empty
3. What would a form submission/API payload of this look like? How would you deal with validation errors that may come from that API  response?

Wasn’t able to properly get to this. Attached to the bootstrap validation plugin is an ajax submit handler that would console log the data in JSON  format. It throws a CORS  error that I was unable to look into.


4. How would you test this component?
I wasn’t able to put a lot of thought in how I would test this area. I would definitely want to be sure that the credit card information was not visible for the server or on the client side.


Credit card numbers to use for testing:

Visa:

4242424242424242	Visa
4012888888881881	Visa
4000056655665556	Visa (debit)

American Express:

378282246310005	American Express
371449635398431	American Express

5. What styling and layout considerations for these types of form inputs?

I wanted it to be a modal so that the user could stay on the same page as their request to make payment. Also  if this code would be reused they could use the form template of the modal feature and it would be ready.




 -->
