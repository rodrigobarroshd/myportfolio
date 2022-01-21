secreto = input( 'Qual palavra estará na forca? ')
digitadas = []
chances = 3

while True:
    if chances <= 0:
        print('Vish... Você Perdeu !') 
        break
    
    letra = input('Digite uma letra: ')
    
    if len(letra) > 1:
        print('Isso não vale, digite apenas uma letra. ')
        continue
    
    digitadas.append(letra)
    print(digitadas)
    
    if letra in secreto:
        print(f'Parabéns, a letra {letra} existe na palavra secreta')
    else:
        print(f'Que pena :(, a letra {letra} não existe na palavra secreta')
        digitadas.pop()
        
    secreto_temporario = ''
    for letra_secreta in secreto:
        if letra_secreta in digitadas:
            secreto_temporario += letra_secreta
        else:
            secreto_temporario += '*'
            
    if secreto_temporario == secreto:
        print(f' WOOOOOWW, Parabéns, Você acaba de ganhar!!!! A palavra secreta era "{secreto_temporario}" !!')
        break
    else:
        print(f'A palavra secreta está assim: {secreto_temporario}')
        print()
    if letra not in secreto:
        chances -= 1  
    print(f'Cuidado, Você ainda tem {chances} chances...')
    

    print()
