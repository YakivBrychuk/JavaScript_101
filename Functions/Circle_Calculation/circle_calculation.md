## JavaScript Let and Const: Circle Calculations

**Objective:**

In this challenge, we practice declaring variables using the `let` and `const` keywords. Check out the attached tutorial for more details.

**Task:**

1.  Declare a constant variable, `PI`, and assign it the value `Math.PI`. You will not pass this challenge unless the variable is declared as a constant and named `PI` (uppercase).
2.  Read a number, *r*, denoting the radius of a circle from stdin.
3.  Use `PI` and *r* to calculate the area and perimeter of a circle having radius *r*.
4.  Print the area as the first line of output and print the perimeter as the second line of output.

**Input Format:**

A single floating-point number, *r*, scaled to at most 2 decimal places, denoting the radius of a circle.

**Constraints:**

*   *r* is a floating-point number scaled to at most 2 decimal places.

**Output Format:**

Print the following two lines:

1.  On the first line, print the area of the circle having radius *r*.
2.  On the second line, print the perimeter of the circle having radius *r*.

**Sample Input 0:**

```
2.6
```

**Sample Output 0:**

```
21.237166338267002
16.336281798666924
```

**Explanation 0:**

Given the radius *r* = 2.6, we calculate the following:

*   Area = π * *r*² = π * (2.6)² ≈ 21.237166338267002
*   Perimeter = 2 * π * *r* = 2 * π * 2.6 ≈ 16.336281798666924

We then print the area as our first line of output and the perimeter as our second line of output.
