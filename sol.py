"""
Straight line or 0:
Given a set of points in a plane, check
weather the points lie on a straight
line or not. If the lie on a straight line
return the equation else return 0.

Input format:

First line contains no. of points in the
plane.

Second line contains x,y coordinates
of all the points
which are divided
with spaces.

Output format:

Equation of the line(str) if the points
lie on aa plane or 0(str).



"""


def sol(points):
    if len(points) == 0:
        return 0
    if len(points) == 1:
        return "0"
    x_coords = [x[0] for x in points]
    y_coords = [y[1] for y in points]
    x_mean = sum(x_coords)/len(x_coords)
    y_mean = sum(y_coords)/len(y_coords)
    a = (y_coords[0] - y_mean)*(x_coords[1] - x_coords[0]) - \
        (y_coords[1] - y_coords[0])*(x_coords[0] - x_mean)
    b = (y_coords[1] - y_mean)*(x_coords[2] - x_coords[1]) - \
        (y_coords[2] - y_coords[1])*(x_coords[1] - x_mean)
    c = (y_coords[2] - y_mean)*(x_coords[0] - x_coords[2]) - \
        (y_coords[0] - y_coords[2])*(x_coords[2] - x_mean)
    if a == 0 and b == 0 and c == 0:
        return "0"
    if a == 0 and b != 0:
        return "y = {}".format(b)
    if a != 0 and b == 0:
        return "x = {}".format(a)
    if a != 0 and b != 0:
        return "y = {}x + {}".format(a, b)


print(sol([[1, 2], [4, 2], [3, 0]]))
