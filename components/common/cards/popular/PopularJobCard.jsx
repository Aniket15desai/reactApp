import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './popularjobcard.style'
import { checkImageURL } from '../../../../utils'

const PopularJobCard = (props) => {
  return (
    <TouchableOpacity 
      style={styles.container(props.selectedJob, props.item)}
      onPress={() => {}}
    >
      <TouchableOpacity style={styles.logoContainer(props.selectedJob, props.item)}>
        <Image 
          source={{uri: checkImageURL(props.item.employer_logo) ? props.item.employer_logo : 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg'}}
          resizeMode='contain'
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {props.item.employer_name}
      </Text>

      <View style={styles.infoContainer}>
        <Text style={styles.jobName(props.selectedJob, props.item)} numberOfLines={1}>
          {props.item.job_title}
        </Text>
        <Text style={styles.location}>
          {props.item.job_country}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default PopularJobCard