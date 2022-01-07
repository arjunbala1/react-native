import React from "react";
import { StyleSheet, View, Text, Button ,Dimensions} from "react-native";
import RNModal from "react-native-modal";
const {height,width} = Dimensions.get('window');

type ModalProps = {
  isVisible: boolean;
  children: React.ReactNode;
  [x: string]: any;
};
export const Modal = ({
  isVisible = false,
  children,
  ...props
}: ModalProps) => {
  return (
    <RNModal
      isVisible={isVisible}
      animationInTiming={300}
      animationOutTiming={500}
      backdropTransitionInTiming={500}
      backdropTransitionOutTiming={500}
      {...props}>
      {children}
    </RNModal>
  );
};

const ModalContainer = ({ children }: { children: React.ReactNode }) => (
  <View style={styles.container}>{children}</View>
);

const ModalHeader = ({ title }: { title: string }) => (
  <View style={styles.header}>
    <Text style={styles.text}>{title}</Text>
  </View>
);

const ModalBody = ({ children }: { children?: React.ReactNode }) => (
  <View style={styles.body}>{children}</View>
);

const ModalFooter = ({ children }: { children?: React.ReactNode }) => (
  <View style={styles.footer}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    flex:1,
    height: 100,
    backgroundColor: "#303030",
    borderRadius: 30,
    borderStyle: "solid",
    marginTop:height-250,
    alignItems:'center',
    
  },
  header: {
    alignItems: "center",
    justifyContent: "center",

  },
  text: {
    paddingTop: 10,
    textAlign: "center",
    fontSize: 16,
    color:'#5afa8f'
  },
  body: {
    justifyContent: "center",
    paddingHorizontal: 15,
    minHeight: 100,
  },
  footer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    flexDirection: "row",
  }
});

Modal.Header = ModalHeader;
Modal.Container = ModalContainer;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;