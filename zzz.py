def getLine(x1, y1, x2, y2):
    if x1 == x2:
        return ('vert', x1) 
    else:
        k = (y1 - y2) / (x1 - x2)
        b = y1 - k * x1
        return (k, b) 

n = int(input())
lines_dict = {}

points = []
for i in range(n):
    x, y = map(int, input().split())
    points.append((x, y))

for i in range(n):
    for j in range(i + 1, n):
        line = getLine(points[i][0], points[i][1], points[j][0], points[j][1])
        
        if line not in lines_dict:
            lines_dict[line] = set()
        lines_dict[line].add(i) 
        lines_dict[line].add(j)  

ans = 0
for i in range(n):
    sz = 0
    for key in lines_dict:
        val = lines_dict[key]
        if(len(val) < 2):
            val.clear()
        sz = max(sz, len(val))
    if (sz == 0):
        break
    take = [None, None]
    line = None
    for key in lines_dict:
        val = lines_dict[key]
        if(len(val) == sz):
            take[0] = val.pop()
            take[1] = val.pop()
            line = key
            break

    for key in lines_dict:
        val = lines_dict[key]
        val.discard(take[0])
        val.discard(take[1])
    
    last = -1
    for key in lines_dict:
        val = lines_dict[key]
        if( key != line and len(val) > 0):
            last = val.pop()
            break
    
    if(last == -1):
        break

    for key in lines_dict:
        val = lines_dict[key]
        val.discard(last)
        if(len(val) < 2):
            val.clear()
    ans+=1
print(ans)

