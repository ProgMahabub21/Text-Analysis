export const algorithmToCalculate = 
`
Suppose you are BCT-IATI framework. BCT-IATI framework ia a unified model that calculates the overall trust of a Blockchain-based product. At first understand the defination, functionality, psudocode of calculation process of trust factors, trust of Blockchain product etc.
The trust of a product is calculated by considering some parameters. The parameters are called trust factors/ trust variables/ trust index. All trust factor belongs to either of the three categories-
 1. Sub-factor/sub-category/independent parameter/independent variable/independent factor: These parameters are independent and the score of these parameters are calculated seperately. The independent parameters indirectly(via dependent parameter/external factor) influence the trust of blockchain. For example: Threat Severity, Threat Vulnerability, Response Efficacy, Self efficacy, Experience, Job Relevance, Performance Verifiability, Image, Performance Expectancy and Effort Expectancy.
 2. Main-factor/main-category/dependent parameter/dependent variable/dependent factor: These parameters are dependent on the score of each parameters and the score are calculated by averaging the related independent parameters and external factor. The dependent parameters directly influence the overall trust of blockchain. For example: Threat Appraisal, Coping Appraisal, Percieved Usefulness, Behavioral Intention, Maladaptive Coping, Fear of Blockchain
 3. External factors/ External parameters/ External variables: These parameters are  dependent or independent but have a strong influence on the intention to use BCT, or the main category of trust factors, are the last types of trust factors. For example: System Complexity and Social Influence

The following rules justifies the relationship among the parameters:
1. Performance Verifiability, Job Relevance, and Experience positively affect the Perceived usefulness.
2. Performance Expectancy positively and Effort Expectancy negatively influence behavioral Intention.
3. Images affect both social influence and perceived usefulness positively.
4. Social influence affects Perceived Usefulness and behavioral intention positively.
5. Response efficacy and Self Efficacy influence Coping Appraisal positively.
6. Threat Severity and Threat Vulnerability affect Threat Appraisal positively.
7. Coping Appraisal affects Maladaptive Coping negaitively.
8. Threat Appraisal influence Fear of Blockchain positively.
9. Perceived Usefulness positively, Behavioral Intention positively, Maladaptive Coping negaitively, Fear of Blockchain negatively, and System Complexity negatively affect Intention to Use Blockchain.
10. Intention to use blockchain highly influences the trust level of blockchain positively.

The definition and psudocode for each sub-factors, main-factors and external-factors are given below:
# sub-factors 
Effort Expectancy (EE)	It defines how much effort is going to be needed to use the technology to get benefit from that technology.
 For example:  one of the largest problems a blockchain technology face is scalability. With every node being privy to every transaction, there is a natural limit to transaction processing. Lots of temporary solutions such as increasing the block size seem obvious, but are not sustainable for long term network demands. The score was given 7 Considering the findings it seems like blockchain technology requires very high level of effort in order to to overcome the two major issues of blockchain ( Scalability and performance standard maintaining in long term)  
 . The psudocode is given below.
# Effort Expectancy
def score_ee(para):
  EE = 0
  for sentence in para:
    if the sentence says BCT is superior to the other technology handling risk and BCT is very easy to understand, and the user does not have to go through more steps since no risk occurs:
      EE = 1
    elif sentence says BCT is superior to the other technology handling risk and the user might have to go through more well-defined steps if somehow any risk occurs:
      EE = 3
    elif sentence says BCT is superior to the other technology handling risk and the user might have to go through more unclear steps and be extra cautious if somehow any risk occurs:
      EE = 5
    elif sentence says BCT has past evidence of loss and the BCT user has to go through more steps most of the time and be extra cautious if somehow any risk occurs:
      EE = 7
    elif sentence says BCT has recent evidence of loss and the BCT user must go through more steps, be extra cautious all the time, and even use their own protective measures and experience if any risk occurs:
      EE = 9
  return EE

for para in document:
  EE = score_ee(para)


Experience (Ex): After using technology, a user develops a perception of it, which is known as experience. Experience can be positive or negative. A user having a positive experience tends to use similar technology throughout their life cycle without exception.  
 For example : In 1996, Dr. Douglas Jackson and Barry Downey created electronic money that was tied to the possession of gold. This digital currency allowed users to transfer ownership of gold between users of a website, which quickly—albeit unintentionally—became a tool for money launderers and others seeking anonymity in their illegal activities. The score was given 1 because though it had features , it did no prevent crime that was the reason behind bad experience of the mass user at that time

The Psudocode is given below
# Experience
def score_ex(para):
  Ex = 0
  for sentence in para:
    if the sentence mentions that the user has never used a similar type of technology before using BCT:
      Ex = 0
    elif sentence mentions that the previous experience of the targeted user was very bad or has a very negative experience or targeted user will most likely reject new technology having similar features due to problems:
      Ex = 1
    elif sentence mentions that the previous experience of the targeted user was relatively bad with some major issues or had a negative experience:
      Ex = 2
    elif sentence mentions that the previous experience of the targeted user is average with some bad issues and good features or the targeted user will still be likely to give a chance to the new technology to check whether the new technology fixed previous problems or not and useful new features were added or not:
      Ex = 5
    elif sentence mentions that the previous experience of the targeted user was relatively good with some minor issues or has a positive experience:
      Ex = 7
    elif sentence mentions that previous experience of the targeted user was very good or has a very positive experience:
      Ex = 9
  return Ex
Image: Cryptocurrencies, also known as digital currencies, have been all the rage over the last couple of years. Coins like bitcoin have skyrocketed in recent years, and financial institutions are starting to get on board. Two of the largest and most popular coins are ethereum and bitcoin. The score is given 7 because The public image of these products is very positive and popular among them.
For example : 
The Psudocode is given below 
# Image
def score_im(para):
  Im = 0
  for sentence in para:
    if the sentence mentions that BCT technology has previously collapsed history and presents evidence that means it has a huge risk:
      Im = 1
    elif sentence mentions that BCT technology has previously collapsed history which means it has some risk, but the risk is very unlikely to happen again:
      Im = 3
    elif sentence mentions that BCT has medium threat severity and threat vulnerability and some new and innovative concepts that make it better than other technologies and there are some solutions to problems that are immature:
      Im = 5
    elif sentence mentions that BCT has low threat severity and threat vulnerability and some new and innovative concepts and there are some ignorable problems:
      Im = 7
    elif sentence mentions that BCT has very low threat severity and threat vulnerability and some new and innovative concepts with no risk that other technologies face:
      Im = 9
  return Im

for para in document:
  Im = score_im(para)

  Job Relevance (JR) :It defines how appropriate the system is for the user according to the user’s job. It influences the perceived usefulness.A user who works in a field where blockchain technology is commonly used, such as finance or technology, may find blockchain technology to be more relevant to their job. This increased relevance can increase the perceived usefulness of blockchain technology for users. For example, a software developer who is working on a blockchain-based application may find blockchain technology to be very relevant to their job.
  For example : 
  The Psudocode is given below 

# Job Relevence
def score_jr(para):
  JR = 0
  for sentence in para:
    if the sentence says BCT has no usefulness in the personal life of the user or the alternative of BCT is so good that they do not need BCT:
      JR = 1
    elif sentence says BCT has some usefulness in the personal life of the user which is very ignorable, or the alternative also has some:
      JR = 3
    elif sentence says BCT has some usefulness in the personal life of the user and the user is not bound to use BCT to do his daily job:
      JR = 5
    elif sentence says BCT has very usefulness in personal life or without that BCT the user faces difficulty to do his daily job:
      JR = 7
    elif sentence says BCT has heavy usefulness in the personal life of the user or without that particular BCT the user cannot do his daily job:
      JR = 9
  return JR

for para in the document:
  JR = score_jr(para)

  Performance Expectancy (PE): one of the largest problems a blockchain technology face is scalability. With every node being privy to every transaction, there is a natural limit to transaction processing. Lots of temporary solutions such as increasing the block size seem obvious, but are not sustainable for long term network demands
  For example : one of the largest problems a blockchain technology face is scalability. With every node being privy to every transaction, there is a natural limit to transaction processing. Lots of temporary solutions such as increasing the block size seem obvious, but are not sustainable for long term network demands. The score is 7 because optimization of daily works and the quality it brings in as a result.also influences the work activity very positively.
  The Psudocode is given below 

# Performance Expectancy
def score_pe(para):
  PE = 0
  for sentence in para:
    if the sentence says BCT has innovative features and versatility with unsolved problems and evidence of loss:
      PE = 1
    elif sentence says BCT has innovative features and versatility with unsolved problems:
      PE = 3
    elif sentence says BCT has innovative features and versatility with some problems having an immature solution:
      PE = 5
    elif sentence says BCT has innovative features and versatility with some ignorable problems:
      PE = 7
    elif sentence says BCT has innovative features and versatility with very low threat severity:
      PE = 9
  return PE

for para in document:
  PE = score_pe(para)


  Performance Verifiability(PV) : It measures the degree of precision with which the performance of technology can be evaluated and justified. It affects the perceived usefulness.
  For example : How is blockchain verifiable yet anonymous? With all these concerns, Bitcoin blockchain and other cryptocurrencies continue to grow at a breakneck pace paving the way for a new financial revolution. Yes, it’s true that blockchain transactions are verifiable because you can trace the origin but at the same time it continues to hide the entire details, and thus, it is pseudo-anonymous. The score is given 9 because all the performance is verified by keeping original identity anonymous.
  The Psudocode is given below 
# Performance Verifiability

def score_pv(para):
  PV = 0
  for sentence in para:
    if the sentence says the BCT system can verify the performance most of the part  and fails to judge some parts, which problem is unsolved yet and has clear evidence that risk causing loss that means this performance verifiability of the system is very low:
      PV = 1
    elif sentence says the BCT system can verify the performance of most of the parts and fail to judge some parts, which problem is unsolved yet:
      PV = 3
    elif sentence says If the BCT is somewhat better than other technologies, it should have a defined standard method that verifies the claim of performance, and the superiority claim is technically legit, and it has some ignorable limitations:
      PV = 5
    elif sentence says BCT is superior to other technology it should have a defined standard method that verifies the claim of performance and if the superiority claim is legit and it has some ignorable limitations:
      PV = 7
    elif sentence says BCT is superior to other technology it should have a defined standard method that verifies the claim of performance, and the superiority claim is legit:
      PV = 9
  return PV

for para in document:
  PV = score_pv(para)

Response Efficacy (RE): It is described as the user’s or client’s beliefs or trust as to whether the system’s preferred protective actions/measures are effective against possible threats or unexpected situations.
For Example: Despite that, there are also researchers pointing on the risk and drawbacks of using this digital coin, in term of lack of regulation (Cheung et al., 2015; Böhme et al., 2015), high electricity bill due to energy consumption (Hayes, 2017; Vranken, 2017), lack of security (Bradbury, 2013; Conte De Leon et al., 2017) and other issues such as anonymity (Androulaki et al., 2013) and switching cost (Luther, 2015). The score is given 1 because users tend to believe that bitcoin will be unable to solve high energy consumption bill and other issues if they use it.
The score is given below
# Response Efficacy
def score_re(para):
  RE = 0
  for sentence in para:
    if the sentence says BCT has an unsolved problem that reduces trust in protective measures enough to switch to other technology:
      RE = 1
    elif sentence says the BCT system is unable to give a solution to the problem which, if it occurs by taking own protection of the system, may not work against the risk:
      RE = 3
    elif sentence says BCT has an available protective measure that is not mature enough, by using BCT a user may not be able to overcome all kinds of risks:
      RE = 5
    elif sentence says BCT has some problem which is ignorable, but the risks can be avoided by using established and standard protective measures:
      RE = 7
    elif sentence says BCT has no threat that means the system is successful in keeping it immutable to threat by taking its built-in protective measure:
      RE = 9
  return RE

for para in document:
  RE = score_re(para)

Self Efficacy(SE) : It is described as the user’s or client’s beliefs to have his own ability to perform that preferred action effectively to overcome threats or unexpected situations.
  For example : Bitcoin platform has made the trading and transaction of cryptocurrency much easier and more independent, without compromising personal information and details. To some, opting for this method of transaction has entitled them to transact freely and anonymously. The score is given 9 because user tend to belive that by using bitcoin user will protect own privacy by taking its protective measure
  The Psudocode is given below 
# Self Efficacy
def score_se(para):
  SE = 0
  for sentence in para:
    if the sentence says the BCT user is conscious and careful while using BCT, but the protective measure is not sufficient enough to avoid the risk:
      SE = 1
    elif sentence says BCT user is aware of the consequences of the risk and cannot take security measures of only BCT by themselves, but if the user manages to find extraordinary and promising protection measures and stay careful enough, the loss of the risk might be mitigated:
      SE = 3
    elif sentence says BCT user is aware of the consequences of the risk and cannot take security measures of only BCT by themselves, but if the risk appears, the user will be able to overcome the risk himself by using the BCT technology and self-awareness:
      SE = 5
    elif sentence says BCT has some problems, but if the mentioned risk appears, the user will be able to overcome the risk himself by using the BCT technology and self-awareness:
      SE = 7
    elif sentence says BCT has no threat, but if a risk happens by chance, the user will be able to overcome the risk himself by using the BCT technology and self-awareness:
      SE = 9
  return SE

for para in document:
  SE = score_se(para)

  Threat Severity (TS): The measure of how acute the threat’s consequences are known as threat severity. In other words, a threat can potentially cause harm to the user while using the technology. The level at which the threat originated from that technology is affecting the user negatively will be called threat severity.
  For example : Dogecoin is much less valuable than prominent cryptocurrencies. Despite its soaring popularity and impressive growth streak, Dogecoin falls far behind mainstream cryptocurrencies in terms of price. On 18 May 2021, Dogecoin was priced at less than $0.5, whereas Bitcoin stood at $42,877.42. The score is 5 because Since the price is very low, if any user invests in that for the hype, he might have a loss but otherwise it might not be risky.
  The Psudocode is given below 

# Threat Severity
def score_ts(para):
  TS = 0
  for sentence in para:
    if the sentence does not have a problem that another technology has:
      TS = 1
    elif sentence has a problem that can be overlooked:
      TS = 3
    elif sentence has a solution to the problem but it is not mature or optimized enough:
      TS = 5
    elif sentence has evidence of an unsolved problem that is less likely to happen again:
      TS = 7
    elif sentence has evidence of an unsolved problem that reduced trust level significantly enough to switch to other technology:
      TS = 9
  return TS

for para in document:
  TS = score_ts(para)


Threat Vulnerability(TV): The probability of the success of a threat is called threat vulnerability.
For example:Bitcoin is operated without the middle man such as banks and monetary institutions. It is a form of peer-to-peer transaction, without the need to reveal one’s identity for a transaction to happen. Unlike the current practice, the bank functions as the middleman or the go-between, knows the identity of buyer and seller, thus engendering the issues of personal data protection. The score is given 1 because Bitcoin removes middleman, maintains anonymity, protects data which reduces risk's probability of success
The psudocode is given below
# Threat Vulnerability
def score_tv(para):
  TV = 0
  for sentence in para:
    if threat severity is low, or the sentence explains the low probability of harming the user:
      TV = 1
    elif sentence has a very small impact and risk is unable to hamper the overall service of BCT:
      TV = 3
    elif sentence says BCT is better but there is a high chance of risk for an immature solution:
      TV = 5
    elif sentence has evidence of an unsolved problem with a high probability of causing a big-scale problem and some evidence supporting the claim:
      TV = 7
    elif sentence has evidence of an unsolved problem that reduced trust level significantly enough to switch to other technology:
      TV = 9
  return TV

for para in document:
  TV = score_tv(para)

# External-factors
Social Influence (SI):It defines how popular the technology is among the users and social influencers. It can be both positive and negative.
For example: PlanB made his name as one of the top bitcoin influencers on Twitter, with more than 1.8 million followers, because of his invention of a bitcoin price forecast model he dubbed “stock to flow.” The model predicts the bitcoin price based on its circulating supply relative to the number of coins mined each year, but it hasn’t been accurate lately. For instance, the model predicted bitcoin reaching over $100,000 on Oct. 23 when the largest cryptocurrency by market value was trading below $20,000. Its increasingly off-kilter price forecasts have also been criticized by many in the crypto community, including Ethereum co-founder Vitalik Buterin. The score is given 1 because since the influencer has to face problems while promoting bitcoin and other currencies the social influence will be very negative
The psudocode is given below:
# Social Influence

for each para def score_si(para):
  SI = 0
  for sentence in para:
    if a sentence mentions that BCT has a strongly negative image and Social Influencer are leaving particular BCT for very high risk:
      SI = 1
    elif sentence mentions that BCT has a negative image and Social Influencers are leaving particular BCT for high risk:
      SI = 3
    elif sentence mentions that BCT has an average image and Social Influencers are neither encouraging nor leaving particular BCT for some risk:
      SI = 5
    elif sentence mentions that BCT has a positive image and Social Influencers are encouraging particular BCT for very ignorable risk:
      SI = 7
    elif sentence mentions that BCT has a very positive image and Social Influencers are strongly encouraging particular BCT for virtually no risk:
      SI = 9
  return SI

for para in document:
  SI = score_si(para)

System complexity(SC): System complexity is a measure that defines the degree of complexity required to implement and maintain the system during changes. It directly affects the intention to use blockchain. A sophisticated system should have an optimal amount of complexity, otherwise, the system will not be feasible for the developer or user.
For example: The system in the cryptocurrency market is rather complex and quite difficult to understand, even for the players in the industry and researchers doing studies in this field (Fry & Cheach, 2016). The score is given 9 because the system is very complex for all kinds of people to understand.
The psudocode is given below
# System Complexity
def score_sc(para):
  SC = 0
  for sentence in para:
    if the sentence mentions that BCT is very easy to understand for the user and the system is very easy to implement:
      SC = 1
    elif sentence mentions that BCT is relatively easy to understand because of reliable solutions and well-defined support, and the system is still difficult to maintain and implement when problems occur:
      SC = 3
    elif sentence mentions that BCT is sometimes difficult to understand because of its partially reliable solution and undefined support and is still difficult to maintain and implement when a problem occurs:
      SC = 5
    elif sentence mentions that BCT is most of the time difficult to understand because it has no existing solution and no reliable support and is very difficult to maintain and implement when a problem occurs:
      SC = 7
    elif sentence mentions that BCT has unsolved challenges of using BCT due to system complexity or the user is losing interest in using blockchain due to the high effort required to find and understand the solution of BCT:
      SC = 9
  return SC

for para in document:
  SC = score_sc(para)

 the definition and psudocode of main factors are given below :
Threat Appraisal (TA): Threat severity and threat vulnerability are called threat appraisal together. It is a measure of the threat of a particular system by analyzing its intensity and the likelihood of successful occurrence of that threat.
Fear Appeal (FA): Threat appraisal plays a major role in defining the trust level in blockchain technology. Performing security behaviors is also ascribed to fear appeals because while assessing threat vulnerability and severity, individuals often feel afraid and discomfort, which causes them to become nervous, anxious, and uncomfortable. These cognitive processes of threat create fear of blockchain that reduces the intention to use blockchain, thus reducing the trust level of blockchain.
Coping Appraisal (CA):Response efficacy and self-efficacy are collectively known as coping appraisal. While using a system, there are some protective actions/measures provided with the system to effectively against the threat. Now the trust in how effectively the threat can be eliminated by preferred protective measures and how effectively the user can have protective measures is called coping appraisal.A user who is confident in the security features of a blockchain system and their own ability to use those features effectively will have a high coping appraisal.
Maladaptive Coping (MC): When the user has uncertainty about the effectiveness of protective measures and their own ability against the threat, the user tends to reduce the intention to adapt to the new technology. This is called maladaptive coping. A user who is unsure of how to use the security features of a blockchain system or is concerned about their ability to protect themselves from cyberattacks may have maladaptive coping.
Perceived Usefulness (PU):It assesses the degree of usefulness perceived by the user before and after utilizing technology in their daily lives. Perceived usefulness is determined by measuring performance verifiability, job relevance, social influence, image, and experience. Perceived usefulness influences the intention to use blockchain.
Behavioral Intention (BI): The perceived usefulness and performance expectancy of the user will create a specific attitude toward using the piece of technology. That attitude could be a positive attitude or a negative attitude, which will be significantly affected by social influence. The behavioral intention will also affect the intention to use blockchain. A user who perceives blockchain technology to be useful and easy to use is more likely to have a positive attitude towards it and have a higher behavioral intention to use it. For example, a user who wants to make fast and secure international payments may find blockchain technology to be useful and easy to use, and therefore have a higher behavioral intention to use it.
Intention to Use Blockchain Technology (IB): Perceived usefulness, maladaptive coping, fear and behavioral intention, social influence and system complexity all influence the intention to use BCT and it directly influence the trust level of BCT. A user who perceives blockchain technology to be useful, has low maladaptive coping, low fear, high behavioral intention, is influenced by positive social influence, and finds the system to be of optimal complexity is more likely to have a high intention to use blockchain technology. For example, a user who is confident in their ability to use blockchain technology, has seen their friends and colleagues using blockchain technology successfully, and finds the system to be easy to understand is more likely to have a high intention to use blockchain technology.
Trust Level of Blockchain Technology (TL): It is the final parameter that indicates the percentage of trust level depending on the intention to use BCT. A user with a high intention to use blockchain technology is more likely to have a high trust level in blockchain technology. For example, a user who is actively using blockchain technology to make payments and store their assets is more likely to have a high trust level in blockchain technology.
The psudocodes are given below
# main-factors
def calculate_factors():
  TA = round((TS + TV) / 2)
  FA = -TA
  CA = round((RE + SE) / 2)
  MC = -CA
  BI = round((PE + EE + SI) / 3)
  PU = round((Im + PV + JR + Ex + SI) / 5)
  IB = round((FA + MC + SC + BI + PU) / 5)
  TL = IB * 10
  return TA, FA, CA, MC, BI, PU, IB, TL

def main():
  TA, FA, CA, MC, BI, PU, IB, TL = calculate_factors()
 
if __name__ == "__main__":
  main()


 The parameters of BCT-IATI use a scale to understand the intensity of trust factors and overall score of trust in the certain BCT-based product. The scale also calculates the parameters that have negative effect on the dependent parameter and coverts it to equivellent positive score to calculate efficiently. The psudocode is given below
  def scale(factor_name, score):
  """
  Scales the score of a factor to a value between 0 and 10.

  Args:
    factor_name: The name of the factor.
    score: The score of the factor.

  Returns:
    The scaled score.
  """

  if score >= 0:
    if score > 0 and score < 2:
      return score / 2
    elif score <= 2 and score < 4:
      return score / 3
    elif score <= 4 and score < 6:
      return score / 4
    elif score <= 6 and score < 8:
      return score / 5
    elif score <= 8 and score < 10:
      return score / 6
    else:
      return score / 7
  else:
    return (10 + score) / 11

An example is given below
BCT Name	TS	TV	TA	FA	RE	SE	CA	MC	EE	PE	BI	JR	Ex	Im	SI	PV	PU	SC	TL (%)
Bitcoin	4.315789474	4.315789474	4.315789474	5.684210526	4.947368421	5.315789474	5.131578948	4.868421052	5.352941176	5.631578947	4.842879257	 	3	4.545454545	4.25	7.4	4.798863636	7	46.91506473
Etherium	3	3	3	7	7	5	6	4	7	7	5.666666667	 	7	7	7	7	7	8	55.33333333
Solana	3	3	3	7	5.25	5.5	5.5	4.5	1.2857	6.55	7.0881	 	3	6.77	6	7	5.6925	1	68.5612
Dogecoin	6.6	6.6	6.6	3.4	1	1	1	9	6.333333333	5.666666667	5.222222222	 	6.333333333	5	6.333333333	3	5.166666667	2	45.57777778
Axie Infinity	6.714	6.714	6.714	3.286	5	5	5	5	5	5	5.666666667	 	7	8	7	7	7.25	6	50.40533333
Social NFT MarketPlace	3.4	3.4	3.4	6.6	8	7	7.5	2.5	5	7	4.333333333	 	0	9	1	7	4.25	3	59.36666667

Read the input text line-by-by line
Follow the following steps :
1. If the technology is not blockchain based go to step 2 otherwise go to step 3
2. Stop Calculating. Write 'Not Blockchain Product' as output.
3. Write 'Blockchain product identified.' Go to step 4.
4. Identify if the input matches any independent factor. If matches go to step 5 otherwise go to step 11 
5. Add 1 to the each found independent factor's count. Add the calculated score to the Sum of found independent factor's Sum by using previous psudocode. Initially both count and Sum of the each found independent variable. Go to step 6
6. Save the average of each found score by using the formula average(trust_factor_name)=Sum(trust_factor_name)/count(trust_factor_name). Go to step 7
7. Check if the average is <=0 if no go to step 8 otherwise step 10
8. Check if average is >0 then go to step 9
9. Save Score of the each found factor average+10. Go to step 10
10. Update the score of each found parameter
11. Check if the match belongs to main factor? if yes go to step 12 otherwise go to 15
12. Collect the upadated score from sub categories. Go to step 13
13. Count the total number of subcategories of the found main factor go to step 14
14. Sum the corresponding scores of the sub categories. Go to step 6
15. Is the matchhed parameter belongs to external category? If yes go to step 10 otherwise go to step 16
16. Calculate the overal score. Show the scores of the trust factor individually. And show the whole calculation result to the user.  go to step 17
17. Ask for user feedback if the score seems correct? if yes go to step 18 otherwise go to step 19
18. Set updated score=previous score. Go to step 20
19. Ask for appropriate score for each parameter. Go to step 20
20. Calculate and show evaluation accurancy= absoulte value of((updated Score - Previous Score)/Previous Score)*100%. Show calculated trust factor result

Here is an example of the result
--------------------------------------------------
Score of Detected Trust Factors :
1. Sub-factors:
  a. Threat Severity: 1 (very low)
  b. Threat Vulnerability: 1 (very low)
  c. Response Efficacy: 1 (very low)
  d. Self Efficacy: 1 (very low)
  e. Image: 9 (very high)
  f. Job relevence: 5 (Medium)
  g. Experience: 0 (Not Available)
  h. Performance Verifiability: 7 (high)
  i. Performance Expectancy: 7 (high)
  j. Effort Expectancy: 3 (Low)
  
2. Main-factors:
  a. Threat Appraisal: 1 (very low)
  b. Fear Appeal: 1 
  c. Coping Appraisal: 1 (very low)
  d. Maladaptive Coping: 9 (very high)
  e. Percieved Usefulness: 8 (very High)
  f. Behavioral Intenion: 7 (high)

3. External Factors:
  a. Social Infleunce: 9 (very high)
  b. System Complexity: 4 (medium)

Overall Trust Score: 8 out of 10 (very High)
----------------------------------------------------------------

`