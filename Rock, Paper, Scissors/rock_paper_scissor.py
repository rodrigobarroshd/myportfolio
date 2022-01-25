# Pedra, Papel e Tesoura...


rock = 'rocha'
paper = 'papel'
Scissor = 'tesoura'

escolha = input(f'Escolha entre {rock}, {paper}, {Scissor}! ')
escolha2 = input(f'Escolha entre {rock}, {paper}, {Scissor}! ')


if escolha == 'rocha' and escolha2 == 'papel' or escolha == 'papel' and escolha2 == 'rocha':
    print('Papel ganha de Rocha! ')
elif escolha != rock or escolha != paper or escolha != Scissor and escolha2 != rock or escolha != paper or escolha != Scissor: 
    print('Ocorreu um erro, Escolha um e tente novamente! ')
elif escolha == 'rocha' and escolha2 == 'tesoura' or escolha == 'tesoura' and escolha2 == 'rocha':
    print('Rocha ganha de tesoura! ')
elif escolha == 'papel' and escolha2 == 'rocha' or escolha == 'rocha' and escolha2 == 'papel':
    print('Papel ganha de rocha! ')
elif escolha == 'papel' and escolha2 == 'tesoura' or escolha == 'tesoura' and escolha2 == 'papel':
    print('Tesoura ganha de papel! ')
elif escolha == paper and escolha2 == paper or escolha == Scissor and escolha2 == Scissor or escolha == rock and escolha2 == rock:
    print('Ops! deu empate, tente novamente! ')
