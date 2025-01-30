n = int(input())

ans = []

def maxStepForTwo(cost):
    cnt = 0
    while cost > 2:
        cost/=2
        cnt+=1
    return cnt

def minCost(cost):
    diff = cost
    for _ in range(3):
        stepen = maxStepForTwo(diff)
        diff -= 2**stepen
    return cost - diff

for _ in range(n):
    cost = int(input())
    if(cost < 7):
        ans.append(-1)
        continue
    ans.append(minCost(cost))

for el in ans:
    print(el)